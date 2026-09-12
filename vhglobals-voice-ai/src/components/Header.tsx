import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenSignUp: () => void;
  onOpenLiveCall: () => void;
  onOpenDocs: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSignUp,
  onOpenLiveCall,
  onOpenDocs
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="VHGLOBALS Home">
          <Logo size="md" />
        </a>

        {/* Center: Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-7 text-[14px] font-medium text-[#475569]">
          <button
            onClick={() => scrollTo('how-it-works')}
            className="hover:text-[#0f172a] transition-colors py-1 cursor-pointer"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="hover:text-[#0f172a] transition-colors py-1 cursor-pointer"
          >
            Why VHGLOBALS
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="hover:text-[#0f172a] transition-colors py-1 cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo('compare')}
            className="hover:text-[#0f172a] transition-colors py-1 cursor-pointer"
          >
            Compare
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-[#0f172a] transition-colors py-1 cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={onOpenDocs}
            className="hover:text-[#0f172a] transition-colors py-1 cursor-pointer"
          >
            Docs
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenSignUp}
            className="text-[14px] font-semibold text-[#334155] hover:text-[#0f172a] transition-colors px-2 py-1.5 cursor-pointer"
          >
            Sign in
          </button>
          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-1.5 bg-[#2596be] hover:bg-[#1b7494] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-tight shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <span>Start free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenLiveCall}
            className="p-2 rounded-full bg-[#edf7fa] text-[#2596be]"
            aria-label="Call AI"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e2e8f0] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => scrollTo('how-it-works')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2596be]"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2596be]"
          >
            Why VHGLOBALS
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2596be]"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo('compare')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2596be]"
          >
            Compare
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2596be]"
          >
            FAQ
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenDocs(); }}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2596be]"
          >
            Docs
          </button>
          <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSignUp(); }}
              className="w-1/2 py-2.5 text-center text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              Sign in
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSignUp(); }}
              className="w-1/2 py-2.5 text-center text-sm font-semibold text-white bg-[#2596be] rounded-lg shadow-sm"
            >
              Start free →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
