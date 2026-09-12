import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Lock, Activity, Globe, Sparkles } from 'lucide-react';
import { LegalModalType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onOpenSignUp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenSignUp }) => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Logo size="md" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              World-class conversational AI voice agent service by VHGLOBALS. Calls every lead within seconds, answers 24/7 in fluent, professional English with natural human intonation.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
              <span>Engineered for English-speaking countries</span>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[11px] text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Global Carrier & IVRS Ready</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[11px] text-slate-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC-2 & 256-Bit Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[11px] text-slate-300 font-medium">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <span>Sub-500ms Telephony</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: AI Employee */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sophia Voice AI
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Reliability & Latency</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">Compare vs Agency</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Compliance</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Legal & Policies (Matching the video!) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegal('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Refund & Cancellation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('acceptable-use')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Acceptable Use Policy (AUP)
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300 font-mono text-[11px]">
                support@vhglobals.com
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Response within 1 business day for account, billing, and carrier setup.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenSignUp}
                  className="px-4 py-2 bg-[#2596be] hover:bg-[#1b7494] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Get 50 Free Credits →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Operational Telephony Status Banner */}
        <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Global IVRS Telephony Routes Operational</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VHGLOBALS Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Primary Brand:</span>
            <span className="inline-flex items-center gap-1 text-[#38bdf8] font-mono font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2596be]" />
              #2596be
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
