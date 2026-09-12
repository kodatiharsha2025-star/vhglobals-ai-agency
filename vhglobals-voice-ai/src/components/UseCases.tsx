import React, { useState } from 'react';
import { Calendar, Headphones, PhoneOutgoing, Check, ArrowRight, TrendingUp, Clock, Sparkles, UserCheck } from 'lucide-react';
import { UseCaseData } from '../types';

interface UseCasesProps {
  onSelectUseCase: (useCaseName: string) => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ onSelectUseCase }) => {
  const [activeTab, setActiveTab] = useState<string>('appointments');

  const useCasesList: UseCaseData[] = [
    {
      id: 'appointments',
      title: 'Automated Appointment Setting',
      category: 'Calendar & Scheduling Automation',
      tagline: 'Eliminate phone tag and book qualified calendar slots 24/7',
      description:
        'Ideal for medical practices, dental clinics, automotive service centers, legal firms, and home services. The AI agent accesses live calendar availability, resolves scheduling conflicts, verifies patient/client details, and books directly into your scheduling software with automatic SMS and email confirmations.',
      metrics: [
        { label: 'Booking Conversion Rate', value: '+64%', trend: 'Increase' },
        { label: 'No-Show Reduction', value: '-42%', trend: 'Automated Reminders' },
        { label: 'Staff Time Saved', value: '28 hrs/wk', trend: 'Per Location' },
      ],
      keyCapabilities: [
        'Live two-way calendar sync (Google, Outlook, Cal.com, EHRs)',
        'Natural conflict handling: "Thursday 3 PM is taken, how about 4:15 PM?"',
        'Collects intake data, insurance details, and sends instant SMS links',
        'Handles reschedules and cancellations without human intervention',
      ],
      sampleDialogueSnippet: {
        customer: "Hi, I need to bring my car in for brake pads sometime this Friday morning.",
        agent: "I have master technician bay 3 open at 9:15 AM this Friday. I can also reserve our complimentary loaner sedan for you. Should I book that slot?",
      },
    },
    {
      id: 'support-triage',
      title: 'Inbound Customer Support Triage',
      category: 'Tier-1 & Tier-2 Support Deflection',
      tagline: 'Zero hold times, 82% first-call resolution, 24/7 availability',
      description:
        'Deliver instant, empathetic support for e-commerce, SaaS, utilities, and financial services. The AI agent resolves common inquiries—order tracking, refund policies, billing queries, and account unlocks—while seamlessly executing warm transfers with complete audio transcripts to human specialists when required.',
      metrics: [
        { label: 'First-Call Resolution', value: '82%', trend: 'Autonomous' },
        { label: 'Average Hold Time', value: '0 sec', trend: 'Zero Queue' },
        { label: 'Cost Per Contact', value: '$0.36', trend: 'vs $4.80 Human' },
      ],
      keyCapabilities: [
        'Instant customer look-up using caller ID and database verification',
        'Secure API tool calling for refund processing and order lookups',
        'Empathetic sentiment tracking with automatic escalation thresholds',
        'Warm transfer to human staff with full conversational context pre-loaded',
      ],
      sampleDialogueSnippet: {
        customer: "Where is my package #84920? It was supposed to arrive yesterday.",
        agent: "I pulled up order #84920. It cleared the regional distribution center at 6:15 AM and is out for delivery today before 4:00 PM. I just texted you the live courier GPS tracking link.",
      },
    },
    {
      id: 'lead-followup',
      title: 'Outbound Lead Qualification & Follow-Up',
      category: 'Speed-to-Lead & Revenue Engine',
      tagline: 'Call inbound web leads in under 45 seconds to maximize conversion',
      description:
        'Every minute a web inquiry sits unattended, lead conversion drops by 391%. VHGlobals triggers an immediate autonomous outbound call the second a lead submits a website form, qualifies their purchase intent and budget tier, and transfers hot leads directly to an account executive while they are still at their computer.',
      metrics: [
        { label: 'Speed to Lead', value: '42 sec', trend: 'From Form Submit' },
        { label: 'Pipeline Opportunity', value: '3.8x', trend: 'Qualified Leads' },
        { label: 'Sales Rep Capacity', value: '+75%', trend: 'High-Value Calls Only' },
      ],
      keyCapabilities: [
        'Web-hook triggered dialing within 45 seconds of website lead form submission',
        'Conversational BANT qualification (Budget, Authority, Need, Timeline)',
        'Scores lead in HubSpot or Salesforce with detailed qualification audio summary',
        'Live warm-transfer to sales team or books instant Google Meet calendar invite',
      ],
      sampleDialogueSnippet: {
        customer: "Hello? Who is this?",
        agent: "Hi Marcus! This is Liam from CloudMetric. I saw you just requested enterprise pricing for your 50-person team. Did I catch you while you had a free minute?",
      },
    },
  ];

  const currentUseCase = useCasesList.find((u) => u.id === activeTab) || useCasesList[0];

  return (
    <section id="use-cases" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 text-[#1b7494] text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Impact Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for High-Converting Business Workflows
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Deploy specialized autonomous voice agents tuned to your exact operational funnel.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 flex-wrap justify-center gap-1.5">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'appointments'
                  ? 'bg-white text-[#1b7494] shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#2596be]" />
              <span>Automated Appointment Setting</span>
            </button>

            <button
              onClick={() => setActiveTab('support-triage')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'support-triage'
                  ? 'bg-white text-[#1b7494] shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Headphones className="w-4 h-4 text-[#2596be]" />
              <span>Inbound Customer Support Triage</span>
            </button>

            <button
              onClick={() => setActiveTab('lead-followup')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'lead-followup'
                  ? 'bg-white text-[#1b7494] shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <PhoneOutgoing className="w-4 h-4 text-[#2596be]" />
              <span>Outbound Lead Follow-Up</span>
            </button>
          </div>
        </div>

        {/* Active Use Case Deep Dive Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#2596be] uppercase tracking-wider">
                  {currentUseCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentUseCase.title}
                </h3>
                <p className="text-base text-[#1b7494] font-medium">
                  {currentUseCase.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentUseCase.description}
              </p>

              {/* Key Capabilities Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Workflow Highlights:
                </div>
                {currentUseCase.keyCapabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Configure this use case CTA */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectUseCase(currentUseCase.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2596be] text-white text-sm font-bold shadow-md shadow-[#2596be]/25 hover:bg-[#1b7494] transition-all cursor-pointer"
                >
                  <span>Configure {currentUseCase.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Metric & Interactive Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-3">
                {currentUseCase.metrics.map((m, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-xs">
                    <div className="text-2xl font-black text-[#2596be]">{m.value}</div>
                    <div className="text-[11px] font-bold text-slate-800 mt-1 leading-tight">{m.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{m.trend}</div>
                  </div>
                ))}
              </div>

              {/* Sample Live Dialogue Box */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-800">
                    Live Dialogue Excerpt
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                    Sub-300ms Turn
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-1">Customer:</span>
                    <p className="text-slate-600 italic">"{currentUseCase.sampleDialogueSnippet.customer}"</p>
                  </div>

                  <div className="bg-[#2596be]/10 p-3 rounded-lg border border-[#2596be]/20">
                    <span className="font-bold text-[#1b7494] block mb-1">VHGlobals AI Agent:</span>
                    <p className="text-slate-800 font-medium">"{currentUseCase.sampleDialogueSnippet.agent}"</p>
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
