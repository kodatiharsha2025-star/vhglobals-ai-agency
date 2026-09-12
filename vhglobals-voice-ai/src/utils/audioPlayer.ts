// Audio simulation and Web Audio / SpeechSynthesis synthesis utility

class VoiceAudioEngine {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTurnIndex: number = -1;
  private playbackRate: number = 1.0;
  private volume: number = 0.8;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private intervalId: number | null = null;
  private oscillatorNode: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  public initContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Plays a procedural soft acoustic chime/carrier tone when starting or transitioning turns
  public playSubtleChime(frequency: number = 440, durationMs: number = 200) {
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.25, this.audioCtx.currentTime + (durationMs / 1000));

      gain.gain.setValueAtTime(this.volume * 0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + (durationMs / 1000));

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + (durationMs / 1000));
    } catch {
      // AudioContext might be restricted without user interaction
    }
  }

  // Synthesize conversational voice using SpeechSynthesis if available
  public speakText(text: string, speaker: 'agent' | 'customer', accent: string, onEnd?: () => void) {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      if (onEnd) onEnd();
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      utterance.rate = speaker === 'agent' ? 1.05 * this.playbackRate : 1.0 * this.playbackRate;
      utterance.volume = this.volume;

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        if (speaker === 'agent') {
          // Attempt to match accent
          if (accent.includes('British')) {
            const gbVoice = voices.find(v => v.lang.includes('GB') || v.lang.includes('en-GB'));
            if (gbVoice) utterance.voice = gbVoice;
          } else {
            const usVoice = voices.find(v => v.lang.includes('US') || v.name.includes('Natural') || v.name.includes('Google'));
            if (usVoice) utterance.voice = usVoice;
          }
          utterance.pitch = 1.05;
        } else {
          // Customer voice
          const altVoice = voices.find(v => v.name.includes('David') || v.name.includes('Alex') || v.name.includes('Guy') || v.lang.includes('en'));
          if (altVoice) utterance.voice = altVoice;
          utterance.pitch = 0.95;
        }
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }

  public stopSpeaking() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (this.oscillatorNode) {
      try {
        this.oscillatorNode.stop();
      } catch {
        // ignore
      }
      this.oscillatorNode = null;
    }
  }

  public setPlaybackRate(rate: number) {
    this.playbackRate = rate;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }
}

export const voiceAudioEngine = new VoiceAudioEngine();
