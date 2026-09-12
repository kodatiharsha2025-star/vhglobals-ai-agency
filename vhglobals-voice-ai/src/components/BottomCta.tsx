import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BottomCtaProps {
  onOpenSignUp: () => void;
  onOpenTestCall: () => void;
}

export const BottomCta: React.FC<BottomCtaProps> = ({ onOpenSignUp, onOpenTestCall }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2596be]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top pill tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-sky-950/90 border border-sky-800/80 px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>START IN 5 MINUTES · RISK-FREE</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-tight max-w-3xl mx-auto text-white">
          Never miss another <br className="hidden sm:inline" />
          <span className="text-[#38bdf8]">customer call again.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Get <strong>50 free credits</strong> (approx. 10 calls) instantly on signup. No trial required, it’s completely free.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenSignUp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2596be] hover:bg-[#1b7494] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-[#2596be]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Hire Your AI Employee Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenTestCall}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-7 py-4 rounded-full font-bold text-base transition-all cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>Hear AI Call Your Phone</span>
          </button>
        </div>

        {/* Guarantees Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400 pt-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Goes live in 5 minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
