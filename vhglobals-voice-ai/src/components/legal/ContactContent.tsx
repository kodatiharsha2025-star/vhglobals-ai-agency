import React from 'react';
import { Mail, Clock, ShieldAlert, ArrowRight } from 'lucide-react';
import { LegalModalType } from '../LegalModal';

interface ContactContentProps {
  onNavigate?: (type: LegalModalType) => void;
}

export const ContactContent: React.FC<ContactContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-extrabold text-slate-900">Contact VHGLOBALS</h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Have questions about account configuration, enterprise carrier routing, billing, or custom integrations? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Support Card */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#2596be]/10 text-[#2596be] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Email Support</h4>
          <a
            href="mailto:support@vhglobals.com"
            className="text-sm font-semibold text-[#2596be] hover:underline block font-mono"
          >
            support@vhglobals.com
          </a>
          <p className="text-xs text-slate-500">
            Include your account email and relevant payment reference IDs for billing questions.
          </p>
        </div>

        {/* Response Time Card */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Response Time</h4>
          <p className="text-sm font-bold text-slate-900">Within 1 business day</p>
          <p className="text-xs text-slate-500">
            Our engineering and support team responds promptly Monday through Saturday.
          </p>
        </div>
      </div>

      {/* Routing Guides & Helpful Links */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
          How to route your inquiry:
        </h4>

        <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-600">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between gap-4">
            <div>
              <span className="font-bold text-slate-900">Billing Dispute or Refund:</span>{' '}
              Review our transparent terms on wallet top-ups and telephone number rentals.
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate('refund')}
                className="text-[#2596be] hover:underline font-bold whitespace-nowrap flex items-center gap-1 cursor-pointer"
              >
                Refund Policy <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between gap-4">
            <div>
              <span className="font-bold text-slate-900">Privacy or Data Requests:</span>{' '}
              Direct requests under India's DPDPA to our Grievance Officer.
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate('privacy')}
                className="text-[#2596be] hover:underline font-bold whitespace-nowrap flex items-center gap-1 cursor-pointer"
              >
                Grievance Officer <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between gap-4">
            <div>
              <span className="font-bold text-slate-900">Reporting Unwanted Calls:</span>{' '}
              Investigate an unwanted or abusive call placed through our telephony platform.
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate('acceptable-use')}
                className="text-[#2596be] hover:underline font-bold whitespace-nowrap flex items-center gap-1 cursor-pointer"
              >
                Acceptable Use <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Executive Escalation */}
      <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-2xl space-y-2">
        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Executive Escalation Channel</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Not resolved by regular support, or something urgent you would rather raise directly with leadership? VHGLOBALS executive leadership directly reviews priority escalations at{' '}
          <a href="mailto:support@vhglobals.com" className="text-[#38bdf8] font-mono font-semibold underline">
            support@vhglobals.com
          </a>.
        </p>
      </div>
    </div>
  );
};
