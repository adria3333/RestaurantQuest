export interface DialogueOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanationEn: string;
  explanationHu: string;
  toneNote?: string;
}

export interface DialogueQuestion {
  id: number;
  scenario: string;
  scenarioHu: string;
  waiterText: string;
  waiterTranslationHu: string;
  options: DialogueOption[];
  category: 'booking' | 'ordering' | 'special_requests' | 'complaints' | 'paying';
  tipsEn: string;
  tipsHu: string;
}

export interface CompletionDropdownOption {
  id: string;
  value: string;
  labelEn: string;
  labelHu: string;
  isCorrect: boolean;
  type: 'correct' | 'similar' | 'acceptable_unmatching' | 'incorrect';
  explanationEn: string;
  explanationHu: string;
}

export interface CompletionQuestion {
  id: number;
  sentenceBefore: string;
  blankPlaceholder: string;
  sentenceAfter: string;
  correctAnswer: string;
  targetAnswers: string[];
  options: CompletionDropdownOption[];
  pictureLabelEn: string;
  pictureLabelHu: string;
  hintEn: string;
  hintHu: string;
  fullSentence: string;
  explanationEn: string;
  explanationHu: string;
  category: 'vocabulary' | 'politeness' | 'complaints' | 'paying';
}

export interface WordOption {
  id: string;
  wordEn: string;
  meaningHu: string;
  isCorrect: boolean;
  explanationEn: string;
  explanationHu: string;
}

export interface WordQuestion {
  id: number;
  wordEn: string;
  phonetic?: string;
  meaningHu: string;
  category: 'cutlery' | 'drinks' | 'food_service' | 'bill_money' | 'cooking' | 'tableware';
  exampleSentenceEn: string;
  exampleSentenceHu: string;
  iconType: string;
  promptQuestionEn: string;
  promptQuestionHu: string;
  options: WordOption[];
  funFactEn?: string;
}

export interface PhraseOption {
  id: string;
  phraseEn: string;
  meaningHu: string;
  isCorrect: boolean;
  explanationEn: string;
  explanationHu: string;
}

export interface PhraseQuestion {
  id: number;
  phraseEn: string;
  meaningHu: string;
  situationEn: string;
  situationHu: string;
  category: 'ordering' | 'polite_request' | 'paying' | 'dietary' | 'arrival';
  options: PhraseOption[];
  dialoguePreviewEn: string;
  dialoguePreviewHu: string;
}

export interface RooftopDish {
  id: string;
  nameEn: string;
  nameHu: string;
  descriptionEn: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'drink';
  emoji: string;
  dietary?: string;
}

export interface UserAnswerRecord {
  taskId: 0 | 1 | 2 | 3;
  floorName?: string;
  questionId: number;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrectFirstTry: boolean;
  attempts: number;
  explanation: string;
  category: string;
}

export interface GameStats {
  score: number;
  walletDollars: number;
  totalAnswered: number;
  firstTryCorrect: number;
  currentStreak: number;
  maxStreak: number;
  history: UserAnswerRecord[];
  floorLevel?: number;
}

export type FloorLevel = 0 | 1 | 2 | 3 | 4;
// 0: Ground Floor - WORDS
// 1: 1st Floor - PHRASES
// 2: 2nd Floor - SENTENCES
// 3: 3rd Floor - CONVERSATION
// 4: Top Floor - ROOFTOP DINING
