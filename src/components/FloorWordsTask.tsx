import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, ArrowRight, DollarSign, Sparkles, HelpCircle } from 'lucide-react';
import { WordQuestion } from '../types';
import { speakText } from '../utils/soundEffects';

interface FloorWordsTaskProps {
  question: WordQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (isCorrect: boolean, chosenOptionId: string, chosenWord: string, isFirstTry: boolean) => void;
  onNextQuestion: () => void;
  lang: 'hu' | 'en';
  audioEnabled: boolean;
  onBackToMenu?: () => void;
}

export const FloorWordsTask: React.FC<FloorWordsTaskProps> = ({
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
  const [isAnswered, setIsAnswered] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSelectOption = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || isAnswered) return;
    const option = question.options.find((o) => o.id === selectedOptionId);
    if (!option) return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (option.isCorrect) {
      setIsAnswered(true);
      setShowExplanation(true);
      if (audioEnabled) {
        speakText(option.wordEn, 'US');
      }
      onAnswerSubmit(true, option.id, option.wordEn, newAttempts === 1);
    } else {
      setShowExplanation(true);
      if (audioEnabled) {
        speakText("Please try again", 'US');
      }
    }
  };

  const handlePlayWord = (accent: 'UK' | 'US' = 'UK') => {
    speakText(question.wordEn, accent);
  };

  const handlePlaySentence = (accent: 'UK' | 'US' = 'UK') => {
    speakText(question.exampleSentenceEn, accent);
  };

  const selectedOption = question.options.find((o) => o.id === selectedOptionId);
  const isSelectedCorrect = selectedOption?.isCorrect ?? false;

  return (
    <div
      id="floor-words-card"
      className="w-full bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 rounded-2xl shadow-lg p-5 sm:p-7 transition-all text-left"
    >
      {/* Top Floor Header Banner */}
      <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white text-[11px] font-extrabold uppercase tracking-wider">
              Ground Floor
            </span>
            <span className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200">
              WORDS — Essential Dining Vocabulary
            </span>
          </div>
          <p className="text-xs text-amber-800 dark:text-amber-300">
            {lang === 'hu'
              ? 'Válaszd ki a megfelelő éttermi kifejezést, és keress $1-t a felső szint vacsorájához!'
              : 'Identify the essential restaurant term and earn $1 for your rooftop feast!'}
          </p>
        </div>

        {onBackToMenu && (
          <button
            type="button"
            onClick={onBackToMenu}
            className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-semibold shrink-0 shadow-2xs cursor-pointer"
          >
            {lang === 'hu' ? 'Feladatok' : 'Floors Map'}
          </button>
        )}
      </div>

      {/* Question Card Box */}
      <div className="space-y-4">
        {/* Question Counter & Prompt */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-1 rounded-lg">
              Word {questionNumber} / {totalQuestions}
            </span>
            {question.phonetic && (
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {question.phonetic}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handlePlayWord('UK')}
              className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer"
              title="UK Pronunciation"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-600" />
              <span>🇬🇧 UK</span>
            </button>
            <button
              type="button"
              onClick={() => handlePlayWord('US')}
              className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer"
              title="US Pronunciation"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-600" />
              <span>🇺🇸 US</span>
            </button>
          </div>
        </div>

        {/* Prompt Question */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            {lang === 'hu' ? question.promptQuestionHu : question.promptQuestionEn}
          </h3>
          {lang === 'hu' && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
              English: {question.promptQuestionEn}
            </p>
          )}

          {/* Example in sentence */}
          <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2">
            <div className="text-xs text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-amber-600 dark:text-amber-400">Context: </span>
              <span>"{question.exampleSentenceEn}"</span>
              {lang === 'hu' && (
                <span className="block text-slate-400 italic">"{question.exampleSentenceHu}"</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => handlePlaySentence('UK')}
              className="p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0 cursor-pointer"
              title="Listen to full example sentence"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let btnStyle =
              'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-amber-400 hover:bg-amber-50/50';

            if (isAnswered) {
              if (option.isCorrect) {
                btnStyle =
                  'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 shadow-sm';
              } else if (isSelected && !option.isCorrect) {
                btnStyle =
                  'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 line-through opacity-70';
              }
            } else if (isSelected) {
              btnStyle =
                'border-amber-500 bg-amber-50 dark:bg-amber-950/70 text-amber-950 dark:text-amber-100 shadow-md ring-2 ring-amber-400/40';
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswered}
                className={`p-3.5 sm:p-4 rounded-xl border-2 font-medium text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
              >
                <div className="space-y-0.5">
                  <span className="text-sm sm:text-base font-bold block">
                    {option.wordEn}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {option.meaningHu}
                  </span>
                </div>

                {isAnswered && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                )}
                {isAnswered && isSelected && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Check Answer Button if not answered */}
        {!isAnswered && (
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-xs text-slate-500 hover:text-amber-600 flex items-center gap-1 font-medium cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? (lang === 'hu' ? 'Tipp elrejtése' : 'Hide hint') : (lang === 'hu' ? 'Kérsz egy tippet?' : 'Need a hint?')}</span>
            </button>

            <button
              type="button"
              id="btn-check-word-answer"
              onClick={handleSubmit}
              disabled={!selectedOptionId}
              className={`px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                selectedOptionId
                  ? 'bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white shadow-md hover:shadow-lg active:scale-95'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{lang === 'hu' ? 'Válasz ellenőrzése' : 'Check Word'}</span>
            </button>
          </div>
        )}

        {/* Hint Box */}
        {showHint && !isAnswered && (
          <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
            💡 {lang === 'hu' ? question.meaningHu : question.funFactEn || question.promptQuestionEn}
          </div>
        )}

        {/* Explanation & Reward Box when answered */}
        {showExplanation && (
          <div
            className={`p-4 rounded-xl border-2 space-y-2 animate-fadeIn ${
              isSelectedCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700/80 text-emerald-900 dark:text-emerald-100'
                : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/80 text-rose-900 dark:text-rose-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isSelectedCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-extrabold text-sm sm:text-base">
                      {lang === 'hu' ? 'Helyes válasz!' : 'Correct!'}
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    <span className="font-bold text-sm">
                      {lang === 'hu' ? 'Próbáld újra!' : 'Not quite right'}
                    </span>
                  </>
                )}
              </div>

              {isSelectedCorrect && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs shadow-sm animate-bounce">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>+$1 Earned!</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {lang === 'hu'
                ? selectedOption?.explanationHu
                : selectedOption?.explanationEn}
            </p>

            {question.funFactEn && (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 border-t border-slate-200 dark:border-slate-700">
                💡 {question.funFactEn}
              </p>
            )}
          </div>
        )}

        {/* Next Question Navigation Button */}
        {isAnswered && isSelectedCorrect && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              id="btn-next-word"
              onClick={onNextQuestion}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>
                {questionNumber === totalQuestions
                  ? lang === 'hu'
                    ? '1. Szint: Kifejezésekhez lépés'
                    : 'Take Elevator to Floor 1: Phrases'
                  : lang === 'hu'
                  ? 'Következő szó'
                  : 'Next Word'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
