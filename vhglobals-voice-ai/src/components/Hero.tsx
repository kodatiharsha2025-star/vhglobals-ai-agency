import React, { useState, useEffect } from 'react';
import { PhoneCall, Play, ArrowRight, CheckCircle2, ShieldCheck, Zap, Volume2, Mic, Sparkles, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenOnboarding: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOnboarding, onScrollToDemo }) => {
  const [activeCallTurn, setActiveCallTurn] = useState(0);

  const demoPhrases = [
    {
      speaker: 'Customer',
      text: "Hi! Can I reschedule my appointment to this Thursday at 3 PM?",
      sentiment: 'Neutral',
    },
    {
      speaker: 'VHGlobals AI (Emma)',
      text: "Certainly! I have 3:15 PM open with Dr. Sterling. Should I lock that in for you?",
      sentiment: 'Warm & Helpful (280ms)',
    },
    {
      speaker: 'Customer',
      text: "Yes please! And does my dental insurance still cover it?",
      sentiment: 'Inquiring (Interruption handled)',
    },
    {
      speaker: 'VHGlobals AI (Emma)',
      text: "Confirmed! Your Delta Dental coverage is active, and I just dispatched an SMS confirmation.",
      sentiment: 'Resolution Complete',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCallTurn((prev) => (prev + 1) % demoPhrases.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [demoPhrases.length]);

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f4faff] via-white to-slate-50/60"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-[#2596be]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#2596be]/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 border border-[#2596be]/25 text-[#1b7494] text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-[#2596be] animate-ping" />
              <span>Next-Generation Autonomous Telephony</span>
              <span className="text-slate-300">|</span>
              <span className="font-mono font-medium">Sub-350ms Latency</span>
            </div>

            {/* Headline matching user prompt */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              VOICE AI THAT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#16607a]">
                SOUNDS HUMAN.
              </span>
            </h1>

            {/* Subheadline matching user prompt */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Ultra-low latency conversational AI voice agents for automated customer support,
              lead qualification, and outbound sales calls. Seamlessly handles interruptions,
              speaks naturally with human cadence, and integrates with your existing CRM.
            </p>

            {/* Key Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0" />
                <span>Zero Latency Barge-In</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0" />
                <span>95+ Dialects & Accents</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0" />
                <span>SOC-2 & HIPAA Ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-deploy-btn"
                onClick={onOpenOnboarding}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2596be] text-white font-bold text-base shadow-lg shadow-[#2596be]/30 hover:bg-[#1b7494] hover:shadow-xl hover:shadow-[#2596be]/20 active:scale-[0.98] transition-all duration-150 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Deploy Voice Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-demo-btn"
                onClick={onScrollToDemo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-slate-800 font-semibold text-base border border-slate-300/80 shadow-xs hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all duration-150 cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#2596be] fill-[#2596be]" />
                <span>Listen to Sample Calls</span>
              </button>
            </div>

            {/* Social Proof Snippet */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white font-semibold text-[10px] ring-2 ring-white">
                  AC
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2596be] text-white font-semibold text-[10px] ring-2 ring-white">
                  VH
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white font-semibold text-[10px] ring-2 ring-white">
                  TL
                </span>
              </div>
              <p>
                Powering over <span className="font-bold text-slate-800">4,200,000+</span> minutes of automated enterprise voice calls monthly.
              </p>
            </div>

          </div>

          {/* Right Column: Sleek Simulated Active Call Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200/90 p-6 overflow-hidden">
              
              {/* Header of Active Call Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#2596be] to-[#51b6d9] flex items-center justify-center text-white font-bold text-base shadow-sm">
                      VH
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      VHGlobals Agent: Emma
                      <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
                    </h3>
                    <p className="text-xs text-slate-500">Active Live Simulation • Inbound Line #1</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    285ms TTL
                  </span>
                </div>
              </div>

              {/* Dynamic Animated Waveform Visualizer */}
              <div className="py-5">
                <div className="bg-slate-900 rounded-xl p-4 text-white shadow-inner relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-slate-300 font-semibold">LIVE FULL-DUPLEX AUDIO</span>
                    </div>
                    <span>48 kHz High-Fidelity</span>
                  </div>

                  {/* Equalizer bars */}
                  <div className="flex items-center justify-center gap-1 h-12 px-2">
                    {[
                      16, 28, 42, 60, 85, 45, 75, 90, 65, 80, 50, 95, 70, 88, 40,
                      65, 85, 92, 55, 70, 48, 78, 60, 35, 50, 75, 90, 65, 40, 20
                    ].map((height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#2596be] rounded-full transition-all duration-200"
                        style={{
                          height: `${Math.max(15, (height * (0.5 + Math.sin((i + activeCallTurn * 4) * 0.7) * 0.5)))}%`,
                          opacity: 0.4 + (i % 3) * 0.25,
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 text-[#2596be]" />
                      Barge-in: Armed
                    </span>
                    <span className="font-mono text-[#51b6d9]">Cadence: 145 wpm</span>
                  </div>
                </div>
              </div>

              {/* Simulated Real-Time Dialogue Bubble */}
              <div className="space-y-3 min-h-[140px] flex flex-col justify-center">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Live Conversational Stream
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#2596be]">
                      {demoPhrases[activeCallTurn].speaker}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {demoPhrases[activeCallTurn].sentiment}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 leading-snug font-medium italic">
                    "{demoPhrases[activeCallTurn].text}"
                  </p>
                </div>
              </div>

              {/* Footer specs of the card */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  HIPAA & PCI Redacted
                </span>
                <button
                  onClick={onScrollToDemo}
                  className="text-[#2596be] hover:text-[#1b7494] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Explore Interactive Audio Player
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Core Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-200/70 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              &lt; 320<span className="text-[#2596be] text-2xl font-bold">ms</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Average Response Latency</div>
            <div className="text-xs text-slate-500 mt-0.5">Imperceptible speech-to-speech delay</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-[#2596be] tracking-tight">
              99.4<span className="text-slate-900 text-2xl font-bold">%</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Speech Naturalness Score</div>
            <div className="text-xs text-slate-500 mt-0.5">Trained on real human conversational nuance</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              82<span className="text-[#2596be] text-2xl font-bold">%</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Autonomous First-Call Resolution</div>
            <div className="text-xs text-slate-500 mt-0.5">Without routing to human staff</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-[#2596be] tracking-tight">
              95<span className="text-slate-900 text-2xl font-bold">+</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Languages & Regional Accents</div>
            <div className="text-xs text-slate-500 mt-0.5">Instant multilingual translation & switching</div>
          </div>
        </div>

      </div>
    </section>
  );
};
