import React from 'react';
import { Check, X, Sparkles, TrendingUp } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: 'Cost to hire',
      vhglobals: 'From ₹3.5/min',
      vhHighlight: true,
      telecaller: '₹18,000+/mo',
      genericAi: '₹50,000+ setup'
    },
    {
      feature: 'Speed to lead',
      vhglobals: '< 30 seconds',
      vhHighlight: true,
      telecaller: '2-4 hours',
      genericAi: '5-10 mins'
    },
    {
      feature: 'Time to deploy',
      vhglobals: '2 minutes',
      vhHighlight: true,
      telecaller: '2-4 weeks',
      genericAi: '1-2 weeks'
    },
    {
      feature: 'Natural Voice Realism',
      vhglobals: 'Human-Grade (English Only)',
      vhHighlight: true,
      telecaller: 'Human (variable)',
      genericAi: 'Robotic & Delayed'
    },
    {
      feature: 'Attrition & leave',
      vhglobals: '0 days',
      vhHighlight: true,
      telecaller: 'Frequent',
      genericAi: '0 days'
    },
    {
      feature: 'Memory & notes',
      vhglobals: 'Perfect',
      vhHighlight: true,
      telecaller: 'Spotty',
      genericAi: 'Yes'
    },
    {
      feature: 'Remembers callers',
      vhglobals: 'Instantly',
      vhHighlight: true,
      telecaller: 'Rarely',
      genericAi: 'No context'
    }
  ];

  return (
    <section id="compare" className="py-16 sm:py-24 bg-[#fafcff] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight">
            Same job. <br className="sm:hidden" />
            <span className="text-[#2596be]">Very different math.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            One-tenth the salary. Calls in seconds, not hours. Live in minutes, not weeks.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    COMPARE
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2596be] bg-[#edf7fa]/60 w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900">VHGLOBALS</span>
                      <span className="text-[10px] font-bold text-white bg-[#2596be] px-2 py-0.5 rounded-full">
                        RECOMMENDED
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    Telecaller
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    Generic AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-700">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#2596be] bg-[#edf7fa]/30 flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#2596be] shrink-0" />
                      <span>{row.vhglobals}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.telecaller}
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      {row.genericAi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Savings banner below */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>That’s up to <strong>₹18,000 saved every month</strong> — before call-time.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
