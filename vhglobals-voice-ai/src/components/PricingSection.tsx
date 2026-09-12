import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Wallet, Phone, PhoneForwarded } from 'lucide-react';

interface PricingSectionProps {
  onOpenSignUp: () => void;
  onOpenLegal?: (type: 'refund') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenSignUp, onOpenLegal }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Pure per-minute billing. <br className="sm:hidden" />
            <span className="text-[#2596be]">Zero base fees.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Hire AI the way you hire people — you only pay for talk-time that actually connects, with no monthly lock-ins.
          </p>
        </div>

        {/* Competitor Comparison Strip */}
        <div className="max-w-5xl mx-auto mb-14 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center">
            
            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xs text-slate-500 font-semibold">Bland AI</div>
              <div className="text-base font-bold text-slate-700 mt-1">₹12-15 / min</div>
              <div className="text-[10px] text-slate-400 mt-0.5">High Latency & Clunky</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xs text-slate-500 font-semibold">Bolna AI</div>
              <div className="text-base font-bold text-slate-700 mt-1">₹8-10 / min</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Complex Setup</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xs text-slate-500 font-semibold">Vapi / Retell</div>
              <div className="text-base font-bold text-slate-700 mt-1">₹12-15 / min</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Developer Required</div>
            </div>

            {/* VHGLOBALS Highlight */}
            <div className="p-3 bg-[#2596be] text-white rounded-xl shadow-md border border-[#1b7494] relative overflow-hidden">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-100 bg-[#1b7494] px-2 py-0.5 rounded-full w-fit mx-auto mb-1">
                SAVE UP TO 65%
              </div>
              <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                <span>VHGLOBALS AI</span>
              </div>
              <div className="text-xl font-black text-white mt-0.5">₹3.5 - 7/min</div>
              <div className="text-[10px] font-semibold text-sky-100">ZERO BASE FEE</div>
            </div>

          </div>
        </div>

        {/* 3 Pricing Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 items-stretch">
          
          {/* Tier 1: VALUE */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">VALUE</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">₹3.5</span>
                <span className="text-sm font-semibold text-slate-500">/min</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                Budget-Friendly. Mostly used for bulk calling campaigns.
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Fluent English Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Value Voices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Low Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Budget bulk calling</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={onOpenSignUp}
                className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Start Calling
              </button>
            </div>
          </div>

          {/* Tier 2: STANDARD (MOST POPULAR in #2596be) */}
          <div className="bg-[#2596be] text-white rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-[#1b7494] flex flex-col justify-between transform md:-translate-y-2 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              MOST POPULAR
            </div>

            <div className="space-y-4 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-100">STANDARD</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">₹5</span>
                <span className="text-sm font-semibold text-sky-100">/min</span>
              </div>
              <p className="text-xs sm:text-sm text-sky-50 leading-relaxed min-h-[40px]">
                The All-Rounder. High realism for everyday customer interactions and support.
              </p>

              <div className="pt-4 border-t border-sky-400/40 space-y-2.5 text-xs sm:text-sm text-white">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Natural English Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Standard Voices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>Low Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span>The All-Rounder</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-sky-400/40">
              <button
                onClick={onOpenSignUp}
                className="w-full py-3 rounded-full bg-white hover:bg-slate-50 text-[#2596be] font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Start Calling
              </button>
            </div>
          </div>

          {/* Tier 3: PREMIUM */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">PREMIUM</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">₹7</span>
                <span className="text-sm font-semibold text-slate-500">/min</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                Curated native speakers. The most real-like voices from our exclusive library.
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Ultra-Realistic English</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Premium Voices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Ultra-low Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2596be]" />
                  <span>Custom Integrations</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={onOpenSignUp}
                className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Start Calling
              </button>
            </div>
          </div>

        </div>

        {/* How the Credit System Works */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
          <h3 className="text-xl font-bold text-center text-slate-900">
            How the credit system works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-[#2596be] flex items-center justify-center font-bold text-xs">
                #
              </div>
              <h4 className="font-bold text-sm text-slate-900">1. The Credit Wallet</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                1 Credit = ₹1. You top up your wallet anytime based on your volume. <strong>Credits never expire</strong>. We give you 50 free credits to start.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                📞
              </div>
              <h4 className="font-bold text-sm text-slate-900">2. Live Talk-Time</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Credits are only deducted when your AI is actively talking on a live call. You are <strong>never charged for idle time</strong> or setup fees.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                #
              </div>
              <h4 className="font-bold text-sm text-slate-900">3. Phone Number Rental</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A dedicated phone number to run your calls. Billed at <strong>₹649/month</strong>, includes compliance and carrier fees.
              </p>
            </div>

          </div>

          <div className="text-center text-xs font-semibold text-slate-500 pt-2 flex flex-wrap items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2596be]" />
            <span>No lock-in · credits never expire · zero base fees</span>
            {onOpenLegal && (
              <>
                <span className="text-slate-300">•</span>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="text-[#2596be] hover:underline font-bold cursor-pointer"
                >
                  View Refund Policy
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
