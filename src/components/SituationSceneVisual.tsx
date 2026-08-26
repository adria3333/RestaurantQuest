import React from 'react';

interface SituationSceneVisualProps {
  taskType: 1 | 2;
  questionId: number;
  isSpeaking: boolean;
}

export const SituationSceneVisual: React.FC<SituationSceneVisualProps> = ({
  taskType,
  questionId,
  isSpeaking
}) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {/* Shared defs & gradients */}
      <svg
        viewBox="0 0 560 250"
        className="w-full h-full object-cover"
        aria-label="Situation-specific animated restaurant scene"
      >
        <defs>
          <linearGradient id="scDeckFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B4794B" />
            <stop offset="100%" stopColor="#8E5730" />
          </linearGradient>
          <linearGradient id="scIndoorFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
          <linearGradient id="scBush1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="scBush2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          <linearGradient id="scLeather" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient id="scAwning" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="scFireplace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
          <linearGradient id="scSilverTray" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="scWineRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
          <linearGradient id="scWaterBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* TASK 1 - SCENARIOS 1 TO 10 */}
        {/* ------------------------------------------------------------- */}

        {/* TASK 1 - SCENE 1: ARRIVAL & TABLE RESERVATION AT ENTRANCE PODIUM */}
        {taskType === 1 && questionId === 1 && (
          <g id="scene-arrival">
            {/* Background: Elegant Entrance Arch & Lanterns */}
            <rect x="0" y="0" width="560" height="175" fill="#FEF3C7" opacity="0.5" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            {/* Entrance Pillars & Arch */}
            <rect x="20" y="0" width="30" height="175" fill="#334155" />
            <rect x="510" y="0" width="30" height="175" fill="#334155" />
            <path d="M20 0 L540 0 L510 32 L50 32 Z" fill="#1E293B" />
            <text x="280" y="22" fill="#FDE68A" fontSize="10" fontWeight="bold" letterSpacing="3" textAnchor="middle">
              THE OLIVE TREE - RECEPTION
            </text>

            {/* Potted Plants at Entrance */}
            <circle cx="70" cy="140" r="22" fill="url(#scBush2)" />
            <rect x="62" y="155" width="16" height="24" rx="2" fill="#78350F" />
            <circle cx="490" cy="140" r="22" fill="url(#scBush2)" />
            <rect x="482" y="155" width="16" height="24" rx="2" fill="#78350F" />

            {/* ARRIVING GUESTS (Left: Couple with bags/jackets arriving at podium) */}
            <g id="arriving-couple" transform="translate(100, 50)">
              {/* Man in grey coat */}
              <circle cx="35" cy="40" r="14" fill="#FED7AA" />
              <path d="M22 36 C22 20, 50 20, 50 36 Z" fill="#1E293B" />
              {/* Glasses */}
              <rect x="34" y="36" width="9" height="6" rx="1.5" fill="#FFFFFF" fillOpacity="0.4" stroke="#1E293B" strokeWidth="1.2" />
              {/* Coat body */}
              <path d="M12 60 C18 48, 52 48, 58 60 L62 135 L8 135 Z" fill="#475569" stroke="#334155" strokeWidth="1" />
              <line x1="35" y1="60" x2="35" y2="135" stroke="#1E293B" strokeWidth="1.5" />

              {/* Woman beside him in teal jacket with handbag */}
              <circle cx="85" cy="45" r="13" fill="#FED7AA" />
              <path d="M72 40 C72 22, 100 22, 100 40 C100 65, 108 85, 96 90 Z" fill="#F59E0B" />
              <path d="M68 65 C74 54, 100 54, 106 65 L110 135 L64 135 Z" fill="#0D9488" />
              {/* Handbag */}
              <rect x="102" y="95" width="14" height="18" rx="2" fill="#854D0E" />
              <path d="M105 95 C105 85, 113 85, 113 95" stroke="#854D0E" strokeWidth="1.5" fill="none" />
            </g>

            {/* RECEPTION PODIUM (Center-Right) */}
            <g transform="translate(290, 85)">
              <rect x="0" y="30" width="60" height="70" rx="4" fill="#78350F" stroke="#451A03" strokeWidth="2" />
              <rect x="-6" y="22" width="72" height="12" rx="3" fill="#92400E" />
              {/* Guest Register Tablet on podium */}
              <rect x="12" y="10" width="36" height="22" rx="2" fill="#0F172A" transform="rotate(-15, 30, 20)" />
              <rect x="14" y="12" width="32" height="18" rx="1.5" fill="#38BDF8" transform="rotate(-15, 30, 20)" />
              <line x1="18" y1="18" x2="36" y2="18" stroke="#0369A1" strokeWidth="1.2" transform="rotate(-15, 30, 20)" />
              <circle cx="38" cy="24" r="2.5" fill="#22C55E" transform="rotate(-15, 30, 20)" />
            </g>

            {/* HOST / WAITER at Podium (Matching Photo Style) */}
            <g id="host-figure" transform="translate(370, 25)" className="anim-waiter-bob">
              {/* Legs */}
              <line x1="20" y1="145" x2="17" y2="205" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="145" x2="41" y2="205" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              {/* White Polo & Tie */}
              <path d="M6 65 L52 65 L55 125 L3 125 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="19,63 28,75 28,63" fill="#F1F5F9" />
              <polygon points="37,63 28,75 28,63" fill="#F1F5F9" />
              <polygon points="26,70 31,70 33,110 29,115 25,110" fill="#381D0E" />
              {/* Apron with Leather Pocket */}
              <rect x="5" y="115" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="120" width="18" height="20" rx="2" fill="url(#scLeather)" />
              {/* Head & Glasses */}
              <ellipse cx="28" cy="40" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 36 C14 17, 42 17, 42 36 Z" fill="#291409" />
              <rect x="17" y="34" width="9" height="6.5" rx="1.5" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29" y="34" width="9" height="6.5" rx="1.5" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26" y1="37" x2="29" y2="37" stroke="#1E293B" strokeWidth="1.4" />
              {/* Mouth */}
              {isSpeaking ? (
                <path d="M22 45 Q28 52 34 45 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 45 Q28 50 34 45" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Welcoming Arm Gesture towards podium and guests */}
              <path d="M8 70 L-18 90 L-8 100" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M50 70 L65 95 L55 105" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" fill="none" />
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 2: SEATING OPTIONS (INSIDE FIREPLACE VS HEATED TERRACE) */}
        {taskType === 1 && questionId === 2 && (
          <g id="scene-seating-choice">
            {/* Split Background: Left Inside with Fireplace, Right Outside with Green Terrace */}
            {/* Left Inside Room */}
            <rect x="0" y="0" width="280" height="175" fill="#FEF3C7" opacity="0.7" />
            <rect x="0" y="175" width="280" height="75" fill="url(#scIndoorFloor)" />
            {/* Indoor Fireplace */}
            <rect x="20" y="60" width="90" height="115" rx="4" fill="#991B1B" stroke="#7F1D1D" strokeWidth="2" />
            <rect x="35" y="100" width="60" height="70" rx="3" fill="#1E293B" />
            {/* Fireplace Hearth Mantle */}
            <rect x="15" y="52" width="100" height="12" rx="2" fill="#78350F" />
            <circle cx="45" cy="45" r="5" fill="#F59E0B" />
            {/* Animated Fire Flames */}
            <path d="M45 155 Q55 115 65 140 Q75 110 85 155 Z" fill="url(#scFireplace)" className="animate-pulse" />
            <text x="65" y="80" fill="#FEF08A" fontSize="9" fontWeight="bold" textAnchor="middle">
              🔥 Cozy Fireplace
            </text>

            {/* Right Terrace Area */}
            <rect x="280" y="0" width="280" height="175" fill="#E0F2FE" opacity="0.6" />
            <rect x="280" y="175" width="280" height="75" fill="url(#scDeckFloor)" />
            {/* Terrace Foliage & Heated Lamp */}
            <ellipse cx="500" cy="120" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="450" cy="130" rx="35" ry="50" fill="url(#scBush1)" />
            {/* Terrace Heating Lamp */}
            <rect x="400" y="40" width="6" height="140" fill="#334155" />
            <polygon points="380,45 426,45 403,30" fill="#F59E0B" />
            <circle cx="403" cy="50" r="12" fill="#FEF08A" fillOpacity="0.5" className="animate-pulse" />
            <text x="450" y="35" fill="#065F46" fontSize="9" fontWeight="bold" textAnchor="middle">
              🌿 Heated Terrace
            </text>

            {/* WAITER IN THE MIDDLE POINTING TO BOTH OPTIONS */}
            <g id="waiter-pointing" transform="translate(250, 30)" className="anim-waiter-bob">
              {/* Legs */}
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              {/* White Shirt & Tie */}
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              {/* Head & Glasses */}
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {/* Animated Speaking Mouth */}
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Left hand pointing to fireplace, Right hand pointing to terrace */}
              <path d="M8 68 L-55 85" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
              <text x="-65" y="88" fontSize="14">👈</text>
              <path d="M50 68 L105 85" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
              <text x="100" y="88" fontSize="14">👉</text>
            </g>

            {/* Seated Guests observing */}
            <g transform="translate(130, 85)">
              <circle cx="30" cy="35" r="12" fill="#FED7AA" />
              <path d="M20 30 C20 15, 42 15, 42 30 Z" fill="#1E293B" />
              <path d="M15 50 C20 40, 45 40, 50 50 L52 105 L12 105 Z" fill="#93C5FD" />
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 3: SERVING DRINKS ON SILVER TRAY */}
        {taskType === 1 && questionId === 3 && (
          <g id="scene-drinks">
            <rect x="0" y="0" width="560" height="175" fill="#E0F2FE" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            {/* Terrace Foliage */}
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />
            {/* Table with couple */}
            <g id="terrace-table" transform="translate(100, 0)">
              <rect x="250" y="175" width="12" height="55" fill="#0F172A" rx="2" />
              <ellipse cx="256" cy="175" rx="90" ry="22" fill="#1E293B" />
            </g>

            {/* WAITER CARRYING LOADED DRINKS TRAY */}
            <g id="waiter-drinks" transform="translate(210, 20)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Arm holding up silver tray */}
              <path d="M50 68 L85 85 L95 80" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" fill="none" />

              {/* SILVER DRINKS TRAY WITH BOTTLE & GLASSES */}
              <g transform="translate(65, 55)">
                {/* Silver Oval Tray */}
                <ellipse cx="40" cy="25" rx="42" ry="10" fill="url(#scSilverTray)" stroke="#64748B" strokeWidth="1.5" />
                {/* Red Wine Bottle */}
                <rect x="18" y="-15" width="12" height="36" rx="2" fill="url(#scWineRed)" stroke="#450A0A" strokeWidth="1" />
                <rect x="21" y="-24" width="6" height="10" fill="#F59E0B" />
                {/* Red Wine Glass */}
                <path d="M38 -2 Q38 12 44 12 Q50 12 50 -2 Z" fill="#DC2626" fillOpacity="0.85" />
                <line x1="44" y1="12" x2="44" y2="22" stroke="#94A3B8" strokeWidth="1.5" />
                <ellipse cx="44" cy="22" rx="5" ry="1.5" fill="#94A3B8" />
                {/* Sparkling Water Carafe with Lemon */}
                <path d="M56 -10 L68 -10 L70 20 L54 20 Z" fill="url(#scWaterBlue)" stroke="#0284C7" strokeWidth="1" fillOpacity="0.8" />
                <circle cx="62" cy="5" r="3" fill="#FDE047" />
              </g>
            </g>

            {/* Guest at Table ready for drinks */}
            <g transform="translate(100, 90)">
              <circle cx="50" cy="30" r="14" fill="#FED7AA" />
              <path d="M36 26 C36 10, 64 10, 64 26 Z" fill="#1E293B" />
              <path d="M25 55 C30 42, 68 42, 75 55 L80 110 L20 110 Z" fill="#93C5FD" />
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 4: GUESTS READING MENU, WAITER WAITING ATTENTIVELY */}
        {taskType === 1 && questionId === 4 && (
          <g id="scene-menu-browsing">
            <rect x="0" y="0" width="560" height="175" fill="#E0F2FE" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* Table */}
            <rect x="220" y="175" width="12" height="55" fill="#0F172A" rx="2" />
            <ellipse cx="226" cy="175" rx="90" ry="22" fill="#1E293B" />

            {/* SEATED GUEST WITH BIG OPEN FOLDER MENU */}
            <g transform="translate(70, 75)">
              <circle cx="60" cy="30" r="14" fill="#FED7AA" />
              <path d="M46 26 C46 10, 74 10, 74 26 Z" fill="#1E293B" />
              <path d="M35 55 C40 42, 80 42, 85 55 L90 115 L30 115 Z" fill="#93C5FD" />
              {/* Big Open Menu booklet held up */}
              <g transform="translate(65, 45)">
                <polygon points="0,0 35,-10 35,45 0,40" fill="#FEF3C7" stroke="#78350F" strokeWidth="1.5" />
                <polygon points="35,-10 70,0 70,40 35,45" fill="#FEF3C7" stroke="#78350F" strokeWidth="1.5" />
                <line x1="8" y1="8" x2="28" y2="3" stroke="#854D0E" strokeWidth="1.2" />
                <line x1="8" y1="16" x2="28" y2="11" stroke="#854D0E" strokeWidth="1.2" />
                <line x1="8" y1="24" x2="28" y2="19" stroke="#854D0E" strokeWidth="1.2" />
                <line x1="42" y1="3" x2="62" y2="8" stroke="#854D0E" strokeWidth="1.2" />
                <line x1="42" y1="11" x2="62" y2="16" stroke="#854D0E" strokeWidth="1.2" />
              </g>
            </g>

            {/* SECOND GUEST ALSO READING */}
            <g transform="translate(340, 85)">
              <circle cx="40" cy="27" r="13" fill="#FED7AA" />
              <path d="M28 22 C28 6, 62 6, 62 22 Z" fill="#FACC15" />
              <path d="M18 52 C26 38, 60 38, 68 52 L72 105 L14 105 Z" fill="#FECDD3" />
            </g>

            {/* WAITER STANDING BY PATIENTLY WITH TABLET & THOUGHT BUBBLE */}
            <g id="waiter-waiting" transform="translate(230, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Holding tablet comfortably */}
              <rect x="18" y="90" width="24" height="16" rx="2" fill="#1E293B" />
              <rect x="20" y="92" width="20" height="12" rx="1" fill="#38BDF8" />
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 5: SOLD OUT SEA BASS & SEA TROUT RECOMMENDATION */}
        {taskType === 1 && questionId === 5 && (
          <g id="scene-sold-out-fish">
            <rect x="0" y="0" width="560" height="175" fill="#FEF3C7" opacity="0.4" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* WAITER APOLOGIZING WITH HAND OVER HEART */}
            <g id="waiter-apology" transform="translate(240, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Hand over heart gesture */}
              <circle cx="28" cy="80" r="7" fill="#FED7AA" />
            </g>

            {/* FLOATING MENU COMPARISON: Crossed Sea Bass vs Recommended Trout */}
            <g transform="translate(320, 45)">
              <rect x="0" y="0" width="150" height="75" rx="8" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
              {/* Sold out Sea Bass */}
              <text x="12" y="24" fontSize="11" fill="#DC2626" fontWeight="bold">🐟 Sea Bass</text>
              <line x1="10" y1="20" x2="85" y2="20" stroke="#DC2626" strokeWidth="2.5" />
              <text x="95" y="24" fontSize="10" fill="#EF4444">SOLD OUT</text>
              {/* Chef Recommendation Sea Trout */}
              <rect x="6" y="36" width="138" height="30" rx="5" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
              <text x="12" y="55" fontSize="11" fill="#047857" fontWeight="bold">⭐ Pan-seared Trout</text>
              <text x="115" y="55" fontSize="12">✨</text>
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 6: STEAK DONENESS CHECK (RIBEYE RARE / MEDIUM / WELL-DONE) */}
        {taskType === 1 && questionId === 6 && (
          <g id="scene-steak-doneness">
            <rect x="0" y="0" width="560" height="175" fill="#E0F2FE" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* WAITER HOLDING STEAK DONENESS TABLET */}
            <g id="waiter-steak" transform="translate(180, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>

            {/* VISUAL STEAK DONENESS GAUGE DISPLAY CARD */}
            <g transform="translate(265, 35)">
              <rect x="0" y="0" width="195" height="105" rx="8" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" />
              <text x="12" y="20" fontSize="11" fontWeight="bold" fill="#9F1239">🥩 Ribeye Steak Doneness</text>
              {/* Rare Bar */}
              <rect x="12" y="30" width="40" height="16" rx="3" fill="#DC2626" />
              <text x="32" y="42" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">Rare</text>
              {/* Medium-Rare Bar (Highlighted) */}
              <rect x="58" y="27" width="60" height="22" rx="4" fill="#E11D48" stroke="#F43F5E" strokeWidth="1.5" />
              <text x="88" y="41" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">Med-Rare ✓</text>
              {/* Medium Bar */}
              <rect x="124" y="30" width="45" height="16" rx="3" fill="#B45309" />
              <text x="146" y="42" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">Medium</text>
              {/* Sizzling Cloche Dome */}
              <path d="M30 85 C30 65, 90 65, 90 85 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.2" />
              <circle cx="60" cy="65" r="3" fill="#F59E0B" />
              <text x="100" y="80" fontSize="10" fill="#4B5563">Juicy &amp; Tender</text>
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 7: FOOD ALLERGIES & DIETARY RESTRICTIONS */}
        {taskType === 1 && questionId === 7 && (
          <g id="scene-allergies">
            <rect x="0" y="0" width="560" height="175" fill="#ECFDF5" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* WAITER WITH ALLERGEN CHECKLIST */}
            <g id="waiter-allergy" transform="translate(180, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>

            {/* GREEN ALLERGEN SAFETY SHIELD & BADGES */}
            <g transform="translate(265, 35)">
              <rect x="0" y="0" width="190" height="95" rx="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
              <text x="12" y="22" fontSize="11" fontWeight="bold" fill="#065F46">🛡️ Dietary Safety Check</text>
              {/* Nut Free Badge */}
              <rect x="12" y="34" width="75" height="20" rx="4" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1" />
              <text x="18" y="48" fontSize="9" fontWeight="bold" fill="#991B1B">🥜 Nut-Free</text>
              {/* Gluten Free Badge */}
              <rect x="95" y="34" width="80" height="20" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
              <text x="101" y="48" fontSize="9" fontWeight="bold" fill="#92400E">🌾 Gluten-Free</text>
              {/* Dairy check */}
              <rect x="12" y="62" width="163" height="22" rx="4" fill="#ECFDF5" />
              <text x="20" y="77" fontSize="9" fontWeight="bold" fill="#047857">✓ Kitchen notified for safety</text>
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 8: MID-MEAL SATISFACTION CHECK-IN (EATING FOOD, THUMBS UP) */}
        {taskType === 1 && questionId === 8 && (
          <g id="scene-checkin">
            <rect x="0" y="0" width="560" height="175" fill="#E0F2FE" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* Table with Delicious Food Plates */}
            <g transform="translate(140, 90)">
              <rect x="100" y="85" width="12" height="55" fill="#0F172A" rx="2" />
              <ellipse cx="106" cy="85" rx="100" ry="22" fill="#1E293B" />
              {/* Food Plate 1 (Steak & Veggies) */}
              <ellipse cx="60" cy="80" rx="22" ry="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <ellipse cx="60" cy="80" rx="14" ry="4" fill="#B45309" />
              {/* Food Plate 2 (Pasta / Salad) */}
              <ellipse cx="150" cy="80" rx="22" ry="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <ellipse cx="150" cy="80" rx="14" ry="4" fill="#22C55E" />
            </g>

            {/* SEATED GUESTS ENJOYING MEAL WITH FORKS */}
            <g transform="translate(100, 85)">
              <circle cx="50" cy="30" r="14" fill="#FED7AA" />
              <path d="M36 26 C36 10, 64 10, 64 26 Z" fill="#1E293B" />
              <path d="M25 55 C30 42, 68 42, 75 55 L80 110 L20 110 Z" fill="#93C5FD" />
              <text x="80" y="70" fontSize="14">👍</text>
            </g>

            {/* WAITER WITH PEPPER MILL CHECKING IN */}
            <g id="waiter-checkin" transform="translate(340, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Tall wooden pepper mill held in hand */}
              <rect x="-10" y="80" width="8" height="26" rx="2" fill="#78350F" stroke="#451A03" strokeWidth="1" />
              <circle cx="-6" cy="78" r="3" fill="#B45309" />
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 9: SIDE DISH SWAP (BRINGING FRESH GRILLED VEGGIES) */}
        {taskType === 1 && questionId === 9 && (
          <g id="scene-dish-swap">
            <rect x="0" y="0" width="560" height="175" fill="#FEF3C7" opacity="0.5" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* WAITER SWAPPING SIDE PLATES */}
            <g id="waiter-swap" transform="translate(230, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
              {/* Holding plate of fresh grilled vegetables */}
              <g transform="translate(50, 75)">
                <ellipse cx="20" cy="15" rx="24" ry="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                {/* Zucchini & Grilled Veggies */}
                <ellipse cx="14" cy="14" rx="6" ry="3" fill="#16A34A" />
                <ellipse cx="24" cy="14" rx="7" ry="3" fill="#DC2626" />
                <circle cx="20" cy="13" r="2.5" fill="#F59E0B" />
              </g>
            </g>

            {/* SWAP ACTION BUBBLE */}
            <g transform="translate(325, 45)">
              <rect x="0" y="0" width="140" height="40" rx="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
              <text x="10" y="24" fontSize="10" fontWeight="bold" fill="#047857">🥗 Grilled Veggies ✓</text>
            </g>
          </g>
        )}

        {/* TASK 1 - SCENE 10: BILL & CARD PAYMENT TERMINAL */}
        {taskType === 1 && questionId === 10 && (
          <g id="scene-bill-payment">
            <rect x="0" y="0" width="560" height="175" fill="#E0F2FE" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* WAITER PRESENTING BILL FOLDER & WIRELESS POS MACHINE */}
            <g id="waiter-bill" transform="translate(200, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>

            {/* BILL RECEIPT FOLDER & WIRELESS POS CARD TERMINAL CARD */}
            <g transform="translate(280, 45)">
              <rect x="0" y="0" width="185" height="95" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              {/* Bill leather folder */}
              <rect x="12" y="15" width="45" height="65" rx="3" fill="#1E293B" />
              <rect x="18" y="20" width="33" height="45" fill="#FFFFFF" />
              <line x1="22" y1="26" x2="45" y2="26" stroke="#64748B" strokeWidth="1.2" />
              <line x1="22" y1="32" x2="42" y2="32" stroke="#64748B" strokeWidth="1.2" />
              <line x1="22" y1="38" x2="40" y2="38" stroke="#64748B" strokeWidth="1.2" />
              <text x="22" y="55" fontSize="9" fontWeight="bold" fill="#047857">TOTAL</text>
              {/* POS Card Machine */}
              <rect x="70" y="15" width="45" height="65" rx="4" fill="#334155" stroke="#0F172A" strokeWidth="1" />
              <rect x="75" y="20" width="35" height="22" rx="2" fill="#38BDF8" />
              <circle cx="92" cy="31" r="3" fill="#22C55E" />
              {/* Contactless waves */}
              <path d="M125 35 Q135 45 125 55" stroke="#2563EB" strokeWidth="2" fill="none" />
              <path d="M130 30 Q145 45 130 60" stroke="#2563EB" strokeWidth="2" fill="none" />
              <text x="125" y="80" fontSize="9" fontWeight="bold" fill="#1E293B">💳 Tap Card</text>
            </g>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TASK 2 - SENTENCE COMPLETION SCENES (1 to 8) */}
        {/* ------------------------------------------------------------- */}

        {/* TASK 2 - Q1: TAP WATER JUG WITH SEVERAL GLASSES */}
        {taskType === 2 && questionId === 1 && (
          <g id="scene-tap-water">
            <rect x="0" y="0" width="560" height="175" fill="#E0F2FE" opacity="0.7" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="520" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* RESTAURANT TABLE WITH WATER JUG AND MULTIPLE GLASSES */}
            <g id="table-jug-setup" transform="translate(110, 60)">
              {/* Table base & top */}
              <ellipse cx="140" cy="115" rx="140" ry="24" fill="#334155" opacity="0.15" />
              <rect x="10" y="70" width="260" height="42" rx="10" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
              <rect x="15" y="74" width="250" height="34" rx="8" fill="#FFFFFF" />

              {/* Glass 1 (left) */}
              <path d="M40 65 L52 65 L50 96 L42 96 Z" fill="url(#scWaterBlue)" stroke="#0284C7" strokeWidth="1.2" opacity="0.85" />
              <line x1="41" y1="76" x2="51" y2="76" stroke="#BAE6FD" strokeWidth="1" />

              {/* Glass 2 (front-left) */}
              <path d="M68 70 L80 70 L78 101 L70 101 Z" fill="url(#scWaterBlue)" stroke="#0284C7" strokeWidth="1.2" opacity="0.85" />
              <line x1="69" y1="81" x2="79" y2="81" stroke="#BAE6FD" strokeWidth="1" />

              {/* LARGE GLASS WATER JUG (Center) */}
              <g transform="translate(110, 20)">
                {/* Jug Body */}
                <path d="M22 25 L58 25 L65 88 L15 88 Z" fill="url(#scWaterBlue)" stroke="#0284C7" strokeWidth="2" fillOpacity="0.85" />
                {/* Spout */}
                <path d="M18 25 L10 28 L17 38" fill="none" stroke="#0284C7" strokeWidth="1.8" />
                {/* Handle */}
                <path d="M58 35 Q78 55 58 75" stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Water line */}
                <ellipse cx="40" cy="38" rx="18" ry="4" fill="#BAE6FD" opacity="0.6" />
                {/* Lemon slices inside jug */}
                <circle cx="34" cy="52" r="7" fill="#FDE047" stroke="#EAB308" strokeWidth="1" />
                <circle cx="34" cy="52" r="4" fill="#FEF08A" />
                <circle cx="46" cy="70" r="6" fill="#FDE047" stroke="#EAB308" strokeWidth="1" />
                {/* Floating Ice Cubes */}
                <rect x="26" y="65" width="8" height="8" rx="1.5" fill="#FFFFFF" opacity="0.8" />
                <rect x="42" y="48" width="7" height="7" rx="1.5" fill="#FFFFFF" opacity="0.8" />
              </g>

              {/* Glass 3 (right of jug) */}
              <path d="M195 65 L207 65 L205 96 L197 96 Z" fill="url(#scWaterBlue)" stroke="#0284C7" strokeWidth="1.2" opacity="0.85" />
              <line x1="196" y1="76" x2="206" y2="76" stroke="#BAE6FD" strokeWidth="1" />

              {/* Glass 4 (far right) */}
              <path d="M225 70 L237 70 L235 101 L227 101 Z" fill="url(#scWaterBlue)" stroke="#0284C7" strokeWidth="1.2" opacity="0.85" />
              <line x1="226" y1="81" x2="236" y2="81" stroke="#BAE6FD" strokeWidth="1" />
            </g>

            {/* WAITER ON THE SIDE */}
            <g id="waiter-water" transform="translate(420, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q2: BOOK A TABLE FOR 4 AT 8:00 PM */}
        {taskType === 2 && questionId === 2 && (
          <g id="scene-book-table">
            <rect x="0" y="0" width="560" height="175" fill="#FEF3C7" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            {/* Hostess / Reception Desk */}
            <rect x="260" y="100" width="180" height="75" rx="4" fill="#78350F" />
            <rect x="250" y="90" width="200" height="14" rx="2" fill="#92400E" />

            {/* RESERVATION CALENDAR & CLOCK CARD */}
            <g transform="translate(60, 30)">
              <rect x="0" y="0" width="180" height="120" rx="12" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="156" height="26" rx="6" fill="#FEF3C7" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#92400E">📅 Table Reservation</text>
              <text x="14" y="65" fontSize="16" fontWeight="black" fill="#B45309">👥 4 People • 8:00 PM</text>
              <text x="14" y="88" fontSize="10" fontWeight="bold" fill="#0F172A">Tonight's Dinner Booking</text>
              <text x="14" y="104" fontSize="9" fill="#64748B">Evening reservation for 4 guests</text>
            </g>

            {/* WAITER / HOST WITH BOOKING TABLET */}
            <g id="host-booking" transform="translate(360, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <rect x="9" y="118" width="18" height="20" rx="2" fill="url(#scLeather)" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q3: SALAD DRESSING NUTS ALLERGEN */}
        {taskType === 2 && questionId === 3 && (
          <g id="scene-nuts-allergy">
            <rect x="0" y="0" width="560" height="175" fill="#ECFDF5" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            <g transform="translate(280, 30)">
              <rect x="0" y="0" width="200" height="120" rx="12" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="176" height="26" rx="6" fill="#FEF2F2" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#991B1B">🥗 Salad Dressing Check</text>
              <rect x="12" y="46" width="176" height="30" rx="6" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="1" />
              <text x="20" y="66" fontSize="12" fontWeight="black" fill="#BE123C">⚠️ Allergen Advisory</text>
              <text x="14" y="94" fontSize="10" fontWeight="bold" fill="#0F172A">Dietary & Ingredient Inquiry</text>
              <text x="14" y="109" fontSize="9" fill="#64748B">Checking house dressing ingredients</text>
            </g>

            {/* WAITER */}
            <g id="waiter-nuts" transform="translate(160, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q4: KEEP THE CHANGE TIP */}
        {taskType === 2 && questionId === 4 && (
          <g id="scene-keep-change-tip">
            <rect x="0" y="0" width="560" height="175" fill="#FEF3C7" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            <g transform="translate(270, 30)">
              <rect x="0" y="0" width="205" height="120" rx="12" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="181" height="26" rx="6" fill="#FFFBEB" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#92400E">✨ Gratuity & Tip</text>
              {/* Banknote & Coins visual */}
              <rect x="14" y="52" width="50" height="24" rx="2" fill="#DC2626" />
              <text x="24" y="68" fontSize="11" fontWeight="bold" fill="#FFFFFF">£50</text>
              <circle cx="82" cy="64" r="10" fill="#FBBF24" stroke="#D97706" strokeWidth="1.2" />
              <text x="78" y="68" fontSize="11" fontWeight="bold" fill="#78350F">£</text>
              <circle cx="106" cy="64" r="8" fill="#F59E0B" stroke="#B45309" strokeWidth="1.2" />
              <text x="103" y="68" fontSize="9" fontWeight="bold" fill="#451A03">£</text>
              <text x="14" y="94" fontSize="10" fontWeight="bold" fill="#0F172A">Waiter Gratuity</text>
              <text x="14" y="108" fontSize="9" fill="#047857">Leaving the returned money as a tip</text>
            </g>

            {/* WAITER SMILING GRATEFULLY */}
            <g id="waiter-tip" transform="translate(160, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q5: HEAT UP COLD SOUP */}
        {taskType === 2 && questionId === 5 && (
          <g id="scene-heat-soup">
            <rect x="0" y="0" width="560" height="175" fill="#FFF7ED" opacity="0.7" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            <g transform="translate(270, 30)">
              <rect x="0" y="0" width="205" height="120" rx="12" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="181" height="26" rx="6" fill="#FFF7ED" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#C2410C">🍲 Kitchen Warming</text>
              {/* Soup Bowl with steam */}
              <g transform="translate(14, 52)">
                <path d="M0 15 C0 30, 35 30, 35 15 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.2" />
                <ellipse cx="17.5" cy="15" rx="17.5" ry="5" fill="#FCA5A5" />
                <path d="M10 8 Q12 2 10 -2" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                <path d="M22 8 Q24 2 22 -2" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                <text x="45" y="18" fontSize="11" fontWeight="bold" fill="#EA580C">🔥 Reheat in kitchen</text>
              </g>
              <text x="14" y="94" fontSize="10" fontWeight="bold" fill="#0F172A">Cold Soup Reheat</text>
              <text x="14" y="108" fontSize="9" fill="#64748B">Polite request to warm cold soup</text>
            </g>

            {/* WAITER TAKING SOUP BOWL */}
            <g id="waiter-soup" transform="translate(160, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q6: DRESSING ON THE SIDE */}
        {taskType === 2 && questionId === 6 && (
          <g id="scene-dressing-side">
            <rect x="0" y="0" width="560" height="175" fill="#F7FEE7" opacity="0.7" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            <g transform="translate(270, 30)">
              <rect x="0" y="0" width="205" height="120" rx="12" fill="#FFFFFF" stroke="#65A30D" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="181" height="26" rx="6" fill="#F7FEE7" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#365314">🥗 Separate Serving</text>
              {/* Salad and Side Ramekin */}
              <g transform="translate(14, 52)">
                <ellipse cx="25" cy="12" rx="22" ry="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
                <ellipse cx="25" cy="12" rx="16" ry="7" fill="#22C55E" />
                <ellipse cx="65" cy="14" rx="10" ry="6" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.2" />
                <text x="85" y="18" fontSize="10" fontWeight="bold" fill="#4D7C0F">➔ Separate dish</text>
              </g>
              <text x="14" y="94" fontSize="10" fontWeight="bold" fill="#0F172A">Dressing Beside Salad</text>
              <text x="14" y="108" fontSize="9" fill="#64748B">Dressing served in a separate small bowl</text>
            </g>

            {/* WAITER */}
            <g id="waiter-dressing" transform="translate(160, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q7: DOGGY BAG (LEFTOVERS CONTAINER) */}
        {taskType === 2 && questionId === 7 && (
          <g id="scene-doggy-bag">
            <rect x="0" y="0" width="560" height="175" fill="#FEF3C7" opacity="0.6" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* Leftovers Takeaway Box & Bag Graphic Card */}
            <g transform="translate(270, 30)">
              <rect x="0" y="0" width="205" height="120" rx="12" fill="#FFFFFF" stroke="#B45309" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="181" height="26" rx="6" fill="#FEF3C7" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#78350F">🛍️ Takeaway Packaging</text>
              {/* Kraft box & takeout bag */}
              <g transform="translate(14, 52)">
                <rect x="0" y="0" width="34" height="22" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                <path d="M0 6 L17 0 L34 6" fill="#F59E0B" stroke="#92400E" strokeWidth="1" />
                {/* Takeaway bag */}
                <path d="M48 2 L68 2 L72 22 L44 22 Z" fill="#B45309" opacity="0.8" />
                <path d="M52 2 Q58 -5 64 2" stroke="#78350F" strokeWidth="1.5" fill="none" />
                <text x="80" y="16" fontSize="10" fontWeight="bold" fill="#92400E">Takeaway Box</text>
              </g>
              <text x="14" y="94" fontSize="10" fontWeight="bold" fill="#0F172A">Leftovers Packaging</text>
              <text x="14" y="108" fontSize="9" fill="#64748B">Packaging unfinished food for home</text>
            </g>

            {/* WAITER READY TO PACK */}
            <g id="waiter-doggy" transform="translate(160, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}

        {/* TASK 2 - Q8: BILL MISTAKE (ITEMIZED RECEIPT DISCREPANCY) */}
        {taskType === 2 && questionId === 8 && (
          <g id="scene-bill-mistake">
            <rect x="0" y="0" width="560" height="175" fill="#F1F5F9" opacity="0.7" />
            <rect x="0" y="175" width="560" height="75" fill="url(#scDeckFloor)" />
            <ellipse cx="40" cy="130" rx="45" ry="60" fill="url(#scBush2)" />
            <ellipse cx="500" cy="130" rx="50" ry="65" fill="url(#scBush2)" />

            {/* Bill Mistake Graphic Card */}
            <g transform="translate(260, 30)">
              <rect x="0" y="0" width="220" height="120" rx="12" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
              <rect x="12" y="12" width="196" height="26" rx="6" fill="#FFF1F2" />
              <text x="18" y="30" fontSize="12" fontWeight="bold" fill="#BE123C">🧾 Bill Discrepancy</text>
              {/* Receipt lines with red highlight */}
              <g transform="translate(14, 52)">
                <rect x="0" y="0" width="100" height="18" rx="3" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1" strokeDasharray="2,2" />
                <text x="6" y="13" fontSize="9.5" fontWeight="bold" fill="#BE123C">Extra Item (Check!)</text>
                <circle cx="85" cy="9" r="6" stroke="#E11D48" strokeWidth="1.5" fill="none" />
                <text x="110" y="13" fontSize="9.5" fontWeight="bold" fill="#475569">£16.00</text>
              </g>
              <text x="14" y="94" fontSize="10" fontWeight="bold" fill="#0F172A">Itemized Bill Review</text>
              <text x="14" y="108" fontSize="9" fill="#64748B">Diplomatic inquiry for an overcharge</text>
            </g>

            {/* WAITER APOLOGIZING AND CHECKING RECEIPT */}
            <g id="waiter-bill-check" transform="translate(150, 25)" className="anim-waiter-bob">
              <line x1="20" y1="140" x2="17" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="140" x2="41" y2="200" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 62 L52 62 L55 120 L3 120 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
              <polygon points="26,68 31,68 33,110 29,115 25,110" fill="#381D0E" />
              <rect x="5" y="112" width="46" height="42" rx="2" fill="#0F172A" />
              <ellipse cx="28" cy="38" rx="14" ry="15" fill="#FED7AA" />
              <path d="M14 34 C14 15, 42 15, 42 34 Z" fill="#291409" />
              <rect x="17" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <rect x="29.5" y="32" width="9.5" height="6.5" rx="1.8" fill="#FFFFFF" fillOpacity="0.3" stroke="#1E293B" strokeWidth="1.4" />
              <line x1="26.5" y1="35" x2="29.5" y2="35" stroke="#1E293B" strokeWidth="1.4" />
              {isSpeaking ? (
                <path d="M22 43 Q28 50 34 43 Z" fill="#991B1B" className="anim-waiter-mouth-active" />
              ) : (
                <path d="M22 43 Q28 48 34 43" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              )}
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
