import React from 'react';
import { Award, Flame, MessageSquare, Edit3, DollarSign, Layers, BookOpen } from 'lucide-react';
import { FloorLevel } from '../types';

interface StatsBarProps {
  currentFloor: FloorLevel;
  currentQuestionIndex: number;
  totalFloorQuestions: number;
  overallProgressPercent: number;
  walletDollars: number;
  score: number;
  streak: number;
  lang: 'hu' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({
  currentFloor,
  currentQuestionIndex,
  totalFloorQuestions,
  overallProgressPercent,
  walletDollars,
  score,
  streak,
  lang
}) => {
  const getFloorInfo = (floor: FloorLevel) => {
    switch (floor) {
      case 0:
        return {
          titleEn: 'Ground Floor: WORDS',
          titleHu: 'Földszint: Szavak',
          color: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800/60 text-amber-800 dark:text-amber-300',
          icon: <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        };
      case 1:
        return {
          titleEn: '1st Floor: PHRASES (Sentence Completion)',
          titleHu: '1. Emelet: Kifejezések (Mondatkiegészítés)',
          color: 'bg-purple-50 dark:bg-purple-950/60 border-purple-300 dark:border-purple-800/60 text-purple-800 dark:text-purple-300',
          icon: <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        };
      case 2:
        return {
          titleEn: '2nd Floor: SENTENCES',
          titleHu: '2. Emelet: Mondatok',
          color: 'bg-teal-50 dark:bg-teal-950/60 border-teal-300 dark:border-teal-800/60 text-teal-800 dark:text-teal-300',
          icon: <Edit3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
        };
      case 3:
        return {
          titleEn: '3rd Floor: CONVERSATION (Dialogue Task)',
          titleHu: '3. Emelet: Párbeszéd (Beszélgetés)',
          color: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-800/60 text-indigo-800 dark:text-indigo-300',
          icon: <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        };
      case 4:
      default:
        return {
          titleEn: '4th Floor: ROOFTOP DINING',
          titleHu: '4. Emelet: Tetőtéri Étterem',
          color: 'bg-amber-100 dark:bg-amber-950 border-amber-400 text-amber-950 dark:text-amber-200',
          icon: <Award className="w-4 h-4 text-amber-500" />
        };
    }
  };

  const floorInfo = getFloorInfo(currentFloor);

  return (
    <div id="stats-bar-container" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 mb-4 transition-all">
      {/* Top row: Floor Indicator, Score, Wallet, Streak */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        {/* Floor Badge */}
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-xs sm:text-sm ${floorInfo.color}`}>
            {floorInfo.icon}
            <span>{lang === 'hu' ? floorInfo.titleHu : floorInfo.titleEn}</span>
          </div>
          {totalFloorQuestions > 0 && (
            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">
              {currentQuestionIndex + 1} / {totalFloorQuestions}
            </span>
          )}
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          {/* Restaurant Wallet Balance */}
          <div
            id="wallet-counter-badge"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border-2 border-emerald-300 dark:border-emerald-700/80 text-emerald-800 dark:text-emerald-300 font-black shadow-xs"
          >
            <DollarSign className="w-4 h-4 stroke-[2.5] text-emerald-600 dark:text-emerald-400" />
            <span>${walletDollars} USD</span>
          </div>

          {/* Correct score */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
            <Award className="w-4 h-4 text-amber-500" />
            <span>
              {lang === 'hu' ? 'Pont:' : 'Score:'} {score}
            </span>
          </div>

          {/* Hot Streak */}
          {streak > 1 && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/50 text-rose-600 dark:text-rose-400 font-black animate-pulse">
              <Flame className="w-4 h-4 fill-rose-500" />
              <span>{streak}x streak</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom row: Progress Bar to Rooftop Feast */}
      <div className="space-y-1">
        <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
          <span>{lang === 'hu' ? 'Haladás a Tetőtéri Étteremhez' : 'Progress toward Rooftop Restaurant'}</span>
          <span>{Math.round(overallProgressPercent)}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, overallProgressPercent))}%` }}
          />
        </div>
      </div>
    </div>
  );
};
