import React, { useState } from 'react';
import { Check, CheckCircle2, MessageSquare, Send, Calendar, Terminal, Play, Pause, Activity } from 'lucide-react';
import { audioEngine } from '../utils/audioSimulator';

export const CallIntelligence: React.FC = () => {
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);

  const toggleRecording = () => {
    if (isPlayingRecording) {
      audioEngine.stopSpeaking();
      setIsPlayingRecording(false);
    } else {
      setIsPlayingRecording(true);
      audioEngine.speak(
        "Welcome back, David! Are we still looking into the enterprise plan for your sales team?",
        () => {},
        () => setIsPlayingRecording(false)
      );
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/70 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Module 1: She remembers every caller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Chat history */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Sophia Speech Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                S
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm space-y-1 max-w-md">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-slate-900">SOPHIA · AI</span>
                  <span className="text-[10px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full font-bold">
                    +0.08s
                  </span>
                </div>
                <p className="text-sm text-slate-800 font-medium">
                  "Welcome back, David! Are we still looking into the enterprise plan for your sales team?"
                </p>
              </div>
            </div>

            {/* David Reply Bubble */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-slate-900 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm space-y-1 max-w-md text-right">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-slate-400">0:04</span>
                  <span className="text-xs font-bold text-sky-400">DAVID</span>
                </div>
                <p className="text-sm font-medium">
                  "Yes, does it include dedicated SIP trunking and sub-500ms latency?"
                </p>
              </div>
            </div>

          </div>

          {/* Right: Pitch & Summary Card */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Sophia remembers every caller.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Zero CRM hunting. A natural "welcome back" without asking anyone to repeat their details or context.
            </p>

            {/* Call Summary Synced Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4 max-w-md">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full w-fit">
                <Check className="w-3.5 h-3.5" />
                <span>Call summary synced to CRM</span>
              </div>

              {/* Recording Player Bar */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 text-sky-700">
                    <Activity className="w-3.5 h-3.5" /> CALL RECORDING
                  </span>
                  <span className="text-slate-400 font-mono">2m 14s</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleRecording}
                    className="w-7 h-7 rounded-full bg-[#2596be] text-white flex items-center justify-center hover:bg-[#1b7494] transition-colors cursor-pointer shrink-0"
                  >
                    {isPlayingRecording ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
                  </button>
                  <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-[#2596be] ${isPlayingRecording ? 'w-2/3 animate-pulse' : 'w-1/3'}`} />
                  </div>
                </div>
              </div>

              {/* Extracted Data Key-Values */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">EXTRACTED DATA</div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Interest</span>
                    <span className="font-bold text-slate-900">Enterprise Voice AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Timeline</span>
                    <span className="font-bold text-slate-900">Immediate (Q3)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Sentiment</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">High Intent</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Module 2: Live in-call actions & Never drops a call */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-10 border-t border-slate-100">
          
          {/* Live In-call actions */}
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Live in-call actions.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Instant SMS, confirmation emails, booking links, and calendar invites sent mid-call while the prospect is still speaking with Sophia.
            </p>

            <div className="space-y-3 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-700">SMS & Email Sent</div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    "Here is the enterprise voice architecture documentation and security deck."
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-indigo-200 shadow-sm flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-700">Meeting Confirmed</div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Executive Demo & Discovery scheduled for Thursday at 2:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Never drops a call (Self Healing Terminal) */}
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Never drops a call.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              She heals herself in milliseconds if a line stumbles, ensuring network drops don’t interrupt your business.
            </p>

            {/* Dark Terminal Mockup */}
            <div className="bg-slate-950 text-emerald-400 p-5 rounded-2xl font-mono text-xs shadow-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 mb-3">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> SYSTEM LOGS
                </span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                </span>
              </div>
              <p className="text-slate-400">09:41:22 [SYS] Voice stream active</p>
              <p className="text-amber-400">09:41:23 [NET] Jitter detected (120ms)</p>
              <p className="text-sky-400">09:41:23 [SYS] Auto-healing engaged...</p>
              <p className="text-emerald-400 font-bold">09:41:23 [SYS] Connection stabilized</p>

              <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-slate-300">
                <span>Calls Dropped</span>
                <span className="text-lg font-bold text-emerald-400">0</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
