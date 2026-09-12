import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Phone, Radio } from 'lucide-react';

interface HeroProps {
  onOpenCallAi?: () => void;
  onScrollToPricing?: () => void;
  onOpenSignUp?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCallAi = () => {},
  onScrollToPricing = () => {},
  onOpenSignUp = () => {}
}) => {
  return (
    <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#fafcff] via-[#f4f9fc] to-[#fafcff]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2596be]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#edf7fa] border border-[#2596be]/20 text-[#1b7494] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
              <span>BUILT FOR SMBS & ENTERPRISES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#0f172a] leading-[1.12] tracking-tight">
              Hire India’s fastest <br className="hidden sm:inline" />
              <span className="text-[#0f172a]">AI employee.</span>
            </h1>

            {/* Starts from Pricing Sticker */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-3 sm:p-3.5 bg-white rounded-2xl border border-[#cbd5e1]/60 shadow-[0_4px_20px_-4px_rgba(37,150,190,0.12)]">
              <div className="bg-[#2596be] text-white px-4 py-2 rounded-xl flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#e0f2fe]">STARTS FROM</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black">₹3.5</span>
                  <span className="text-xs font-semibold text-[#e0f2fe]">/min</span>
                </div>
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-medium text-[#334155]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Pay only for talk-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Zero setup fees</span>
                </div>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
              Just tell Sophia what you need. She builds you an AI employee who calls every new lead in{' '}
              <strong className="text-[#0f172a] font-semibold">under 30 seconds</strong>{' '}
              (fluent, professional English with perfect qualification notes every time).
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCallAi}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2596be] hover:bg-[#1b7494] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base tracking-tight shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>CALL SOPHIA NOW (FREE)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToPricing}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-[#334155] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors cursor-pointer"
              >
                View Pricing
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-[#475569] pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span className="font-semibold text-[#0f172a]">50 free credits</span> (no card required)
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2596be]" />
                <span className="font-semibold text-[#0f172a]">Instant Virtual Numbers</span>
              </div>
            </div>



          </div>

          {/* Right Column: Interactive Visual Call Simulator & Photo */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="VHGLOBALS Sophia Voice AI Representation"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Top Badge: Live in 5 mins */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <Radio className="w-3.5 h-3.5 text-[#2596be]" />
                  <span>LIVE IN 5 MINS</span>
                </div>

                {/* Top Right: OUTBOUND AI & INBOUND AI info banner */}
                <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-[11px] font-semibold space-y-1 border border-white/15 shadow-lg">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    OUTBOUND AI & INBOUND AI
                  </div>
                  <div className="text-slate-200 flex items-center gap-1">
                    <span className="text-[#38bdf8]">✓</span> 24/7 Availability & Zero Drop
                  </div>
                  <div className="text-slate-200 flex items-center gap-1">
                    <span className="text-[#38bdf8]">✓</span> English Only · Tier-1 Accent
                  </div>
                </div>
              </div>

              {/* Overlaid Floating Live Call Card */}
              <div className="relative -mt-16 sm:-mt-20 mx-3 sm:mx-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.15)] border border-slate-100/80 space-y-3 z-10 animate-fade-in">
                
                {/* Caller Identity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2596be] to-[#38bdf8] text-white flex items-center justify-center font-black text-sm shadow-sm">
                      S
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0f172a]">Sophia</span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          English Only
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">VHGLOBALS AI Agent · High-Converting Outbound</p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenCallAi}
                    className="p-2 rounded-full bg-[#edf7fa] text-[#2596be] hover:bg-[#2596be] hover:text-white transition-colors cursor-pointer"
                    title="Start Live Demo"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>

                {/* Speech Bubble */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-800 space-y-1">
                  <p className="font-semibold text-[#0f172a] leading-relaxed">
                    "Hi! Calling regarding your inquiry. Shall I schedule a brief call to discuss your requirements?"
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Natural conversational pauses · Sub-500ms voice response
                  </p>
                </div>

                {/* Interactive Action Prompt */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-semibold text-[#2596be]">English Model · Sub-500ms</span>
                  <button
                    onClick={onOpenCallAi}
                    className="text-xs font-bold text-white bg-[#2596be] hover:bg-[#1b7494] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Test live call</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
