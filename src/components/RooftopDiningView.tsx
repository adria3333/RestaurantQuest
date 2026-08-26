import React, { useState } from 'react';
import { DollarSign, Sparkles, Utensils, Award, ShoppingBag, RotateCcw, Check, Heart, Trophy, Home } from 'lucide-react';
import { ROOFTOP_MENU } from '../data/rooftopMenuData';
import { RooftopDish } from '../types';
import { speakText } from '../utils/soundEffects';

interface RooftopDiningViewProps {
  walletDollars: number;
  onSpendDollars: (amount: number) => void;
  lang: 'hu' | 'en';
  onReturnToHub: () => void;
  onRestartQuest: () => void;
  totalScore: number;
}

export const RooftopDiningView: React.FC<RooftopDiningViewProps> = ({
  walletDollars,
  onSpendDollars,
  lang,
  onReturnToHub,
  onRestartQuest,
  totalScore
}) => {
  const [orderedDishes, setOrderedDishes] = useState<RooftopDish[]>([]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'starter' | 'main' | 'dessert' | 'drink'>('all');
  const [isDining, setIsDining] = useState(false);
  const [diningCompleted, setDiningCompleted] = useState(false);

  const handleOrderDish = (dish: RooftopDish) => {
    if (walletDollars < dish.price) {
      speakText("Not enough dollars. Complete more floors to earn money!", 'US');
      return;
    }

    onSpendDollars(dish.price);
    setOrderedDishes((prev) => [...prev, dish]);
    speakText(`Ordering ${dish.nameEn}. Delicious choice!`, 'US');
  };

  const handleStartFeast = () => {
    if (orderedDishes.length === 0) return;
    setIsDining(true);
    speakText("Bon appétit! Enjoy your delicious meal on the rooftop!", 'US');
    setTimeout(() => {
      setIsDining(false);
      setDiningCompleted(true);
    }, 2500);
  };

  const filteredMenu = activeCategory === 'all'
    ? ROOFTOP_MENU
    : ROOFTOP_MENU.filter((d) => d.category === activeCategory);

  const totalBill = orderedDishes.reduce((acc, d) => acc + d.price, 0);

  return (
    <div
      id="rooftop-dining-view"
      className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn pb-10 text-left"
    >
      {/* Rooftop Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl">
        {/* Ambient Twilight Stars & Glow */}
        <div className="absolute top-0 right-0 p-4 opacity-15 text-8xl select-none pointer-events-none">
          🌃
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>4th Floor • Top Floor Rooftop Dining</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-100 flex items-center gap-2">
              <span>Skyline Rooftop Terrace</span>
              <span className="text-amber-400">✨</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {lang === 'hu'
                ? 'Gratulálunk! Elérted a legfelső emeletet. Rendelj finom ételeket és italokat a feladatok során megszerzett dollárjaidból!'
                : 'Congratulations! You reached the top floor. Spend your earned dollars to order a magnificent feast with panoramic skyline views!'}
            </p>
          </div>

          {/* Wallet Balance Widget */}
          <div className="p-4 rounded-2xl bg-amber-950/80 border-2 border-amber-400/60 shadow-lg text-center sm:text-right shrink-0">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
              {lang === 'hu' ? 'Rendelkezésre álló egyenleg' : 'Available Wallet'}
            </span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center sm:justify-end gap-1">
              <DollarSign className="w-6 h-6 stroke-[3]" />
              <span>{walletDollars} USD</span>
            </div>
            <span className="text-[10px] text-slate-300">
              {orderedDishes.length} {lang === 'hu' ? 'fogás kiválasztva' : 'dishes ordered'} (${totalBill})
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Table View: Your Rooftop Feast Table */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-500" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {lang === 'hu' ? 'A te terített asztalod a tetőteraszon' : 'Your Rooftop Dining Table'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {orderedDishes.length > 0 && !diningCompleted && (
              <button
                type="button"
                id="btn-dine-now"
                onClick={handleStartFeast}
                disabled={isDining}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer animate-pulse"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isDining ? (lang === 'hu' ? 'Tálalás és étkezés...' : 'Dining in progress...') : (lang === 'hu' ? 'Fogyasztás most! 🍽️' : 'Dine & Feast Now! 🍽️')}</span>
              </button>
            )}
            
            <button
              type="button"
              onClick={onReturnToHub}
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{lang === 'hu' ? 'Emeletek térképe' : 'Floors Hub'}</span>
            </button>
          </div>
        </div>

        {/* Table items display */}
        {orderedDishes.length === 0 ? (
          <div className="p-8 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-center space-y-2">
            <span className="text-4xl">🕯️</span>
            <h3 className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hu' ? 'Az asztalod még üres' : 'Your table is currently empty'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {lang === 'hu'
                ? 'Válassz az alábbi étlapról előételeket, főételeket, desszerteket vagy koktélokat a megszerzett dollárjaidból!'
                : 'Browse the menu below and order starters, ribeye steaks, salmon, molten lava cake, and sunset drinks!'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {orderedDishes.map((dish, idx) => (
                <div
                  key={`${dish.id}-${idx}`}
                  className="p-3 rounded-xl bg-amber-50/60 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 flex flex-col items-center text-center space-y-1 shadow-2xs animate-fadeIn"
                >
                  <span className="text-3xl">{dish.emoji}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
                    {dish.nameEn}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                    ${dish.price} USD
                  </span>
                </div>
              ))}
            </div>

            {diningCompleted && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-400 text-emerald-900 dark:text-emerald-100 text-center space-y-1.5 animate-fadeIn">
                <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-extrabold">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <span>{lang === 'hu' ? 'Csodálatos étkezés a tetőteraszon!' : 'Magnificent Dining Feast Completed!'}</span>
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-xs leading-relaxed max-w-lg mx-auto">
                  {lang === 'hu'
                    ? 'Sikeresen teljesítetted a 4 emelet kihívásait (Szavak, Kifejezések, Mondatok, Párbeszéd), és fejedelmi vacsorát fogyasztottál a saját munkádból!'
                    : 'You successfully conquered all 4 floors (Words, Phrases, Sentences, Conversation) and enjoyed a royal feast with your earned dollars!'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rooftop Dining Menu Section */}
      <div className="space-y-4">
        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {lang === 'hu' ? 'Tetőtéri Étlap & Itallap' : 'Rooftop Gourmet Menu'}
            </h2>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {(['all', 'starter', 'main', 'dessert', 'drink'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors capitalize cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-100'
                }`}
              >
                {cat === 'all'
                  ? lang === 'hu' ? 'Összes fogás' : 'All Items'
                  : cat === 'starter'
                  ? lang === 'hu' ? 'Előételek' : 'Starters'
                  : cat === 'main'
                  ? lang === 'hu' ? 'Főételek' : 'Mains'
                  : cat === 'dessert'
                  ? lang === 'hu' ? 'Desszertek' : 'Desserts'
                  : lang === 'hu' ? 'Italok' : 'Drinks'}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredMenu.map((dish) => {
            const canAfford = walletDollars >= dish.price;
            return (
              <div
                key={dish.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400/80 transition-all flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl p-1.5 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
                        {dish.emoji}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {dish.nameEn}
                        </h3>
                        <span className="text-xs text-slate-400 dark:text-slate-500 block">
                          {dish.nameHu}
                        </span>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-black shrink-0 border border-emerald-300 dark:border-emerald-800">
                      ${dish.price} USD
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {dish.descriptionEn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  {dish.dietary && (
                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md">
                      {dish.dietary}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => handleOrderDish(dish)}
                    disabled={!canAfford}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                      canAfford
                        ? 'bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white shadow-sm hover:shadow-md'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>{canAfford ? (lang === 'hu' ? 'Megrendelés' : 'Order Dish') : (lang === 'hu' ? 'Kevés $' : 'Need more $')}</span>
                    <span>(${dish.price})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quest Completion Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={onReturnToHub}
          className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>{lang === 'hu' ? 'Vissza az emeletekhez' : 'Explore Other Floors'}</span>
        </button>

        <button
          type="button"
          onClick={onRestartQuest}
          className="px-5 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 hover:bg-amber-200 text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-2 cursor-pointer border border-amber-300 dark:border-amber-800"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{lang === 'hu' ? 'Új Restaurant Quest indítása' : 'Play Quest Again'}</span>
        </button>
      </div>
    </div>
  );
};
