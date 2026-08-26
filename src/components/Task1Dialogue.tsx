import React, { useState, useEffect } from 'react';
import { DialogueQuestion, DialogueOption } from '../types';
import { Volume2, CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, Sparkles, ChevronLeft } from 'lucide-react';
import { speakEnglish } from '../utils/speech';
import { RestaurantCharacterAnimation } from './RestaurantCharacterAnimation';

interface Task1DialogueProps {
  question: DialogueQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (isCorrect: boolean, chosenOptionId: string, chosenText: string, isFirstTry: boolean) => void;
  onNextQuestion: () => void;
  lang: 'hu' | 'en';
  audioEnabled: boolean;
  onBackToMenu?: () => void;
}

export const Task1Dialogue: React.FC<Task1DialogueProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSubmit,
  onNextQuestion,
  lang,
  audioEnabled,
  onBackToMenu
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState<boolean>(false);
  const [failedOptionIds, setFailedOptionIds] = useState<string[]>([]);
  const [activeExplanation, setActiveExplanation] = useState<{ en: string; hu: string; toneNote?: string } | null>(null);
  const [attempts, setAttempts] = useState<number>(0);
  const [showHungarianTranslation, setShowHungarianTranslation] = useState<boolean>(false);
  const [autoAdvanceCountdown, setAutoAdvanceCountdown] = useState<number | null>(null);

  // Auto-speak waiter text when question loads if audioEnabled is true
  useEffect(() => {
    setSelectedOptionId(null);
    setHasAnsweredCorrectly(false);
    setFailedOptionIds([]);
    setActiveExplanation(null);
    setAttempts(0);
    setShowHungarianTranslation(false);
    setAutoAdvanceCountdown(null);

    if (audioEnabled) {
      const timer = setTimeout(() => {
        speakEnglish(question.waiterText, 'waiter');
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [question.id, audioEnabled]);

  // Handle countdown for automatic transition
  useEffect(() => {
    if (autoAdvanceCountdown === null) return;
    if (autoAdvanceCountdown <= 0) {
      onNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setAutoAdvanceCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [autoAdvanceCountdown, onNextQuestion]);

  const handleSelectOption = (option: DialogueOption) => {
    if (hasAnsweredCorrectly) return; // already solved
    if (failedOptionIds.includes(option.id)) return; // already tried this wrong one

    setSelectedOptionId(option.id);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (option.isCorrect) {
      setHasAnsweredCorrectly(true);
      setActiveExplanation({
        en: option.explanationEn,
        hu: option.explanationHu,
        toneNote: option.toneNote
      });

      const isFirstTry = newAttempts === 1;
      onAnswerSubmit(true, option.id, option.text, isFirstTry);

      if (audioEnabled) {
        speakEnglish(option.text, 'customer');
      }

      // Auto-advance after 1.5s countdown
      setAutoAdvanceCountdown(2);
    } else {
      setFailedOptionIds((prev) => [...prev, option.id]);
      setActiveExplanation({
        en: option.explanationEn,
        hu: option.explanationHu,
        toneNote: option.toneNote
      });

      onAnswerSubmit(false, option.id, option.text, false);
    }
  };

  const handleManualNext = () => {
    setAutoAdvanceCountdown(null);
    onNextQuestion();
  };

  const handlePlayWaiterAudio = () => {
    speakEnglish(question.waiterText, 'waiter');
  };

  const handlePlayOptionAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speakEnglish(text, 'customer');
  };

  return (
    <div id="task2-card" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-5 sm:p-7 transition-all">
      {/* Top English Description & Instruction Banner */}
      <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex items-start justify-between gap-3">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider">
              Task 2
            </span>
            <span className="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-200">
              Restaurant conversation practice
            </span>
          </div>
          <p className="text-xs text-indigo-900/80 dark:text-indigo-300/90 leading-relaxed font-medium pt-1">
            <strong>Instruction:</strong> Listen to the waiter's question and choose the most natural, polite customer response from the four options.
          </p>
        </div>

        {onBackToMenu && (
          <button
            type="button"
            id="btn-task2-back-menu"
            onClick={onBackToMenu}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold flex items-center gap-1 transition-colors shrink-0 shadow-2xs"
            title="Return to Task Selection Menu"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Tasks Menu</span>
          </button>
        )}
      </div>

      {/* Scenario Header & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            {lang === 'hu' ? 'Szituáció' : 'Scenario'} #{questionNumber} / {totalQuestions}
          </span>
          <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
            {lang === 'hu' ? question.scenarioHu : question.scenario}
          </h2>
        </div>

        <button
          onClick={() => setShowHungarianTranslation(!showHungarianTranslation)}
          className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium ml-auto"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>
            {showHungarianTranslation
              ? (lang === 'hu' ? 'Fordítás elrejtése' : 'Hide translation')
              : (lang === 'hu' ? 'Magyar fordítás megtekintése' : 'Show Hungarian clue')}
          </span>
        </button>
      </div>

      {/* Waiter / Host Animated Character Dialogue */}
      <div className="mb-5">
        <RestaurantCharacterAnimation
          taskType={1}
          questionId={question.id}
          speechText={question.waiterText}
          onPlayAudio={handlePlayWaiterAudio}
          lang={lang}
          isCorrect={hasAnsweredCorrectly}
        />

        {showHungarianTranslation && (
          <div className="px-4 py-2.5 -mt-2 mb-3 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 font-medium flex items-start gap-2 shadow-sm animate-fadeIn">
            <span className="text-base shrink-0">💡</span>
            <p className="leading-relaxed">
              <span className="font-semibold">{lang === 'hu' ? 'Magyar jelentés:' : 'Hungarian meaning:'}</span> {question.waiterTranslationHu}
            </p>
          </div>
        )}
      </div>

      {/* Prompt Instruction */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span>🎯</span>
          <span>
            {lang === 'hu'
              ? 'Válaszd ki a legmegfelelőbb, legudvariasabb reakciót (B1–B2):'
              : 'Choose the most appropriate, natural response (B1–B2):'}
          </span>
        </p>
      </div>

      {/* 4 Options Grid */}
      <div className="grid grid-cols-1 gap-3 mb-5">
        {question.options.map((opt, idx) => {
          const isSelected = selectedOptionId === opt.id;
          const isFailed = failedOptionIds.includes(opt.id);
          const isCorrectAndFound = hasAnsweredCorrectly && opt.isCorrect;

          let btnClasses = 'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800';

          if (isCorrectAndFound) {
            btnClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-semibold ring-2 ring-emerald-500/30';
          } else if (isFailed) {
            btnClasses = 'border-rose-300 dark:border-rose-800 bg-rose-50/70 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 opacity-80 cursor-not-allowed';
          }

          return (
            <div
              key={opt.id}
              id={`task1-option-${opt.id}`}
              role="button"
              tabIndex={hasAnsweredCorrectly || isFailed ? -1 : 0}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !hasAnsweredCorrectly && !isFailed) {
                  e.preventDefault();
                  handleSelectOption(opt);
                }
              }}
              onClick={() => {
                if (!hasAnsweredCorrectly && !isFailed) {
                  handleSelectOption(opt);
                }
              }}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all duration-200 flex items-start justify-between gap-3 group relative cursor-pointer select-none ${btnClasses} ${
                hasAnsweredCorrectly || isFailed ? 'cursor-default' : ''
              }`}
            >
              <div className="flex items-start gap-3 flex-1">
                {/* Option Letter Index */}
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isCorrectAndFound
                      ? 'bg-emerald-600 text-white'
                      : isFailed
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>

                <span className="text-sm sm:text-base leading-snug flex-1">
                  {opt.text}
                </span>
              </div>

              {/* Status Icons & Audio Button */}
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  type="button"
                  onClick={(e) => handlePlayOptionAudio(e, opt.text)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  title="Listen to option"
                  aria-label="Listen to option audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                {isCorrectAndFound && (
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-sm animate-scale">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-100 dark:fill-emerald-950" />
                    <span className="text-xs">{lang === 'hu' ? 'Helyes ✔' : 'Correct ✔'}</span>
                  </span>
                )}

                {isFailed && (
                  <span className="flex items-center gap-1 text-rose-500 font-bold text-xs">
                    <XCircle className="w-4 h-4" />
                    <span>{lang === 'hu' ? 'Hibás' : 'Incorrect'}</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanation & Feedback Box */}
      {activeExplanation && (
        <div
          id="task1-explanation-box"
          className={`p-4 rounded-xl border mb-5 animate-fadeIn ${
            hasAnsweredCorrectly
              ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100'
              : 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-100'
          }`}
        >
          <div className="flex items-start gap-2.5">
            {hasAnsweredCorrectly ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            )}

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-bold text-sm">
                  {hasAnsweredCorrectly
                    ? (lang === 'hu' ? 'Kiváló válasz!' : 'Great choice!')
                    : (lang === 'hu' ? 'Miért nem megfelelő ez a válasz?' : 'Why is this option incorrect?')}
                </span>
                {activeExplanation.toneNote && (
                  <span className="text-xs px-2 py-0.5 rounded font-semibold bg-white/70 dark:bg-slate-800/70 border border-current">
                    {activeExplanation.toneNote}
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed">
                {lang === 'hu' ? activeExplanation.hu : activeExplanation.en}
              </p>

              {!hasAnsweredCorrectly && (
                <div className="mt-2.5 pt-2 border-t border-amber-200 dark:border-amber-900/50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                    {lang === 'hu' ? '🔄 Próbálj ki egy másik lehetőséget a fentiek közül!' : '🔄 Try choosing another option above!'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Auto-advance status / Manual next button */}
      {hasAnsweredCorrectly && (
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {autoAdvanceCountdown !== null && autoAdvanceCountdown > 0 ? (
              lang === 'hu'
                ? `Következő kérdés betöltése ${autoAdvanceCountdown} mp múlva...`
                : `Next question loading in ${autoAdvanceCountdown}s...`
            ) : (
              lang === 'hu' ? 'Készen állsz a folytatásra?' : 'Ready to continue?'
            )}
          </span>

          <button
            id="btn-task2-next"
            onClick={handleManualNext}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 ml-auto"
          >
            <span>{questionNumber === totalQuestions ? (lang === 'hu' ? 'Eredmények összesítése' : 'View Final Summary') : (lang === 'hu' ? 'Következő szituáció' : 'Next Question')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
