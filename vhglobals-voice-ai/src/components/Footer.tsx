import React from 'react';
import { Radio, ShieldCheck, Lock, Activity, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2596be] flex items-center justify-center text-white shadow-md">
                <Radio className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  VH<span className="text-[#2596be]">Globals</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Autonomous Conversational Voice Telephony
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              VHGlobals delivers enterprise-grade, sub-350ms AI voice agents that speak with natural
              human cadence, handle live caller interruptions, and automate high-volume phone operations.
            </p>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2596be]" />
                <span>SOC-2 Type II</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>HIPAA & PCI-DSS</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300 font-medium">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                <span>99.99% Telephony Uptime</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Real-Time Barge-In</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Sub-350ms Streaming</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">CRM Telephony Sync</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Multilingual Engine</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Automated Tool Calling</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Use Cases */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Use Cases
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#use-cases" className="hover:text-white transition-colors">Appointment Setting</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Customer Support Triage</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Outbound Lead Follow-Up</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Healthcare Intake</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Emergency Dispatch</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Interactive Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#interactive-demo" className="hover:text-white transition-colors">Live Audio Waveform</a></li>
              <li><a href="#voice-models" className="hover:text-white transition-colors">Voice Personas</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#onboarding" className="hover:text-white transition-colors">Project Specification Form</a></li>
              <li><a href="#onboarding" className="hover:text-white transition-colors">Export JSON / CSV</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} VHGlobals Inc. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#2596be] font-medium">Primary Brand #2596be</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security Overview</a>
            <span className="flex items-center gap-1 text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
