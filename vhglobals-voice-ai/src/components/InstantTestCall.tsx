import React, { useState } from 'react';
import { Phone, PhoneCall, PhoneOff, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { audioEngine } from '../utils/audioSimulator';

interface InstantTestCallProps {
  onStartActiveCall: (phone?: string) => void;
}

export const InstantTestCall: React.FC<InstantTestCallProps> = ({ onStartActiveCall }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRinging, setIsRinging] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRinging(true);
    audioEngine.playRingTone(2).then(() => {
      // Prompt user or automatically transition to active call
    });
  };

  const handleAcceptCall = () => {
    audioEngine.playCallConnectChime();
    setIsRinging(false);
    onStartActiveCall(phoneNumber || '+1 (415) 852-9400');
  };

  const handleDeclineCall = () => {
    audioEngine.playCallEndChime();
    setIsRinging(false);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fafcff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Form & Explanations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-100/70 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
              <span>THE 60-SECOND LIVE TEST</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Let Sophia <br />
              <span className="text-[#2596be]">call you right now.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Enter your phone number — VHGLOBALS deploys Sophia and she calls you instantly in English. Zero delays, sub-500ms latency, zero credit card required.
            </p>

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="max-w-lg space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm focus-within:border-[#2596be] focus-within:ring-2 focus-within:ring-[#2596be]/20">
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000 or your number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-transparent text-slate-900 font-medium placeholder-slate-400 text-sm focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#2596be] hover:bg-[#1b7494] text-white px-6 py-3 rounded-xl font-bold text-sm shadow transition-all cursor-pointer"
                >
                  <span>Get instant call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-1">
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% free — no credit card needed</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#2596be]" />
                  <span>Global IVRS certified · 50 free minutes</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Realistic Phone Incoming Call UI */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-[40px] p-6 sm:p-8 border-4 border-slate-100 shadow-2xl relative flex flex-col items-center text-center">
              
              {/* Top Incoming Tag */}
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2596be] bg-sky-50 px-3 py-1 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2596be] animate-pulse" />
                ✦ INCOMING LIVE DEMO
              </div>

              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2596be] to-[#38bdf8] text-white flex items-center justify-center font-black text-3xl shadow-lg">
                  S
                </div>
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              {/* Identity */}
              <h3 className="text-2xl font-black text-slate-900">Sophia</h3>
              <p className="text-sm font-semibold text-slate-500 mt-0.5">
                Voice AI Agent · English Only
              </p>
              <p className="text-sm font-mono text-slate-400 mt-1">
                {phoneNumber || '+1 (415) 852-9400'}
              </p>

              {/* Incoming Call Ringing indicator */}
              {isRinging && (
                <div className="mt-4 text-xs font-bold text-[#2596be] animate-pulse">
                  📞 Ringing your phone right now...
                </div>
              )}

              {/* Action Buttons: Decline and Accept */}
              <div className="flex items-center justify-between w-full max-w-[220px] mt-10 mb-3">
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={handleDeclineCall}
                    className="w-14 h-14 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                    aria-label="Decline Call"
                  >
                    <PhoneOff className="w-6 h-6" />
                  </button>
                  <span className="text-xs font-medium text-slate-500">Decline</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={handleAcceptCall}
                    className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg animate-bounce transition-all transform hover:scale-105 cursor-pointer"
                    aria-label="Accept Call"
                  >
                    <PhoneCall className="w-6 h-6" />
                  </button>
                  <span className="text-xs font-bold text-emerald-600">Accept</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-2">
                tap to get your free test call
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
