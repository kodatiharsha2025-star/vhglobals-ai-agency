import React from 'react';
import { Users, PhoneCall, CheckCircle2, Coins, AlertCircle, Sparkles } from 'lucide-react';

export const TeamDashboardMockup: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#fafcff] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight">
            Your whole team, <br className="sm:hidden" />
            <span className="text-[#2596be]">at a glance.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            What got done, and what needs you — no dashboards full of jargon.
          </p>
        </div>

        {/* Browser Mockup Window */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          
          {/* Browser Address Bar */}
          <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 max-w-sm mx-auto bg-white px-3 py-1 rounded-md text-xs text-slate-600 font-mono text-center border border-slate-200 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>app.vhglobals.com</span>
            </div>
          </div>

          {/* Internal Dashboard View */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Dark Status Card */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl sm:text-2xl font-black text-[#38bdf8]">Active Fleet</span>
                  <span className="text-sm sm:text-base font-bold text-slate-300">· Your Sophia voice agents are on it today</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>3 working right now</span>
                </div>
              </div>

              {/* 4 Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Users className="w-3.5 h-3.5" />
                    <span>Employees working</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">3</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Conversations handled</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">128</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Qualified leads</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">41</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Coins className="w-3.5 h-3.5" />
                    <span>Credits spent</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-sky-400">612</div>
                </div>
              </div>
            </div>

            {/* Split Grid: Your Team vs Needs your attention */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Your Team Table */}
              <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                <h4 className="text-sm font-bold text-slate-800">Your team</h4>

                <div className="space-y-3">
                  {/* Sophia - Lead Qualifier */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-sky-100 text-[#2596be] font-bold text-xs flex items-center justify-center">
                        S
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900">Sophia · Sales</div>
                        <div className="text-xs text-slate-500">Outbound Speed-to-Lead</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-800">62</div>
                        <div className="text-[10px] text-slate-400">calls today</div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        ★ 98% Connect
                      </span>
                    </div>
                  </div>

                  {/* Sophia - Reception */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-700 font-bold text-xs flex items-center justify-center">
                        S
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900">Sophia · Support</div>
                        <div className="text-xs text-slate-500">24/7 Inbound Receptionist</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-800">44</div>
                        <div className="text-[10px] text-slate-400">calls today</div>
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        ⚡ Active
                      </span>
                    </div>
                  </div>

                  {/* Sophia - Calendar Booking */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                        S
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900">Sophia · Bookings</div>
                        <div className="text-xs text-slate-500">Demo & Appointment Setter</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-800">22</div>
                        <div className="text-[10px] text-slate-400">calls today</div>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        18 Booked
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Needs your attention */}
              <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                <h4 className="text-sm font-bold text-slate-800">Needs your attention</h4>

                <div className="space-y-3">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">2 hot qualified leads ready for closing</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">High ticket accounts verified budget & timeline</div>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">CRM Auto-Sync Live</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">All 41 qualified call transcripts pushed to HubSpot & Salesforce</div>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Global Virtual DID Numbers Active</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Global IVRS SIP trunks connected with sub-500ms latency</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
