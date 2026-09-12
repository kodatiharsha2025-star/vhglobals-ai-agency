import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveVoiceDemo } from './components/InteractiveVoiceDemo';
import { CoreCapabilities } from './components/CoreCapabilities';
import { UseCases } from './components/UseCases';
import { VoiceModelsShowcase } from './components/VoiceModelsShowcase';
import { RoiCalculator } from './components/RoiCalculator';
import { ProjectOnboardingForm } from './components/ProjectOnboardingForm';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedUseCaseForForm, setSelectedUseCaseForForm] = useState<string>('Automated Appointment Setting');
  const [selectedVolumeForForm, setSelectedVolumeForForm] = useState<string>('1,000 - 10,000 calls/mo');

  const scrollToOnboarding = () => {
    const element = document.getElementById('onboarding');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const element = document.getElementById('interactive-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectUseCase = (useCaseName: string) => {
    setSelectedUseCaseForForm(useCaseName);
    scrollToOnboarding();
  };

  const handleDeployWithVolume = (volumeTier: string) => {
    setSelectedVolumeForForm(volumeTier);
    scrollToOnboarding();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafcff] text-[#0f172a]">
      {/* Fixed Sticky Header */}
      <Header onOpenOnboarding={scrollToOnboarding} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenOnboarding={scrollToOnboarding}
          onScrollToDemo={scrollToDemo}
        />

        {/* Interactive Voice Demo Widget */}
        <InteractiveVoiceDemo onOpenOnboarding={scrollToOnboarding} />

        {/* Core Capabilities Grid */}
        <CoreCapabilities />

        {/* Use Cases Showcase */}
        <UseCases onSelectUseCase={handleSelectUseCase} />

        {/* Voice Models & Architecture Deep Dive */}
        <VoiceModelsShowcase />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onDeployWithVolume={handleDeployWithVolume} />

        {/* Project Onboarding / Lead Capture Form with Clean JSON/CSV Export */}
        <ProjectOnboardingForm
          initialUseCase={selectedUseCaseForForm}
          initialVolume={selectedVolumeForForm}
        />
      </main>

      {/* Modern Enterprise Footer */}
      <Footer />
    </div>
  );
}
