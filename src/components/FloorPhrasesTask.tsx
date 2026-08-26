import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, ArrowRight, DollarSign, Sparkles, MessageSquare } from 'lucide-react';
import { PhraseQuestion } from '../types';
import { speakText } from '../utils/soundEffects';

interface FloorPhrasesTaskProps {
  question: PhraseQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (isCorrect: boolean, chosenOptionId: string, chosenPhrase: string, isFirstTry: boolean) => void;
  onNextQuestion: () => void;
  lang: 'hu' | 'en';
  audioEnabled: boolean;
  onBackToMenu?: () => void;
}

export const FloorPhrasesTask: React.FC<FloorPhrasesTaskProps> = ({
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
        speakText(option.phraseEn, 'UK');
      }
      onAnswerSubmit(true, option.id, option.phraseEn, newAttempts === 1);
    } else {
      setShowExplanation(true);
      if (audioEnabled) {
        speakText("Please try again", 'US');
      }
    }
  };

  const handlePlayPhrase = (phraseText: string, accent: 'UK' | 'US' = 'UK') => {
    speakText(phraseText, accent);
  };

  const selectedOption = question.options.find((o) => o.id === selectedOptionId);
  const isSelectedCorrect = selectedOption?.isCorrect ?? false;

  return (
    <div
      id="floor-phrases-card"
      className="w-full bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 rounded-2xl shadow-lg p-5 sm:p-7 transition-all text-left"
    >
      {/* Top Floor Header Banner */}
      <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-purple-600 text-white text-[11px] font-extrabold uppercase tracking-wider">
              1st Floor
            </span>
            <span className="text-xs sm:text-sm font-bold text-purple-950 dark:text-purple-200">
              PHRASES — Essential Restaurant Expressions
            </span>
          </div>
          <p className="text-xs text-purple-800 dark:text-purple-300">
            {lang === 'hu'
              ? 'Válaszd ki a legtermészetesebb éttermi kifejezést, és gyűjts $1-t a tetőtéri étkezéshez!'
              : 'Choose the most natural dining expression and collect $1 for your rooftop dinner!'}
          </p>
        </div>

        {onBackToMenu && (
          <button
            type="button"
            onClick={onBackToMenu}
            className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-purple-100 dark:hover:bg-slate-700 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800 text-xs font-semibold shrink-0 shadow-2xs cursor-pointer"
          >
            {lang === 'hu' ? 'Feladatok' : 'Floors Map'}
          </button>
        )}
      </div>

      {/* Question Situation & Content */}
      <div className="space-y-4">
        {/* Situation Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="text-xs font-black text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/80 px-2.5 py-1 rounded-lg">
            Phrase {questionNumber} / {totalQuestions}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handlePlayPhrase(question.phraseEn, 'UK')}
              className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-purple-100 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer"
              title="UK Pronunciation"
            >
              <Volume2 className="w-3.5 h-3.5 text-purple-600" />
              <span>🇬🇧 UK</span>
            </button>
            <button
              type="button"
              onClick={() => handlePlayPhrase(question.phraseEn, 'US')}
              className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-purple-100 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer"
              title="US Pronunciation"
            >
              <Volume2 className="w-3.5 h-3.5 text-purple-600" />
              <span>🇺🇸 US</span>
            </button>
          </div>
        </div>

        {/* Situation Box */}
        <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-700/60 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'hu' ? 'Éttermi szituáció' : 'Dining Situation'}</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
            {lang === 'hu' ? question.situationHu : question.situationEn}
          </p>
          {lang === 'hu' && (
            <p className="text-xs text-slate-500 italic">
              Context: {question.situationEn}
            </p>
          )}

          {/* Dialogue preview */}
          <div className="mt-2 pt-2 border-t border-purple-100 dark:border-slate-700/60 text-xs text-purple-900 dark:text-purple-200 font-medium">
            💬 {lang === 'hu' ? question.dialoguePreviewHu : question.dialoguePreviewEn}
          </div>
        </div>

        {/* Options Grid */}
        <div className="space-y-2.5 pt-1">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let btnStyle =
              'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-purple-400 hover:bg-purple-50/40';

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
                'border-purple-500 bg-purple-50 dark:bg-purple-950/70 text-purple-950 dark:text-purple-100 shadow-md ring-2 ring-purple-400/40';
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswered}
                className={`w-full p-3.5 sm:p-4 rounded-xl border-2 font-medium text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
              >
                <div className="space-y-0.5">
                  <span className="text-sm sm:text-base font-bold block">
                    "{option.phraseEn}"
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {option.meaningHu}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPhrase(option.phraseEn, 'UK');
                    }}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-purple-200 text-slate-600 dark:text-slate-300"
                    title="Audio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>

                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {isAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Check Answer Button if not answered */}
        {!isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              id="btn-check-phrase-answer"
              onClick={handleSubmit}
              disabled={!selectedOptionId}
              className={`px-7 py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                selectedOptionId
                  ? 'bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white shadow-md hover:shadow-lg active:scale-95'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{lang === 'hu' ? 'Kifejezés ellenőrzése' : 'Check Phrase'}</span>
            </button>
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
                      {lang === 'hu' ? 'Helyes kifejezés!' : 'Perfect Phrase!'}
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    <span className="font-bold text-sm">
                      {lang === 'hu' ? 'Nem a legtermészetesebb válasz' : 'Not the best choice'}
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
          </div>
        )}

        {/* Next Question Navigation Button */}
        {isAnswered && isSelectedCorrect && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              id="btn-next-phrase"
              onClick={onNextQuestion}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>
                {questionNumber === totalQuestions
                  ? lang === 'hu'
                    ? '2. Szint: Mondatokhoz lépés'
                    : 'Take Elevator to Floor 2: Sentences'
                  : lang === 'hu'
                  ? 'Következő kifejezés'
                  : 'Next Phrase'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
