/**
 * Speech synthesis utility for native browser Text-To-Speech
 * with active speaking state listener callbacks.
 */

type SpeechListener = (speaking: boolean) => void;
const listeners = new Set<SpeechListener>();

export function subscribeSpeechState(listener: SpeechListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notifySpeechState(speaking: boolean) {
  listeners.forEach((fn) => {
    try {
      fn(speaking);
    } catch {
      // ignore
    }
  });
}

export type EnglishAccent = 'uk' | 'us';

export function speakEnglish(
  text: string,
  voiceType: 'waiter' | 'customer' = 'customer',
  accent: EnglishAccent = 'uk',
  onEndCallback?: () => void
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel(); // Stop any currently playing audio

  const cleanText = text.replace(/["*_]/g, '').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = accent === 'us' ? 'en-US' : 'en-GB';

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    if (accent === 'uk') {
      const preferredUkVoice = voices.find(
        (v) =>
          (v.lang === 'en-GB' || v.lang.replace('_', '-').startsWith('en-GB') || v.name.toLowerCase().includes('united kingdom') || v.name.toLowerCase().includes('british')) &&
          (v.name.includes('Natural') ||
            v.name.includes('Google') ||
            v.name.includes('Daniel') ||
            v.name.includes('George') ||
            v.name.includes('Oliver') ||
            v.name.includes('Serena') ||
            v.name.includes('Stephanie') ||
            v.name.includes('Kate'))
      ) || voices.find((v) => v.lang === 'en-GB' || v.lang.replace('_', '-').startsWith('en-GB'));

      if (preferredUkVoice) {
        utterance.voice = preferredUkVoice;
      }
      utterance.pitch = voiceType === 'waiter' ? 0.95 : 1.02;
      utterance.rate = 0.93; // slightly clear for learners
    } else {
      // US Accent - Prioritize Natural, Neural, Online, Google, and high-fidelity system voices
      const usVoices = voices.filter(
        (v) =>
          v.lang === 'en-US' ||
          v.lang.replace('_', '-').startsWith('en-US') ||
          v.name.toLowerCase().includes('united states') ||
          v.name.toLowerCase().includes('us english')
      );

      const preferredUsVoice =
        usVoices.find((v) => {
          const name = v.name.toLowerCase();
          return (
            name.includes('natural') ||
            name.includes('neural') ||
            name.includes('online') ||
            name.includes('premium') ||
            name.includes('enhanced')
          );
        }) ||
        usVoices.find((v) => {
          const name = v.name.toLowerCase();
          return (
            name.includes('google us english') ||
            name.includes('samantha') ||
            name.includes('ava') ||
            name.includes('jenny') ||
            name.includes('aria') ||
            name.includes('guy') ||
            name.includes('christopher') ||
            name.includes('alex') ||
            name.includes('allison') ||
            name.includes('tom')
          );
        }) ||
        usVoices[0] ||
        voices.find((v) => v.lang.startsWith('en'));

      if (preferredUsVoice) {
        utterance.voice = preferredUsVoice;
      }
      utterance.pitch = 1.0; // Natural, realistic pitch without artificial raising
      utterance.rate = 0.94; // Clear, natural cadence for ESL learners
    }
  }

  utterance.onstart = () => {
    notifySpeechState(true);
  };

  utterance.onend = () => {
    notifySpeechState(false);
    onEndCallback?.();
  };

  utterance.onerror = () => {
    notifySpeechState(false);
  };

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    notifySpeechState(false);
  }
}
