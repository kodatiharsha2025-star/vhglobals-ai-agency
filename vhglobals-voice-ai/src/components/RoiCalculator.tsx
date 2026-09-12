import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onDeployWithVolume: (volume: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onDeployWithVolume }) => {
  const [monthlyCalls, setMonthlyCalls] = useState<number>(4500);
  const [avgDurationMinutes, setAvgDurationMinutes] = useState<number>(3.5);
  const [hourlyWage, setHourlyWage] = useState<number>(24);

  // Traditional cost: calls * (avgDuration / 60) * hourlyWage (plus 20% overhead)
  const totalMinutes = monthlyCalls * avgDurationMinutes;
  const humanHours = totalMinutes / 60;
  const humanCost = humanHours * (hourlyWage * 1.25);

  // VHGlobals cost: $0.09 per minute of speech
  const aiCost = totalMinutes * 0.09;

  const monthlySavings = Math.max(0, humanCost - aiCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = humanCost > 0 ? Math.round((monthlySavings / humanCost) * 100) : 0;

  const getVolumeTier = (calls: number) => {
    if (calls < 1000) return '< 1,000 calls/mo';
    if (calls <= 10000) return '1,000 - 10,000 calls/mo';
    if (calls <= 50000) return '10,000 - 50,000 calls/mo';
    return '50,000+ calls/mo';
  };

  return (
    <section id="roi-calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 text-[#1b7494] text-xs font-bold tracking-wide uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Monthly Cost Reduction
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Replace escalating call center overhead with predictable, consumption-based AI voice minutes.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 lg:p-12 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Monthly Calls Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="monthly-calls-slider" className="font-bold text-slate-800">
                    Monthly Call Volume:
                  </label>
                  <span className="font-mono font-bold text-[#1b7494] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {monthlyCalls.toLocaleString()} calls
                  </span>
                </div>
                <input
                  id="monthly-calls-slider"
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2596be]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>500 calls</span>
                  <span>25,000</span>
                  <span>50,000+ calls</span>
                </div>
              </div>

              {/* Call Duration Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="avg-duration-slider" className="font-bold text-slate-800">
                    Average Call Duration:
                  </label>
                  <span className="font-mono font-bold text-[#1b7494] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {avgDurationMinutes} minutes
                  </span>
                </div>
                <input
                  id="avg-duration-slider"
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={avgDurationMinutes}
                  onChange={(e) => setAvgDurationMinutes(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2596be]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1 min</span>
                  <span>5 mins</span>
                  <span>10 mins</span>
                </div>
              </div>

              {/* Human Rep Hourly Wage */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="hourly-wage-slider" className="font-bold text-slate-800">
                    Traditional Rep Cost / Hour:
                  </label>
                  <span className="font-mono font-bold text-[#1b7494] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    ${hourlyWage}/hr
                  </span>
                </div>
                <input
                  id="hourly-wage-slider"
                  type="range"
                  min="15"
                  max="50"
                  step="1"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2596be]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>$15/hr (Offshore/BPO)</span>
                  <span>$30/hr</span>
                  <span>$50/hr (Domestic)</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
                  <span>Transparent Consumption Pricing</span>
                </div>
                <p>
                  Includes telephony SIP connectivity, real-time STT streaming, LLM intelligence, and ultra-realistic neural TTS voices at a flat $0.09/min.
                </p>
              </div>

            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/90 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold text-[#2596be] uppercase tracking-wider">
                  Projected Financial Impact
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    ${Math.round(monthlySavings).toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    / month saved
                  </span>
                </div>
                <div className="text-xs font-bold text-emerald-600 mt-1 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{savingsPercent}% cost reduction compared to human staff</span>
                </div>
              </div>

              {/* Side-by-side cost breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100">
                  <div className="text-[11px] font-bold text-red-900">Traditional Call Staff</div>
                  <div className="text-xl font-bold text-red-600 mt-1">
                    ${Math.round(humanCost).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-red-500 mt-0.5">
                    ~${(humanCost / monthlyCalls).toFixed(2)} per call
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="text-[11px] font-bold text-emerald-900">VHGlobals Voice AI</div>
                  <div className="text-xl font-bold text-emerald-600 mt-1">
                    ${Math.round(aiCost).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">
                    ~${(aiCost / monthlyCalls).toFixed(2)} per call
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#2596be]" />
                  {Math.round(humanHours).toLocaleString()} human hours reclaimed
                </span>
                <span className="font-bold text-slate-800">
                  ${Math.round(annualSavings).toLocaleString()} / yr
                </span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onDeployWithVolume(getVolumeTier(monthlyCalls))}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#2596be] text-white font-bold text-sm shadow-md shadow-[#2596be]/25 hover:bg-[#1b7494] transition-all cursor-pointer"
              >
                <span>Deploy With This Projected ROI</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
