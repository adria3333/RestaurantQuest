import React from 'react';

interface RestaurantBuildingGraphicProps {
  currentFloor?: number; // 0, 1, 2, 3, 4
  onFloorClick?: (floor: number) => void;
  unlockedFloors?: number[];
  onComingSoonNotice?: (floorName: string) => void;
}

export const RestaurantBuildingGraphic: React.FC<RestaurantBuildingGraphicProps> = ({
  onFloorClick,
  onComingSoonNotice
}) => {
  const handleFloorInteraction = (floor: number) => {
    if (floor === 0) {
      if (onComingSoonNotice) onComingSoonNotice('Ground Floor (WORDS)');
      else if (onFloorClick) onFloorClick(0);
      return;
    }
    if (floor === 2) {
      if (onComingSoonNotice) onComingSoonNotice('2nd Floor (SENTENCES)');
      else if (onFloorClick) onFloorClick(2);
      return;
    }
    if (onFloorClick) {
      onFloorClick(floor);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-900/30 dark:border-amber-500/20 bg-slate-900 relative">
      <svg
        viewBox="0 0 600 790"
        className="w-full h-auto select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Restaurant Quest 4-Floor Building in New York City Skyline"
      >
        <defs>
          {/* Lighter, clearer New York City Twilight Sky Gradient */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="22%" stopColor="#293B5A" />
            <stop offset="45%" stopColor="#43486E" />
            <stop offset="68%" stopColor="#6D4C6F" />
            <stop offset="85%" stopColor="#A35C6D" />
            <stop offset="100%" stopColor="#E29D68" />
          </linearGradient>

          {/* Building Facade Gradients */}
          <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* NYC Distant & Mid Skyline Gradients */}
          <linearGradient id="nycSkylineBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#3B2348" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="nycSkylineMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Warm Room Light */}
          <linearGradient id="roomLightWarm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.85" />
          </linearGradient>

          {/* Cool Bistro Light */}
          <linearGradient id="roomLightTeal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CCFBF1" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#99F6E4" stopOpacity="0.82" />
          </linearGradient>

          {/* Purple Indigo Lounge Light */}
          <linearGradient id="roomLightPurple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F3E8FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.85" />
          </linearGradient>

          {/* Button Gradients */}
          <linearGradient id="btnGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="btnPurpleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#6B21A8" />
          </linearGradient>

          <linearGradient id="btnIndigoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#3730A3" />
          </linearGradient>

          <linearGradient id="btnTealGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#115E59" />
          </linearGradient>

          <linearGradient id="btnAmberGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Glass sheen */}
          <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.14" />
          </linearGradient>

          {/* Stairs metallic gradient */}
          <linearGradient id="stairTreadGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          {/* Drop Shadows & Glow */}
          <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="btnShadow" x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
          </filter>

          <filter id="speechShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* 🗽 1. NEW YORK CITY STYLE SKYLINE BACKGROUND (LIGHTER)    */}
        {/* ========================================================= */}
        <rect x="0" y="0" width="600" height="790" fill="url(#skyGrad)" />

        {/* Stars in upper twilight sky */}
        <g fill="#FFF" opacity="0.8">
          <circle cx="35" cy="20" r="1.5" />
          <circle cx="85" cy="35" r="1" />
          <circle cx="140" cy="15" r="1.2" />
          <circle cx="195" cy="40" r="1.5" />
          <circle cx="410" cy="22" r="1.3" />
          <circle cx="480" cy="42" r="1.1" />
          <circle cx="550" cy="18" r="1.8" />
          <circle cx="530" cy="65" r="1.2" />
          <circle cx="55" cy="70" r="1.2" />
        </g>

        {/* Luminous NYC Sunset Glow / Moon */}
        <circle cx="505" cy="60" r="28" fill="#FEF08A" opacity="0.85" filter="url(#glowFilter)" />
        <circle cx="505" cy="60" r="24" fill="#FFFBEB" />

        {/* NYC Distant Skyline - Left Side (Empire State setback style & spires) */}
        <g fill="url(#nycSkylineBack)">
          {/* Far Left Skyscraper */}
          <rect x="0" y="90" width="38" height="660" />
          <polygon points="0,90 19,65 38,90" />
          
          {/* Empire State style setback building */}
          <rect x="32" y="115" width="40" height="635" />
          <rect x="38" y="85" width="28" height="30" />
          <rect x="44" y="60" width="16" height="25" />
          <rect x="49" y="38" width="6" height="22" />
          <line x1="52" y1="38" x2="52" y2="18" stroke="#F43F5E" strokeWidth="2" />
          <circle cx="52" cy="18" r="2" fill="#EF4444" filter="url(#glowFilter)" />

          {/* Additional background Midtown block */}
          <rect x="68" y="130" width="25" height="620" />
        </g>

        {/* NYC Distant Skyline - Right Side (Chrysler sunburst spire style) */}
        <g fill="url(#nycSkylineBack)">
          {/* Chrysler style tiered spire */}
          <rect x="495" y="105" width="42" height="645" />
          <path d="M498,105 Q516,80 534,105 Z" />
          <path d="M504,80 Q516,62 528,80 Z" />
          <path d="M509,62 Q516,48 523,62 Z" />
          <line x1="516" y1="48" x2="516" y2="20" stroke="#F43F5E" strokeWidth="2" />
          <circle cx="516" cy="20" r="2" fill="#EF4444" filter="url(#glowFilter)" />

          {/* Classic NYC Water Tower on adjacent rooftop */}
          <rect x="532" y="110" width="38" height="640" />
          {/* Water Tower */}
          <line x1="544" y1="110" x2="540" y2="92" stroke="#475569" strokeWidth="1.5" />
          <line x1="558" y1="110" x2="562" y2="92" stroke="#475569" strokeWidth="1.5" />
          <line x1="540" y1="92" x2="562" y2="92" stroke="#475569" strokeWidth="1.5" />
          <rect x="540" y="80" width="22" height="12" rx="1" fill="#78350F" stroke="#451A03" strokeWidth="1" />
          <polygon points="538,80 551,70 564,80" fill="#451A03" />

          {/* Far Right Tower */}
          <rect x="568" y="125" width="32" height="625" />
          <polygon points="568,125 584,100 600,125" />
        </g>

        {/* NYC Midground Buildings with clearly lit windows */}
        <g fill="url(#nycSkylineMid)">
          {/* Left building block */}
          <rect x="5" y="145" width="50" height="605" rx="2" />
          <rect x="42" y="165" width="36" height="585" rx="2" />

          {/* Right building block */}
          <rect x="512" y="130" width="56" height="620" rx="2" />
          <rect x="558" y="155" width="42" height="595" rx="2" />
        </g>

        {/* Highly visible lit windows in NYC buildings (Gold & Cyan) */}
        <g fill="#FEF08A" opacity="0.85">
          {/* Left building glowing windows */}
          <rect x="12" y="165" width="6" height="5" rx="1" />
          <rect x="23" y="165" width="6" height="5" rx="1" />
          <rect x="34" y="165" width="6" height="5" rx="1" />
          <rect x="12" y="185" width="6" height="5" rx="1" fill="#38BDF8" />
          <rect x="23" y="185" width="6" height="5" rx="1" />
          <rect x="34" y="185" width="6" height="5" rx="1" fill="#38BDF8" />
          <rect x="12" y="205" width="6" height="5" rx="1" />
          <rect x="34" y="205" width="6" height="5" rx="1" />
          <rect x="12" y="225" width="6" height="5" rx="1" fill="#38BDF8" />
          <rect x="23" y="225" width="6" height="5" rx="1" />
          <rect x="12" y="315" width="6" height="5" rx="1" />
          <rect x="23" y="315" width="6" height="5" rx="1" />
          <rect x="12" y="335" width="6" height="5" rx="1" fill="#38BDF8" />
          <rect x="34" y="335" width="6" height="5" rx="1" />

          {/* Right building glowing windows */}
          <rect x="522" y="148" width="7" height="6" rx="1" />
          <rect x="542" y="148" width="7" height="6" rx="1" fill="#38BDF8" />
          <rect x="522" y="168" width="7" height="6" rx="1" fill="#38BDF8" />
          <rect x="542" y="168" width="7" height="6" rx="1" />
          <rect x="522" y="188" width="7" height="6" rx="1" />
          <rect x="542" y="188" width="7" height="6" rx="1" />
          <rect x="568" y="178" width="6" height="5" rx="1" fill="#38BDF8" />
          <rect x="582" y="178" width="6" height="5" rx="1" />
          <rect x="568" y="198" width="6" height="5" rx="1" />
          <rect x="582" y="198" width="6" height="5" rx="1" fill="#38BDF8" />
          <rect x="522" y="295" width="7" height="6" rx="1" />
          <rect x="542" y="295" width="7" height="6" rx="1" />
          <rect x="522" y="315" width="7" height="6" rx="1" fill="#38BDF8" />
          <rect x="542" y="315" width="7" height="6" rx="1" />
        </g>

        {/* ========================================================= */}
        {/* 🏢 2. MAIN RESTAURANT BUILDING SHELL                      */}
        {/* ========================================================= */}
        {/* Sidewalk */}
        <rect x="40" y="745" width="520" height="45" fill="#0F172A" />
        <line x1="40" y1="745" x2="560" y2="745" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="80" y1="760" x2="180" y2="760" stroke="#334155" strokeWidth="2" />
        <line x1="220" y1="760" x2="340" y2="760" stroke="#334155" strokeWidth="2" />
        <line x1="380" y1="760" x2="520" y2="760" stroke="#334155" strokeWidth="2" />

        {/* Building outer shell */}
        <rect x="75" y="145" width="450" height="600" rx="14" fill="url(#wallGrad)" stroke="#0F172A" strokeWidth="4" />
        {/* Architectural Pillars */}
        <rect x="75" y="145" width="16" height="600" fill="#0F172A" opacity="0.75" />
        <rect x="509" y="145" width="16" height="600" fill="#0F172A" opacity="0.75" />

        {/* Vertical Elevator Shaft on the Right */}
        <g id="elevator-shaft" transform="translate(455, 155)">
          <rect x="0" y="0" width="48" height="580" rx="6" fill="#090D16" stroke="#334155" strokeWidth="2" />
          <line x1="24" y1="10" x2="24" y2="570" stroke="#64748B" strokeWidth="2.5" strokeDasharray="6 4" />
          <text x="24" y="32" fill="#FBBF24" fontSize="9.5" fontWeight="900" textAnchor="middle">TOP</text>
          <text x="24" y="155" fill="#CBD5E1" fontSize="9" fontWeight="bold" textAnchor="middle">3F</text>
          <text x="24" y="280" fill="#CBD5E1" fontSize="9" fontWeight="bold" textAnchor="middle">2F</text>
          <text x="24" y="405" fill="#CBD5E1" fontSize="9" fontWeight="bold" textAnchor="middle">1F</text>
          <text x="24" y="530" fill="#CBD5E1" fontSize="9" fontWeight="bold" textAnchor="middle">GF</text>
        </g>


        {/* ========================================================= */}
        {/* 🌟 4th / TOP FLOOR: ROOFTOP RESTAURANT (Rooftop Terrace)  */}
        {/* ========================================================= */}
        <g
          id="floor-4-rooftop"
          transform="translate(80, 42)"
          className="cursor-pointer transition-transform hover:opacity-95"
          onClick={() => handleFloorInteraction(4)}
        >
          {/* Platform Floor Base */}
          <rect x="0" y="88" width="440" height="20" rx="4" fill="#78350F" stroke="#F59E0B" strokeWidth="2" />
          
          {/* Glass Railing */}
          <rect x="8" y="52" width="424" height="36" fill="#38BDF8" fillOpacity="0.16" stroke="#FDE68A" strokeWidth="1.5" />
          <line x1="50" y1="52" x2="50" y2="88" stroke="#FDE68A" strokeWidth="2" />
          <line x1="120" y1="52" x2="120" y2="88" stroke="#FDE68A" strokeWidth="2" />
          <line x1="190" y1="52" x2="190" y2="88" stroke="#FDE68A" strokeWidth="2" />
          <line x1="260" y1="52" x2="260" y2="88" stroke="#FDE68A" strokeWidth="2" />
          <line x1="330" y1="52" x2="330" y2="88" stroke="#FDE68A" strokeWidth="2" />
          <line x1="390" y1="52" x2="390" y2="88" stroke="#FDE68A" strokeWidth="2" />

          {/* Pergola with String Fairy Lights */}
          <rect x="20" y="16" width="400" height="6" fill="#451A03" rx="2" />
          <rect x="30" y="22" width="7" height="66" fill="#78350F" />
          <rect x="403" y="22" width="7" height="66" fill="#78350F" />
          {/* Hanging string lights */}
          <path d="M40,24 Q110,40 180,24 Q250,40 320,24 Q370,38 400,24" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
          <circle cx="70" cy="32" r="3" fill="#FEF08A" filter="url(#glowFilter)" />
          <circle cx="110" cy="35" r="3" fill="#FEF08A" filter="url(#glowFilter)" />
          <circle cx="150" cy="30" r="3" fill="#FEF08A" filter="url(#glowFilter)" />
          <circle cx="215" cy="34" r="3" fill="#FEF08A" filter="url(#glowFilter)" />
          <circle cx="255" cy="35" r="3" fill="#FEF08A" filter="url(#glowFilter)" />
          <circle cx="290" cy="30" r="3" fill="#FEF08A" filter="url(#glowFilter)" />
          <circle cx="360" cy="31" r="3" fill="#FEF08A" filter="url(#glowFilter)" />

          {/* 🌴 PALM TREE #1 (LEFT SIDE) */}
          <g id="left-palm-tree" transform="translate(10, 2)">
            <path d="M22,86 Q16,56 26,26" fill="none" stroke="#78350F" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M26,26 Q6,16 -8,28" fill="none" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
            <path d="M26,26 Q12,0 -2,6" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M26,26 Q26,-5 30,-9" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
            <path d="M26,26 Q40,0 54,10" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M26,26 Q46,20 56,32" fill="none" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
            <circle cx="20" cy="70" r="2.5" fill="#FEF08A" filter="url(#glowFilter)" />
            <circle cx="18" cy="55" r="2.5" fill="#FDE047" filter="url(#glowFilter)" />
            <circle cx="23" cy="40" r="2.5" fill="#FEF08A" filter="url(#glowFilter)" />
            <circle cx="6" cy="15" r="2.5" fill="#FEF08A" filter="url(#glowFilter)" />
            <circle cx="42" cy="12" r="2.5" fill="#FDE047" filter="url(#glowFilter)" />
          </g>

          {/* 🌴 PALM TREE #2 (RIGHT SIDE) */}
          <g id="right-palm-tree" transform="translate(378, 2)">
            <path d="M30,86 Q36,56 26,26" fill="none" stroke="#78350F" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M26,26 Q46,16 60,28" fill="none" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
            <path d="M26,26 Q40,0 54,6" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M26,26 Q26,-5 22,-9" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
            <path d="M26,26 Q12,0 -2,10" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M26,26 Q6,20 -4,32" fill="none" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="70" r="2.5" fill="#FEF08A" filter="url(#glowFilter)" />
            <circle cx="34" cy="55" r="2.5" fill="#FDE047" filter="url(#glowFilter)" />
            <circle cx="29" cy="40" r="2.5" fill="#FEF08A" filter="url(#glowFilter)" />
            <circle cx="46" cy="15" r="2.5" fill="#FEF08A" filter="url(#glowFilter)" />
            <circle cx="10" cy="12" r="2.5" fill="#FDE047" filter="url(#glowFilter)" />
          </g>

          {/* 🍽️ TABLE #1 (LEFT) */}
          <g id="table-left" transform="translate(70, 60)">
            <rect x="0" y="8" width="6" height="18" rx="2" fill="#78350F" />
            <rect x="8" y="10" width="28" height="15" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="38" y="8" width="6" height="18" rx="2" fill="#78350F" />
            <circle cx="22" cy="6" r="1.5" fill="#F59E0B" filter="url(#glowFilter)" />
          </g>

          {/* 🍽️ TABLE #2 (CENTER) */}
          <g id="table-center" transform="translate(190, 56)">
            <rect x="5" y="12" width="55" height="18" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M26 15 Q32 8 38 15 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
            <circle cx="32" cy="8" r="1.5" fill="#F59E0B" />
            <circle cx="32" cy="4" r="2" fill="#F59E0B" filter="url(#glowFilter)" />
          </g>

          {/* 🍽️ TABLE #3 (RIGHT) */}
          <g id="table-right" transform="translate(300, 60)">
            <rect x="0" y="8" width="6" height="18" rx="2" fill="#78350F" />
            <rect x="8" y="10" width="28" height="15" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="38" y="8" width="6" height="18" rx="2" fill="#78350F" />
            <circle cx="22" cy="6" r="1.5" fill="#F59E0B" filter="url(#glowFilter)" />
          </g>

          {/* 1. NUMBER OF FLOOR (TOP LEFT CORNER) */}
          <g transform="translate(8, -14)">
            <rect x="0" y="0" width="95" height="24" rx="6" fill="#78350F" stroke="#FDE68A" strokeWidth="1.5" />
            <text x="47.5" y="16" fill="#FEF3C7" fontSize="10.5" fontWeight="900" textAnchor="middle">
              TOP FLOOR
            </text>
          </g>

          {/* 2. TITLE IN THE MIDDLE: ROOFTOP RESTAURANT / tetőtéri étterem */}
          <g
            id="btn-top-floor-rooftop"
            transform="translate(110, -20)"
            className="cursor-pointer hover:scale-105 transition-transform"
            filter="url(#btnShadow)"
          >
            <rect x="0" y="0" width="220" height="42" rx="21" fill="url(#btnGoldGrad)" stroke="#FFFFFF" strokeWidth="2" />
            <text x="110" y="20" fill="#451A03" fontSize="13.5" fontWeight="900" letterSpacing="0.8" textAnchor="middle">
              ROOFTOP RESTAURANT
            </text>
            <text x="110" y="34" fill="#78350F" fontSize="10" fontWeight="600" textAnchor="middle">
              tetőtéri étterem
            </text>
          </g>

          {/* 3. DINE REWARD INDICATOR (TOP/RIGHT) */}
          <g transform="translate(338, -14)">
            <rect x="0" y="0" width="94" height="24" rx="12" fill="#10B981" stroke="#ECFDF5" strokeWidth="1.5" />
            <text x="47" y="16" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle">
              ✨ Dine Here!
            </text>
          </g>
        </g>


        {/* ========================================================= */}
        {/* 💬 3rd FLOOR: CONVERSATION / párbeszéd                    */}
        {/* Waiter with Speech Bubble on RIGHT, Stairs on LEFT        */}
        {/* ========================================================= */}
        <g
          id="floor-3-conversation"
          transform="translate(95, 165)"
          className="cursor-pointer transition-transform hover:opacity-95"
          onClick={() => handleFloorInteraction(3)}
        >
          {/* Room Window Cutaway */}
          <rect x="0" y="0" width="350" height="125" rx="8" fill="url(#roomLightWarm)" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="0" y="0" width="350" height="125" rx="8" fill="url(#glassSheen)" />

          {/* 🪜 FLIGHT OF STAIRS ON THE LEFT (LEADING UP TO ROOFTOP) */}
          <g id="stairs-floor-3-left" transform="translate(8, 20)">
            <path d="M60,95 L0,22 L0,95 Z" fill="#0F172A" opacity="0.25" />
            <line x1="60" y1="95" x2="0" y2="22" stroke="#475569" strokeWidth="5" />
            <rect x="46" y="80" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="34" y="65" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="22" y="50" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="10" y="35" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="0" y="20" width="14" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <line x1="60" y1="75" x2="0" y2="4" stroke="#F59E0B" strokeWidth="3" />
            <line x1="52" y1="80" x2="52" y2="65" stroke="#F59E0B" strokeWidth="2" />
            <line x1="30" y1="55" x2="30" y2="40" stroke="#F59E0B" strokeWidth="2" />
            <line x1="8" y1="30" x2="8" y2="15" stroke="#F59E0B" strokeWidth="2" />
            <polygon points="0,4 7,10 3,10 3,16 -3,16 -3,10 -7,10" fill="#F59E0B" />
          </g>

          {/* 🤵 RECOGNIZABLE WAITER WITH SPEECH BUBBLE ON THE RIGHT */}
          <g id="waiter-with-speech-bubble" transform="translate(255, 14)">
            {/* SPEECH BUBBLE */}
            <g id="speech-bubble" transform="translate(0, 0)" filter="url(#speechShadow)">
              <rect x="0" y="0" width="84" height="32" rx="8" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
              {/* Speech bubble tail pointing towards waiter */}
              <polygon points="26,32 34,32 24,40" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
              <rect x="22" y="30" width="14" height="3" fill="#FFFFFF" />
              
              {/* Dialogue inside speech bubble */}
              <text x="42" y="14" fill="#312E81" fontSize="8.5" fontWeight="800" textAnchor="middle">
                "May I take
              </text>
              <text x="42" y="25" fill="#4338CA" fontSize="8" fontWeight="bold" textAnchor="middle">
                your order?" 💬
              </text>
            </g>

            {/* WAITER FIGURE */}
            <g id="waiter-character" transform="translate(18, 38)">
              {/* Head & Hair */}
              <circle cx="16" cy="12" r="7.5" fill="#FDE047" opacity="0.35" />
              <circle cx="16" cy="12" r="7" fill="#FBBF24" />
              {/* Hair */}
              <path d="M9 11 Q16 4 23 11 Q20 7 16 7 Q12 7 9 11 Z" fill="#334155" />
              
              {/* Waiter Body & Uniform (Tuxedo Vest & Apron) */}
              <rect x="9" y="19" width="14" height="36" rx="2" fill="#0F172A" />
              {/* White Shirt Collar & V-Neck */}
              <polygon points="12,19 20,19 18,29 14,29" fill="#FFFFFF" />
              {/* Black Bowtie */}
              <polygon points="14,21 18,21 16,23" fill="#1E293B" />
              <polygon points="14,23 18,23 16,21" fill="#1E293B" />
              
              {/* Silver Serving Tray with Cloche */}
              <ellipse cx="28" cy="27" rx="9" ry="2.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
              <path d="M23 27 Q28 20 33 27 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />
              <circle cx="28" cy="20" r="1.2" fill="#F59E0B" />
              {/* Arm holding tray */}
              <path d="M21 24 Q24 28 28 27" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>

          {/* 1. NUMBER OF FLOOR (TOP LEFT CORNER) */}
          <g transform="translate(10, 8)">
            <rect x="0" y="0" width="95" height="24" rx="6" fill="#4338CA" stroke="#EEF2FF" strokeWidth="1.5" />
            <text x="47.5" y="16" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              3rd FLOOR
            </text>
          </g>

          {/* 2. TITLE IN THE MIDDLE: CONVERSATION / párbeszéd */}
          <g
            id="btn-floor-3-conversation"
            transform="translate(85, 42)"
            className="cursor-pointer hover:scale-105 transition-transform"
            filter="url(#btnShadow)"
          >
            <rect x="0" y="0" width="180" height="42" rx="21" fill="url(#btnIndigoGrad)" stroke="#C7D2FE" strokeWidth="2" />
            <text x="90" y="21" fill="#FFFFFF" fontSize="14" fontWeight="900" letterSpacing="0.8" textAnchor="middle">
              CONVERSATION
            </text>
            <text x="90" y="34" fill="#E0E7FF" fontSize="10" fontWeight="600" textAnchor="middle">
              párbeszéd
            </text>
          </g>

          {/* 3. EARN BADGE (BOTTOM RIGHT CORNER) */}
          <g transform="translate(245, 96)">
            <rect x="0" y="0" width="95" height="22" rx="11" fill="#10B981" stroke="#D1FAE5" strokeWidth="1.5" filter="url(#glowFilter)" />
            <text x="47.5" y="15" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              💰 Earn +$10
            </text>
          </g>
        </g>


        {/* ========================================================= */}
        {/* ✍️ 2nd FLOOR: SENTENCES / mondatok (COMING SOON)           */}
        {/* Recognizable Restaurant Table on LEFT, Stairs on RIGHT    */}
        {/* ========================================================= */}
        <g
          id="floor-2-sentences"
          transform="translate(95, 310)"
          className="cursor-pointer transition-transform hover:opacity-95"
          onClick={() => handleFloorInteraction(2)}
        >
          {/* Room Window Cutaway */}
          <rect x="0" y="0" width="350" height="125" rx="8" fill="url(#roomLightTeal)" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="0" y="0" width="350" height="125" rx="8" fill="url(#glassSheen)" />

          {/* 🍽️ RECOGNIZABLE RESTAURANT DINING TABLE & CHAIRS ON THE LEFT */}
          <g id="restaurant-table-dining-set" transform="translate(14, 52)">
            {/* Left Dining Chair */}
            <rect x="0" y="14" width="5" height="26" rx="1.5" fill="#0F766E" />
            <path d="M0,14 Q3,4 8,14" fill="none" stroke="#0F766E" strokeWidth="2.5" />
            <rect x="2" y="24" width="10" height="4" rx="1" fill="#14B8A6" />

            {/* Right Dining Chair */}
            <rect x="52" y="14" width="5" height="26" rx="1.5" fill="#0F766E" />
            <path d="M57,14 Q54,4 49,14" fill="none" stroke="#0F766E" strokeWidth="2.5" />
            <rect x="45" y="24" width="10" height="4" rx="1" fill="#14B8A6" />

            {/* Table Base & Pedestal */}
            <rect x="26" y="24" width="5" height="16" fill="#134E4A" />
            <ellipse cx="28.5" cy="40" rx="9" ry="2" fill="#134E4A" />

            {/* Draped Linen Tablecloth */}
            <path
              d="M10,20 L47,20 L45,34 Q38,36 34,33 Q28,36 23,33 Q18,36 12,34 Z"
              fill="#FFFFFF"
              stroke="#5EEAD4"
              strokeWidth="1.2"
            />
            {/* Table Surface Oval */}
            <ellipse cx="28.5" cy="20" rx="18.5" ry="4.5" fill="#F8FAFC" stroke="#CCFBF1" strokeWidth="1" />

            {/* Tabletop Items: Wine Glasses & Plates & Candle */}
            {/* Left Wine Glass */}
            <path d="M16 19 L16 14 Q18 11 20 14 L20 19 Z" fill="#38BDF8" fillOpacity="0.6" stroke="#0284C7" strokeWidth="0.6" />
            <line x1="18" y1="19" x2="18" y2="21" stroke="#0284C7" strokeWidth="0.8" />
            <ellipse cx="18" cy="16" rx="1.5" ry="1" fill="#E11D48" />

            {/* Right Wine Glass */}
            <path d="M37 19 L37 14 Q39 11 41 14 L41 19 Z" fill="#38BDF8" fillOpacity="0.6" stroke="#0284C7" strokeWidth="0.6" />
            <line x1="39" y1="19" x2="39" y2="21" stroke="#0284C7" strokeWidth="0.8" />
            <ellipse cx="39" cy="16" rx="1.5" ry="1" fill="#E11D48" />

            {/* Center Glowing Candle in Vase */}
            <rect x="27" y="13" width="3" height="7" rx="0.8" fill="#FEF08A" stroke="#F59E0B" strokeWidth="0.6" />
            <circle cx="28.5" cy="10" r="2" fill="#F59E0B" filter="url(#glowFilter)" />
            <circle cx="28.5" cy="10" r="1" fill="#FFFBEB" />
          </g>

          {/* 🪜 PROMINENT FLIGHT OF STAIRS ON THE RIGHT (LEADING UP TO 3rd FLOOR) */}
          <g id="stairs-floor-2-right" transform="translate(275, 20)">
            <path d="M0,95 L60,22 L60,95 Z" fill="#0F172A" opacity="0.25" />
            <line x1="0" y1="95" x2="60" y2="22" stroke="#475569" strokeWidth="5" />
            <rect x="0" y="80" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="12" y="65" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="24" y="50" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="36" y="35" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="48" y="20" width="14" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <line x1="0" y1="75" x2="60" y2="4" stroke="#14B8A6" strokeWidth="3" />
            <line x1="8" y1="80" x2="8" y2="65" stroke="#14B8A6" strokeWidth="2" />
            <line x1="30" y1="55" x2="30" y2="40" stroke="#14B8A6" strokeWidth="2" />
            <line x1="52" y1="30" x2="52" y2="15" stroke="#14B8A6" strokeWidth="2" />
            <polygon points="60,4 53,10 57,10 57,16 63,16 63,10 67,10" fill="#14B8A6" />
          </g>

          {/* 1. NUMBER OF FLOOR (TOP LEFT CORNER) */}
          <g transform="translate(10, 8)">
            <rect x="0" y="0" width="95" height="24" rx="6" fill="#0D9488" stroke="#F0FDFA" strokeWidth="1.5" />
            <text x="47.5" y="16" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              2nd FLOOR
            </text>
          </g>

          {/* 2. TITLE IN THE MIDDLE: SENTENCES / mondatok */}
          <g
            id="btn-floor-2-sentences"
            transform="translate(95, 34)"
            className="cursor-pointer hover:scale-105 transition-transform"
            filter="url(#btnShadow)"
          >
            <rect x="0" y="0" width="160" height="42" rx="21" fill="url(#btnTealGrad)" stroke="#99F6E4" strokeWidth="2" opacity="0.95" />
            <text x="80" y="21" fill="#FFFFFF" fontSize="14" fontWeight="900" letterSpacing="0.8" textAnchor="middle">
              SENTENCES
            </text>
            <text x="80" y="34" fill="#CCFBF1" fontSize="10" fontWeight="600" textAnchor="middle">
              mondatok
            </text>

            {/* COMING SOON BADGE */}
            <g transform="translate(30, 46)">
              <rect x="0" y="0" width="100" height="19" rx="9.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#glowFilter)" />
              <text x="50" y="13.5" fill="#FFFFFF" fontSize="8.5" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
                COMING SOON
              </text>
            </g>
          </g>

          {/* 3. EARN BADGE (BOTTOM RIGHT CORNER) */}
          <g transform="translate(245, 96)">
            <rect x="0" y="0" width="95" height="22" rx="11" fill="#10B981" stroke="#D1FAE5" strokeWidth="1.5" filter="url(#glowFilter)" />
            <text x="47.5" y="15" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              💰 Earn +$10
            </text>
          </g>
        </g>


        {/* ========================================================= */}
        {/* 🏷️ 1st FLOOR: PHRASES / kifejezések (Task 1)              */}
        {/* Stairs on LEFT, Title in CENTER, No Image on Right        */}
        {/* ========================================================= */}
        <g
          id="floor-1-phrases"
          transform="translate(95, 455)"
          className="cursor-pointer transition-transform hover:opacity-95"
          onClick={() => handleFloorInteraction(1)}
        >
          {/* Room Window Cutaway */}
          <rect x="0" y="0" width="350" height="125" rx="8" fill="url(#roomLightPurple)" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="0" y="0" width="350" height="125" rx="8" fill="url(#glassSheen)" />

          {/* 🪜 PROMINENT FLIGHT OF STAIRS ON THE LEFT (LEADING UP TO 2nd FLOOR) */}
          <g id="stairs-floor-1-left" transform="translate(8, 20)">
            <path d="M60,95 L0,22 L0,95 Z" fill="#0F172A" opacity="0.25" />
            <line x1="60" y1="95" x2="0" y2="22" stroke="#475569" strokeWidth="5" />
            <rect x="46" y="80" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="34" y="65" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="22" y="50" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="10" y="35" width="16" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <rect x="0" y="20" width="14" height="15" fill="url(#stairTreadGrad)" stroke="#78350F" strokeWidth="1.2" rx="1" />
            <line x1="60" y1="75" x2="0" y2="4" stroke="#A855F7" strokeWidth="3" />
            <line x1="52" y1="80" x2="52" y2="65" stroke="#A855F7" strokeWidth="2" />
            <line x1="30" y1="55" x2="30" y2="40" stroke="#A855F7" strokeWidth="2" />
            <line x1="8" y1="30" x2="8" y2="15" stroke="#A855F7" strokeWidth="2" />
            <polygon points="0,4 7,10 3,10 3,16 -3,16 -3,10 -7,10" fill="#A855F7" />
          </g>

          {/* (Image on the right has been removed as requested) */}

          {/* 1. NUMBER OF FLOOR (TOP LEFT CORNER) */}
          <g transform="translate(10, 8)">
            <rect x="0" y="0" width="95" height="24" rx="6" fill="#7C3AED" stroke="#F5F3FF" strokeWidth="1.5" />
            <text x="47.5" y="16" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              1st FLOOR
            </text>
          </g>

          {/* 2. TITLE IN THE MIDDLE: PHRASES / kifejezések */}
          <g
            id="btn-floor-1-phrases"
            transform="translate(95, 42)"
            className="cursor-pointer hover:scale-105 transition-transform"
            filter="url(#btnShadow)"
          >
            <rect x="0" y="0" width="160" height="42" rx="21" fill="url(#btnPurpleGrad)" stroke="#E9D5FF" strokeWidth="2" />
            <text x="80" y="21" fill="#FFFFFF" fontSize="15" fontWeight="900" letterSpacing="0.8" textAnchor="middle">
              PHRASES
            </text>
            <text x="80" y="34" fill="#F3E8FF" fontSize="10" fontWeight="600" textAnchor="middle">
              kifejezések
            </text>
          </g>

          {/* 3. EARN BADGE (BOTTOM RIGHT CORNER) */}
          <g transform="translate(245, 96)">
            <rect x="0" y="0" width="95" height="22" rx="11" fill="#10B981" stroke="#D1FAE5" strokeWidth="1.5" filter="url(#glowFilter)" />
            <text x="47.5" y="15" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              💰 Earn +$10
            </text>
          </g>
        </g>


        {/* ========================================================= */}
        {/* 🍴 GROUND FLOOR: WORDS / szavak (COMING SOON)             */}
        {/* Entrance Door on LEFT, Title in CENTER                    */}
        {/* ========================================================= */}
        <g
          id="floor-0-words"
          transform="translate(95, 600)"
          className="cursor-pointer transition-transform hover:opacity-95"
          onClick={() => handleFloorInteraction(0)}
        >
          {/* Room Window Cutaway */}
          <rect x="0" y="0" width="350" height="135" rx="8" fill="url(#roomLightWarm)" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="0" y="0" width="350" height="135" rx="8" fill="url(#glassSheen)" />

          {/* Grand Entrance Doorway & Awning */}
          <g id="entrance-door" transform="translate(10, 20)">
            <rect x="0" y="25" width="70" height="85" rx="5" fill="#0F172A" stroke="#B45309" strokeWidth="2" />
            <rect x="5" y="30" width="28" height="78" fill="#1E293B" />
            <rect x="37" y="30" width="28" height="78" fill="#1E293B" />
            <circle cx="30" cy="70" r="2.5" fill="#FBBF24" />
            <circle cx="40" cy="70" r="2.5" fill="#FBBF24" />

            {/* Awning Canopy */}
            <path d="M-5 25 L75 25 L67 10 L3 10 Z" fill="#DC2626" />
            <path d="M12 25 L28 25 L24 10 L16 10 Z" fill="#FFFFFF" />
            <path d="M44 25 L60 25 L56 10 L48 10 Z" fill="#FFFFFF" />

            {/* Planter Pot */}
            <ellipse cx="78" cy="98" rx="8" ry="12" fill="#15803D" />
          </g>

          {/* 1. NUMBER OF FLOOR (TOP LEFT CORNER) */}
          <g transform="translate(10, 8)">
            <rect x="0" y="0" width="115" height="24" rx="6" fill="#D97706" stroke="#FEF3C7" strokeWidth="1.5" />
            <text x="57.5" y="16" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle">
              GROUND FLOOR
            </text>
          </g>

          {/* 2. TITLE IN THE MIDDLE: WORDS / szavak */}
          <g
            id="btn-floor-0-words"
            transform="translate(100, 36)"
            className="cursor-pointer hover:scale-105 transition-transform"
            filter="url(#btnShadow)"
          >
            <rect x="0" y="0" width="150" height="42" rx="21" fill="url(#btnAmberGrad)" stroke="#FDE68A" strokeWidth="2" opacity="0.95" />
            <text x="75" y="21" fill="#FFFFFF" fontSize="15" fontWeight="900" letterSpacing="0.8" textAnchor="middle">
              WORDS
            </text>
            <text x="75" y="34" fill="#FEF3C7" fontSize="10" fontWeight="600" textAnchor="middle">
              szavak
            </text>

            {/* COMING SOON BADGE */}
            <g transform="translate(25, 46)">
              <rect x="0" y="0" width="100" height="19" rx="9.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#glowFilter)" />
              <text x="50" y="13.5" fill="#FFFFFF" fontSize="8.5" fontWeight="900" letterSpacing="0.5" textAnchor="middle">
                COMING SOON
              </text>
            </g>
          </g>

          {/* 3. EARN BADGE (BOTTOM RIGHT CORNER) */}
          <g transform="translate(245, 104)">
            <rect x="0" y="0" width="95" height="22" rx="11" fill="#10B981" stroke="#D1FAE5" strokeWidth="1.5" filter="url(#glowFilter)" />
            <text x="47.5" y="15" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle">
              💰 Earn +$10
            </text>
          </g>
        </g>

      </svg>
    </div>
  );
};
