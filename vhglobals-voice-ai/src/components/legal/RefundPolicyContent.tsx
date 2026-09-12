import React from 'react';
import { RefreshCw } from 'lucide-react';
import { LegalModalType } from '../LegalModal';

interface RefundPolicyContentProps {
  onNavigate?: (type: LegalModalType) => void;
}

export const RefundPolicyContent: React.FC<RefundPolicyContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-[#2596be] font-bold text-xs uppercase tracking-wider mb-1">
          <RefreshCw className="w-4 h-4" />
          <span>REFUND & CANCELLATION POLICY · VHGLOBALS</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Refund Policy</h3>
        <p className="text-xs text-slate-500 mt-1">
          Last updated: September 2026 · Applicable to prepaid credit wallet top-ups, telephone rentals, and live call minutes.
        </p>
      </div>

      {/* 1. How billing works on VHGLOBALS */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            1
          </span>
          <h4 className="font-bold text-slate-900 text-base">How billing works on VHGLOBALS</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          VHGLOBALS runs on prepaid credits (<strong>1 credit = ₹1</strong>), paid for through Razorpay. There is no card auto-debit and no subscription billed to your card — you decide when to top up. Building, scripting, prompt engineering, agent training, and live browser test calls are free, and there is no joining fee and no per-employee monthly charge.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You spend on exactly two things: <strong>call time</strong>, billed by the minute out of your credit balance while a call is actually running, and <strong>phone number rental</strong>, billed monthly out of the same balance for each number you hold. This policy explains how refunds work for both, and for the top-ups that fund them.
        </p>
      </div>

      {/* 2. Phone number rental */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            2
          </span>
          <h4 className="font-bold text-slate-900 text-base">Phone number rental</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          An AI voice agent needs its own phone number to make or receive real calls. Each number carries a monthly rental (shown before you claim it, e.g., ₹649/month) which is deducted automatically from your prepaid credit balance each month for as long as you hold the number. This deduction comes from credits you have already bought; it is not a charge to your card.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          A month already paid for is non-refundable, because the number is reserved and carrier-registered to you for that whole month whether or not you place any calls on it. You can release a number at any time from Phone Numbers; releasing stops all future rental for it immediately and permanently, but does not refund the current month.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          If your credit balance cannot cover a renewal, we will notify you and keep retrying. A number that remains unpaid beyond the grace period is released and returns to the carrier. Released numbers cannot be recovered and may be reassigned to someone else.
        </p>
      </div>

      {/* 3. Credit top-ups */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            3
          </span>
          <h4 className="font-bold text-slate-900 text-base">Credit top-ups</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Credits you purchase are non-refundable and non-transferable once added to your wallet, except where required by law or as set out below. Credits have no cash value outside the Service and cannot be withdrawn or exchanged for money.
        </p>
      </div>

      {/* 4. Signup bonus credits */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            4
          </span>
          <h4 className="font-bold text-slate-900 text-base">Signup bonus credits</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          New accounts receive a starting credit balance (such as 50 free credits / minutes) as a promotional bonus. Bonus credits have no cash value, cannot be refunded or withdrawn, and may be adjusted or discontinued for new accounts at any time without affecting balances already granted.
        </p>
      </div>

      {/* 5. When we will refund you */}
      <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
            5
          </span>
          <h4 className="font-bold text-emerald-950 text-base">When we will refund you</h4>
        </div>
        <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
          We'll issue a refund (fully or partially, to your original Razorpay payment method) if:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-emerald-900">
          <li>You were charged more than once for the same top-up or number due to a technical error (a duplicate/failed-then-retried payment);</li>
          <li>A payment was deducted but the credits never landed in your account and our team can't resolve it by crediting your wallet instead;</li>
          <li>You were charged in error due to a verified platform bug.</li>
        </ul>
        <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed pt-1">
          To request one of these, email <code className="bg-white px-2 py-0.5 rounded border border-emerald-300 font-semibold text-emerald-900">support@vhglobals.com</code> with your account email and the payment reference (visible in Billing → Payments). We aim to resolve refund requests within <strong>5–7 business days</strong>.
        </p>
      </div>

      {/* 6. What we don't refund */}
      <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
            6
          </span>
          <h4 className="font-bold text-amber-950 text-base">What we don't refund</h4>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-amber-900">
          <li>Credits already consumed by calls, AI usage, or other billable actions;</li>
          <li>Change of mind after a top-up has completed successfully, or after a number's month has begun;</li>
          <li>Call quality issues arising from factors outside VHGLOBALS's control (e.g. the callee's network, a third-party outage, or inaccurate lead data you supplied);</li>
          <li>Unused credits remaining when you choose to stop using the Service — see Section 7.</li>
        </ul>
      </div>

      {/* 7. Account closure & unused balance */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            7
          </span>
          <h4 className="font-bold text-slate-900 text-base">Account closure & unused balance</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          If you close your account, any unused credit balance is forfeited unless required otherwise by law. If you believe you're owed a refund of an unused balance for a specific reason, contact us and we'll review it case by case.
        </p>
      </div>

      {/* 8. Chargebacks */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            8
          </span>
          <h4 className="font-bold text-slate-900 text-base">Chargebacks</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Please contact us before filing a chargeback with your bank or Razorpay — most billing issues can be resolved faster directly. Unwarranted chargebacks may result in account suspension pending resolution.
        </p>
      </div>

      {/* 9. Contact */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-[#38bdf8]">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            9
          </span>
          <h4 className="font-bold text-white text-base">Contact</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          For any billing or refund question, reach us via our{' '}
          {onNavigate ? (
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#38bdf8] underline hover:text-white font-semibold cursor-pointer"
            >
              Contact Us page
            </button>
          ) : (
            'Contact Us page'
          )}{' '}
          or directly at{' '}
          <a href="mailto:support@vhglobals.com" className="text-[#38bdf8] underline hover:text-white font-semibold">
            support@vhglobals.com
          </a>.
        </p>
      </div>
    </div>
  );
};
