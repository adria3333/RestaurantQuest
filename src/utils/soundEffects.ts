import { speakEnglish, EnglishAccent, stopSpeaking } from './speech';

/**
 * Standard sound and speech synthesis wrapper for interactive floors
 */
export function speakText(
  text: string,
  accent: 'UK' | 'US' = 'UK',
  voiceType: 'waiter' | 'customer' = 'customer',
  onEnd?: () => void
) {
  const normAccent: EnglishAccent = accent.toLowerCase() === 'us' ? 'us' : 'uk';
  speakEnglish(text, voiceType, normAccent, onEnd);
}

export { stopSpeaking };
