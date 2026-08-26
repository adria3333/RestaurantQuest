import React from 'react';
import {
  BookOpen,
  Utensils,
  Play,
  Award,
  DollarSign,
  ArrowLeft,
  ChevronRight,
  Clock
} from 'lucide-react';
import { COMPLETION_QUESTIONS } from '../data/completionQuestions';
import { DIALOGUE_QUESTIONS } from '../data/dialogueQuestions';
import { FloorLevel } from '../types';

interface StarterScreenProps {
  onSelectFloor: (floor: FloorLevel) => void;
  onOpenPhrasebook: () => void;
  onGoToLanding: () => void;
  lang: 'hu' | 'en';
  wordsProgress: number;
  phrasesProgress: number;
  sentencesProgress: number;
  conversationProgress: number;
  walletDollars: number;
  score: number;
}

export const StarterScreen: React.FC<StarterScreenProps> = ({
  onSelectFloor,
  onOpenPhrasebook,
  onGoToLanding,
  lang,
  phrasesProgress,
  conversationProgress,
  walletDollars
}) => {
  const isFloor1Done = phrasesProgress >= COMPLETION_QUESTIONS.length;
  const isFloor3Done = conversationProgress >= DIALOGUE_QUESTIONS.length;

  return (
    <div
      id="starter-screen-container"
      className="w-full flex flex-col justify-between gap-4 animate-fadeIn pb-6"
    >
      {/* Top Navigation & Quest Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-amber-600 text-white shadow-md">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onGoToLanding}
            className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Back to Restaurant Quest Landing"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'hu' ? 'Kezdőlap' : 'Cover Page'}</span>
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Restaurant Quest • Floors Hub
            </h1>
            <p className="text-xs text-amber-100 hidden sm:block">
              {lang === 'hu' ? 'Haladj felfelé az emeleteken a tetőtéri étteremhez!' : 'Climb the floors to reach the rooftop restaurant!'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Wallet counter */}
          <div className="px-3.5 py-1.5 rounded-xl bg-black/25 backdrop-blur-xs border border-white/30 flex items-center gap-1.5 font-black text-sm">
            <DollarSign className="w-4 h-4 text-amber-300" />
            <span>${walletDollars} USD</span>
          </div>

          <button
            type="button"
            onClick={onOpenPhrasebook}
            className="px-3 py-1.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-amber-50 transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hu' ? 'Kifejezéstár' : 'Phrasebook'}</span>
          </button>
        </div>
      </div>

      {/* 4 FLOORS + ROOFTOP DINING CARDS */}
      <div className="space-y-3">
        {/* 🌟 4th / TOP FLOOR: ROOFTOP RESTAURANT (Dine here) */}
        <div
          id="card-floor-rooftop"
          className="rounded-2xl p-4 sm:p-5 border-2 border-amber-400 bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 text-white shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1.5 text-left w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3 h-3" />
                TOP FLOOR (4F)
              </span>
              <span className="text-xs font-bold text-amber-300">
                ✨ Skyline Rooftop Dining Terrace
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Rooftop Restaurant • Dine & Spend Your Dollars
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              {lang === 'hu'
                ? 'Rendelj fejedelmi ételeket (ribeye steak, lazac, tiramisu, koktélok) a megszerzett egyenlegedből!'
                : 'Feast under the stars with gourmet dishes and signature drinks using your accumulated dollars!'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectFloor(4)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Utensils className="w-4 h-4" />
            <span>{lang === 'hu' ? 'Étlap megnyitása' : 'Dine on Rooftop'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3rd FLOOR: CONVERSATION DIALOGUE */}
        <div
          id="card-floor-3"
          className="rounded-2xl p-4 sm:p-5 border-2 border-indigo-200 dark:border-indigo-900/70 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
        >
          <div className="space-y-1 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold uppercase tracking-wider">
                3rd Floor • Conversation Task
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {isFloor3Done ? 'Completed' : `(${conversationProgress}/${DIALOGUE_QUESTIONS.length})`}
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                +$1 / task
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              3rd Floor: CONVERSATION (Dialogue Task)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Listen to the waiter's questions and select authentic, polite customer responses.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectFloor(3)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isFloor3Done ? (lang === 'hu' ? 'Újrajátszás' : 'Replay') : (lang === 'hu' ? '3. Emelet indítása' : 'Play 3rd Floor')}</span>
          </button>
        </div>

        {/* 2nd FLOOR: SENTENCES (COMING SOON) */}
        <div
          id="card-floor-2"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 opacity-75 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
        >
          <div className="space-y-1 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                2nd Floor
              </span>
              <span className="text-xs font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded">
                COMING SOON
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-600 dark:text-slate-400">
              2nd Floor: SENTENCES
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sentence construction & syntax exercises coming in the next update.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-500 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Coming Soon</span>
          </div>
        </div>

        {/* 1st FLOOR: SENTENCE COMPLETION */}
        <div
          id="card-floor-1"
          className="rounded-2xl p-4 sm:p-5 border-2 border-purple-200 dark:border-purple-900/70 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
        >
          <div className="space-y-1 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[11px] font-bold uppercase tracking-wider">
                1st Floor • Sentence Completion
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {isFloor1Done ? 'Completed' : `(${phrasesProgress}/${COMPLETION_QUESTIONS.length})`}
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                +$1 / task
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              1st Floor: PHRASES (Sentence Completion)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Examine the restaurant scenes and choose matching phrases from the dropdown menus.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectFloor(1)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isFloor1Done ? (lang === 'hu' ? 'Újrajátszás' : 'Replay') : (lang === 'hu' ? '1. Emelet indítása' : 'Play 1st Floor')}</span>
          </button>
        </div>

        {/* GROUND FLOOR: WORDS (COMING SOON) */}
        <div
          id="card-floor-0"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 opacity-75 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
        >
          <div className="space-y-1 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                Ground Floor
              </span>
              <span className="text-xs font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded">
                COMING SOON
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-600 dark:text-slate-400">
              Ground Floor: WORDS
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Basic vocabulary flashcards & cutlery identification coming in the next update.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-500 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};
