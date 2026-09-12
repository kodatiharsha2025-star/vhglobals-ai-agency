export interface TranscriptTurn {
  id: string;
  speaker: 'agent' | 'customer';
  text: string;
  timestamp: string; // e.g. "0:04"
  startSecond: number;
  durationSecond: number;
  tone?: 'warm' | 'curious' | 'reassuring' | 'urgent' | 'satisfied';
  actionTaken?: string;
  isInterruption?: boolean;
}

export interface VoiceSampleCall {
  id: string;
  agentName: string;
  agentRole: string;
  accent: string;
  tone: string;
  language: string;
  industry: string;
  totalDurationSeconds: number;
  latencyMs: number;
  sentiment: string;
  turns: TranscriptTurn[];
  summary: string;
  crmUpdated: string;
}

export interface VoicePersona {
  id: string;
  name: string;
  gender: 'Female' | 'Male';
  accent: string;
  toneDescription: string;
  idealFor: string;
  pitch: number;
  rate: number;
  badge: string;
}

export interface ProjectInquiryData {
  id?: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  primaryUseCase: string;
  monthlyCallVolume: string;
  crmIntegrations: string[];
  targetLanguages: string[];
  targetAccents: string;
  deploymentTimeline: string;
  specialRequirements: string;
  submittedAt?: string;
}

export interface UseCaseData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  keyCapabilities: string[];
  sampleDialogueSnippet: {
    customer: string;
    agent: string;
  };
}
