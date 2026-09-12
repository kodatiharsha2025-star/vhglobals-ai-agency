import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Building, User, Phone, Check } from 'lucide-react';
import { Logo } from './Logo';
import { audioEngine } from '../utils/audioSimulator';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessCall: (phone: string) => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onSuccessCall }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [businessName, setBusinessName] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [useCase, setUseCase] = useState('Speed-to-Lead Outbound (< 30s)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playSuccessBell();
    setStep('success');
  };

  const handleTriggerTestCall = () => {
    onClose();
    onSuccessCall(phone || '+1 (415) 852-9400');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Top Accent Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#2596be] via-sky-400 to-[#2596be]" />

        {/* Modal Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <Logo size="sm" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              ✦ Quick Setup (2 Mins)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Registration Form */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <Sparkles className="w-3 h-3" />
                <span>50 FREE CALL MINUTES INCLUDED</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Deploy Sophia for your business
              </h3>
              <p className="text-xs text-slate-500">
                Go live in English-speaking countries in under 5 minutes. No credit card required.
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Company / Business Name</label>
                <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-[#2596be] focus-within:bg-white transition-colors">
                  <Building className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Global or Meridian Health"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="bg-transparent w-full focus:outline-none text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Name</label>
                  <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-[#2596be] focus-within:bg-white transition-colors">
                    <User className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-transparent w-full focus:outline-none text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                  <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-[#2596be] focus-within:bg-white transition-colors">
                    <Phone className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-transparent w-full focus:outline-none text-slate-900 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Primary Calling Role</label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-[#2596be]"
                >
                  <option>Speed-to-Lead Outbound (&lt; 30s)</option>
                  <option>24/7 Inbound Support & Receptionist</option>
                  <option>Demo & Calendar Appointment Booking</option>
                  <option>Lead Qualification & Objection Handling</option>
                  <option>Enterprise Telecalling Campaigns</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#2596be] hover:bg-[#1b7494] text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Claim 50 Free Minutes & Deploy Sophia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero setup fees · English Only · Sub-500ms latency</span>
            </div>
          </form>
        ) : (
          /* Step 2: Instant Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">
                Sophia Configured Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Welcome to VHGLOBALS, <strong>{fullName || 'Partner'}</strong>! We credited <strong>50 free call minutes</strong> to your account.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between text-slate-600">
                <span>Voice Agent:</span>
                <strong className="text-slate-900">Sophia (English Only)</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Business:</span>
                <strong className="text-slate-900">{businessName || 'Your Business'}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Account Status:</span>
                <strong className="text-emerald-600 font-bold">Active & Ready</strong>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleTriggerTestCall}
                className="w-full py-3.5 rounded-xl bg-[#2596be] hover:bg-[#1b7494] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hear Sophia Call Your Phone Now</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
