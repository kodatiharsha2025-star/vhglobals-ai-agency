import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Sparkles, HelpCircle, PhoneCall, Cpu, ShieldCheck, Wrench } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All', count: 12, icon: HelpCircle },
    { id: 'capabilities', label: 'AI Capabilities & Voices', count: 4, icon: Cpu },
    { id: 'modes', label: 'The 3 Calling Modes', count: 3, icon: PhoneCall },
    { id: 'setup', label: 'Setup & Training', count: 3, icon: Wrench },
    { id: 'pricing', label: 'Pricing & Compliance', count: 2, icon: ShieldCheck },
  ];

  const faqs = [
    {
      id: 1,
      category: 'capabilities',
      question: 'Does Sophia sound robotic or unnatural?',
      answer: 'Not at all. VHGLOBALS runs on ultra-low latency conversational voice engines. Sophia speaks fluent, human-grade English with natural pauses, realistic breathing cadence, and contextual intonation.'
    },
    {
      id: 2,
      category: 'capabilities',
      question: 'How fast does Sophia actually respond? Is there any awkward delay?',
      answer: 'Our average round-trip voice response latency is sub-500 milliseconds (faster than typical human reaction time on telephone lines). Prospects experience zero awkward silence or dead air.'
    },
    {
      id: 3,
      category: 'capabilities',
      question: 'Can Sophia handle complex product questions and technical objections?',
      answer: 'Yes! Sophia is trained directly on your custom knowledge base, documentation, pricing guidelines, and objection handling scripts. She articulates nuanced responses and sticks strictly to your approved brand guidelines.'
    },
    {
      id: 4,
      category: 'capabilities',
      question: 'Can the AI handle interruptions when a customer cuts in?',
      answer: 'Yes! With full-duplex conversational barge-in, if a prospect interrupts mid-sentence to ask a question or correct their budget, the AI immediately stops speaking, listens to the new input, and addresses it naturally.'
    },
    {
      id: 5,
      category: 'modes',
      question: 'What are the 3 calling modes supported?',
      answer: '1. Instant Speed-to-Lead Outbound: Automatically calls new leads from Facebook, Google Ads, or website forms within 3-30 seconds of submission. 2. 24/7 Inbound Virtual Receptionist: Picks up every customer call instantly, answers FAQs, takes messages, or transfers urgent calls to human owners. 3. Campaign & Bulk Telecalling: Follows up with cold/warm databases for event invitations, renewals, and demo reminders.'
    },
    {
      id: 6,
      category: 'modes',
      question: 'Can it book appointments directly into my Google Calendar or CRM?',
      answer: 'Yes. Mid-call, the AI checks real-time slot availability on your Google Calendar, Calendly, or CRM (HubSpot, Salesforce, Zoho) and books the meeting, instantly sending confirmation links via email or SMS while the caller is still on the line.'
    },
    {
      id: 7,
      category: 'modes',
      question: 'Can the AI transfer a call to a human manager if the lead asks for it?',
      answer: 'Absolutely. If the caller requests human assistance or is flagged as a high-ticket enterprise deal, the AI executes a warm live transfer directly to your sales manager’s phone number with full caller context.'
    },
    {
      id: 8,
      category: 'setup',
      question: 'How long does it take to set up and go live?',
      answer: 'Most businesses go live in under 5 minutes. You simply enter your company name, upload or paste your product brochure or FAQ document, configure Sophia in English, and test-call your phone immediately.'
    },
    {
      id: 9,
      category: 'setup',
      question: 'Do I need to pay expensive agency retainers or hire engineers?',
      answer: 'No! Unlike traditional voice agencies that charge heavy upfront fees and monthly retainers, VHGLOBALS provides a self-service no-code studio. Setup is $0, and anyone can configure Sophia in minutes.'
    },
    {
      id: 10,
      category: 'setup',
      question: 'How do I teach the AI if it gives an inaccurate response?',
      answer: 'From your team dashboard, you can view the call transcript and audio recording. If you notice an answer you’d like adjusted, simply click "Teach Agent" and provide the ideal response. The AI learns immediately for all future calls.'
    },
    {
      id: 11,
      category: 'pricing',
      question: 'How does the credit and usage billing work?',
      answer: 'You only pay for active talk-time when Sophia is engaged in a live phone conversation. There are no monthly platform retainers, no seat charges, and credits never expire. You also get 50 free minutes upon signup to test thoroughly.'
    },
    {
      id: 12,
      category: 'pricing',
      question: 'Is this compliant with telecom carrier and privacy regulations?',
      answer: 'Yes. All calls are routed through certified global telecom carrier partners adhering to IVRS compliance, TCPA / DNC guidelines, SOC-2 standards, and enterprise 256-bit data encryption.'
    }
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2596be] bg-[#edf7fa] px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight">
            Clear answers to <span className="text-[#2596be]">hard questions.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Everything you need to know about hiring, training, and running an AI voice employee.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., latency, IVRS, CRM, pricing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2596be] focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>

        {/* 2-Column Layout: Categories Sidebar on Left + FAQ Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Category Pills (Sidebar on desktop, horizontal scroll on mobile) */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                    isActive
                      ? 'bg-[#2596be] text-white shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2596be]'}`} />
                    <span>{cat.label}</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Accordion Questions List */}
          <div className="lg:col-span-8 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200">
                <p className="text-sm font-medium text-slate-600">
                  No matching questions found for "{searchQuery}".
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-3 text-xs font-bold text-[#2596be] hover:underline"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span className="shrink-0 p-1 rounded-full bg-slate-100 text-slate-500">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#2596be]" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* Need more help banner */}
        <div className="mt-14 max-w-xl mx-auto text-center bg-[#edf7fa] p-5 rounded-2xl border border-[#2596be]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-900">Have a specific question for your business?</h4>
            <p className="text-xs text-slate-600">Our support team is available via email or live chat.</p>
          </div>
          <a
            href="mailto:support@vhglobals.com"
            className="px-4 py-2 bg-[#2596be] hover:bg-[#1b7494] text-white rounded-xl text-xs font-bold shrink-0 transition-colors"
          >
            Chat with Team →
          </a>
        </div>

      </div>
    </section>
  );
};
