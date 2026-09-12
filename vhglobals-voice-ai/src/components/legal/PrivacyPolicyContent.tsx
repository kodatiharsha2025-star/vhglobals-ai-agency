import React from 'react';
import { Lock } from 'lucide-react';

export const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1">
          <Lock className="w-4 h-4" />
          <span>PRIVACY POLICY · VHGLOBALS</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Privacy Policy</h3>
        <p className="text-xs text-slate-500 mt-1">
          Last updated: September 2026 · Effective immediately for all accounts and telephony interactions.
        </p>
      </div>

      {/* 1. Scope */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            1
          </span>
          <h4 className="font-bold text-slate-900 text-base">Scope</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          This Privacy Policy explains how VHGLOBALS collects, uses, and protects information when you use <strong>vhglobals.com</strong> and the VHGLOBALS dashboard (the "Service"). It covers two kinds of people: <strong>account holders</strong> (the businesses that sign up and hire AI voice employees) and <strong>end callers</strong> (the people those AI voice agents call, or who call in) — because an enterprise voice-AI platform necessarily processes both.
        </p>
      </div>

      {/* 2. Information we collect */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            2
          </span>
          <h4 className="font-bold text-slate-900 text-base">Information we collect</h4>
        </div>
        
        <div>
          <h5 className="font-bold text-xs text-slate-800 uppercase tracking-wide">From account holders:</h5>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <li>Business name, email address, phone number, and login credentials;</li>
            <li>Payment and billing metadata processed via Razorpay — we do not store your credit card, debit card, or UPI credentials on our servers;</li>
            <li>Scripts, conversational prompts, knowledge base training material, and lead/contact lists you upload;</li>
            <li>Usage data: features used, credit wallet consumption, call durations, connect rates, and performance analytics;</li>
            <li>Consent attestations: when you accept our Terms, or confirm that contacts you are calling have agreed to be contacted, we keep a durable audit record of that confirmation (who, timestamp, and policy version).</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-xs text-slate-800 uppercase tracking-wide">From end callers (people your AI agents speak with):</h5>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <li>Call audio, recordings, and AI-generated transcripts;</li>
            <li>Information volunteered during the call (e.g., name, phone number, appointment schedule, answers to qualification questions) as defined by capture variables configured by your business;</li>
            <li>Call metadata — timestamps, duration, telephony disposition, and caller ID numbers.</li>
          </ul>
        </div>
      </div>

      {/* 3. How we use information */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            3
          </span>
          <h4 className="font-bold text-slate-900 text-base">How we use information</h4>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li>To operate the Service: routing telephony calls, running real-time speech AI conversations, compiling prompts, and applying training materials;</li>
          <li>To allow you to review call recordings, transcripts, summaries, and leads inside your dashboard;</li>
          <li>To bill your account accurately and maintain your prepaid credit wallet balance;</li>
          <li>To detect where your AI agent encounters hesitation or friction, and recommend targeted training updates;</li>
          <li>To secure the Service, prevent spam or fraudulent abuse, and comply with telecom regulations.</li>
        </ul>
        <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-medium mt-2">
          <strong>Our Commitment:</strong> We do not sell personal data, and we do not use call content to train third-party foundation models beyond what is strictly necessary to generate that individual call's real-time response.
        </div>
      </div>

      {/* 4. Who we share data with */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            4
          </span>
          <h4 className="font-bold text-slate-900 text-base">Who we share data with</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          To provide the Service, call audio, transcripts, and business data pass through the following categories of verified processors, strictly to deliver the features you enable:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li><strong>Telephony:</strong> Licensed voice/SIP and carrier provisioning partners to place, route, and terminate calls;</li>
          <li><strong>Speech AI:</strong> Streaming speech-to-text (STT) and text-to-speech (TTS) engines to understand and synthesize human voice;</li>
          <li><strong>Language Models:</strong> Enterprise large-language-model APIs to generate immediate, context-aware conversational replies;</li>
          <li><strong>Payments:</strong> Razorpay to process wallet top-ups and monthly number rentals;</li>
          <li><strong>Infrastructure:</strong> Encrypted cloud hosting and private object storage to run the system and store audio securely;</li>
          <li><strong>Authentication:</strong> Secure auth providers to manage access tokens and session logins.</li>
        </ul>
        <p className="text-xs text-slate-500 leading-relaxed">
          Some providers may process data on secure servers located outside India. We only share what each provider requires to execute its technical function, and we strictly forbid them from utilizing your data for their own independent marketing or training purposes. We may also disclose information if required by law or lawful court orders.
        </p>
      </div>

      {/* 5. Setup analytics */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            5
          </span>
          <h4 className="font-bold text-slate-900 text-base">Setup analytics</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          To understand where users encounter setup friction when configuring their first AI employee, we record telemetry during the initial onboarding setup flow (e.g., step reached and masked UI replay) via PostHog, processed in the European Union. This is strictly tied to an anonymous account identifier, never to caller details.
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">
          This analytics capture is strictly limited to the setup flow. It is never active on any part of the dashboard that displays your leads, phone calls, recordings, or transcripts, ensuring no end-caller personal information is ever transmitted.
        </p>
      </div>

      {/* 6. Google user data & Limited Use */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            6
          </span>
          <h4 className="font-bold text-slate-900 text-base">Google user data & Limited Use</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          This section applies only if you choose to connect a Google Calendar to an AI voice employee. We request only the narrowest scopes necessary: <code>calendar.events</code> (to check free/busy slots and create appointments) and <code>userinfo.email</code> (to show which Google account is connected).
        </p>
        <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
          <p>
            VHGLOBALS's use and transfer of information received from Google APIs adheres strictly to the <strong>Google API Services User Data Policy</strong>, including the Limited Use requirements.
          </p>
          <p>
            <strong>No Calendar Content Sent to AI Models:</strong> Event titles, descriptions, guest lists, and attendee emails are read only by VHGLOBALS's server endpoints and are <em>never</em> placed into an AI prompt. When your AI books an appointment, it interacts with our server, which returns only a binary availability status.
          </p>
          <p>
            <strong>Protection & Encryption:</strong> Google OAuth tokens are stored encrypted at rest with authenticated encryption (AES-128-CBC with HMAC) under dedicated encryption keys separate from database credentials.
          </p>
          <p>
            <strong>Revocation:</strong> Disconnecting Google Calendar immediately revokes authorization and permanently deletes stored tokens from our database without archival copies.
          </p>
        </div>
      </div>

      {/* 7. Data retention */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            7
          </span>
          <h4 className="font-bold text-slate-900 text-base">Data retention</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We retain call audio recordings, transcripts, and account metrics for as long as your account remains active and for a reasonable period thereafter to comply with statutory accounting, regulatory telecom, and dispute-resolution mandates. You can request expedited deletion of specific recordings or your entire account at any time.
        </p>
      </div>

      {/* 8. Security */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            8
          </span>
          <h4 className="font-bold text-slate-900 text-base">Security</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We implement rigorous security safeguards: encrypted transit (TLS 1.3), AES-256 encryption at rest for recordings and databases, principle-of-least-privilege access controls, and hardened cloud infrastructure.
        </p>
      </div>

      {/* 9. Your rights */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            9
          </span>
          <h4 className="font-bold text-slate-900 text-base">Your rights</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Depending on your relationship to VHGLOBALS and applicable regulations (including India's <strong>Digital Personal Data Protection Act, 2023</strong>), you have the right to access, rectify, or request erasure of personal information, or withdraw consent for future processing. To exercise these rights, contact our privacy desk at{' '}
          <a href="mailto:support@vhglobals.com" className="text-[#2596be] font-mono font-semibold underline">
            support@vhglobals.com
          </a>.
        </p>
      </div>

      {/* 10. Cookies & local storage */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            10
          </span>
          <h4 className="font-bold text-slate-900 text-base">Cookies & local storage</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The VHGLOBALS console uses essential cookies and local storage tokens strictly to maintain authenticated sessions and remember dashboard workspace preferences. We do not use third-party advertising tracking pixels or commercial ad networks.
        </p>
      </div>

      {/* 11. Children's privacy */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            11
          </span>
          <h4 className="font-bold text-slate-900 text-base">Children's privacy</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Service is strictly designed for enterprise and business operations by adults aged 18 and older. We do not knowingly solicit or collect personal information from minors.
        </p>
      </div>

      {/* 12. Changes to this policy */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            12
          </span>
          <h4 className="font-bold text-slate-900 text-base">Changes to this policy</h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We may update this Privacy Policy periodically to reflect technological or regulatory advancements. Updates will always be indicated by the "Last updated" timestamp at the top of this document.
        </p>
      </div>

      {/* 13. Grievance Officer */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2.5">
        <div className="flex items-center gap-2 text-sky-400">
          <span className="w-6 h-6 rounded-full bg-[#2596be] text-white flex items-center justify-center font-bold text-xs shrink-0">
            13
          </span>
          <h4 className="font-bold text-white text-base">Grievance Officer</h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the designated Grievance Officer for privacy and data-related inquiries is:
        </p>
        <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
          <p className="font-bold text-white">Grievance Officer, VHGLOBALS</p>
          <p className="font-mono text-sky-300">Email: support@vhglobals.com</p>
        </div>
      </div>
    </div>
  );
};
