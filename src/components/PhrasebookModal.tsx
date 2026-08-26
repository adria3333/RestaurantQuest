import React, { useState } from 'react';
import { PHRASEBOOK_DATA } from '../data/phrasebookData';
import { X, Volume2, Search, Sparkles, BookOpen } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

interface PhrasebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'hu' | 'en';
}

export const PhrasebookModal: React.FC<PhrasebookModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const filteredCategories = PHRASEBOOK_DATA.map((cat) => {
    const matchingPhrases = cat.phrases.filter(
      (p) =>
        p.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.hu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.context.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, phrases: matchingPhrases };
  }).filter(
    (cat) =>
      (selectedCategory === 'all' || cat.category === selectedCategory) &&
      cat.phrases.length > 0
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        id="phrasebook-modal-card"
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-3xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                {lang === 'hu' ? 'B1–B2 Éttermi Kifejezéstár & Kisokos' : 'B1–B2 Restaurant Phrasebook & Guide'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'hu' ? 'Hasznos kifejezések és udvarias fordulatok' : 'Essential expressions and polite dining idioms'}
              </p>
            </div>
          </div>

          <button
            id="btn-close-phrasebook"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 sm:px-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'hu' ? 'Keresés kifejezések között (angolul vagy magyarul)...' : 'Search phrases (English or Hungarian)...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 dark:text-slate-200"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {lang === 'hu' ? 'Összes kategória' : 'All Categories'}
            </button>
            {PHRASEBOOK_DATA.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {lang === 'hu' ? cat.categoryHu : cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Phrases List Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              {lang === 'hu' ? 'Nincs találat a keresési feltételekre.' : 'No phrases match your search.'}
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.category} className="space-y-3">
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span>{lang === 'hu' ? cat.categoryHu : cat.category}</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {cat.phrases.map((phrase, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-3 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                            {phrase.level}
                          </span>
                          <span className="text-xs text-slate-400">
                            {phrase.context}
                          </span>
                        </div>
                        <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                          {phrase.en}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          💡 {phrase.hu}
                        </p>
                      </div>

                      <button
                        onClick={() => speakEnglish(phrase.en, 'customer')}
                        className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 shadow-sm border border-slate-200 dark:border-slate-700 shrink-0"
                        title="Listen to pronunciation"
                        aria-label="Listen to pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            {lang === 'hu' ? 'Bezárás' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
