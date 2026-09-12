import React, { useState } from 'react';
import { Play, Pause, Sparkles, Volume2, Shield, Radio, Check, Cpu } from 'lucide-react';
import { VOICE_PERSONAS } from '../data/voiceSamples';
import { voiceAudioEngine } from '../utils/audioPlayer';

export const VoiceModelsShowcase: React.FC = () => {
  const [playingPersonaId, setPlayingPersonaId] = useState<string | null>(null);

  const handleTestVoice = (id: string, name: string, accent: string) => {
    if (playingPersonaId === id) {
      voiceAudioEngine.stopSpeaking();
      setPlayingPersonaId(null);
      return;
    }

    setPlayingPersonaId(id);
    voiceAudioEngine.initContext();
    voiceAudioEngine.playSubtleChime(480, 160);

    const sampleText = `Hello! I am ${name}. I am engineered by VHGlobals to conduct fluent, ultra-low latency voice calls for your enterprise with sub-second response times.`;
    voiceAudioEngine.speakText(sampleText, 'agent', accent, () => {
      setPlayingPersonaId(null);
    });
  };

  return (
    <section id="voice-models" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 text-[#1b7494] text-xs font-bold tracking-wide uppercase mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>Voice Personalities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Voice Personas for Every Brand Voice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose from pre-calibrated neural voice models or clone your top executive's tone.
            Each persona is optimized for emotional intelligence, clear diction, and natural cadence.
          </p>
        </div>

        {/* 4 Voice Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VOICE_PERSONAS.map((persona) => {
            const isPlaying = playingPersonaId === persona.id;
            return (
              <div
                key={persona.id}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isPlaying ? 'border-[#2596be] ring-2 ring-[#2596be]/20' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#2596be]/10 text-[#1b7494]">
                      {persona.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {persona.gender}
                    </span>
                  </div>

                  {/* Avatar circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2596be] to-[#51b6d9] text-white flex items-center justify-center font-black text-2xl shadow-sm mb-4">
                    {persona.name[0]}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {persona.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#2596be] mt-0.5 mb-2">
                    {persona.accent}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {persona.toneDescription}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
                      Recommended For:
                    </div>
                    <div className="text-xs font-medium text-slate-800">
                      {persona.idealFor}
                    </div>
                  </div>
                </div>

                {/* Listen button */}
                <button
                  onClick={() => handleTestVoice(persona.id, persona.name, persona.accent)}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-[#1b7494] text-white'
                      : 'bg-[#2596be]/10 text-[#1b7494] hover:bg-[#2596be] hover:text-white'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Stop Playing</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Hear Sample Voice</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Technical Pipeline Architecture */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#2596be] uppercase tracking-wider">
              Under The Hood
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              The Sub-350ms Speech-to-Speech Pipeline
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Continuous streaming pipeline delivers human-like conversational turn-taking with zero perceivable delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#2596be] text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  ~50ms
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Real-Time Acoustic STT</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Streamed audio frames are transcribed token-by-token with dialect-aware acoustic normalization and background noise cancellation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#2596be] text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  ~140ms
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Deterministic LLM Reasoning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast reasoning engine processes intent, queries enterprise tools (calendars, CRM, database APIs), and initiates warm streaming generation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#2596be] text-white flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  ~90ms
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Neural Audio Synthesis & Delivery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tokens convert directly into high-fidelity 48kHz audio streams dispatched over low-latency SIP or WebRTC telephony pipelines.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
