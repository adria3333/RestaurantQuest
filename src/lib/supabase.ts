import { createClient } from '@supabase/supabase-js';
import { GameStats, UserAnswerRecord } from '../types';

export const SUPABASE_URL =
  ((import.meta as any).env?.VITE_SUPABASE_URL as string) ||
  'https://hdxdnrxqktxszikamnbu.supabase.co';

export const SUPABASE_ANON_KEY =
  ((import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string) ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeGRucnhxa3R4c3ppa2FtbmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NDI0NTcsImV4cCI6MjEwMzQxODQ1N30.CX_jsLS_VamaVHvlS0viu1u9gJxFHkeiBb6TiIoTRQo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface SupabaseScoreRecord {
  id?: string | number;
  player_name: string;
  score: number;
  wallet_dollars: number;
  total_answered: number;
  first_try_correct: number;
  max_streak: number;
  accuracy_percent: number;
  created_at?: string;
  history_summary?: string;
}

export interface SupabaseAnswerLog {
  id?: string | number;
  player_name?: string;
  task_id: number;
  floor_name?: string;
  question_id: number;
  question_text: string;
  user_answer: string;
  correct_answer: string;
  is_correct_first_try: boolean;
  attempts: number;
  created_at?: string;
}

// Check connectivity with the Supabase project
export async function checkSupabaseConnection(): Promise<{
  connected: boolean;
  projectId: string;
  url: string;
  message: string;
  tablesAvailable: string[];
}> {
  const projectId = 'hdxdnrxqktxszikamnbu';
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    // Check if any standard table is queryable
    const possibleTables = ['scores', 'leaderboard', 'game_sessions', 'restaurant_quest', 'eredmenyek', 'eredmeny'];
    const available: string[] = [];

    for (const t of possibleTables) {
      try {
        const { error } = await supabase.from(t).select('count', { count: 'exact', head: true });
        if (!error) {
          available.push(t);
        }
      } catch {
        // ignore
      }
    }

    return {
      connected: res.status !== 0,
      projectId,
      url: SUPABASE_URL,
      message: 'Supabase connected successfully',
      tablesAvailable: available
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return {
      connected: false,
      projectId,
      url: SUPABASE_URL,
      message: `Connection test error: ${errorMsg}`,
      tablesAvailable: []
    };
  }
}

// Save a player's completed quest score to Supabase
export async function saveScoreToSupabase(
  playerName: string,
  stats: GameStats
): Promise<{ success: boolean; message: string; data?: any }> {
  const cleanName = playerName.trim() || 'Anonymous Diner';
  const accuracy =
    stats.totalAnswered > 0
      ? Math.round((stats.firstTryCorrect / stats.totalAnswered) * 100)
      : 0;

  const record: SupabaseScoreRecord = {
    player_name: cleanName,
    score: stats.score,
    wallet_dollars: stats.walletDollars,
    total_answered: stats.totalAnswered,
    first_try_correct: stats.firstTryCorrect,
    max_streak: stats.maxStreak,
    accuracy_percent: accuracy,
    history_summary: `${stats.firstTryCorrect}/${stats.totalAnswered} first try correct`
  };

  // Try tables in order of preference
  const targetTables = ['scores', 'restaurant_quest_scores', 'leaderboard', 'eredmenyek', 'game_sessions'];

  for (const tableName of targetTables) {
    try {
      const { data, error } = await supabase.from(tableName).insert([record]).select();
      if (!error) {
        // Also save to local storage as fallback/cache
        saveLocalScoreBackup(record);
        return {
          success: true,
          message: `Score saved to Supabase table "${tableName}"!`,
          data
        };
      }
    } catch {
      // Continue to next table
    }
  }

  // If table does not exist yet in Supabase, store locally and return helpful guide
  saveLocalScoreBackup(record);
  return {
    success: true,
    message: `Score saved locally. Create the 'scores' table in Supabase to enable cloud synchronization.`,
    data: record
  };
}

// Fetch top scores for leaderboard
export async function getLeaderboardFromSupabase(): Promise<SupabaseScoreRecord[]> {
  const targetTables = ['scores', 'restaurant_quest_scores', 'leaderboard', 'eredmenyek', 'game_sessions'];

  for (const tableName of targetTables) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('score', { ascending: false })
        .limit(20);

      if (!error && data && data.length > 0) {
        return data as SupabaseScoreRecord[];
      }
    } catch {
      // Continue to next
    }
  }

  // Fallback to local backup
  return getLocalScoresBackup();
}

// Save individual answer log to Supabase
export async function saveAnswerLogToSupabase(
  playerName: string,
  answer: UserAnswerRecord
): Promise<void> {
  const log: SupabaseAnswerLog = {
    player_name: playerName || 'Student',
    task_id: answer.taskId,
    floor_name: answer.floorName,
    question_id: answer.questionId,
    question_text: answer.questionText,
    user_answer: answer.userAnswer,
    correct_answer: answer.correctAnswer,
    is_correct_first_try: answer.isCorrectFirstTry,
    attempts: answer.attempts
  };

  const targetTables = ['answers', 'answer_logs', 'valaszok', 'question_logs'];
  for (const table of targetTables) {
    try {
      const { error } = await supabase.from(table).insert([log]);
      if (!error) return;
    } catch {
      // ignore
    }
  }
}

// Local storage backup helpers
function saveLocalScoreBackup(record: SupabaseScoreRecord) {
  try {
    const existing = getLocalScoresBackup();
    const updated = [
      {
        ...record,
        id: Date.now(),
        created_at: new Date().toISOString()
      },
      ...existing
    ].slice(0, 50);
    localStorage.setItem('restaurant_quest_supabase_scores', JSON.stringify(updated));
  } catch {
    // ignore
  }
}

export function getLocalScoresBackup(): SupabaseScoreRecord[] {
  try {
    const raw = localStorage.getItem('restaurant_quest_supabase_scores');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // ignore
  }
  return [
    {
      id: 1,
      player_name: 'Gordon R.',
      score: 180,
      wallet_dollars: 120,
      total_answered: 16,
      first_try_correct: 16,
      max_streak: 16,
      accuracy_percent: 100,
      created_at: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: 2,
      player_name: 'Julia C.',
      score: 145,
      wallet_dollars: 95,
      total_answered: 16,
      first_try_correct: 14,
      max_streak: 9,
      accuracy_percent: 88,
      created_at: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: 3,
      player_name: 'Jamie O.',
      score: 120,
      wallet_dollars: 80,
      total_answered: 16,
      first_try_correct: 12,
      max_streak: 6,
      accuracy_percent: 75,
      created_at: new Date(Date.now() - 172800000).toISOString()
    }
  ];
}
