import React, { useState, useEffect } from 'react';
import { PhoneOff, Mic, MicOff, Volume2, Sparkles, Send, Activity, User, PhoneCall, RefreshCw } from 'lucide-react';
import { audioEngine } from '../utils/audioSimulator';

interface ActiveCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  callerPhone?: string;
}

export const ActiveCallModal: React.FC<ActiveCallModalProps> = ({
  isOpen,
  onClose,
  callerPhone = '+1 (415) 852-9400'
}) => {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Hi! Calling regarding your inquiry. Shall I schedule a brief call to discuss your requirements?',
      time: '0:01'
    }
  ]);
  const [userReplyInput, setUserReplyInput] = useState('');

  // Timer for active call
  useEffect(() => {
    let interval: any;
    if (isOpen) {
      setCallDuration(0);
      setIsAiSpeaking(true);
      audioEngine.playCallConnectChime();
      audioEngine.speak(
        'Hi! Calling regarding your inquiry. Shall I schedule a brief call to discuss your requirements?',
        () => setIsAiSpeaking(true),
        () => setIsAiSpeaking(false)
      );

      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      audioEngine.stopSpeaking();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    audioEngine.playCallEndChime();
    audioEngine.stopSpeaking();
    onClose();
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReplyInput.trim()) return;

    const userText = userReplyInput.trim();
    setUserReplyInput('');

    const newTrans = [
      ...transcript,
      { sender: 'user' as const, text: userText, time: formatDuration(callDuration) }
    ];
    setTranscript(newTrans);

    // AI Responses in natural, professional English
    setTimeout(() => {
      let aiReply = "Certainly! Sophia syncs directly with your CRM and calendar in real-time. Would you like me to reserve a demo slot for your team?";
      const lower = userText.toLowerCase();

      if (lower.includes('crm') || lower.includes('salesforce') || lower.includes('hubspot')) {
        aiReply = "Sophia connects seamlessly with HubSpot, Salesforce, Zoho, and Google Sheets, pushing real-time call transcripts and qualified tags automatically.";
      } else if (lower.includes('latency') || lower.includes('speed') || lower.includes('fast')) {
        aiReply = "Sophia operates at sub-500ms latency, delivering instantaneous conversational pacing with real-time barge-in support and zero awkward pauses.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('fee')) {
        aiReply = "Our pricing is transparent and usage-based with zero monthly retainers and zero expensive agency lock-ins.";
      } else if (lower.includes('objection') || lower.includes('qualif') || lower.includes('lead')) {
        aiReply = "Sophia is trained on your exact business playbook, handling objections smoothly, qualifying prospects, and securing confirmed appointments.";
      }

      setTranscript((prev) => [
        ...prev,
        { sender: 'ai', text: aiReply, time: formatDuration(callDuration + 1) }
      ]);

      setIsAiSpeaking(true);
      audioEngine.speak(
        aiReply,
        () => setIsAiSpeaking(true),
        () => setIsAiSpeaking(false)
      );
    }, 400);
  };

  const quickPrompts = [
    "How fast does Sophia qualify leads?",
    "Can you integrate with my CRM?",
    "How does Sophia handle objections?",
    "What is the live latency?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0f172a] text-white rounded-[32px] sm:rounded-[40px] max-w-md w-full border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-emerald-400">
              LIVE CALL · {formatDuration(callDuration)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Sub-500ms Latency</span>
          </div>
        </div>

        {/* Caller Avatar & Waveform Area */}
        <div className="py-6 px-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900/80 to-transparent shrink-0">
          <div className="relative mb-3">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg transition-all ${
              isAiSpeaking
                ? 'bg-gradient-to-tr from-[#2596be] to-sky-400 ring-4 ring-[#2596be]/30 scale-105'
                : 'bg-slate-800 ring-2 ring-slate-700'
            }`}>
              S
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0f172a]" />
          </div>

          <h3 className="text-lg font-black text-white">Sophia · Voice AI Agent</h3>
          <p className="text-xs text-sky-400 font-medium">English Only · Tier-1 Markets</p>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">{callerPhone}</p>

          {/* Animated audio speech waveform */}
          <div className="flex items-center gap-1 mt-3 h-6">
            {[40, 75, 100, 60, 90, 45, 80, 100, 50, 70, 95, 30].map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isAiSpeaking
                    ? 'bg-[#38bdf8] animate-pulse'
                    : 'bg-slate-700'
                }`}
                style={{
                  height: isAiSpeaking ? `${h}%` : '20%',
                  animationDelay: `${i * 70}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Live Transcript Stream */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 text-xs scrollbar-thin">
          {transcript.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-[#2596be] text-white rounded-tr-sm'
                    : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-tl-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-1 text-[10px] opacity-75">
                  <span className="font-bold">
                    {msg.sender === 'user' ? 'YOU' : 'SOPHIA (AI)'}
                  </span>
                  <span className="font-mono">{msg.time}</span>
                </div>
                <p className="leading-relaxed font-medium">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Prompt Pills */}
        <div className="p-3 bg-slate-900/60 border-t border-slate-800/80 shrink-0">
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => {
                  setUserReplyInput(prompt);
                }}
                className="text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full whitespace-nowrap border border-slate-700 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* User Reply Input Field */}
          <form onSubmit={handleSendMessage} className="flex items-center gap-2 mt-1">
            <input
              type="text"
              placeholder="Speak or type to Sophia..."
              value={userReplyInput}
              onChange={(e) => setUserReplyInput(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#2596be]"
            />
            <button
              type="submit"
              className="p-2.5 bg-[#2596be] hover:bg-[#1b7494] text-white rounded-xl cursor-pointer transition-colors shrink-0"
              aria-label="Send reply"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Bottom Call Controls (End Call, Mute) */}
        <div className="p-4 bg-slate-950 flex items-center justify-center gap-8 shrink-0 border-t border-slate-800">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full border transition-colors cursor-pointer ${
              isMuted
                ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <button
            onClick={handleEndCall}
            className="p-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            aria-label="End Call"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
};
