import React from 'react';
import { UtensilsCrossed, MessageCircle, Sparkles, Sun } from 'lucide-react';

interface HeroBannerProps {
  lang: 'hu' | 'en';
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ lang }) => {
  return (
    <div
      id="restaurant-hero-banner"
      className="w-full relative overflow-hidden rounded-3xl mb-6 shadow-md border border-emerald-200/80 dark:border-slate-800 bg-gradient-to-br from-emerald-50/70 via-amber-50/50 to-teal-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-emerald-950/40 p-4 sm:p-6"
    >
      {/* Decorative top badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-600/15 border border-emerald-600/30 text-emerald-900 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>{lang === 'hu' ? 'Kerti teraszos éttermi szituáció' : 'Terrace Garden Dining'}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-semibold">
            <Sun className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            <span>{lang === 'hu' ? 'Élő párbeszéd & Rendelés' : 'Live Dialogue & Ordering'}</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
          <MessageCircle className="w-3.5 h-3.5 text-indigo-500" />
          <span>{lang === 'hu' ? 'B1–B2 Szókincs & Etikett' : 'B1–B2 Vocabulary & Etiquette'}</span>
        </div>
      </div>

      {/* Main Content Layout: Faithful Vector Illustration & Welcoming Intro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left Side: Description & Header */}
        <div className="md:col-span-5 text-left pr-0 md:pr-2">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>{lang === 'hu' ? 'Párbeszéd a felszolgálóval' : 'Dialogue with the Waiter'}</span>
            <span className="text-emerald-600 dark:text-emerald-400">🌿</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
            {lang === 'hu'
              ? 'Gyakorold az angol kifejezéseket asztalfoglalástól, teraszos helyválasztástól és digitális rendeléstől a számla rendezéséig!'
              : 'Master conversational English: garden table seating, ordering with digital tablets, steaks, dietary needs, and splitting the bill!'}
          </p>

          <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{lang === 'hu' ? '10 szituációs dialógus + 8 mondatkiegészítés' : '10 Dialogue Scenarios + 8 Sentence Completions'}</span>
          </div>
        </div>

        {/* Right Side: Outdoor Restaurant Terrace Illustration based on user's image */}
        <div className="md:col-span-7 relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-100/80 via-emerald-50/60 to-amber-50/50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 border border-emerald-200/90 dark:border-slate-700 shadow-inner flex items-center justify-center p-1 sm:p-2">
          <svg
            viewBox="0 0 720 340"
            className="w-full h-full object-contain"
            aria-label="Garden terrace restaurant where a smiling waiter in glasses, white polo, tie and black apron with leather pocket takes orders from seated guests"
          >
            <defs>
              <linearGradient id="terraceBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="60%" stopColor="#DCFCE7" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="deckFloor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C2885B" />
                <stop offset="100%" stopColor="#9A6239" />
              </linearGradient>
              <linearGradient id="bushGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ADE80" />
                <stop offset="100%" stopColor="#15803D" />
              </linearGradient>
              <linearGradient id="bushGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="leatherPocket" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="awningGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>

            {/* Background Sky & Terrace Wall */}
            <rect x="0" y="0" width="720" height="230" fill="url(#terraceBg)" />
            {/* Wooden Terrace Decking */}
            <rect x="0" y="230" width="720" height="110" fill="url(#deckFloor)" />

            {/* Decking Planks */}
            <line x1="0" y1="265" x2="720" y2="265" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />
            <line x1="0" y1="300" x2="720" y2="300" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />

            {/* Bistro Dark Canopy Awning (Top Center-Left) */}
            <path d="M160 0 L580 0 L560 55 L180 55 Z" fill="url(#awningGrad)" opacity="0.9" />
            <text x="370" y="36" fill="#FDE68A" fontSize="13" fontWeight="bold" letterSpacing="3" textAnchor="middle" fontFamily="sans-serif">
              BISTRO &amp; GARDEN
            </text>

            {/* Lush Outdoor Greenery & Topiary Bushes (Left, Background & Right) */}
            {/* Left background bushes */}
            <g id="left-bushes">
              <ellipse cx="60" cy="180" rx="65" ry="85" fill="url(#bushGrad2)" />
              <ellipse cx="120" cy="190" rx="55" ry="75" fill="url(#bushGrad1)" />
              <ellipse cx="40" cy="140" rx="45" ry="60" fill="url(#bushGrad1)" />
              {/* Topiary sphere on stick */}
              <rect x="180" y="90" width="6" height="110" fill="#451A03" />
              <circle cx="183" cy="90" r="30" fill="url(#bushGrad2)" />
              <circle cx="183" cy="90" r="22" fill="url(#bushGrad1)" />
            </g>

            {/* Right background bushes & topiary */}
            <g id="right-bushes">
              <ellipse cx="650" cy="180" rx="70" ry="90" fill="url(#bushGrad2)" />
              <ellipse cx="590" cy="190" rx="50" ry="70" fill="url(#bushGrad1)" />
              <ellipse cx="680" cy="130" rx="50" ry="65" fill="url(#bushGrad1)" />
              {/* Topiary sphere on stick */}
              <rect x="540" y="80" width="6" height="120" fill="#451A03" />
              <circle cx="543" cy="80" r="32" fill="url(#bushGrad2)" />
              <circle cx="543" cy="80" r="24" fill="url(#bushGrad1)" />
            </g>

            {/* Background Bokeh & Warm Lights */}
            <circle cx="280" cy="65" r="8" fill="#FEF08A" fillOpacity="0.6" />
            <circle cx="480" cy="65" r="8" fill="#FEF08A" fillOpacity="0.6" />
            <circle cx="380" cy="75" r="6" fill="#FEF08A" fillOpacity="0.5" />

            {/* MAIN TERRACE TABLE (Dark Modern Bistro Table) */}
            <g id="terrace-table">
              {/* Table Legs */}
              <rect x="335" y="240" width="16" height="70" fill="#0F172A" rx="2" />
              <ellipse cx="343" cy="310" rx="42" ry="10" fill="#020617" />
              {/* Table Top (Dark Charcoal) */}
              <ellipse cx="343" cy="240" rx="125" ry="32" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
              {/* Table Mat / Menu on table */}
              <rect x="300" y="230" width="45" height="14" rx="2" fill="#334155" transform="rotate(-5, 320, 235)" />
              <circle cx="375" cy="235" r="5" fill="#E2E8F0" />
            </g>

            {/* CUSTOMER 1 (Left - Young Man in Light Blue Shirt with Glasses) */}
            <g id="customer-man" transform="translate(145, 125)">
              {/* Modern Chair */}
              <path d="M45 75 C45 45, 20 50, 15 80 L20 150 L50 150 Z" fill="#334155" />
              <line x1="20" y1="150" x2="15" y2="185" stroke="#0F172A" strokeWidth="4" />
              <line x1="45" y1="150" x2="45" y2="185" stroke="#0F172A" strokeWidth="4" />

              {/* Blue Shirt Body */}
              <path d="M50 72 C60 55, 105 58, 115 75 L125 140 L45 140 Z" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1.5" />
              {/* Blue Shirt Collar */}
              <polygon points="100,68 114,80 102,82" fill="#BFDBFE" />
              <polygon points="112,68 126,80 114,82" fill="#BFDBFE" />

              {/* Arm holding White Menu Sheet */}
              <path d="M75 80 L130 95 L145 110" stroke="#93C5FD" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <ellipse cx="145" cy="110" rx="6" ry="6" fill="#FCD34D" />
              {/* White Menu booklet held in hand */}
              <polygon points="135,80 162,105 152,125 125,98" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
              <line x1="138" y1="90" x2="152" y2="102" stroke="#94A3B8" strokeWidth="1.2" />
              <line x1="135" y1="98" x2="148" y2="110" stroke="#94A3B8" strokeWidth="1.2" />

              {/* Head & Hair */}
              <circle cx="95" cy="40" r="18" fill="#FED7AA" />
              {/* Short Dark Brown Hair */}
              <path d="M78 36 C78 16, 114 16, 114 36 C114 26, 85 26, 78 36 Z" fill="#291409" />
              <path d="M78 34 L78 45 L85 36 Z" fill="#291409" />

              {/* Glasses (Dark Rectangular Frame) */}
              <rect x="94" y="34" width="14" height="9" rx="2" fill="#FFFFFF" fillOpacity="0.4" stroke="#1E293B" strokeWidth="1.8" />
              <line x1="88" y1="38" x2="94" y2="38" stroke="#1E293B" strokeWidth="1.8" />
              <line x1="108" y1="38" x2="114" y2="36" stroke="#1E293B" strokeWidth="1.5" />

              {/* Smiling Face looking at Waiter */}
              <circle cx="102" cy="38" r="1.8" fill="#1E293B" />
              <path d="M102 46 Q108 51 114 47" stroke="#991B1B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </g>

            {/* CUSTOMER 2 (Right - Smiling Blonde Woman in Peach/Pink Cardigan) */}
            <g id="customer-woman" transform="translate(460, 135)">
              {/* Modern Chair */}
              <path d="M85 70 C85 40, 110 45, 115 75 L110 140 L80 140 Z" fill="#334155" />
              <line x1="85" y1="140" x2="85" y2="175" stroke="#0F172A" strokeWidth="4" />
              <line x1="110" y1="140" x2="110" y2="175" stroke="#0F172A" strokeWidth="4" />

              {/* Peach Cardigan & White Top */}
              <path d="M20 70 C30 50, 75 50, 85 70 L90 135 L15 135 Z" fill="#FECDD3" stroke="#FDA4AF" strokeWidth="1.5" />
              <path d="M40 65 L65 65 L60 100 L45 100 Z" fill="#FFFFFF" />

              {/* Arms on Table with Watch */}
              <path d="M35 75 L-10 105 L-25 100" stroke="#FECDD3" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="-25" cy="100" r="5" fill="#FCD34D" />
              {/* Silver Watch */}
              <rect x="-18" y="96" width="4" height="8" rx="1" fill="#94A3B8" />

              {/* Head & Long Golden Blonde Hair */}
              {/* Back Hair */}
              <path d="M40 32 C40 10, 82 10, 82 32 C82 55, 92 85, 82 95 C75 80, 80 50, 78 32 Z" fill="#FDE047" />
              {/* Face */}
              <circle cx="52" cy="36" r="17" fill="#FED7AA" />
              {/* Front Hair Flow */}
              <path d="M36 30 C36 12, 72 12, 72 30 C65 20, 42 20, 36 30 Z" fill="#FACC15" />
              <path d="M64 26 C68 40, 72 65, 68 75 C64 65, 62 45, 64 26 Z" fill="#FACC15" />

              {/* Friendly Eyes & Warm Smile looking up at Waiter */}
              <circle cx="45" cy="34" r="1.8" fill="#1E293B" />
              <path d="M41 43 Q47 48 53 44" stroke="#DC2626" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <circle cx="42" cy="39" r="3" fill="#F87171" fillOpacity="0.5" />
            </g>

            {/* WAITER (Center - Stylish young man with glasses, white polo, tie, apron with leather pocket & tablet) */}
            <g id="waiter-main-figure" transform="translate(325, 45)">
              {/* Legs / Black Trousers */}
              <line x1="26" y1="180" x2="22" y2="255" stroke="#0F172A" strokeWidth="10" strokeLinecap="round" />
              <line x1="48" y1="180" x2="52" y2="255" stroke="#0F172A" strokeWidth="10" strokeLinecap="round" />
              {/* Black Leather Shoes */}
              <ellipse cx="18" cy="257" rx="10" ry="5" fill="#0F172A" />
              <ellipse cx="56" cy="257" rx="10" ry="5" fill="#0F172A" />

              {/* Crisp White Polo Shirt with short sleeves */}
              <path d="M10 80 L64 80 L68 155 L6 155 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* White Shirt Collar */}
              <polygon points="26,78 37,92 37,78" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
              <polygon points="48,78 37,92 37,78" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />

              {/* Slim Dark Brown Necktie */}
              <polygon points="34,88 40,88 42,142 37,148 32,142" fill="#381D0E" />

              {/* Black Half-Waist Apron */}
              <rect x="8" y="145" width="58" height="55" rx="3" fill="#0F172A" />
              <line x1="4" y1="145" x2="70" y2="145" stroke="#1E293B" strokeWidth="3" />

              {/* Tan/Cognac Leather Utility Pocket on Apron (Matching photo) */}
              <rect x="14" y="152" width="22" height="28" rx="3" fill="url(#leatherPocket)" stroke="#78350F" strokeWidth="1.2" />
              <line x1="14" y1="158" x2="36" y2="158" stroke="#78350F" strokeWidth="1" strokeDasharray="2,2" />

              {/* Waiter Head & Neck */}
              <rect x="31" y="65" width="12" height="15" fill="#FED7AA" />
              <ellipse cx="37" cy="48" rx="17" ry="19" fill="#FED7AA" />

              {/* Stylish Short Dark Hair & Stubble */}
              <path d="M20 44 C20 20, 54 20, 54 44 C50 30, 24 30, 20 44 Z" fill="#291409" />
              <path d="M20 40 L20 52 L24 45 Z" fill="#291409" />
              {/* Light Beard/Stubble outline */}
              <path d="M25 54 Q37 66 49 54" stroke="#78350F" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />

              {/* Stylish Tortoiseshell / Dark Glasses (Matching photo) */}
              <rect x="23" y="42" width="12" height="8" rx="2" fill="#FFFFFF" fillOpacity="0.4" stroke="#291409" strokeWidth="1.6" />
              <rect x="39" y="42" width="12" height="8" rx="2" fill="#FFFFFF" fillOpacity="0.4" stroke="#291409" strokeWidth="1.6" />
              <line x1="35" y1="45" x2="39" y2="45" stroke="#291409" strokeWidth="1.6" />
              <line x1="20" y1="44" x2="23" y2="44" stroke="#291409" strokeWidth="1.2" />
              <line x1="51" y1="44" x2="54" y2="44" stroke="#291409" strokeWidth="1.2" />

              {/* Friendly Smiling Eyes & Broad Smile */}
              <circle cx="29" cy="46" r="1.6" fill="#1E293B" />
              <circle cx="45" cy="46" r="1.6" fill="#1E293B" />
              <path d="M29 55 Q37 62 45 55" stroke="#991B1B" strokeWidth="2.2" fill="#FFFFFF" strokeLinecap="round" />
              {/* Cheeks */}
              <circle cx="24" cy="52" r="3" fill="#F87171" fillOpacity="0.5" />
              <circle cx="50" cy="52" r="3" fill="#F87171" fillOpacity="0.5" />

              {/* Arms holding the Digital Ordering Tablet */}
              {/* Left Arm */}
              <path d="M12 85 L-2 115 L20 128" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              {/* Right Arm */}
              <path d="M62 85 L76 115 L52 128" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              {/* Black Wristband on arm */}
              <rect x="14" y="122" width="5" height="7" rx="1" fill="#0F172A" />

              {/* Modern Slim Digital Tablet / Order Pad (Holding in both hands) */}
              <g transform="translate(16, 118)">
                <rect x="0" y="0" width="42" height="26" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="2" y="2" width="38" height="22" rx="2" fill="#38BDF8" fillOpacity="0.9" />
                {/* Order lines on tablet screen */}
                <line x1="6" y1="8" x2="24" y2="8" stroke="#0369A1" strokeWidth="1.5" />
                <line x1="6" y1="13" x2="30" y2="13" stroke="#0369A1" strokeWidth="1.5" />
                <line x1="6" y1="18" x2="18" y2="18" stroke="#0369A1" strokeWidth="1.5" />
                <circle cx="33" cy="18" r="3" fill="#22C55E" />
              </g>

              {/* Waiter Hands grasping tablet */}
              <circle cx="17" cy="130" r="4.5" fill="#FED7AA" />
              <circle cx="57" cy="130" r="4.5" fill="#FED7AA" />
            </g>

            {/* Cheerful Dialogue Speech Bubble */}
            <g transform="translate(245, 12)">
              <rect x="0" y="0" width="245" height="38" rx="12" fill="#FFFFFF" stroke="#059669" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))" />
              <polygon points="120,38 135,48 128,38" fill="#FFFFFF" />
              <polygon points="120,38 135,48 128,38" stroke="#059669" strokeWidth="2" fill="#FFFFFF" />
              <rect x="119" y="35" width="10" height="4" fill="#FFFFFF" />

              <text x="122" y="17" fill="#065F46" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                {lang === 'hu' ? '„Good afternoon! May I take your order?”' : '"Good afternoon! May I take your order?"'}
              </text>
              <text x="122" y="30" fill="#4B5563" fontSize="8.5" textAnchor="middle" fontFamily="sans-serif">
                {lang === 'hu' ? '🌿 Kerti teraszos életszerű párbeszédek' : '🌿 Authentic terrace dining English'}
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
