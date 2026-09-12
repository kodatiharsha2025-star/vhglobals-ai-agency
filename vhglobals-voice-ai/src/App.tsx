import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { SetupAgencyFee } from './components/SetupAgencyFee';
import { TwoWaysToWork } from './components/TwoWaysToWork';
import { BentoFeatures } from './components/BentoFeatures';
import { IndustriesCarousel } from './components/IndustriesCarousel';
import { InstantTestCall } from './components/InstantTestCall';
import { CallIntelligence } from './components/CallIntelligence';
import { TeamDashboardMockup } from './components/TeamDashboardMockup';
import { PricingSection } from './components/PricingSection';
import { ComparisonTable } from './components/ComparisonTable';
import { FaqSection } from './components/FaqSection';
import { BottomCta } from './components/BottomCta';
import { Footer } from './components/Footer';

// Modals
import { SignUpModal } from './components/SignUpModal';
import { ActiveCallModal } from './components/ActiveCallModal';
import { LegalModal, LegalModalType } from './components/LegalModal';

import { PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  // Modal states
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isActiveCallOpen, setIsActiveCallOpen] = useState(false);
  const [activeCallPhone, setActiveCallPhone] = useState('+91 98765 43210');
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const handleStartActiveCall = (phone?: string) => {
    if (phone) setActiveCallPhone(phone);
    setIsActiveCallOpen(true);
  };

  const handleSelectIndustry = (industryName: string) => {
    setIsSignUpOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafcff] text-[#0f172a] font-sans antialiased selection:bg-[#2596be]/20 selection:text-[#2596be]">
      {/* Sticky Header with Logo and Actions */}
      <Header
        onOpenSignUp={() => setIsSignUpOpen(true)}
        onOpenLiveCall={() => handleStartActiveCall()}
        onOpenDocs={() => setLegalModalType('docs')}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenSignUp={() => setIsSignUpOpen(true)}
          onOpenCallAi={() => handleStartActiveCall()}
        />

        {/* 2. Brand Trust Marquee */}
        <TrustMarquee />

        {/* 3. Skip Agency Fee Section */}
        <SetupAgencyFee onOpenSignUp={() => setIsSignUpOpen(true)} />

        {/* 4. One Employee, Two Ways to Work */}
        <TwoWaysToWork onOpenSignUp={() => setIsSignUpOpen(true)} />

        {/* 5. Bento Architecture Features */}
        <div id="why-us">
          <BentoFeatures />
        </div>

        {/* 6. Industries Carousel */}
        <IndustriesCarousel onSelectIndustry={handleSelectIndustry} />

        {/* 7. Instant Test Call Form & Mockup */}
        <InstantTestCall onStartActiveCall={handleStartActiveCall} />

        {/* 8. Call Intelligence & Memories */}
        <CallIntelligence />

        {/* 9. Team Dashboard Mockup */}
        <TeamDashboardMockup />

        {/* 10. Pure Per-Minute Pricing */}
        <PricingSection
          onOpenSignUp={() => setIsSignUpOpen(true)}
          onOpenLegal={(type) => setLegalModalType(type)}
        />

        {/* 11. Comparison Table vs Telecallers */}
        <ComparisonTable />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Bottom CTA Banner */}
        <BottomCta
          onOpenSignUp={() => setIsSignUpOpen(true)}
          onOpenTestCall={() => handleStartActiveCall()}
        />
      </main>

      {/* 14. Modern Enterprise Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
      />

      {/* Floating Call AI Pill (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleStartActiveCall()}
          className="group flex items-center gap-2.5 bg-[#2596be] hover:bg-[#1b7494] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105 cursor-pointer border-2 border-white/20"
          aria-label="Test Call AI Now"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          <PhoneCall className="w-4 h-4 text-white" />
          <span className="text-xs font-bold tracking-tight">Test Call AI Free</span>
        </button>
      </div>

      {/* Sign Up & Onboarding Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSuccessCall={(phone) => handleStartActiveCall(phone)}
      />

      {/* Active Live Call Modal */}
      <ActiveCallModal
        isOpen={isActiveCallOpen}
        onClose={() => setIsActiveCallOpen(false)}
        callerPhone={activeCallPhone}
      />

      {/* Legal & Policy Modals (Contact, Privacy, Terms, Refund, Docs) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
