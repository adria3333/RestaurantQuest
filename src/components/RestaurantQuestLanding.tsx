import React, { useState } from 'react';
import { Play, Sparkles, DollarSign, AlertCircle } from 'lucide-react';
import { RestaurantBuildingGraphic } from './RestaurantBuildingGraphic';

interface RestaurantQuestLandingProps {
  onStart: () => void;
  onSelectFloor: (floor: number) => void;
  walletDollars: number;
  totalAnswered: number;
  score: number;
  lang: 'hu' | 'en';
}

export const RestaurantQuestLanding: React.FC<RestaurantQuestLandingProps> = ({
  onStart,
  onSelectFloor,
  walletDollars,
  lang
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleComingSoonNotice = (floorName: string) => {
    setToastMessage(
      lang === 'hu'
        ? `${floorName} hamarosan érkezik! Kérlek válaszd az 1. Emeletet (Mondat kiegészítés) vagy a 3. Emeletet (Párbeszéd)!`
        : `${floorName} is coming soon! Please try the 1st Floor (Sentence Completion) or 3rd Floor (Conversation)!`
    );
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleFloorClick = (floor: number) => {
    if (floor === 0) {
      handleComingSoonNotice('Ground Floor (WORDS)');
      return;
    }
    if (floor === 2) {
      handleComingSoonNotice('2nd Floor (SENTENCES)');
      return;
    }
    onSelectFloor(floor);
  };

  return (
    <div
      id="restaurant-quest-landing"
      className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-7 animate-fadeIn pb-8"
    >
      {/* 1. TITLE: RESTAURANT QUEST */}
      <div className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-2xs">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Interactive English Learning Quest</span>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase drop-shadow-sm">
          Restaurant Quest
        </h1>

        {/* 2. SUBTITLE */}
        <div className="max-w-2xl mx-auto space-y-1.5 px-4">
          <p className="text-lg sm:text-2xl font-bold text-amber-600 dark:text-amber-400 leading-snug">
            Can you get to the rooftop restaurant and earn enough money to pay for your meal?
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
            (El tudsz jutni a tetőtéri étterembe, és tudsz elég pénzt keresni, hogy kifizethesd az ételedet?)
          </p>
        </div>

        {/* 3. GREEN MONEY COUNTER: English & Hungarian labels on the left */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-400 dark:border-emerald-700 shadow-md">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-base shadow-sm shrink-0">
            <DollarSign className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="text-left leading-tight">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-emerald-900 dark:text-emerald-200">
              <span>Balance</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-normal">/</span>
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                Megkeresett egyenleg:
              </span>
            </div>
            <div className="text-lg sm:text-xl font-black text-emerald-950 dark:text-emerald-100 tracking-tight">
              ${walletDollars} USD
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-200/70 dark:bg-emerald-900/70 border border-emerald-300 dark:border-emerald-700 px-2.5 py-1 rounded-lg">
            +$1 per task <span className="text-[11px] font-normal opacity-85">({lang === 'hu' ? 'minden feladatért' : 'per correct task'})</span>
          </span>
        </div>
      </div>

      {/* Floating Notice Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900 text-white border-2 border-amber-400 shadow-2xl flex items-center gap-3 animate-bounce">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* 4. 4-FLOOR BUILDING GRAPHIC WITH CITY SKYLINE & ALTERNATING STAIRS */}
      <div className="w-full relative px-2 sm:px-0">
        <RestaurantBuildingGraphic
          onFloorClick={handleFloorClick}
          onComingSoonNotice={handleComingSoonNotice}
        />
      </div>

      {/* 5. BOTTOM START BUTTON: BEGIN / START */}
      <div className="w-full max-w-md pt-2">
        <button
          type="button"
          id="btn-quest-begin"
          onClick={onStart}
          className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-amber-500 hover:from-amber-400 hover:via-purple-500 hover:to-amber-400 text-white font-black text-xl sm:text-2xl tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-white/20"
        >
          <Play className="w-6 h-6 fill-white" />
          <span>BEGIN / START</span>
        </button>
      </div>
    </div>
  );
};
