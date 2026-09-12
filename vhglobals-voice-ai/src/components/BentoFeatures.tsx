import React from 'react';
import { ShieldCheck, RefreshCw, Smartphone, Database, CheckCircle2, Globe, Clock, Sparkles } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2596be] bg-[#edf7fa] px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Global Telecom Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight">
            Engineered for English-speaking countries
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From international virtual numbers in any country to sub-500ms carrier routing, every layer is optimized for instant global connectivity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Fluent & Lifelike Voice Calls (Tall) */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-bold text-[#2596be] uppercase tracking-wider">01 · Human Realism</span>
              <h3 className="text-xl font-bold text-slate-900">
                Fluent & Lifelike Voice Calls
              </h3>
              <p className="text-sm text-slate-600">
                Engage prospects through authentic, human-sounding conversations in fluent, natural English with zero robotic cadence.
              </p>
            </div>

            {/* Language badges & photo graphic */}
            <div className="mt-6 relative bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2596be]/30 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    alt="Sophia Voice AI Persona"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Sophia Neural Voice</div>
                  <div className="text-xs text-slate-500">Tier-1 English Model (US / UK / Global)</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['English Only', 'Tier-1 Markets', 'Sub-500ms Latency', 'Zero Robotic Delay', 'Natural Breathing'].map((feat) => (
                  <span
                    key={feat}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Numbers from any country in 5 mins */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">02 · Telecom</span>
              <h3 className="text-xl font-bold text-slate-900">
                Virtual numbers from any country
              </h3>
              <p className="text-sm text-slate-600">
                Obtain IVRS-ready virtual phone numbers from any country instantly with zero paperwork and immediate global activation.
              </p>
            </div>

            {/* Simulated Phone Number Badges */}
            <div className="mt-6 space-y-2.5">
              <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#2596be]" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-800">+1 (415) 852-****</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  US / IVRS Ready ✓
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#2596be]" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-800">+44 20 7946 ****</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  UK / IVRS Ready ✓
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Instant CRM Sync */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">03 · Automation</span>
              <h3 className="text-xl font-bold text-slate-900">
                Instant CRM Sync
              </h3>
              <p className="text-sm text-slate-600">
                Detailed notes and status updates flow directly into your CRM the second they hang up.
              </p>
            </div>

            <div className="mt-6 bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Lead Status</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Meeting Booked
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Call Summary</span>
                <span className="text-[#2596be] font-semibold">Synced to HubSpot</span>
              </div>
            </div>
          </div>

          {/* Card 4: Trust & Compliance Built-in */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">04 · Governance</span>
              <h3 className="text-xl font-bold text-slate-900">
                Trust & Compliance Built-In
              </h3>
              <p className="text-sm text-slate-600">
                Verified tier-1 carrier routes and built-in call QA for total brand safety and global regulatory adherence.
              </p>
            </div>

            <div className="mt-6 bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#2596be] shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-800">Carrier & IVRS Compliant</div>
                <div className="text-slate-500">STIR/SHAKEN & DNC Verified</div>
              </div>
            </div>
          </div>

          {/* Card 5: Auto-Rescheduling & Retries */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">05 · Persistence</span>
              <h3 className="text-xl font-bold text-slate-900">
                Auto-Rescheduling & Retries
              </h3>
              <p className="text-sm text-slate-600">
                Retries, reschedules, and follow-ups handled automatically with polite cadence.
              </p>
            </div>

            <div className="mt-6 bg-white p-3.5 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  10:00 AM — Call 1
                </span>
                <span className="text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">Busy</span>
              </div>
              <div className="flex items-center justify-between text-slate-800 font-medium">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#2596be]" />
                  5:00 PM — Call 2
                </span>
                <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Connected ✓</span>
              </div>
            </div>
          </div>

          {/* Card 6: Catch leads anywhere */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">06 · Integrations</span>
              <h3 className="text-xl font-bold text-slate-900">
                Catch leads anywhere
              </h3>
              <p className="text-sm text-slate-600">
                Facebook, Instagram, website forms, or Zapier / Pabbly — our AI calls them the second they land.
              </p>
            </div>

            <div className="mt-6 bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-around">
              <span className="text-xs font-bold text-blue-600">Meta</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-bold text-pink-600">Instagram</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-bold text-orange-600">Zapier</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-bold text-emerald-600">Webhooks</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
