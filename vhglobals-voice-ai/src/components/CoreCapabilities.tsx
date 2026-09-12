import React from 'react';
import { Zap, Mic, RefreshCw, Globe, Database, ShieldCheck, ArrowUpRight, Cpu, Layers } from 'lucide-react';

export const CoreCapabilities: React.FC = () => {
  const capabilities = [
    {
      id: 'barge-in',
      icon: Zap,
      title: 'Real-Time Barge-In Support',
      tagline: 'Zero-Collision Interruption Handling',
      description:
        'Callers don’t wait for robots to finish monologues. Our full-duplex acoustic pipeline listens while speaking, immediately pausing and gracefully adjusting when a caller interrupts or corrects details.',
      highlight: '< 40ms Interruption Cutoff',
      badge: 'Full-Duplex Audio',
    },
    {
      id: 'latency',
      icon: Cpu,
      title: 'Sub-Second Latency (<500ms)',
      tagline: 'Imperceptible Turn-Taking Speed',
      description:
        'Standard voice bots suffer from 2–4 second awkward silences. VHGlobals streams speech-to-speech tokens continuously over WebSockets, producing natural conversational rhythm identical to a human operator.',
      highlight: 'Sub-500ms Measured TTFA',
      badge: 'Streaming Engine',
    },
    {
      id: 'crm',
      icon: Database,
      title: 'Bi-Directional CRM Integration',
      tagline: 'Native Telephony & System Sync',
      description:
        'Instantly read caller history and write structured call logs, sentiment analysis, audio recordings, and extracted lead data into Salesforce, HubSpot, Zendesk, Zoho, or internal webhooks.',
      highlight: '100+ Plug-and-Play Connectors',
      badge: 'Instant Sync',
    },
    {
      id: 'multilingual',
      icon: Globe,
      title: 'Multilingual & Accent Mastery',
      tagline: '95+ Global Languages & Dialects',
      description:
        'Communicate seamlessly across regional accents and native idioms. Our voice models dynamically detect caller language mid-sentence and switch seamlessly between English, Spanish, French, German, and more.',
      highlight: '95+ Languages Supported',
      badge: 'Dynamic Switch',
    },
    {
      id: 'action-calling',
      icon: Layers,
      title: 'Autonomous Function Execution',
      tagline: 'Real Work, Not Just Answering',
      description:
        'Agents book live calendar slots, verify account numbers, securely trigger SMS confirmations, look up live order statuses in databases, and initiate warm transfers to human tier-2 teams.',
      highlight: 'Real-time REST & GraphQL APIs',
      badge: 'Autonomous Action',
    },
    {
      id: 'compliance',
      icon: ShieldCheck,
      title: 'Enterprise Security & Compliance',
      tagline: 'HIPAA, SOC-2 & PCI-DSS Compliant',
      description:
        'Automated real-time voice audio redaction masks credit card numbers, SSNs, and sensitive medical health data. All telephony channels are encrypted with TLS 1.3 and stored with strict role-based access.',
      highlight: 'Zero PII Data Leakage',
      badge: 'Enterprise Grade',
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2596be]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 text-[#1b7494] text-xs font-bold tracking-wide uppercase mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Engine Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Natural Telephonic Cadence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate robotic robotic delays and awkward collisions. VHGlobals voice agents combine
            acoustic full-duplex modeling with deterministic business workflow execution.
          </p>
        </div>

        {/* Capabilities 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#2596be]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2596be]/10 text-[#2596be] flex items-center justify-center group-hover:bg-[#2596be] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#2596be]/10 group-hover:text-[#1b7494] transition-colors">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#2596be] mb-3">
                    {cap.tagline}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Highlight Stat */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-900">
                    {cap.highlight}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#2596be] group-hover:bg-[#2596be]/10 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Latency Comparison Waterfall Banner */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2596be]">
                Speed Benchmark Comparison
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1">
                Conversational Turn Latency (Human vs. Bot)
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Measured time between when the human speaker stops talking and the voice agent emits the first acoustic syllable.
              </p>
            </div>

            <div className="w-full lg:w-1/2 space-y-3">
              {/* Legacy Bot */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                  <span>Legacy IVR / Traditional Voice Bots</span>
                  <span className="text-red-600 font-mono">1,800ms - 3,500ms (Unnatural)</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              {/* Average Human */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                  <span>Average Human Conversational Pause</span>
                  <span className="text-slate-700 font-mono">~300ms - 450ms</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              {/* VHGlobals AI */}
              <div>
                <div className="flex justify-between text-xs font-bold text-[#1b7494] mb-1">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#2596be]" />
                    VHGlobals Voice AI Streaming Engine
                  </span>
                  <span className="font-mono text-[#2596be]">Sub-500ms (True Real-Time)</span>
                </div>
                <div className="h-3 bg-[#2596be]/15 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2596be] rounded-full shadow-[0_0_8px_#2596be]" style={{ width: '26%' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
