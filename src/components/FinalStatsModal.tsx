import React, { useState, useEffect } from 'react';
import { GameStats } from '../types';
import { Award, CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp, Sparkles, BookOpen, Volume2, Database } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakEnglish } from '../utils/speech';

interface FinalStatsModalProps {
  stats: GameStats;
  totalQuestions: number;
  onRestart: () => void;
  onOpenPhrasebook: () => void;
  onOpenSupabaseSync?: () => void;
  lang: 'hu' | 'en';
}

export const FinalStatsModal: React.FC<FinalStatsModalProps> = ({
  stats,
  totalQuestions,
  onRestart,
  onOpenPhrasebook,
  onOpenSupabaseSync,
  lang
}) => {
  const [showReview, setShowReview] = useState<boolean>(false);
  const percentage = Math.round((stats.score / totalQuestions) * 100);


  useEffect(() => {
    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  }, [percentage]);

  const getRank = () => {
    if (percentage >= 95) {
      return {
        titleEn: "Michelin Gourmet Master (B2+ Proficient)",
        titleHu: "Michelin-csillagos Gourmet Mester (B2+ Kiváló)",
        icon: "🌟",
        descEn: "Outstanding! Your restaurant English is fluent, diplomatic, and natural. You're ready for the finest dining anywhere in the world.",
        descHu: "Lenyűgöző! Az éttermi angolod folyékony, udvarias és magabiztos. Bármilyen nemzetközi étteremben feltalálod magad."
      };
    } else if (percentage >= 75) {
      return {
        titleEn: "Seasoned Diner (B2 Independent)",
        titleHu: "Tapasztalt Vendég (B2 Magabiztos)",
        icon: "🍷",
        descEn: "Great job! You navigated almost all complex restaurant situations with great politeness and accuracy.",
        descHu: "Nagyszerű eredmény! Szinte minden összetett éttermi helyzetet sikeresen és udvariasan megoldottál."
      };
    } else if (percentage >= 50) {
      return {
        titleEn: "Apprentice Diner (B1 Intermediate)",
        titleHu: "Gyakorló Étteremlátogató (B1 Közép)",
        icon: "🍽️",
        descEn: "Good effort! You understand the essentials, but review the politeness nuances and complaint phrases for even better fluency.",
        descHu: "Jó alapok! Az udvariassági fordulatok és a panaszkezelés átismétlésével még magabiztosabb lehetsz."
      };
    } else {
      return {
        titleEn: "Learning Diner (B1 Starter)",
        titleHu: "Kezdő Éttermi Tanuló (B1 Kezdő)",
        icon: "📖",
        descEn: "Keep practicing! Review the restaurant phrasebook cheat sheet and try the quest once more.",
        descHu: "Gyakorolj még egy kicsit! Nézd át az éttermi kifejezéstárat és próbáld meg újra a küldetést."
      };
    }
  };

  const rank = getRank();

  return (
    <div id="final-stats-container" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl p-6 sm:p-9 text-center animate-fadeIn">
      {/* Trophy Badge */}
      <div className="w-20 h-20 mx-auto rounded-full bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-700 flex items-center justify-center text-4xl shadow-inner mb-4">
        {rank.icon}
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
        {lang === 'hu' ? 'Küldetés Befejezve' : 'Quest Completed'}
      </span>

      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-2 mb-1">
        {lang === 'hu' ? 'Gratulálunk a teljesítéshez!' : 'Congratulations!'}
      </h2>

      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
        {lang === 'hu' ? rank.titleHu : rank.titleEn}
      </p>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
        {/* Score */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
            {percentage}%
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
            {lang === 'hu' ? 'Eredmény' : 'Accuracy'}
          </div>
        </div>

        {/* Total Points */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">
            {stats.score} / {totalQuestions}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
            {lang === 'hu' ? 'Összpontszám' : 'Total Points'}
          </div>
        </div>

        {/* First try accuracy */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400">
            {stats.firstTryCorrect}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
            {lang === 'hu' ? 'Elsőre helyes' : 'First-try hits'}
          </div>
        </div>

        {/* Max streak */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <div className="text-2xl sm:text-3xl font-black text-amber-500">
            {stats.maxStreak} 🔥
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
            {lang === 'hu' ? 'Legjobb sorozat' : 'Max Streak'}
          </div>
        </div>
      </div>

      {/* Summary narrative */}
      <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 max-w-2xl mx-auto mb-6 text-left">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {lang === 'hu' ? rank.descHu : rank.descEn}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          id="btn-restart-quest"
          onClick={onRestart}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{lang === 'hu' ? 'Új játék indítása' : 'Play Again'}</span>
        </button>

        {onOpenSupabaseSync && (
          <button
            id="btn-open-supabase-final"
            onClick={onOpenSupabaseSync}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-500 hover:to-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Database className="w-4 h-4 text-emerald-300" />
            <span>{lang === 'hu' ? 'Mentés Supabase-be & Ranglista' : 'Save to Supabase'}</span>
          </button>
        )}

        <button
          id="btn-open-phrasebook-final"
          onClick={onOpenPhrasebook}
          className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>{lang === 'hu' ? 'Kifejezéstár áttekintése' : 'Review Phrasebook'}</span>
        </button>

        <button
          id="btn-toggle-review"
          onClick={() => setShowReview(!showReview)}
          className="px-5 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 font-semibold text-sm border border-indigo-200 dark:border-indigo-800 transition-colors flex items-center gap-2"
        >
          <span>{showReview ? (lang === 'hu' ? 'Válaszok elrejtése' : 'Hide Answers') : (lang === 'hu' ? 'Válaszok részletes áttekintése' : 'Review All Answers')}</span>
          {showReview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Accordion Review of All Questions */}
      {showReview && (
        <div id="answers-review-section" className="text-left border-t border-slate-200 dark:border-slate-800 pt-6 max-w-2xl mx-auto space-y-3">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">
            {lang === 'hu' ? 'Szituációk és megoldások áttekintése:' : 'Questions & Solutions Summary:'}
          </h3>

          {stats.history.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs sm:text-sm"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="font-bold text-slate-800 dark:text-slate-100">
                  #{idx + 1} ({item.taskId === 1 ? (lang === 'hu' ? '1. Feladat Kiegészítés' : 'Task 1 Sentence Completion') : (lang === 'hu' ? '2. Feladat Párbeszéd' : 'Task 2 Conversation')})
                </span>
                {item.isCorrectFirstTry ? (
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {lang === 'hu' ? 'Elsőre helyes' : 'First try'}
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                    {lang === 'hu' ? `${item.attempts} próbálkozás` : `${item.attempts} attempts`}
                  </span>
                )}
              </div>

              <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                "{item.questionText}"
              </p>

              <div className="flex items-center gap-2 mt-2 font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg">
                <span>✔ {lang === 'hu' ? 'Helyes válasz: ' : 'Correct answer: '}</span>
                <strong>{item.correctAnswer}</strong>
                <button
                  onClick={() => speakEnglish(item.correctAnswer, 'customer')}
                  className="p-1 rounded text-emerald-600 hover:text-emerald-800 ml-auto"
                  title="Listen"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {item.explanation && (
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700/60 pt-1.5">
                  💡 {item.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
