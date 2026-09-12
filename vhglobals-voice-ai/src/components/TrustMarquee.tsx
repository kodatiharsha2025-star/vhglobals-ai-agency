import React from 'react';
import { ShieldCheck, Zap, Clock, Activity, Network, Globe2, PhoneIncoming } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  const items = [
    { icon: ShieldCheck, text: '99.9% Uptime SLA guarantee', color: 'text-emerald-500' },
    { icon: Zap, text: 'Follows up every single lead', color: 'text-[#2596be]' },
    { icon: Clock, text: 'Built in 2 minutes', color: 'text-amber-500' },
    { icon: Activity, text: 'Heals mid-call if a line drops', color: 'text-sky-500' },
    { icon: Network, text: 'Meta, forms, Pabbly & webhooks', color: 'text-indigo-500' },
    { icon: Globe2, text: 'Tier-1 English Voice AI Agents', color: 'text-purple-500' },
    { icon: PhoneIncoming, text: 'Calls every lead in under 30s', color: 'text-[#2596be]' },
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/70 py-4 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-10 items-center">
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap px-2"
            >
              <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
              <span>{item.text}</span>
              <span className="text-slate-300 ml-6">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
