import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Building2, GraduationCap, Stethoscope, UtensilsCrossed, Car, Landmark, ShoppingBag, UserCheck } from 'lucide-react';

interface IndustriesCarouselProps {
  onSelectIndustry: (industry: string) => void;
}

export const IndustriesCarousel: React.FC<IndustriesCarouselProps> = ({ onSelectIndustry }) => {
  const [startIndex, setStartIndex] = useState(0);

  const industries = [
    {
      id: 'real-estate',
      icon: Building2,
      name: 'Real Estate & Property',
      voiceCode: 'SOPHIA-01',
      duration: '0:32',
      description: 'Calls inbound leads within 3 seconds, qualifies budget, property preferences, and pre-approval status, and books in-person tours.',
      tag: null,
      deployLabel: 'Deploy for Real Estate',
      sampleSpeech: 'Hello! Calling regarding your property enquiry in downtown. Shall I arrange a private tour this Saturday afternoon?'
    },
    {
      id: 'coaching',
      icon: GraduationCap,
      name: 'Higher Ed & Admissions',
      voiceCode: 'SOPHIA-02',
      duration: '0:32',
      description: 'Screens student inquiries instantly in fluent English, explains tuition plans and schedule options, and books admission advisory sessions.',
      tag: null,
      deployLabel: 'Deploy for Education',
      sampleSpeech: 'Hi! Admissions desk here. I see you enquired about our executive master program. Would you like to schedule an advisory consultation?'
    },
    {
      id: 'hospitals',
      icon: Stethoscope,
      name: 'Healthcare & Clinics',
      voiceCode: 'SOPHIA-03',
      duration: '0:32',
      description: 'Handles patient inquiries 24/7, books specialist appointments, sends lab readiness reminders, and conducts post-treatment checkups.',
      tag: null,
      deployLabel: 'Deploy for Healthcare',
      sampleSpeech: 'Good morning, this is Premier Health Clinic. Your diagnostic results are now ready, and we have reserved your doctor review at 3 PM.'
    },
    {
      id: 'restaurants',
      icon: UtensilsCrossed,
      name: 'Hospitality & Dining',
      voiceCode: 'SOPHIA-04',
      duration: '0:32',
      description: 'Answers customer calls during peak hours, manages table reservations, explains private event packages, and collects dietary notes.',
      tag: null,
      deployLabel: 'Deploy for Hospitality',
      sampleSpeech: 'Hello! Welcome to Lumina Bistro. We have private dining available for 10 guests this Friday evening. Shall I reserve the terrace section for you?'
    },
    {
      id: 'cars',
      icon: Car,
      name: 'Car Dealerships & Showrooms',
      voiceCode: 'SOPHIA-05',
      duration: '0:32',
      description: 'Follows up on test drive requests, verifies financing readiness, and coordinates automated service schedule reminders.',
      tag: 'FAST QUALIFICATION',
      deployLabel: 'Deploy for Automotive',
      sampleSpeech: 'Hi! Calling regarding the test drive you requested for the electric SUV. We can arrange a vehicle preview at your office at 11 AM.'
    },
    {
      id: 'loans',
      icon: Landmark,
      name: 'Financial Services & Lending',
      voiceCode: 'SOPHIA-06',
      duration: '0:32',
      description: 'Screens loan and mortgage applicants for basic eligibility and credit parameters, and follows up on pending documentation.',
      tag: null,
      deployLabel: 'Deploy for Finance',
      sampleSpeech: 'Hello! Regarding your loan pre-qualification with preferred interest rates. Would you like to finalize your application today?'
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      name: 'E-commerce & Direct-to-Consumer',
      voiceCode: 'SOPHIA-07',
      duration: '0:32',
      description: 'Calls customers immediately after checkout to verify shipping addresses and delivery timeframes, reducing return rates.',
      tag: 'ORDER CONFIRMATION',
      deployLabel: 'Deploy for E-commerce',
      sampleSpeech: 'Hi! Confirming your order dispatch for the priority package. Would you like standard morning delivery to your registered address?'
    },
    {
      id: 'recruitment',
      icon: UserCheck,
      name: 'Recruitment & Staffing',
      voiceCode: 'SOPHIA-08',
      duration: '0:32',
      description: 'Conducts initial telephone qualification screens, verifies candidate salary ranges and notice periods, and lines up calendar invites.',
      tag: 'CANDIDATE SCREEN',
      deployLabel: 'Deploy for Recruitment',
      sampleSpeech: 'Hello! Calling from the VHGLOBALS talent acquisition team regarding your senior software engineer application. Are you open for a quick screen?'
    }
  ];

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(industries.length - 3, prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>PROVEN ACROSS 15+ INDUSTRIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Who is Sophia best for?
            </h2>
            <p className="text-base text-slate-300">
              From high-growth businesses to global enterprises, Sophia pays for herself on day one whenever your business relies on phone calls.
            </p>
            <div className="inline-block bg-slate-800/80 border border-slate-700 text-xs text-amber-300 font-medium px-3 py-1.5 rounded-lg mt-2">
              ✦ Fun Fact: In the recordings below, both the prospect and the agent are Sophia Voice AI
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer border border-slate-700"
              aria-label="Previous Industries"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= industries.length - 3}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer border border-slate-700"
              aria-label="Next Industries"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(startIndex, startIndex + 3).map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-[#2596be]/60 transition-all shadow-xl group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Voice Code */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#2596be]/20 text-[#38bdf8] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      VOICE: {item.voiceCode}
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed min-h-[72px]">
                    {item.description}
                  </p>

                  {/* Optional Tag badge */}
                  {item.tag && (
                    <div className="inline-block text-[10px] font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                      ⚡ {item.tag}
                    </div>
                  )}
                </div>

                {/* Deploy Button */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onSelectIndustry(item.name)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-[#2596be] text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{item.deployLabel}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
