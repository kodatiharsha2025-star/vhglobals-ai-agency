import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Zap, MessageSquare, ArrowRight, CheckCircle2, User, Bot, Clock, Sliders } from 'lucide-react';
import { SAMPLE_CALLS, VOICE_PERSONAS } from '../data/voiceSamples';
import { VoiceSampleCall, TranscriptTurn } from '../types';
import { voiceAudioEngine } from '../utils/audioPlayer';

interface InteractiveVoiceDemoProps {
  onOpenOnboarding: () => void;
}

export const InteractiveVoiceDemo: React.FC<InteractiveVoiceDemoProps> = ({ onOpenOnboarding }) => {
  const [selectedCallId, setSelectedCallId] = useState<string>(SAMPLE_CALLS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [activeTurnIndex, setActiveTurnIndex] = useState<number>(0);

  // Custom live playground state
  const [customPrompt, setCustomPrompt] = useState<string>('Do you support Spanish and multilingual callers?');
  const [customAgentId, setCustomAgentId] = useState<string>('emma');
  const [isSynthesizingPrompt, setIsSynthesizingPrompt] = useState<boolean>(false);
  const [customResponseText, setCustomResponseText] = useState<string>('');

  const currentCall: VoiceSampleCall = SAMPLE_CALLS.find((c) => c.id === selectedCallId) || SAMPLE_CALLS[0];
  const totalDuration = currentCall.totalDurationSeconds;

  // Waveform bars configuration (48 bars)
  const barCount = 48;
  const timerRef = useRef<number | null>(null);

  // Synchronize playback timer
  useEffect(() => {
    if (isPlaying) {
      voiceAudioEngine.initContext();
      voiceAudioEngine.playSubtleChime(520, 150);

      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.25 * playbackSpeed;
          if (next >= totalDuration) {
            setIsPlaying(false);
            voiceAudioEngine.stopSpeaking();
            return totalDuration;
          }
          return next;
        });
      }, 250);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      voiceAudioEngine.stopSpeaking();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, totalDuration]);

  // Update active turn index based on current time
  useEffect(() => {
    const turns = currentCall.turns;
    let foundIndex = 0;
    for (let i = 0; i < turns.length; i++) {
      if (currentTime >= turns[i].startSecond) {
        foundIndex = i;
      }
    }
    setActiveTurnIndex(foundIndex);

    // Speak turn if playing and just transitioned
    if (isPlaying && turns[foundIndex]) {
      const turn = turns[foundIndex];
      voiceAudioEngine.speakText(turn.text, turn.speaker, currentCall.accent);
    }
  }, [currentTime, currentCall, isPlaying]);

  const handleSelectCall = (callId: string) => {
    voiceAudioEngine.stopSpeaking();
    setIsPlaying(false);
    setSelectedCallId(callId);
    setCurrentTime(0);
    setActiveTurnIndex(0);
  };

  const handleTogglePlay = () => {
    if (currentTime >= totalDuration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    voiceAudioEngine.stopSpeaking();
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveTurnIndex(0);
  };

  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    voiceAudioEngine.setPlaybackRate(speed);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    voiceAudioEngine.setVolume(newVol);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      voiceAudioEngine.setVolume(volume || 0.8);
    } else {
      setIsMuted(true);
      voiceAudioEngine.setVolume(0);
    }
  };

  // Live custom test
  const handleTestCustomPrompt = () => {
    setIsPlaying(false);
    setIsSynthesizingPrompt(true);
    const agent = VOICE_PERSONAS.find((a) => a.id === customAgentId) || VOICE_PERSONAS[0];

    let reply = `Hello! This is ${agent.name} from VHGlobals. Yes, absolutely! We support over 95 languages with real-time accent adaptation and sub-350ms response speed.`;
    if (customPrompt.toLowerCase().includes('reschedule') || customPrompt.toLowerCase().includes('appointment')) {
      reply = `Certainly! I have an opening available this Thursday at 3:15 PM or Friday morning. Would you like me to book that into your calendar right away?`;
    } else if (customPrompt.toLowerCase().includes('price') || customPrompt.toLowerCase().includes('rate') || customPrompt.toLowerCase().includes('cost')) {
      reply = `Our voice agents start at just 9 cents per minute with zero upfront telephony fees, reducing traditional call center overhead by up to 80%.`;
    }

    setCustomResponseText(reply);

    voiceAudioEngine.initContext();
    voiceAudioEngine.playSubtleChime(640, 180);
    voiceAudioEngine.speakText(reply, 'agent', agent.accent, () => {
      setIsSynthesizingPrompt(false);
    });
  };

  return (
    <section id="interactive-demo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 text-[#1b7494] text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Voice Demo Widget</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Listen to Real Conversational Cadence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience how VHGlobals AI agents naturally handle pauses, rapid interruptions,
            accents, and CRM actions across different enterprise industries.
          </p>
        </div>

        {/* Main Demo Workspace Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden">
          
          {/* Top Industry & Accent Selector Tabs */}
          <div className="bg-white border-b border-slate-200 px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Select Scenario & Voice Persona:
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Zero Latency Barge-In Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-3">
              {SAMPLE_CALLS.map((call) => {
                const isSelected = call.id === selectedCallId;
                return (
                  <button
                    key={call.id}
                    onClick={() => handleSelectCall(call.id)}
                    className={`p-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#2596be]/10 border-[#2596be] shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${isSelected ? 'text-[#1b7494]' : 'text-slate-900'}`}>
                        {call.agentName} • {call.accent}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {call.totalDurationSeconds}s
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate mt-1">
                      {call.industry}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Latency: {call.latencyMs}ms
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Player Display & Waveform Simulation */}
          <div className="p-6 lg:p-8 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Agent Badge & Meta */}
              <div className="flex items-center gap-4 w-full lg:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#2596be] text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-[#2596be]/30">
                  {currentCall.agentName[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {currentCall.agentName}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#2596be]/10 text-[#1b7494] border border-[#2596be]/20">
                      {currentCall.tone}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {currentCall.agentRole} • {currentCall.language}
                  </p>
                  <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                    Sentiment: {currentCall.sentiment}
                  </p>
                </div>
              </div>

              {/* Master Audio Controls */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-center">
                {/* Replay */}
                <button
                  onClick={handleReset}
                  title="Reset call"
                  className="p-3 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 transition-all cursor-pointer"
                  aria-label="Restart call"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>

                {/* Big Play / Pause Button */}
                <button
                  id="demo-play-toggle"
                  onClick={handleTogglePlay}
                  className="w-14 h-14 rounded-full bg-[#2596be] text-white flex items-center justify-center shadow-lg shadow-[#2596be]/30 hover:bg-[#1b7494] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-white" />
                  ) : (
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  )}
                </button>

                {/* Speed selector */}
                <div className="flex items-center bg-white border border-slate-300 rounded-lg p-0.5 text-xs font-bold text-slate-700">
                  {[1.0, 1.25, 1.5].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => handleSpeedChange(speed)}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        playbackSpeed === speed
                          ? 'bg-[#2596be] text-white shadow-xs'
                          : 'hover:text-[#2596be]'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>

                {/* Mute & Volume */}
                <div className="hidden sm:flex items-center gap-2 pl-2">
                  <button
                    onClick={handleToggleMute}
                    className="p-2 text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-16 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2596be]"
                  />
                </div>
              </div>

            </div>

            {/* Waveform Scrubber Simulation */}
            <div className="mt-6 pt-4 border-t border-slate-200/80">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span className="font-semibold text-slate-700">
                  {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400">
                  {isPlaying ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Stream Active (Audio Engine Playing)
                    </span>
                  ) : (
                    'Click Play to Listen'
                  )}
                </span>
                <span>
                  {Math.floor(totalDuration / 60)}:{Math.floor(totalDuration % 60).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Waveform Bar Track */}
              <div
                className="relative h-14 bg-slate-900 rounded-xl px-3 py-2 flex items-center justify-between gap-1 cursor-pointer overflow-hidden shadow-inner"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                  handleSeek(ratio * totalDuration);
                }}
              >
                {/* Progress highlight overlay */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-[#2596be]/20 pointer-events-none transition-all duration-150"
                  style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                />

                {/* Active Playhead vertical line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#51b6d9] z-10 pointer-events-none transition-all duration-150 shadow-[0_0_8px_#2596be]"
                  style={{ left: `${(currentTime / totalDuration) * 100}%` }}
                />

                {/* Dynamic 48 Waveform bars */}
                {Array.from({ length: barCount }).map((_, idx) => {
                  const barProgress = idx / barCount;
                  const isPast = (currentTime / totalDuration) >= barProgress;
                  
                  // Harmonic variation
                  const baseHeight = 25 + Math.sin(idx * 0.4) * 20 + Math.cos(idx * 0.8) * 15;
                  const dynamicScale = isPlaying ? 0.7 + Math.sin((idx + currentTime * 8) * 0.5) * 0.4 : 0.6;
                  const finalHeight = Math.max(12, Math.min(96, baseHeight * dynamicScale));

                  return (
                    <div
                      key={idx}
                      className={`w-full rounded-full transition-all duration-150 ${
                        isPast
                          ? 'bg-[#2596be] shadow-[0_0_4px_rgba(37,150,190,0.5)]'
                          : 'bg-slate-700/60'
                      }`}
                      style={{ height: `${finalHeight}%` }}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 px-1">
                <span>Call summary: {currentCall.summary}</span>
                <span className="font-mono text-[#1b7494] font-medium hidden sm:inline">
                  ⚡ {currentCall.crmUpdated}
                </span>
              </div>
            </div>

          </div>

          {/* Synchronized Turn-by-Turn Transcript */}
          <div className="p-6 lg:p-8 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#2596be]" />
                Synchronized Call Transcript
              </h4>
              <span className="text-xs text-slate-500">
                Click any line to jump audio
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {currentCall.turns.map((turn, index) => {
                const isActive = activeTurnIndex === index;
                const isAgent = turn.speaker === 'agent';

                return (
                  <div
                    key={turn.id}
                    onClick={() => {
                      handleSeek(turn.startSecond);
                      if (!isPlaying) {
                        setIsPlaying(true);
                      }
                    }}
                    className={`p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'bg-white border-[#2596be] shadow-md ring-2 ring-[#2596be]/20'
                        : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isAgent
                              ? 'bg-[#2596be] text-white'
                              : 'bg-slate-800 text-white'
                          }`}
                        >
                          {isAgent ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-xs font-bold ${isAgent ? 'text-[#1b7494]' : 'text-slate-800'}`}>
                          {isAgent ? `VHGlobals Agent (${currentCall.agentName})` : 'Customer'}
                        </span>
                        {turn.tone && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                            Tone: {turn.tone}
                          </span>
                        )}
                        {turn.isInterruption && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-300 flex items-center gap-1">
                            <Zap className="w-2.5 h-2.5" /> Barge-in Handled
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-slate-400">
                        {turn.timestamp}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-950 font-medium' : 'text-slate-700'}`}>
                      "{turn.text}"
                    </p>

                    {turn.actionTaken && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#1b7494] bg-slate-50 px-2.5 py-1.5 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2596be]" />
                        <span>{turn.actionTaken}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Voice Playground / Custom Tester Strip */}
          <div className="bg-[#edf7fa] border-t border-[#2596be]/25 p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1b7494] mb-1">
                <Sliders className="w-4 h-4" />
                <span>Live Interactive Voice Tester</span>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Test custom inquiries right in your browser. Choose an agent persona and trigger real speech synthesis!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                
                {/* Agent Persona select */}
                <div className="sm:col-span-3">
                  <select
                    value={customAgentId}
                    onChange={(e) => setCustomAgentId(e.target.value)}
                    className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                  >
                    {VOICE_PERSONAS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.accent.split('(')[0]})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Input prompt */}
                <div className="sm:col-span-6">
                  <input
                    type="text"
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Enter what a customer might ask..."
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                  />
                </div>

                {/* Trigger button */}
                <div className="sm:col-span-3">
                  <button
                    onClick={handleTestCustomPrompt}
                    disabled={isSynthesizingPrompt}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2596be] text-white text-xs font-bold shadow-sm hover:bg-[#1b7494] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSynthesizingPrompt ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Speaking...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Speak Live</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Quick Prompt Presets */}
              <div className="flex flex-wrap gap-2 mt-3 items-center">
                <span className="text-[11px] text-slate-500 font-medium">Quick Presets:</span>
                {[
                  "Can I reschedule to Thursday afternoon?",
                  "Do you support Spanish and multilingual callers?",
                  "How much does the voice agent service cost?",
                  "Can you transfer me to an enterprise specialist?",
                ].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setCustomPrompt(preset)}
                    className="text-[11px] bg-white border border-slate-200/90 text-slate-700 hover:text-[#2596be] hover:border-[#2596be] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    "{preset}"
                  </button>
                ))}
              </div>

              {/* Generated response text display */}
              {customResponseText && (
                <div className="mt-4 p-3.5 bg-white rounded-xl border border-[#2596be]/30 text-xs text-slate-800 shadow-xs flex items-start gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-[#2596be]/10 text-[#1b7494] font-bold shrink-0">
                    Agent Output
                  </span>
                  <p className="leading-relaxed font-medium">
                    "{customResponseText}"
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
