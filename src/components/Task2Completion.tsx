import React, { useState, useEffect } from 'react';
import { CompletionQuestion, CompletionDropdownOption } from '../types';
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Volume2,
  ChevronDown,
  ChevronLeft,
  Check
} from 'lucide-react';
import { speakEnglish, EnglishAccent } from '../utils/speech';
import { SituationSceneVisual } from './SituationSceneVisual';

interface SmallWordCardData {
  targetEn: string;
  targetHu: string;
  audioPhrase: string;
}

const SMALL_WORD_CARDS: Record<number, SmallWordCardData> = {
  1: {
    targetEn: 'a jug of tap water',
    targetHu: 'egy kancsó csapvíz',
    audioPhrase: 'a jug of tap water'
  },
  2: {
    targetEn: 'book a table',
    targetHu: 'asztalt foglalni',
    audioPhrase: 'book a table'
  },
  3: {
    targetEn: 'contain nuts',
    targetHu: 'mogyoróféléket tartalmaz',
    audioPhrase: 'contain nuts'
  },
  4: {
    targetEn: 'keep the change',
    targetHu: 'tartsa meg a visszajárót',
    audioPhrase: 'keep the change'
  },
  5: {
    targetEn: 'heat it up',
    targetHu: 'felmelegíteni',
    audioPhrase: 'heat it up'
  },
  6: {
    targetEn: 'on the side',
    targetHu: 'külön tálkában',
    audioPhrase: 'on the side'
  },
  7: {
    targetEn: 'a doggy bag',
    targetHu: 'elviteles doboz (maradéknak)',
    audioPhrase: 'a doggy bag'
  },
  8: {
    targetEn: 'a mistake on the bill',
    targetHu: 'tévedés a számlán',
    audioPhrase: 'a mistake on the bill'
  }
};

interface Task2CompletionProps {
  question: CompletionQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (isCorrect: boolean, userInput: string, isFirstTry: boolean) => void;
  onNextQuestion: () => void;
  lang: 'hu' | 'en';
  audioEnabled: boolean;
  onBackToMenu?: () => void;
}

export const Task2Completion: React.FC<Task2CompletionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSubmit,
  onNextQuestion,
  lang,
  audioEnabled,
  onBackToMenu
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');
  const [selectedOptionDetail, setSelectedOptionDetail] = useState<CompletionDropdownOption | null>(null);

  useEffect(() => {
    setSelectedOptionId('');
    setIsCorrect(null);
    setShowHint(false);
    setAttempts(0);
    setFeedbackMsg('');
    setSelectedOptionDetail(null);
  }, [question.id]);

  const handleOptionChange = (optionId: string) => {
    if (!optionId) return;
    setSelectedOptionId(optionId);

    const chosenOption = question.options.find((opt) => opt.id === optionId);
    if (!chosenOption) return;

    setSelectedOptionDetail(chosenOption);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (chosenOption.isCorrect) {
      setIsCorrect(true);
      const isFirst = attempts === 0 && !showHint;
      onAnswerSubmit(true, chosenOption.value, isFirst);
      setFeedbackMsg(`Correct! The right phrase is "${chosenOption.value}".`);

      // Automatically read the full sentence out loud in natural British English
      if (audioEnabled) {
        speakEnglish(question.fullSentence, 'customer', 'uk');
      }
    } else {
      setIsCorrect(false);
      onAnswerSubmit(false, chosenOption.value, false);

      let reason = '';
      if (chosenOption.type === 'acceptable_unmatching') {
        reason = `Incorrect. While "${chosenOption.value}" may make sense in other contexts, it does not match the situation shown in the illustration.`;
      } else if (chosenOption.type === 'similar') {
        reason = `Incorrect. "${chosenOption.value}" sounds similar, but it is not the accurate expression for this sentence.`;
      } else {
        reason = `Incorrect. "${chosenOption.value}" is not the right choice for this sentence. Choose another option from the list!`;
      }

      setFeedbackMsg(reason);
    }
  };

  const handlePlaySentence = (accent: EnglishAccent = 'uk') => {
    if (isCorrect || selectedOptionId) {
      const selected = question.options.find((o) => o.id === selectedOptionId);
      const sentenceText = isCorrect
        ? question.fullSentence
        : `${question.sentenceBefore} ${selected ? selected.value : ''} ${question.sentenceAfter}`;
      speakEnglish(sentenceText, 'customer', accent);
    } else {
      const previewText = `${question.sentenceBefore} [blank] ${question.sentenceAfter}`;
      speakEnglish(previewText, 'customer', accent);
    }
  };

  const wordCardData = SMALL_WORD_CARDS[question.id] || {
    targetEn: question.correctAnswer,
    targetHu: question.options.find((o) => o.isCorrect)?.labelHu || '',
    audioPhrase: question.correctAnswer
  };

  const handlePlayTargetWord = (accent: EnglishAccent = 'uk', e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakEnglish(wordCardData.audioPhrase, 'customer', accent);
  };

  const getPurposeText = (qId: number): string => {
    switch (qId) {
      case 1:
        return 'Order a large amount of water for the entire table';
      case 2:
        return 'Reserve a table for four people for dinner tonight';
      case 3:
        return 'Check for dietary allergens in the house salad dressing';
      case 4:
        return 'Leave the remaining change as a gratuity for the waiter';
      case 5:
        return 'Politely request to reheat a cold bowl of soup';
      case 6:
        return 'Ask for the salad dressing to be served in a separate dish';
      case 7:
        return 'Request packaging to take leftover food home';
      case 8:
      default:
        return 'Clarify an unexpected extra item on the final bill';
    }
  };

  return (
    <div
      id="task1-card"
      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-4 sm:p-7 transition-all"
    >
      {/* Top English Description & Instruction Banner */}
      <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/60 flex items-start justify-between gap-3">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-teal-600 text-white text-[11px] font-bold uppercase tracking-wider">
              Task 1
            </span>
            <span className="text-xs sm:text-sm font-bold text-teal-950 dark:text-teal-200">
              Vocabulary and sentence completion practice
            </span>
          </div>
          <p className="text-xs text-teal-900/80 dark:text-teal-300/90 leading-relaxed font-medium pt-1">
            <strong>Instruction:</strong> Look closely at the dining illustration and select the correct phrase from the dropdown to complete the sentence.
          </p>
        </div>

        {onBackToMenu && (
          <button
            type="button"
            id="btn-task1-back-menu"
            onClick={onBackToMenu}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-slate-700 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-semibold flex items-center gap-1 transition-colors shrink-0 shadow-2xs"
            title="Return to Task Selection Menu"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Tasks Menu</span>
          </button>
        )}
      </div>

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
            Question #{questionNumber} / {totalQuestions}
          </span>
        </div>
      </div>

      {/* 1. Situation Scene Visual: Clean illustration without outer box or overlay play button */}
      <div className="w-full h-44 sm:h-52 relative flex items-center justify-center mb-4 select-none">
        <SituationSceneVisual
          taskType={2}
          questionId={question.id}
          isSpeaking={false}
        />
      </div>

      {/* Interactive Sentence Box with Embedded Dropdown & Audio Play Buttons */}
      <div className="mb-5">
        <div
          id="interactive-sentence-box"
          className={`p-4 sm:p-6 rounded-2xl border transition-all shadow-inner ${
            isCorrect === true
              ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 ring-2 ring-emerald-500/20'
              : isCorrect === false
              ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800 ring-2 ring-rose-400/20'
              : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700/80'
          }`}
        >
          {/* Top Row: Purpose text */}
          <div className="mb-3.5 pb-2.5 border-b border-slate-200/80 dark:border-slate-700/80 text-left">
            <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100">
              {getPurposeText(question.id)}:
            </p>
          </div>

          {/* Sentence Context with Dropdown Embedded & Accent Play Buttons on the Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            {/* Sentence Text with Dropdown */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-2 text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed flex-1">
              <span>{question.sentenceBefore}</span>

              {/* Dropdown Menu */}
              <div className="inline-block relative min-w-[200px] sm:min-w-[260px]">
                <select
                  id="task2-dropdown-select"
                  value={selectedOptionId}
                  disabled={isCorrect === true}
                  onChange={(e) => handleOptionChange(e.target.value)}
                  className={`w-full appearance-none px-3.5 py-2.5 pr-10 rounded-xl font-bold text-sm sm:text-base border-2 transition-all outline-none cursor-pointer shadow-sm ${
                    isCorrect === true
                      ? 'bg-emerald-50 dark:bg-emerald-950/90 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/30'
                      : isCorrect === false
                      ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 text-rose-800 dark:text-rose-200 ring-2 ring-rose-400/20'
                      : selectedOptionId
                      ? 'bg-white dark:bg-slate-900 border-teal-500 dark:border-teal-400 text-teal-900 dark:text-teal-200 ring-2 ring-teal-500/15'
                      : 'bg-white dark:bg-slate-900 border-indigo-300 dark:border-indigo-600 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <option value="" disabled>
                    — Select an option —
                  </option>
                  {question.options.map((opt) => (
                    <option key={opt.id} value={opt.id} className="text-slate-900 dark:text-slate-100 py-1">
                      {opt.labelEn}
                    </option>
                  ))}
                </select>

                {/* Dropdown Chevron / Success Check */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400">
                  {isCorrect === true ? (
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </div>

              <span>{question.sentenceAfter}</span>
            </div>

            {/* Play buttons for the sentence: on the right, stacked below each other, visible only after correct answer */}
            {isCorrect === true && (
              <div className="flex flex-row sm:flex-col gap-1.5 shrink-0 animate-fadeIn self-end sm:self-center">
                <button
                  type="button"
                  id="btn-play-sentence-uk"
                  onClick={() => handlePlaySentence('uk')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-100/90 dark:bg-teal-900/60 hover:bg-teal-200 dark:hover:bg-teal-800 text-teal-950 dark:text-teal-100 text-xs font-bold transition-all hover:scale-105 active:scale-95 border border-teal-300 dark:border-teal-700 cursor-pointer shadow-2xs whitespace-nowrap min-w-[90px]"
                  title="Listen to sentence in British English (UK)"
                >
                  <Volume2 className="w-3.5 h-3.5 text-teal-700 dark:text-teal-300 shrink-0" />
                  <span>🇬🇧 UK</span>
                </button>
                <button
                  type="button"
                  id="btn-play-sentence-us"
                  onClick={() => handlePlaySentence('us')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-100/90 dark:bg-sky-900/60 hover:bg-sky-200 dark:hover:bg-sky-800 text-sky-950 dark:text-sky-100 text-xs font-bold transition-all hover:scale-105 active:scale-95 border border-sky-300 dark:border-sky-700 cursor-pointer shadow-2xs whitespace-nowrap min-w-[90px]"
                  title="Listen to sentence in American English (US)"
                >
                  <Volume2 className="w-3.5 h-3.5 text-sky-700 dark:text-sky-300 shrink-0" />
                  <span>🇺🇸 US</span>
                </button>
              </div>
            )}
          </div>

          {/* SIMULTANEOUS SUCCESS ROW: Large Green Checkmark (English: Correct) + Small Word Card with UK & US audio */}
          {isCorrect === true && (
            <div className="mt-4 pt-3.5 border-t border-emerald-200 dark:border-emerald-800/80 flex flex-wrap items-center gap-3 sm:gap-4 animate-fadeIn">
              {/* Large Green Checkmark with English "Correct" Evaluation */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                </div>
                <span className="text-sm sm:text-base font-extrabold text-emerald-800 dark:text-emerald-300">
                  Correct!
                </span>
              </div>

              {/* Small Word Card with UK and US Speaker Buttons + Hungarian Translation */}
              <div
                id="small-word-card"
                className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/70 border-2 border-amber-300 dark:border-amber-700 text-slate-800 dark:text-slate-100 shadow-sm"
              >
                {/* 3: Two play buttons (UK & US) for the target word */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    id="btn-play-word-card-uk"
                    onClick={(e) => handlePlayTargetWord('uk', e)}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-200/80 hover:bg-amber-300 dark:bg-amber-900/70 dark:hover:bg-amber-800 text-amber-950 dark:text-amber-100 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
                    title="Pronounce target word in British English (UK)"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-amber-900 dark:text-amber-200" />
                    <span>🇬🇧 UK</span>
                  </button>
                  <button
                    type="button"
                    id="btn-play-word-card-us"
                    onClick={(e) => handlePlayTargetWord('us', e)}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-200/80 hover:bg-amber-300 dark:bg-amber-900/70 dark:hover:bg-amber-800 text-amber-950 dark:text-amber-100 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
                    title="Pronounce target word in American English (US)"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-amber-900 dark:text-amber-200" />
                    <span>🇺🇸 US</span>
                  </button>
                </div>

                {/* Target Word and Hungarian Meaning */}
                <div className="flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                  <span className="font-extrabold text-amber-950 dark:text-amber-100 tracking-tight">
                    {wordCardData.targetEn}
                  </span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">=</span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">
                    {wordCardData.targetHu}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Visual Hint Toggle (shown when not yet answered correctly) */}
        {!isCorrect && (
          <div className="flex items-center justify-between mt-3">
            <button
              type="button"
              id="btn-task2-hint"
              onClick={() => setShowHint(!showHint)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800 transition-colors flex items-center gap-1.5"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>
                {showHint
                  ? (lang === 'hu' ? 'Tipp elrejtése' : 'Hide hint')
                  : (lang === 'hu' ? 'Tipp & Képi segítség' : 'Visual Hint')}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Hint reveal box */}
      {showHint && !isCorrect && (
        <div
          id="task2-hint-box"
          className="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100 text-sm mb-4 animate-fadeIn"
        >
          <div className="flex items-center gap-1.5 font-bold mb-1.5 text-xs text-amber-800 dark:text-amber-300">
            <Lightbulb className="w-4 h-4" />
            <span>{lang === 'hu' ? 'Tipp a kép megfigyeléséhez:' : 'Observation Hint:'}</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            {lang === 'hu' ? question.hintHu : question.hintEn}
          </p>
        </div>
      )}

      {/* Incorrect Option Feedback Box */}
      {isCorrect === false && feedbackMsg && (
        <div
          id="task2-feedback-box"
          className="p-4 sm:p-5 rounded-xl border mb-4 transition-all bg-rose-50/95 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-100 animate-fadeIn"
        >
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1.5 text-left">
              <p className="font-bold text-sm sm:text-base">{feedbackMsg}</p>
              {selectedOptionDetail && (
                <p className="text-xs text-rose-800 dark:text-rose-200">
                  {lang === 'hu'
                    ? selectedOptionDetail.explanationHu
                    : selectedOptionDetail.explanationEn}
                </p>
              )}
              <p className="text-xs font-semibold text-rose-700 dark:text-rose-300 pt-1">
                💡 {lang === 'hu' ? 'Válassz egy másik opciót a legördülő menüből!' : 'Please choose another option from the dropdown menu!'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* NEXT QUESTION Button when correct */}
      {isCorrect === true && (
        <div className="mt-4 flex justify-center sm:justify-end animate-fadeIn">
          <button
            type="button"
            id="btn-task1-next"
            onClick={onNextQuestion}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer tracking-wide"
          >
            <span>
              {questionNumber === totalQuestions
                ? 'Next question (Summary)'
                : 'Next question'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

