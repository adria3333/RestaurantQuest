import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import { subscribeSpeechState } from '../utils/speech';
import { SituationSceneVisual } from './SituationSceneVisual';

export interface RestaurantCharacterProps {
  taskType: 1 | 2;
  questionId: number;
  speechText: string;
  onPlayAudio: () => void;
  lang: 'hu' | 'en';
  isCorrect?: boolean | null;
  role?: 'host' | 'waiter' | 'chef';
  sentenceBefore?: string;
  sentenceAfter?: string;
  targetWord?: string;
}

export const RestaurantCharacterAnimation: React.FC<RestaurantCharacterProps> = ({
  taskType,
  questionId,
  speechText,
  onPlayAudio,
  lang,
  isCorrect = false,
  sentenceBefore,
  sentenceAfter,
  targetWord
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeSpeechState((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => unsubscribe();
  }, []);

  // Situation metadata according to taskType & questionId
  const getScenarioDetails = () => {
    if (taskType === 1) {
      switch (questionId) {
        case 1:
          return {
            titleHu: '1. Érkezés és Üdvözlés',
            titleEn: '1. Arrival & Greeting',
            badgeHu: 'Hostess / Fogadó az ajtóban',
            badgeEn: 'Host at Reception',
            badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
            actionTextHu: 'Üdvözli a vendégeket az ajtónál és asztalt keres',
            actionTextEn: 'Welcoming guests at the entrance podium',
            activeItem: 'podium'
          };
        case 2:
          return {
            titleHu: '2. Asztalválasztás & Kényelem',
            titleEn: '2. Table Placement',
            badgeHu: 'Hostess a kerti teraszon',
            badgeEn: 'Host at Terrace',
            badgeColor: 'bg-teal-500/15 border-teal-500/30 text-teal-800 dark:text-teal-300',
            actionTextHu: 'Csendes kerti asztalt kínál az ablak mellett',
            actionTextEn: 'Offering a quiet window table on the terrace',
            activeItem: 'table_seat'
          };
        case 3:
          return {
            titleHu: '3. Étlapok Átadása',
            titleEn: '3. Handing Menus',
            badgeHu: 'Felszolgáló az asztalnál',
            badgeEn: 'Waiter at Table',
            badgeColor: 'bg-blue-500/15 border-blue-500/30 text-blue-800 dark:text-blue-300',
            actionTextHu: 'Kézbe adja az étlapokat és a mai ajánlatot',
            actionTextEn: 'Handing out physical menus & daily specials',
            activeItem: 'menu'
          };
        case 4:
          return {
            titleHu: '4. Italrendelés Felvétele',
            titleEn: '4. Taking Drink Orders',
            badgeHu: 'Felszolgáló jegyzettömbbel',
            badgeEn: 'Waiter with Tablet',
            badgeColor: 'bg-sky-500/15 border-sky-500/30 text-sky-800 dark:text-sky-300',
            actionTextHu: 'Felveszi az ásványvíz és italrendeléseket',
            actionTextEn: 'Taking orders for sparkling/still water and drinks',
            activeItem: 'drinks'
          };
        case 5:
          return {
            titleHu: '5. Napi Ajánlat Ismertetése',
            titleEn: '5. Chef\'s Daily Specials',
            badgeHu: 'Felszolgáló táblával',
            badgeEn: 'Waiter with Specials Board',
            badgeColor: 'bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300',
            actionTextHu: 'Bemutatja a séf friss mai hal- és tésztaajánlatát',
            actionTextEn: 'Presenting the fresh catch of the day & house special',
            activeItem: 'chalkboard'
          };
        case 6:
          return {
            titleHu: '6. Főétel Rendelés Felvétele',
            titleEn: '6. Main Course Order',
            badgeHu: 'Felszolgáló digitális kijelzővel',
            badgeEn: 'Waiter Taking Order',
            badgeColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-800 dark:text-indigo-300',
            actionTextHu: 'Rögzíti a kért steaket, sütési fokozatot és köreteket',
            actionTextEn: 'Recording steak doneness and side orders',
            activeItem: 'steak_order'
          };
        case 7:
          return {
            titleHu: '7. Étel Felszolgálása',
            titleEn: '7. Serving the Meal',
            badgeHu: 'Felszolgáló ételtálcával',
            badgeEn: 'Waiter with Tray',
            badgeColor: 'bg-violet-500/15 border-violet-500/30 text-violet-800 dark:text-violet-300',
            actionTextHu: 'Kézbe hozza a gőzölgő friss fogásokat és jó étvágyat kíván',
            actionTextEn: 'Delivering freshly prepared dishes to the table',
            activeItem: 'tray'
          };
        case 8:
          return {
            titleHu: '8. Elégedettség Érdeklődése',
            titleEn: '8. Satisfaction Check',
            badgeHu: 'Figyelmes Felszolgáló',
            badgeEn: 'Attentive Waiter',
            badgeColor: 'bg-rose-500/15 border-rose-500/30 text-rose-800 dark:text-rose-300',
            actionTextHu: 'Megkérdezi, hogy minden rendben van-e az ételekkel',
            actionTextEn: 'Checking if everything is delicious and satisfactory',
            activeItem: 'checkin'
          };
        case 9:
          return {
            titleHu: '9. Desszert & Kávé Ajánlás',
            titleEn: '9. Dessert & Coffee',
            badgeHu: 'Felszolgáló desszerttel',
            badgeEn: 'Waiter with Sweets',
            badgeColor: 'bg-pink-500/15 border-pink-500/30 text-pink-800 dark:text-pink-300',
            actionTextHu: 'Házi készítésű tiramisut és eszpresszót kínál',
            actionTextEn: 'Offering homemade tiramisu and fresh espresso',
            activeItem: 'dessert'
          };
        case 10:
        default:
          return {
            titleHu: '10. Számla és Fizetés',
            titleEn: '10. Bill & Payment',
            badgeHu: 'Felszolgáló számlatartóval',
            badgeEn: 'Waiter with Checkbook',
            badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
            actionTextHu: 'Átadja a bőrmappás számlát és a kártyaterminált',
            actionTextEn: 'Presenting the bill in a leather folder with card terminal',
            activeItem: 'bill_folder'
          };
      }
    } else {
      // Task 2 completions: English purpose titles and actions
      switch (questionId) {
        case 1:
          return {
            titleHu: 'Order a large amount of water for the entire table',
            titleEn: 'Order a large amount of water for the entire table',
            badgeHu: 'Table Water',
            badgeEn: 'Table Water',
            badgeColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-800 dark:text-cyan-300',
            actionTextHu: 'Serving fresh drinking water with glasses',
            actionTextEn: 'Serving fresh drinking water with glasses',
            activeItem: 'waterjug',
            purpose: 'Order a large amount of water for the entire table'
          };
        case 2:
          return {
            titleHu: 'Reserve a table for four people for dinner tonight',
            titleEn: 'Reserve a table for four people for dinner tonight',
            badgeHu: 'Table Booking',
            badgeEn: 'Table Booking',
            badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
            actionTextHu: 'Reserving a table for 4 guests for dinner tonight',
            actionTextEn: 'Reserving a table for 4 guests for dinner tonight',
            activeItem: 'tablet_booking',
            purpose: 'Reserve a table for four people for dinner tonight'
          };
        case 3:
          return {
            titleHu: 'Check for dietary allergens in the house salad dressing',
            titleEn: 'Check for dietary allergens in the house salad dressing',
            badgeHu: 'Allergen Check',
            badgeEn: 'Allergen Check',
            badgeColor: 'bg-rose-500/15 border-rose-500/30 text-rose-800 dark:text-rose-300',
            actionTextHu: 'Checking food allergens in the house dressing',
            actionTextEn: 'Checking food allergens in the house dressing',
            activeItem: 'allergy',
            purpose: 'Check for dietary allergens in the house salad dressing'
          };
        case 4:
          return {
            titleHu: 'Leave the remaining change as a gratuity for the waiter',
            titleEn: 'Leave the remaining change as a gratuity for the waiter',
            badgeHu: 'Gratuity & Tip',
            badgeEn: 'Gratuity & Tip',
            badgeColor: 'bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300',
            actionTextHu: 'Leaving the returned change as a gratuity',
            actionTextEn: 'Leaving the returned change as a gratuity',
            activeItem: 'bill',
            purpose: 'Leave the remaining change as a gratuity for the waiter'
          };
        case 5:
          return {
            titleHu: 'Politely request to reheat a cold bowl of soup',
            titleEn: 'Politely request to reheat a cold bowl of soup',
            badgeHu: 'Reheating Request',
            badgeEn: 'Reheating Request',
            badgeColor: 'bg-orange-500/15 border-orange-500/30 text-orange-800 dark:text-orange-300',
            actionTextHu: 'Politely requesting to warm up a cold soup',
            actionTextEn: 'Politely requesting to warm up a cold soup',
            activeItem: 'soup',
            purpose: 'Politely request to reheat a cold bowl of soup'
          };
        case 6:
          return {
            titleHu: 'Ask for the salad dressing to be served in a separate dish',
            titleEn: 'Ask for the salad dressing to be served in a separate dish',
            badgeHu: 'Side Dish Request',
            badgeEn: 'Side Dish Request',
            badgeColor: 'bg-lime-500/15 border-lime-500/30 text-lime-800 dark:text-lime-300',
            actionTextHu: 'Requesting dressing served separately beside the dish',
            actionTextEn: 'Requesting dressing served separately beside the dish',
            activeItem: 'swap',
            purpose: 'Ask for the salad dressing to be served in a separate dish'
          };
        case 7:
          return {
            titleHu: 'Request packaging to take leftover food home',
            titleEn: 'Request packaging to take leftover food home',
            badgeHu: 'Leftovers Packaging',
            badgeEn: 'Leftovers Packaging',
            badgeColor: 'bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300',
            actionTextHu: 'Asking for packaging to take food home',
            actionTextEn: 'Asking for packaging to take food home',
            activeItem: 'doggy_bag',
            purpose: 'Request packaging to take leftover food home'
          };
        case 8:
        default:
          return {
            titleHu: 'Clarify an unexpected extra item on the final bill',
            titleEn: 'Clarify an unexpected extra item on the final bill',
            badgeHu: 'Bill Clarification',
            badgeEn: 'Bill Clarification',
            badgeColor: 'bg-red-500/15 border-red-500/30 text-red-800 dark:text-red-300',
            actionTextHu: 'Diplomatically clarifying an extra charge on the bill',
            actionTextEn: 'Diplomatically clarifying an extra charge on the bill',
            activeItem: 'bill_mistake',
            purpose: 'Clarify an unexpected extra item on the final bill'
          };
      }
    }
  };

  const details = getScenarioDetails();

  // For taskType 2: speech bubble / purpose card representation (sentence is rendered ONLY once in the dropdown below)
  const renderSpeechContent = () => {
    if (taskType === 1) {
      return (
        <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 italic leading-relaxed">
          "{speechText}"
        </p>
      );
    }

    return (
      <div className="space-y-1 text-left w-full">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Purpose</span>
        </p>
        <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-snug">
          {details.purpose || details.titleEn}
        </p>
      </div>
    );
  };

  return (
    <div
      id={`question-scene-card-${taskType}-${questionId}`}
      className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-50/80 via-amber-50/40 to-slate-50/70 dark:from-slate-850 dark:via-slate-800 dark:to-emerald-950/30 border border-emerald-200/80 dark:border-slate-700/80 p-3 sm:p-4 mb-4 shadow-sm transition-all"
    >
      {/* Header Info Bar */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-bold flex items-center gap-1 ${details.badgeColor}`}>
            <span>🌿</span>
            <span>{lang === 'hu' ? details.badgeHu : details.badgeEn}</span>
          </span>

          {isSpeaking && (
            <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{lang === 'hu' ? 'Beszél...' : 'Speaking...'}</span>
            </span>
          )}
        </div>

        <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
          {lang === 'hu' ? details.actionTextHu : details.actionTextEn}
        </span>
      </div>

      {/* Main Interactive Stage */}
      {taskType === 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
          {/* Left Side (Desktop 7 cols): Situation-Specific Dynamic Animated Scene */}
          <div
            onClick={onPlayAudio}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPlayAudio()}
            title={lang === 'hu' ? 'Kattints a párbeszéd meghallgatásához!' : 'Click to hear the waiter speak!'}
            className={`md:col-span-7 relative h-48 sm:h-52 w-full rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-300 border ${
              isSpeaking
                ? 'ring-2 ring-emerald-500/80 shadow-lg border-emerald-400'
                : 'border-emerald-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm'
            } bg-gradient-to-b from-sky-100/70 via-emerald-50/50 to-amber-50/40 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 flex items-center justify-center`}
          >
            {/* Situation-Specific Animated Scene Visual */}
            <SituationSceneVisual
              taskType={taskType}
              questionId={questionId}
              isSpeaking={isSpeaking}
            />

            {/* Quick Play Pill Button overlay on bottom-right of graphic */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPlayAudio();
              }}
              className={`absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-all ${
                isSpeaking
                  ? 'bg-emerald-600 text-white shadow-emerald-500/40 animate-pulse'
                  : 'bg-white/95 dark:bg-slate-900/95 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-800'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isSpeaking ? (lang === 'hu' ? 'Beszél...' : 'Speaking...') : (lang === 'hu' ? 'Meghallgatás' : 'Play Audio')}</span>
            </button>
          </div>

          {/* Right Side (Desktop 5 cols): Spoken Dialogue Bubble & Quick Meaning */}
          <div className="md:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              {/* Heading / Section tag */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lang === 'hu' ? details.titleHu : details.titleEn}</span>
                </span>
              </div>

              {/* Dialogue Speech Bubble */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200/90 dark:border-slate-700 p-3.5 sm:p-4 shadow-sm min-h-[70px] flex items-center">
                {renderSpeechContent()}
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <span>💡</span>
                <span>{lang === 'hu' ? 'Kattints az illusztrációra a kiejtésért' : 'Click illustration to hear pronunciation'}</span>
              </span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">British English (UK)</span>
            </div>
          </div>
        </div>
      ) : (
        /* Task 2: Full-width clean situation illustration without redundant boxes */
        <div
          onClick={onPlayAudio}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPlayAudio()}
          title="Click to hear sentence pronunciation"
          className={`relative h-48 sm:h-56 w-full rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-300 border ${
            isSpeaking
              ? 'ring-2 ring-emerald-500/80 shadow-lg border-emerald-400'
              : 'border-emerald-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm'
          } bg-gradient-to-b from-sky-100/70 via-emerald-50/50 to-amber-50/40 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 flex items-center justify-center`}
        >
          <SituationSceneVisual
            taskType={taskType}
            questionId={questionId}
            isSpeaking={isSpeaking}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlayAudio();
            }}
            className={`absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-all ${
              isSpeaking
                ? 'bg-emerald-600 text-white shadow-emerald-500/40 animate-pulse'
                : 'bg-white/95 dark:bg-slate-900/95 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-800'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isSpeaking ? 'Speaking...' : 'Play Audio'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
