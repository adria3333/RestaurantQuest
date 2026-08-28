import React from 'react';
import { Volume2, VolumeX, BookOpen, RotateCcw, Languages, Home, Database } from 'lucide-react';

interface HeaderProps {
  lang: 'hu' | 'en';
  setLang: (lang: 'hu' | 'en') => void;
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  onOpenPhrasebook: () => void;
  onOpenSupabaseSync?: () => void;
  onReset: () => void;
  onGoHome?: () => void;
  isAtHome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  audioEnabled,
  setAudioEnabled,
  onOpenPhrasebook,
  onOpenSupabaseSync,
  onReset,
  onGoHome,
  isAtHome = false
}) => {
  return (
    <header id="app-header" className="w-full bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Badge (clickable to go Home) */}
        <div
          onClick={onGoHome}
          className={`flex items-center gap-3 ${onGoHome ? 'cursor-pointer group' : ''}`}
          title={lang === 'hu' ? 'Vissza a nyitóképernyőre' : 'Go back to starter screen'}
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shadow-inner group-hover:scale-105 transition-transform">
            🍽️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                Restaurant Quest
              </h1>
              <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">
                B1–B2
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {lang === 'hu'
                ? 'Éttermi angol párbeszédek és szókincs'
                : 'English restaurant dialogues & vocabulary'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Back to Home / Tasks Button if currently in a task */}
          {!isAtHome && onGoHome && (
            <button
              id="btn-header-home"
              onClick={onGoHome}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-700 text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1.5"
              title={lang === 'hu' ? 'Vissza a feladatválasztóhoz' : 'Back to Tasks Menu'}
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'hu' ? 'Feladatok' : 'Tasks'}</span>
            </button>
          )}

          {/* Supabase Database Sync Button */}
          {onOpenSupabaseSync && (
            <button
              id="btn-open-supabase-sync"
              onClick={onOpenSupabaseSync}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 transition-all flex items-center gap-1.5 shadow-xs"
              title="Supabase Adatbázis & Ranglista"
            >
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Supabase</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          )}

          {/* Audio TTS toggle */}
          <button
            id="btn-toggle-audio"
            onClick={() => setAudioEnabled(!audioEnabled)}
            className={`p-2 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
              audioEnabled
                ? 'bg-emerald-950/60 border-emerald-600/50 text-emerald-300 hover:bg-emerald-900/60'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
            }`}
            title={audioEnabled ? (lang === 'hu' ? 'Hang bekapcsolva (TTS)' : 'Voice audio on') : (lang === 'hu' ? 'Hang kikapcsolva' : 'Voice audio off')}
            aria-label="Toggle audio speech"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            <span className="hidden md:inline">{audioEnabled ? 'Audio ON' : 'Audio OFF'}</span>
          </button>

          {/* Phrasebook modal button */}
          <button
            id="btn-open-phrasebook"
            onClick={onOpenPhrasebook}
            className="p-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 transition-colors flex items-center gap-1.5"
            title={lang === 'hu' ? 'Kifejezéstár megnyitása' : 'Open Restaurant Phrasebook'}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{lang === 'hu' ? 'Kifejezéstár' : 'Phrasebook'}</span>
          </button>

          {/* Language toggle button */}
          <button
            id="btn-toggle-language"
            onClick={() => setLang(lang === 'hu' ? 'en' : 'hu')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors flex items-center gap-1"
            title="Váltás magyar / angol magyarázatok között"
          >
            <Languages className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang === 'hu' ? 'HU / EN' : 'EN / HU'}</span>
          </button>

          {/* Reset button */}
          <button
            id="btn-reset-game"
            onClick={onReset}
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
            title={lang === 'hu' ? 'Újrakezdés' : 'Reset progress'}
            aria-label="Reset game"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

