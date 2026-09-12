import React, { useState } from 'react';
import { Zap, Layers, ArrowRight, UploadCloud, CheckCircle2, Clock, Phone, FileText, Check, PhoneCall } from 'lucide-react';

interface TwoWaysToWorkProps {
  onOpenSignUp: () => void;
}

export const TwoWaysToWork: React.FC<TwoWaysToWorkProps> = ({ onOpenSignUp }) => {
  const [activeTab, setActiveTab] = useState<'instant' | 'bulk'>('instant');

  return (
    <section className="py-16 sm:py-24 bg-[#fafcff] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight">
            One employee, <br className="sm:hidden" />
            <span className="text-[#2596be]">two ways to work.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Chase leads the instant they arrive, or hand a whole list over — same voice agent, fluent professional English.
          </p>

          {/* Mode Tabs */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-slate-200/70 rounded-full">
            <button
              onClick={() => setActiveTab('instant')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'instant'
                  ? 'bg-white text-[#2596be] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Instant leads</span>
            </button>

            <button
              onClick={() => setActiveTab('bulk')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'bulk'
                  ? 'bg-white text-[#2596be] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Bulk campaigns</span>
            </button>
          </div>

          <div className="mt-3 text-xs text-slate-400 font-medium">
            ✦ Inbound, 24/7 — coming soon
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-5xl mx-auto">
          {activeTab === 'instant' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Instant Leads Feature Descriptions */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2596be] bg-[#edf7fa] px-3 py-1 rounded-full uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Instant Lead Calling</span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#edf7fa] text-[#2596be] flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Calls the second a lead lands
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Under 30 seconds while they are still holding their phone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#edf7fa] text-[#2596be] flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Plugs into what you already use
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Meta & Instagram ads, website forms, your CRM, Pabbly & webhooks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#edf7fa] text-[#2596be] flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Every outcome, auto-logged
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Summary and captured details pushed to your dashboard, WhatsApp & Sheets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenSignUp}
                    className="inline-flex items-center gap-2 bg-[#2596be] hover:bg-[#1b7494] text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm transition-all cursor-pointer"
                  >
                    <span>Deploy Sophia on your leads</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Instant Flow Visualization */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-4">
                
                {/* Step 1 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">A lead arrives</span>
                      <span className="text-[10px] text-slate-400">0s</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Meta · Google Ads · Website Forms · CRM</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-sm flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2596be]" />
                  <div className="w-10 h-10 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0f172a]">Sophia calls — under 30 seconds</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Connected
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">Answered in 18s · Natural English conversation</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">Booked & logged, instantly</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">Done</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Key details captured · synced to CRM, Email & Dashboard
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Bulk Campaigns Feature Descriptions */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Bulk Campaigns</span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Upload a list, it works the whole list
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Excel, CSV, or a Google Sheet with hundreds of contacts in one calm queue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Only calls when it's polite to
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Respects your calling days, time windows, and the DNC list one call at a time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Chases every miss for you
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        No-answers and busy tones are retried on a smart ladder. Nobody slips through.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenSignUp}
                    className="inline-flex items-center gap-2 bg-[#2596be] hover:bg-[#1b7494] text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm transition-all cursor-pointer"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Upload your first list</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Campaign Queue Table Mockup */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-4">
                
                {/* File Header */}
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                    <FileText className="w-4 h-4 text-[#2596be]" />
                    <span>outbound_leads_tier1.xlsx</span>
                    <span className="text-xs font-normal text-slate-400">· 240 contacts</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Imported
                  </span>
                </div>

                {/* Contacts Queue Sample */}
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-slate-800">Michael Ross</span>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 text-[11px] font-bold px-2 py-0.5 rounded">
                      Booked ✓
                    </span>
                  </div>

                  <div className="p-3 flex items-center justify-between bg-sky-50/50">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#2596be] animate-ping" />
                      <span className="font-bold text-slate-900">Sarah Jenkins</span>
                    </div>
                    <span className="text-[#2596be] bg-[#edf7fa] text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 animate-pulse" />
                      Calling...
                    </span>
                  </div>

                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      <span className="text-slate-600">David Miller</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-medium">
                      Queued
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Working the list...</span>
                    <span className="font-bold text-slate-700">168 / 240 done</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2596be] rounded-full w-[70%]" />
                  </div>
                </div>

                {/* Summary Metrics */}
                <div className="grid grid-cols-4 gap-2 pt-2 text-center">
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <div className="text-base font-black text-emerald-600">18</div>
                    <div className="text-[10px] text-slate-500 font-medium">Booked</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <div className="text-base font-black text-[#2596be]">23</div>
                    <div className="text-[10px] text-slate-500 font-medium">Qualified</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <div className="text-base font-black text-amber-500">12</div>
                    <div className="text-[10px] text-slate-500 font-medium">Callback</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <div className="text-base font-black text-slate-400">9</div>
                    <div className="text-[10px] text-slate-500 font-medium">No reply</div>
                  </div>
                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
