import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';
import { LegalModalType } from '../LegalModal';

interface TermsContentProps {
  onNavigate?: (type: LegalModalType) => void;
}

export const TermsContent: React.FC<TermsContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-[#2596be] font-bold text-xs uppercase tracking-wider mb-1">
          <FileText className="w-4 h-4" />
          <span>TERMS & CONDITIONS · VHGLOBALS</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Terms & Conditions</h3>
        <p className="text-xs text-slate-500 mt-1">
          Last updated: September 2026 · Governing all access to VHGLOBALS voice AI infrastructure and APIs.
        </p>
      </div>

      {/* 1. Who these Terms are between */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            1
          </span>
          <h4 className="font-bold text-slate-900 text-base">Who these Terms are between</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          These Terms & Conditions ("Terms") are a legally binding agreement between <strong>VHGLOBALS TECHNOLOGIES PRIVATE LIMITED</strong>, operating as VHGLOBALS ("VHGLOBALS", "we", "us"), and the business or individual creating a VHGLOBALS account ("you", "your business"). By creating an account, hiring an AI voice employee, or using vhglobals.com or any VHGLOBALS dashboard, calling engine, or API (the "Service"), you agree to these Terms. If you do not agree, do not use the Service.
        </p>
      </div>

      {/* 2. What the Service is */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            2
          </span>
          <h4 className="font-bold text-slate-900 text-base">What the Service is</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          VHGLOBALS lets you build and run autonomous AI voice agents that make and receive phone calls on your behalf — answering inbound customer inquiries, calling new leads within seconds, and running bulk outbound notification campaigns — using speech recognition, text-to-speech, and large-language-model technologies. Calls may be recorded, transcribed, and stored so you can review them, train your AI employees, and inspect analytics.
        </p>
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>Autonomous AI Disclaimer:</strong> The Service is AI-generated and automated. It is not a human operator, and while we engineer it to remain accurate and on-script, speech recognition or generation imperfections may occur. You are responsible for reviewing performance and for business outcomes that depend on calls handled by the AI. Do not rely on the Service alone for safety-critical decisions (such as emergency, medical, or legal situations).
        </div>
      </div>

      {/* 3. Your account */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            3
          </span>
          <h4 className="font-bold text-slate-900 text-base">Your account</h4>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li>You must provide authentic business details and maintain the confidentiality of your login credentials;</li>
          <li>You are solely responsible for all actions taken under your account by team members or contractors you grant access to;</li>
          <li>You must be legally authorized to represent the business entity on whose behalf you register;</li>
          <li>We reserve the right to suspend or terminate accounts that provide falsified information or engage in abusive conduct.</li>
        </ul>
      </div>

      {/* 4. Fees, credits & payment */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            4
          </span>
          <h4 className="font-bold text-slate-900 text-base">Fees, credits & payment</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Service operates on a prepaid credits model (<strong>1 credit = ₹1</strong>) processed securely through Razorpay. New accounts receive starting promotional credits. There is no joining fee and no per-agent charge: building, scripting, knowledge training, and browser test calls are 100% free. Live telephony talk-time is deducted from your credit wallet by the minute while a call is actively running.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Each dedicated phone number carries a monthly rental (disclosed before claiming, e.g., ₹649/month) deducted automatically from your prepaid credit balance. This is a deduction from credits already purchased — we never auto-debit cards on file. You can release a number at any time from your dashboard. If your credit balance reaches zero, live calling is capped — we never permit balances to go negative.
        </p>
        {onNavigate && (
          <p className="text-xs text-slate-500 pt-1">
            See our{' '}
            <button
              onClick={() => onNavigate('refund')}
              className="text-[#2596be] underline font-bold cursor-pointer"
            >
              Refund & Cancellation Policy
            </button>{' '}
            for complete rules governing top-ups, number rentals, and balance handling.
          </p>
        )}
      </div>

      {/* 5. Acceptable use */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            5
          </span>
          <h4 className="font-bold text-slate-900 text-base">Acceptable use</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You agree not to use the Service to violate TRAI's Telecom Commercial Communications Customer Preference Regulations (TCCCPR), India's National Customer Preference Register (NCPR/DND), to harass or deceive callers, to spoof caller IDs, or to execute unauthorized mass calling. You are solely responsible for compliance with all applicable telecom, consumer protection, and privacy laws — including mandatory disclosures that a caller is speaking with an AI or that the conversation is recorded.
        </p>
      </div>

      {/* 6. Call recording & consent */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            6
          </span>
          <h4 className="font-bold text-slate-900 text-base">Call recording & consent</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Calls placed or received through the Service may be recorded and transcribed for quality assurance and training. You are responsible for ensuring that your operation complies with consent laws in the jurisdictions where your callers reside, including delivering verbal recording notifications where legally required.
        </p>
      </div>

      {/* 7. Your content & data */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            7
          </span>
          <h4 className="font-bold text-slate-900 text-base">Your content & data</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You retain full intellectual ownership of the scripts, prompt instructions, training materials, contact lists, and business logic you upload ("Your Content"). You grant VHGLOBALS a limited license to process Your Content strictly to operate, protect, and improve your telephony deployments.
        </p>
      </div>

      {/* 8. Third-party services */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            8
          </span>
          <h4 className="font-bold text-slate-900 text-base">Third-party services</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Service relies upon licensed telecom carriers, neural speech engines, large-language models, cloud infrastructure, and Razorpay for payment processing. Third-party terms may apply to the extent you interact directly with those services.
        </p>
      </div>

      {/* 9. Service availability */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            9
          </span>
          <h4 className="font-bold text-slate-900 text-base">Service availability</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          While we architect for high enterprise availability and carrier redundancy, the Service is provided "as is" and "as available". We may perform scheduled maintenance or software updates with advance dashboard notice where feasible.
        </p>
      </div>

      {/* 10. Suspension & termination */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            10
          </span>
          <h4 className="font-bold text-slate-900 text-base">Suspension & termination</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We may suspend or terminate your account access if you breach these Terms, misuse carrier lines, fail to settle applicable fees, or if required by regulatory authorities. You may deactivate agents or close your account at any time from your dashboard.
        </p>
      </div>

      {/* 11. Disclaimers & limitation of liability */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            11
          </span>
          <h4 className="font-bold text-slate-900 text-base">Disclaimers & limitation of liability</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          To the maximum extent permitted under applicable law, VHGLOBALS disclaims all warranties, express or implied. VHGLOBALS's aggregate liability for any claim arising out of or relating to the Service is strictly limited to the amount paid by you to VHGLOBALS in the three (3) months preceding the claim. We are not liable for indirect, incidental, or consequential damages, lost profits, or carrier-level outages outside our control.
        </p>
      </div>

      {/* 12. Indemnity */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            12
          </span>
          <h4 className="font-bold text-slate-900 text-base">Indemnity</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You agree to defend, indemnify, and hold harmless VHGLOBALS, its officers, directors, and employees against any claims, damages, or liabilities arising from your breach of these Terms, unauthorized calling campaigns, or caller disputes regarding how your business configured the Service.
        </p>
      </div>

      {/* 13. Governing law & disputes */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            13
          </span>
          <h4 className="font-bold text-slate-900 text-base">Governing law & disputes</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          These Terms are governed by the laws of India. The courts at <strong>Hyderabad, Telangana</strong> shall have exclusive jurisdiction over any disputes arising under or in connection with these Terms, subject to the Indian Contract Act, 1872, the Information Technology Act, 2000, and the Consumer Protection Act, 2019 where applicable.
        </p>
      </div>

      {/* 14. Changes to these Terms */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            14
          </span>
          <h4 className="font-bold text-slate-900 text-base">Changes to these Terms</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We may update these Terms from time to time. We will indicate revisions with an updated "Last updated" date above. Continued use of the Service following revisions constitutes acceptance of the updated Terms.
        </p>
      </div>

      {/* 15. Contact */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-sky-400">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            15
          </span>
          <h4 className="font-bold text-white text-base">Contact</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Questions regarding these Terms? Reach our legal and compliance desk at{' '}
          <a href="mailto:support@vhglobals.com" className="text-[#38bdf8] font-mono underline font-semibold">
            support@vhglobals.com
          </a>{' '}
          or visit our Contact Us page.
        </p>
      </div>
    </div>
  );
};
