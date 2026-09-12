import React from 'react';
import { MessageSquare, Check, Sparkles, PhoneCall, Send, FileSpreadsheet, Bot, CheckCircle } from 'lucide-react';

export const SetupAgencyFee: React.FC = () => {

  const dialogue = [
    {
      speaker: 'Sophia',
      role: 'Admissions AI',
      text: 'Hi Sarah, this is Sophia from Brilliant Academy. You enquired about admissions counseling, right?',
      time: '0:04'
    },
    {
      speaker: 'Sarah',
      role: 'Parent',
      text: 'Yes — what are the program fees?',
      time: '0:09'
    },
    {
      speaker: 'Sophia',
      role: 'Admissions AI',
      text: 'Our comprehensive program is $1,200, with flexible monthly plans. Would you like to schedule an introductory session?',
      time: '0:14'
    },
    {
      speaker: 'Sarah',
      role: 'Parent',
      text: 'She is finishing 11th grade. Is there a session for 12th grade?',
      time: '0:19'
    },
    {
      speaker: 'Sophia',
      role: 'Admissions AI',
      text: 'Absolutely! Shall I book a free introductory session this Sunday at 10 AM?',
      time: '0:24'
    },
    {
      speaker: 'Sarah',
      role: 'Parent',
      text: 'Okay, please book it.',
      time: '0:28'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Skip the expensive agency setup fee. <br />
            <span className="text-[#2596be]">Deploy Sophia yourself in just 5 mins.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, professional English with every qualification detail confirmed and calendar invite sent before the call ends.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Interactive Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-slate-50 rounded-[36px] p-4 sm:p-5 border-4 border-slate-200 shadow-2xl relative">
              
              {/* Phone Speaker Notch */}
              <div className="w-28 h-4 bg-slate-300 rounded-full mx-auto mb-4" />

              {/* Call Header */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-sm flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2596be]/15 text-[#2596be] flex items-center justify-center font-black text-sm">
                    S
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">Sophia</span>
                      <span className="text-[10px] text-slate-400 font-medium">Admissions</span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono">+1 (415) ***** 45</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active Call</span>
                </div>
              </div>

              {/* Live Dialogue Stream */}
              <div className="space-y-3 mb-4 max-h-[360px] overflow-y-auto pr-1">
                {dialogue.map((turn, index) => {
                  const isAgent = turn.speaker === 'Sophia';
                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                          isAgent
                            ? 'bg-[#2596be] text-white rounded-tl-sm'
                            : 'bg-white text-slate-800 border border-slate-200 rounded-tr-sm'
                        }`}
                      >
                        <p className="font-semibold">{turn.text}</p>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 px-1 font-mono">
                        {turn.time}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Sophia Is Noting Down Live Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-emerald-100 shadow-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    SOPHIA IS NOTING DOWN
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Auto-Captured
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Program: <strong>Admissions 2yr</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Grade: <strong>12th</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Plan: <strong>Monthly</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Session: <strong>Sun 10AM</strong></span>
                  </div>
                </div>

                {/* Status pill */}
                <div className="bg-emerald-50 text-emerald-800 text-[11px] font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-emerald-600" />
                  <span>Calendar invite sent — session details and Zoom link dispatched mid-call</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: 3 Step Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Step 1 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[11px] font-bold flex items-center justify-center">1</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Sophia briefs your AI employee
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Your AI briefs the script, English voice model, and qualification fields — in minutes.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> English voice
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Script written
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Fields set
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2596be] text-white text-[11px] font-bold flex items-center justify-center">2</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Sophia calls, live
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Natural, professional English voice, sending a calendar confirmation or CRM update before the call even ends.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Live · 22s answered
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Confirmation sent mid-call
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-[11px] font-bold flex items-center justify-center">3</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Every detail logged, automatically
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Summary and captured fields sent to your dashboard and CRM the moment the call ends.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Dashboard
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      CRM Integration
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Google Sheets
                    </span>
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
