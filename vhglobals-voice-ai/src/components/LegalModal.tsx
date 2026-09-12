import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Mail, FileText, RefreshCw, Lock, AlertCircle } from 'lucide-react';
import { Logo } from './Logo';
import { ContactContent } from './legal/ContactContent';
import { PrivacyPolicyContent } from './legal/PrivacyPolicyContent';
import { TermsContent } from './legal/TermsContent';
import { RefundPolicyContent } from './legal/RefundPolicyContent';
import { AcceptableUseContent } from './legal/AcceptableUseContent';

export type LegalModalType = 'contact' | 'privacy' | 'terms' | 'refund' | 'acceptable-use' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type: initialType, onClose }) => {
  const [activeTab, setActiveTab] = useState<LegalModalType>(initialType);

  useEffect(() => {
    setActiveTab(initialType);
  }, [initialType]);

  if (!initialType && !activeTab) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div className="h-4 w-px bg-slate-300 hidden sm:block" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline-block">
              {activeTab === 'contact' && 'Contact Support'}
              {activeTab === 'privacy' && 'Privacy Policy'}
              {activeTab === 'terms' && 'Terms & Conditions'}
              {activeTab === 'refund' && 'Refund & Cancellation Policy'}
              {activeTab === 'acceptable-use' && 'Acceptable Use Policy'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-7 py-2.5 bg-slate-100/70 border-b border-slate-200/80 flex items-center gap-1.5 overflow-x-auto text-xs font-semibold scrollbar-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#2596be]" />
            Terms & Conditions
          </button>

          <button
            onClick={() => setActiveTab('refund')}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'refund'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5 text-sky-600" />
            Refund Policy
          </button>

          <button
            onClick={() => setActiveTab('acceptable-use')}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'acceptable-use'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            Acceptable Use
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            Contact Us
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {activeTab === 'contact' && <ContactContent onNavigate={setActiveTab} />}
          {activeTab === 'privacy' && <PrivacyPolicyContent />}
          {activeTab === 'terms' && <TermsContent onNavigate={setActiveTab} />}
          {activeTab === 'refund' && <RefundPolicyContent onNavigate={setActiveTab} />}
          {activeTab === 'acceptable-use' && <AcceptableUseContent onNavigate={setActiveTab} />}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="font-medium hidden sm:block">
            VHGLOBALS · Enterprise Autonomous Voice AI
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer ml-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
