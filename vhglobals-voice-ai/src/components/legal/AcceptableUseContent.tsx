import React from 'react';
import { ShieldCheck, AlertTriangle, PhoneCall } from 'lucide-react';
import { LegalModalType } from '../LegalModal';

interface AcceptableUseContentProps {
  onNavigate?: (type: LegalModalType) => void;
}

export const AcceptableUseContent: React.FC<AcceptableUseContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-[#2596be] font-bold text-xs uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>ACCEPTABLE USE POLICY (AUP) · VHGLOBALS</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Acceptable Use Policy</h3>
        <p className="text-xs text-slate-500 mt-1">
          Last updated: September 2026 · Telecom, carrier standards, and calling compliance rules.
        </p>
      </div>

      {/* 1. Purpose */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            1
          </span>
          <h4 className="font-bold text-slate-900 text-base">Purpose</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          VHGLOBALS gives your business the ability to place and receive a large volume of phone calls through autonomous AI voice employees. That capability comes with real-world regulatory and ethical responsibility. This Acceptable Use Policy ("AUP") sets out what you can and cannot do when calling through the Service, and forms an integral part of our Terms & Conditions.
        </p>
      </div>

      {/* 2. Telecom & calling rules */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            2
          </span>
          <h4 className="font-bold text-slate-900 text-base">Telecom & calling rules</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          When initiating outbound or managing inbound calls via VHGLOBALS, you must:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li>Comply with TRAI's Telecom Commercial Communications Customer Preference Regulations (TCCCPR) and India's National Customer Preference Register (NCPR/DND) for any commercial calling;</li>
          <li>Only call phone numbers where you possess a lawful basis to contact — an existing customer relationship, an inbound enquiry, an explicit opt-in, or a legitimate business purpose consistent with the registration status;</li>
          <li>Immediately respect any do-not-call (DNC) request made during a live call — permanently removing that number from subsequent campaigns;</li>
          <li>Never use the Service to originate spoofed caller IDs or misrepresent the identity of the calling entity;</li>
          <li>Comply with all telecom, consumer-protection, and data-protection laws in the jurisdictions you operate in.</li>
        </ul>
      </div>

      {/* 3. Numbers you buy through VHGLOBALS */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            3
          </span>
          <h4 className="font-bold text-slate-900 text-base">Numbers you buy through VHGLOBALS</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          A virtual phone number you claim through VHGLOBALS is provisioned on a licensed Indian telecom operator's carrier network and registered to your business profile following KYC. Operator conditions pass through directly to you:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li><strong>Permitted Traffic:</strong> The number is designated for transactional and customer service calls — order updates, delivery and booking confirmations, service notifications, customer support callbacks, and warm transfers. It is strictly not intended for unsolicited cold marketing.</li>
          <li><strong>Lawful Basis:</strong> You call only contacts who have opted in, inquired, registered, or transacted with you. Bought, rented, or scraped contact databases are strictly prohibited.</li>
          <li><strong>Consent Verification:</strong> You must retain auditable proof of consent and produce it — along with your privacy policy and call recording — within 24 hours if a carrier inquiry or complaint is raised.</li>
          <li><strong>Regulatory Penalties:</strong> Any regulatory penalty, fine, or carrier suspension arising from your usage pattern is solely your responsibility.</li>
        </ul>
        <p className="text-xs text-slate-500 leading-relaxed pt-1">
          If your calling requirement involves specialized high-throughput outbound notifications, contact our team at{' '}
          <a href="mailto:support@vhglobals.com" className="text-[#2596be] underline font-semibold">
            support@vhglobals.com
          </a>{' '}
          prior to provisioning so we can assign appropriate carrier trunks.
        </p>
      </div>

      {/* 4. AI & recording disclosure */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            4
          </span>
          <h4 className="font-bold text-slate-900 text-base">AI & recording disclosure</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You are responsible for ensuring that all mandatory legal disclosures are delivered to the people your AI agents converse with — including, where required by local statute, that the caller is speaking with an automated voice AI system, and that the call is being recorded for quality or record-keeping purposes. VHGLOBALS provides dynamic prompt injection and introductory announcement capabilities to automate this.
        </p>
      </div>

      {/* 5. Prohibited content & conduct */}
      <div className="bg-rose-50/70 rounded-2xl p-5 border border-rose-200 space-y-2.5">
        <div className="flex items-center gap-2 text-rose-700">
          <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
            5
          </span>
          <h4 className="font-bold text-rose-950 text-base">Prohibited content & conduct</h4>
        </div>
        <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
          You may not use the Service for calls, scripts, or campaigns that:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-rose-900 leading-relaxed">
          <li>Are fraudulent, deceptive, or designed to extract funds or sensitive data under false pretenses (e.g., phishing or vishing schemes);</li>
          <li>Harass, threaten, intimidate, or verbally abuse callers;</li>
          <li>Impersonate a government agency, police department, bank, financial institution, or another real entity without verified legal authorization;</li>
          <li>Promote illegal products, unlawful gambling, or facilitate prohibited transactions;</li>
          <li>Collect sensitive health records, payment card CVVs, or government identity passwords beyond permitted, secured business scopes;</li>
          <li>Target minors or conduct activities inappropriate for a general commercial audience.</li>
        </ul>
      </div>

      {/* 6. Lead lists & consent */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            6
          </span>
          <h4 className="font-bold text-slate-900 text-base">Lead lists & consent</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          If you upload contact lists for outbound dialer campaigns or immediate lead callback workflows, you confirm and warrant that you own or are legally authorized to contact every number on the list. VHGLOBALS does not supply, sell, or verify third-party contact lists; the legal compliance of uploaded leads rests entirely with your business.
        </p>
      </div>

      {/* 7. Calling volume & abuse prevention */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            7
          </span>
          <h4 className="font-bold text-slate-900 text-base">Calling volume & abuse prevention</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          VHGLOBALS enforces automated network safeguards (per-number CPS throttling, concurrency channel caps, and carrier circuit-breakers) to maintain platform stability and protect telecommunications infrastructure from abusive bursts. We reserve the right to pause or review any campaign exhibiting anomalous disconnect or spam patterns.
        </p>
      </div>

      {/* 8. Enforcement */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            8
          </span>
          <h4 className="font-bold text-slate-900 text-base">Enforcement</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Violating this AUP constitutes a material breach of our Terms & Conditions. Consequences may include immediate campaign suspension, virtual number revocation, account termination, and forfeiture of credit balances where permitted by law, alongside potential civil or regulatory liability.
        </p>
      </div>

      {/* 9. Reporting abuse */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-sky-400">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            9
          </span>
          <h4 className="font-bold text-white text-base">Reporting abuse</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          If you received an unwanted or abusive call that you believe was originated via VHGLOBALS's telephony platform, or if you are a customer reporting suspected platform misuse, contact our trust and safety team immediately at{' '}
          <a href="mailto:support@vhglobals.com" className="text-[#38bdf8] font-mono underline font-semibold">
            support@vhglobals.com
          </a>. We investigate every incident thoroughly.
        </p>
      </div>
    </div>
  );
};
