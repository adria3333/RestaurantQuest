import React, { useState } from 'react';
import { COMPLETION_QUESTIONS } from './data/completionQuestions';
import { DIALOGUE_QUESTIONS } from './data/dialogueQuestions';
import { FloorLevel, GameStats, UserAnswerRecord } from './types';
import { Header } from './components/Header';
import { RestaurantQuestLanding } from './components/RestaurantQuestLanding';
import { StarterScreen } from './components/StarterScreen';
import { StatsBar } from './components/StatsBar';
import { Task2Completion } from './components/Task2Completion';
import { Task1Dialogue } from './components/Task1Dialogue';
import { RooftopDiningView } from './components/RooftopDiningView';
import { FinalStatsModal } from './components/FinalStatsModal';
import { PhrasebookModal } from './components/PhrasebookModal';
import { SupabaseSyncModal } from './components/SupabaseSyncModal';
import { saveAnswerLogToSupabase } from './lib/supabase';

type AppView = 'landing' | 'hub' | 'floor0' | 'floor1' | 'floor2' | 'floor3' | 'floor4' | 'summary';

export default function App() {
  const [lang, setLang] = useState<'hu' | 'en'>('hu');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [isPhrasebookOpen, setIsPhrasebookOpen] = useState<boolean>(false);
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);

  // App Navigation View State (starts on Restaurant Quest Landing)
  const [currentView, setCurrentView] = useState<AppView>('landing');

  // Floor Progression Indexes
  const [floor1Index, setFloor1Index] = useState<number>(0); // 1st Floor: Sentence Completion
  const [floor3Index, setFloor3Index] = useState<number>(0); // 3rd Floor: Conversation Dialogue

  // Scoring, Wallet & Stats State
  const [walletDollars, setWalletDollars] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [firstTryCorrect, setFirstTryCorrect] = useState<number>(0);
  const [history, setHistory] = useState<UserAnswerRecord[]>([]);

  // Total questions in active floors: 1st Floor (Completion) + 3rd Floor (Dialogue)
  const totalQuestions = COMPLETION_QUESTIONS.length + DIALOGUE_QUESTIONS.length;

  // Calculate answered counts per floor/task
  const floor1AnsweredCount = history.filter((h) => h.taskId === 1).length;
  const floor3AnsweredCount = history.filter((h) => h.taskId === 3).length;
  const totalAnswered = floor1AnsweredCount + floor3AnsweredCount;

  // Overall progress percentage
  const overallProgressPercent = (totalAnswered / totalQuestions) * 100;

  // Navigate to 1st Floor (Sentence Completion) directly from the BEGIN button
  const handleStartQuest = () => {
    setCurrentView('floor1');
  };

  // Jump to specific floor
  const handleSelectFloor = (floor: FloorLevel) => {
    switch (floor) {
      case 0:
        setCurrentView('landing');
        break;
      case 1:
        setCurrentView('floor1'); // 1st Floor: Sentence Completion Task
        break;
      case 2:
        setCurrentView('landing');
        break;
      case 3:
        setCurrentView('floor3'); // 3rd Floor: Conversation Task
        break;
      case 4:
        setCurrentView('floor4'); // Rooftop Dining
        break;
      default:
        setCurrentView('landing');
    }
  };

  // Spend dollars on rooftop dishes
  const handleSpendDollars = (amount: number) => {
    setWalletDollars((prev) => Math.max(0, prev - amount));
  };

  // Return to Landing
  const handleGoHome = () => {
    setCurrentView('landing');
  };

  // Return to initial Landing Cover Page
  const handleGoToLanding = () => {
    setCurrentView('landing');
  };

  // ==========================================
  // 1st Floor: Sentence Completion Task
  // ==========================================
  const handleFloor1CompletionAnswer = (
    isCorrect: boolean,
    userInput: string,
    isFirstTry: boolean
  ) => {
    const q = COMPLETION_QUESTIONS[floor1Index];
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setWalletDollars((prev) => prev + 1); // Earn $1 per correct answer
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });

      if (isFirstTry) {
        setFirstTryCorrect((prev) => prev + 1);
      }

      setHistory((prev) => [
        ...prev.filter((h) => !(h.taskId === 1 && h.questionId === q.id)),
        {
          taskId: 1,
          questionId: q.id,
          questionText: `${q.sentenceBefore} [___] ${q.sentenceAfter}`,
          userAnswer: userInput,
          correctAnswer: q.correctAnswer || q.options.find((o) => o.isCorrect)?.value || '',
          isCorrectFirstTry: isFirstTry,
          attempts: isFirstTry ? 1 : 2,
          explanation: lang === 'hu' ? q.explanationHu : q.explanationEn,
          category: q.category
        }
      ]);
    } else {
      setStreak(0);
    }
  };

  const handleFloor1Next = () => {
    if (floor1Index + 1 < COMPLETION_QUESTIONS.length) {
      setFloor1Index((prev) => prev + 1);
    } else {
      // Progress from 1st Floor (Sentence Completion) directly to 3rd Floor (Conversation)
      setCurrentView('floor3');
    }
  };

  // ==========================================
  // 3rd Floor: Conversation Dialogue Task
  // ==========================================
  const handleFloor3DialogueAnswer = (
    isCorrect: boolean,
    chosenOptionId: string,
    chosenText: string,
    isFirstTry: boolean
  ) => {
    const q = DIALOGUE_QUESTIONS[floor3Index];
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setWalletDollars((prev) => prev + 1); // Earn $1 per correct answer
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });

      if (isFirstTry) {
        setFirstTryCorrect((prev) => prev + 1);
      }

      const correctOpt = q.options.find((o) => o.isCorrect);
      setHistory((prev) => [
        ...prev.filter((h) => !(h.taskId === 3 && h.questionId === q.id)),
        {
          taskId: 3,
          questionId: q.id,
          questionText: q.waiterText,
          userAnswer: chosenText,
          correctAnswer: correctOpt ? correctOpt.text : chosenText,
          isCorrectFirstTry: isFirstTry,
          attempts: isFirstTry ? 1 : 2,
          explanation: lang === 'hu' ? (correctOpt?.explanationHu || '') : (correctOpt?.explanationEn || ''),
          category: q.category
        }
      ]);
    } else {
      setStreak(0);
    }
  };

  const handleFloor3Next = () => {
    if (floor3Index + 1 < DIALOGUE_QUESTIONS.length) {
      setFloor3Index((prev) => prev + 1);
    } else {
      // Reached the Top Floor: Rooftop Dining!
      setCurrentView('floor4');
    }
  };

  // Restart everything and return to Landing Cover
  const handleRestart = () => {
    setCurrentView('landing');
    setFloor1Index(0);
    setFloor3Index(0);
    setScore(0);
    setWalletDollars(0);
    setStreak(0);
    setMaxStreak(0);
    setFirstTryCorrect(0);
    setHistory([]);
  };

  const gameStats: GameStats = {
    score,
    totalAnswered,
    firstTryCorrect,
    currentStreak: streak,
    maxStreak,
    history,
    walletDollars,
    floorLevel: 4
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        onOpenPhrasebook={() => setIsPhrasebookOpen(true)}
        onOpenSupabaseSync={() => setIsSupabaseModalOpen(true)}
        onReset={handleRestart}
        onGoHome={handleGoHome}
        isAtHome={currentView === 'landing'}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3.5 py-4 sm:px-6 flex flex-col items-center justify-center">
        {/* 1. STARTER PAGE: RESTAURANT QUEST LANDING */}
        {currentView === 'landing' && (
          <RestaurantQuestLanding
            onStart={handleStartQuest}
            onSelectFloor={handleSelectFloor}
            walletDollars={walletDollars}
            totalAnswered={totalAnswered}
            score={score}
            lang={lang}
          />
        )}

        {/* 2. FLOORS HUB / SELECTION SCREEN */}
        {currentView === 'hub' && (
          <StarterScreen
            onSelectFloor={handleSelectFloor}
            onOpenPhrasebook={() => setIsPhrasebookOpen(true)}
            onGoToLanding={handleGoToLanding}
            lang={lang}
            wordsProgress={0}
            phrasesProgress={floor1AnsweredCount}
            sentencesProgress={0}
            conversationProgress={floor3AnsweredCount}
            walletDollars={walletDollars}
            score={score}
          />
        )}

        {/* 3. 1st FLOOR: SENTENCE COMPLETION TASK */}
        {currentView === 'floor1' && (
          <div className="w-full space-y-4 animate-fadeIn">
            <StatsBar
              currentFloor={1}
              currentQuestionIndex={floor1Index}
              totalFloorQuestions={COMPLETION_QUESTIONS.length}
              overallProgressPercent={overallProgressPercent}
              walletDollars={walletDollars}
              score={score}
              streak={streak}
              lang={lang}
            />

            <Task2Completion
              key={`floor1-completion-${floor1Index}`}
              question={COMPLETION_QUESTIONS[floor1Index]}
              questionNumber={floor1Index + 1}
              totalQuestions={COMPLETION_QUESTIONS.length}
              onAnswerSubmit={handleFloor1CompletionAnswer}
              onNextQuestion={handleFloor1Next}
              lang={lang}
              audioEnabled={audioEnabled}
              onBackToMenu={handleGoHome}
            />
          </div>
        )}

        {/* 4. 3rd FLOOR: CONVERSATION DIALOGUE TASK */}
        {currentView === 'floor3' && (
          <div className="w-full space-y-4 animate-fadeIn">
            <StatsBar
              currentFloor={3}
              currentQuestionIndex={floor3Index}
              totalFloorQuestions={DIALOGUE_QUESTIONS.length}
              overallProgressPercent={overallProgressPercent}
              walletDollars={walletDollars}
              score={score}
              streak={streak}
              lang={lang}
            />

            <Task1Dialogue
              key={`floor3-dialogue-${floor3Index}`}
              question={DIALOGUE_QUESTIONS[floor3Index]}
              questionNumber={floor3Index + 1}
              totalQuestions={DIALOGUE_QUESTIONS.length}
              onAnswerSubmit={handleFloor3DialogueAnswer}
              onNextQuestion={handleFloor3Next}
              lang={lang}
              audioEnabled={audioEnabled}
              onBackToMenu={handleGoHome}
            />
          </div>
        )}

        {/* 5. 4th / TOP FLOOR: ROOFTOP DINING */}
        {currentView === 'floor4' && (
          <RooftopDiningView
            walletDollars={walletDollars}
            onSpendDollars={handleSpendDollars}
            lang={lang}
            onReturnToHub={handleGoHome}
            onRestartQuest={handleRestart}
            totalScore={score}
          />
        )}

        {/* 6. SUMMARY VIEW */}
        {currentView === 'summary' && (
          <FinalStatsModal
            stats={gameStats}
            totalQuestions={totalQuestions}
            onRestart={handleRestart}
            onOpenPhrasebook={() => setIsPhrasebookOpen(true)}
            onOpenSupabaseSync={() => setIsSupabaseModalOpen(true)}
            lang={lang}
          />
        )}
      </main>

      {/* Phrasebook Cheat Sheet Modal */}
      <PhrasebookModal
        isOpen={isPhrasebookOpen}
        onClose={() => setIsPhrasebookOpen(false)}
        lang={lang}
      />

      {/* Supabase Cloud Sync & Leaderboard Modal */}
      <SupabaseSyncModal
        isOpen={isSupabaseModalOpen}
        onClose={() => setIsSupabaseModalOpen(false)}
        lang={lang}
        currentStats={gameStats}
      />

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50">
        <p>
          Restaurant Quest • Ground Floor (Words - Coming Soon) → 1st Floor (Sentences) → 2nd Floor (Coming Soon) → 3rd Floor (Conversation) → 4th Floor (Rooftop Dining)
        </p>
      </footer>
    </div>
  );
}
