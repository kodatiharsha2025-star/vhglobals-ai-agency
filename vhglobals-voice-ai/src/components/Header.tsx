import React, { useState, useEffect } from 'react';
import { Radio, PhoneCall, ChevronRight, Menu, X, Sparkles, Activity } from 'lucide-react';

interface HeaderProps {
  onOpenOnboarding: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOnboarding }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#capabilities' },
    { name: 'Voice Models', href: '#voice-models' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Interactive Demo', href: '#interactive-demo' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#2596be] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2596be] flex items-center justify-center text-white shadow-md shadow-[#2596be]/25 transition-transform duration-200 group-hover:scale-105">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  VH<span className="text-[#2596be]">Globals</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-[#2596be]/10 text-[#1b7494] border border-[#2596be]/20">
                  Voice AI
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Autonomous Speech Engine
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-700 hover:text-[#2596be] hover:bg-white rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Engine Status & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live latency badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Sub-320ms Engine Active</span>
            </div>

            {/* Primary Deploy Voice Agent CTA */}
            <button
              id="header-deploy-cta"
              onClick={onOpenOnboarding}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2596be] text-white text-sm font-semibold shadow-md shadow-[#2596be]/25 hover:bg-[#1b7494] active:scale-[0.98] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:ring-offset-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Deploy Voice Agent</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Activity className="w-3.5 h-3.5" />
              <span>320ms Latency Engine Online</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-[#2596be] hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              id="mobile-deploy-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOnboarding();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2596be] text-white text-base font-semibold shadow-md shadow-[#2596be]/25 hover:bg-[#1b7494]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Deploy Voice Agent</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
