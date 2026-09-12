import React, { useState } from 'react';
import { Download, Copy, Check, Sparkles, Send, FileText, CheckCircle2, ShieldAlert, PhoneCall, RefreshCw, Layers } from 'lucide-react';
import { ProjectInquiryData } from '../types';

interface ProjectOnboardingFormProps {
  initialUseCase?: string;
  initialVolume?: string;
}

export const ProjectOnboardingForm: React.FC<ProjectOnboardingFormProps> = ({
  initialUseCase = 'Automated Appointment Setting',
  initialVolume = '1,000 - 10,000 calls/mo',
}) => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    primaryUseCase: initialUseCase,
    monthlyCallVolume: initialVolume,
    crmIntegrations: ['Salesforce', 'Twilio'],
    targetLanguages: ['English (US/UK)'],
    targetAccents: 'North American (Warm & Conversational)',
    deploymentTimeline: '1-2 Weeks (Rapid Prototype)',
    specialRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<ProjectInquiryData | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync with prop changes if user clicked from other sections
  React.useEffect(() => {
    if (initialUseCase) {
      setFormData((prev) => ({ ...prev, primaryUseCase: initialUseCase }));
    }
  }, [initialUseCase]);

  React.useEffect(() => {
    if (initialVolume) {
      setFormData((prev) => ({ ...prev, monthlyCallVolume: initialVolume }));
    }
  }, [initialVolume]);

  const useCaseOptions = [
    'Automated Appointment Setting',
    'Inbound Customer Support Triage',
    'Outbound Lead Follow-Up & Qualification',
    'After-Hours Emergency Dispatch',
    'Custom Enterprise Voice Solution',
  ];

  const volumeOptions = [
    '< 1,000 calls/mo',
    '1,000 - 10,000 calls/mo',
    '10,000 - 50,000 calls/mo',
    '50,000+ calls/mo (Custom High Scale)',
  ];

  const crmOptions = [
    'Salesforce',
    'HubSpot',
    'Zendesk',
    'Twilio',
    'Zoho CRM',
    'Genesys',
    'Custom Webhook / REST API',
  ];

  const languageOptions = [
    'English (US/UK)',
    'Spanish (Neutral / LatAm)',
    'French',
    'German',
    'Multilingual Switching (Live)',
  ];

  const handleToggleCRM = (crm: string) => {
    setFormData((prev) => {
      const exists = prev.crmIntegrations.includes(crm);
      if (exists) {
        return { ...prev, crmIntegrations: prev.crmIntegrations.filter((c) => c !== crm) };
      } else {
        return { ...prev, crmIntegrations: [...prev.crmIntegrations, crm] };
      }
    });
  };

  const handleToggleLanguage = (lang: string) => {
    setFormData((prev) => {
      const exists = prev.targetLanguages.includes(lang);
      if (exists) {
        return { ...prev, targetLanguages: prev.targetLanguages.filter((l) => l !== lang) };
      } else {
        return { ...prev, targetLanguages: [...prev.targetLanguages, lang] };
      }
    });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.contactName.trim()) errs.contactName = 'Contact person name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'A valid business email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const referenceId = `VHG-${Math.floor(100000 + Math.random() * 900000)}`;
      const receipt: ProjectInquiryData = {
        ...formData,
        id: referenceId,
        submittedAt: new Date().toISOString(),
      };
      setSubmissionReceipt(receipt);
      setIsSubmitting(false);
    }, 650);
  };

  const handlePreFillSample = () => {
    setFormData({
      companyName: 'Apex Health Partners',
      contactName: 'Sarah Jenkins',
      email: 's.jenkins@apexhealthpartners.com',
      phone: '+1 (555) 382-9104',
      primaryUseCase: 'Automated Appointment Setting',
      monthlyCallVolume: '10,000 - 50,000 calls/mo',
      crmIntegrations: ['Salesforce', 'Twilio', 'Custom Webhook / REST API'],
      targetLanguages: ['English (US/UK)', 'Spanish (Neutral / LatAm)'],
      targetAccents: 'North American (Warm & Conversational)',
      deploymentTimeline: '1-2 Weeks (Rapid Prototype)',
      specialRequirements:
        'Need EHR calendar conflict detection with live SMS notifications. High priority on zero-latency barge-in handling for elderly patients.',
    });
    setErrors({});
  };

  const handleExportJSON = (data: ProjectInquiryData) => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute(
      'download',
      `VHGlobals_Voice_Agent_Spec_${data.id || 'export'}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportCSV = (data: ProjectInquiryData) => {
    const headers = [
      'Reference ID',
      'Submission Timestamp',
      'Company Name',
      'Contact Name',
      'Work Email',
      'Phone',
      'Primary Use Case',
      'Monthly Call Volume',
      'CRM Integrations',
      'Target Languages',
      'Target Accent',
      'Deployment Timeline',
      'Special Requirements',
    ];

    const values = [
      data.id || 'N/A',
      data.submittedAt || new Date().toISOString(),
      `"${data.companyName.replace(/"/g, '""')}"`,
      `"${data.contactName.replace(/"/g, '""')}"`,
      `"${data.email.replace(/"/g, '""')}"`,
      `"${data.phone.replace(/"/g, '""')}"`,
      `"${data.primaryUseCase.replace(/"/g, '""')}"`,
      `"${data.monthlyCallVolume.replace(/"/g, '""')}"`,
      `"${data.crmIntegrations.join('; ')}"`,
      `"${data.targetLanguages.join('; ')}"`,
      `"${data.targetAccents.replace(/"/g, '""')}"`,
      `"${data.deploymentTimeline.replace(/"/g, '""')}"`,
      `"${data.specialRequirements.replace(/"/g, '""')}"`,
    ];

    const csvContent = `data:text/csv;charset=utf-8,${encodeURIComponent(
      `${headers.join(',')}\n${values.join(',')}`
    )}`;

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', csvContent);
    downloadAnchor.setAttribute(
      'download',
      `VHGlobals_Voice_Agent_Spec_${data.id || 'export'}.csv`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopySummary = (data: ProjectInquiryData) => {
    const summary = `=== VHGlobals Voice AI Onboarding Brief ===
Reference ID: ${data.id || 'PENDING'}
Date: ${data.submittedAt || new Date().toLocaleString()}
Company: ${data.companyName}
Contact: ${data.contactName} (${data.email} | ${data.phone})
Primary Use Case: ${data.primaryUseCase}
Monthly Call Volume: ${data.monthlyCallVolume}
CRM Stack: ${data.crmIntegrations.join(', ')}
Languages: ${data.targetLanguages.join(', ')}
Accent Preference: ${data.targetAccents}
Timeline: ${data.deploymentTimeline}
Requirements: ${data.specialRequirements || 'None specified'}`;

    navigator.clipboard.writeText(summary);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="onboarding" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2596be]/10 text-[#1b7494] text-xs font-bold tracking-wide uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Voice Agent Deployment Specification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deploy Your Custom AI Voice Agent
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Configure your technical requirements, telephony stack, and call volume.
            Submissions can be exported cleanly to JSON or CSV for immediate architectural review.
          </p>
        </div>

        {/* Success / Submission Receipt State */}
        {submissionReceipt ? (
          <div className="bg-white rounded-2xl border border-emerald-200 shadow-xl p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  Specification Successfully Registered
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Ticket Reference #{submissionReceipt.id}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  A solutions engineer at VHGlobals will provision your sandbox within 24 hours.
                </p>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-5 rounded-xl border border-slate-200/80">
              <div>
                <span className="text-slate-400 font-semibold block">Company & Contact</span>
                <span className="font-bold text-slate-800 text-sm">
                  {submissionReceipt.companyName}
                </span>
                <div className="text-slate-600 mt-0.5">
                  {submissionReceipt.contactName} • {submissionReceipt.email}
                </div>
                <div className="text-slate-600">{submissionReceipt.phone}</div>
              </div>

              <div>
                <span className="text-slate-400 font-semibold block">Primary Architecture</span>
                <span className="font-bold text-[#1b7494] text-sm">
                  {submissionReceipt.primaryUseCase}
                </span>
                <div className="text-slate-600 mt-0.5">
                  Projected Volume: {submissionReceipt.monthlyCallVolume}
                </div>
                <div className="text-slate-600">
                  Timeline: {submissionReceipt.deploymentTimeline}
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-semibold block">CRM / Telephony Stack</span>
                <span className="font-medium text-slate-800">
                  {submissionReceipt.crmIntegrations.join(', ') || 'Standard Webhooks'}
                </span>
              </div>

              <div>
                <span className="text-slate-400 font-semibold block">Languages & Voice Accent</span>
                <span className="font-medium text-slate-800">
                  {submissionReceipt.targetLanguages.join(', ')} ({submissionReceipt.targetAccents})
                </span>
              </div>

              {submissionReceipt.specialRequirements && (
                <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-400 font-semibold block mb-1">
                    Special Workflows & Notes:
                  </span>
                  <p className="text-slate-700 italic">
                    "{submissionReceipt.specialRequirements}"
                  </p>
                </div>
              )}
            </div>

            {/* Clean Data Export Actions */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Export & Handoff Clean Requirement Data:
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleExportJSON(submissionReceipt)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export as JSON</span>
                </button>

                <button
                  onClick={() => handleExportCSV(submissionReceipt)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#2596be]" />
                  <span>Export as CSV</span>
                </button>

                <button
                  onClick={() => handleCopySummary(submissionReceipt)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2596be]/10 text-[#1b7494] text-xs font-bold hover:bg-[#2596be]/20 transition-colors cursor-pointer"
                >
                  {copiedNotification ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNotification ? 'Copied to Clipboard!' : 'Copy Formatted Brief'}</span>
                </button>

                <button
                  onClick={() => setSubmissionReceipt(null)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs text-slate-500 hover:text-slate-800 ml-auto cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Submit Another Specification</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Form Layout */
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-8 lg:p-10">
            
            {/* Quick Helper Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FileText className="w-4 h-4 text-[#2596be]" />
                <span>Enterprise Technical Onboarding Questionnaire</span>
              </div>
              <button
                type="button"
                onClick={handlePreFillSample}
                className="text-xs font-bold text-[#2596be] hover:text-[#1b7494] flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Auto-Fill Sample Project Data</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              
              {/* Row 1: Company & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => {
                      setFormData({ ...formData, companyName: e.target.value });
                      if (errors.companyName) setErrors({ ...errors, companyName: '' });
                    }}
                    placeholder="e.g. Apex Health Partners"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be] ${
                      errors.companyName ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => {
                      setFormData({ ...formData, contactName: e.target.value });
                      if (errors.contactName) setErrors({ ...errors, contactName: '' });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be] ${
                      errors.contactName ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.contactName && (
                    <p className="text-xs text-red-500 mt-1">{errors.contactName}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="sarah@company.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be] ${
                      errors.email ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Direct Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be] ${
                      errors.phone ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Primary Use Case & Monthly Call Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Primary Use Case *
                  </label>
                  <select
                    value={formData.primaryUseCase}
                    onChange={(e) => setFormData({ ...formData, primaryUseCase: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be] bg-white font-medium"
                  >
                    {useCaseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Estimated Monthly Call Volume *
                  </label>
                  <select
                    value={formData.monthlyCallVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyCallVolume: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be] bg-white font-medium"
                  >
                    {volumeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Multi-Select: CRM & Telephony Stack */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Existing Telephony & CRM Integrations:
                </label>
                <div className="flex flex-wrap gap-2">
                  {crmOptions.map((crm) => {
                    const selected = formData.crmIntegrations.includes(crm);
                    return (
                      <button
                        key={crm}
                        type="button"
                        onClick={() => handleToggleCRM(crm)}
                        className={`text-xs px-3.5 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#2596be] text-white border-[#2596be] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {crm}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Languages */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Target Languages & Dialects:
                </label>
                <div className="flex flex-wrap gap-2">
                  {languageOptions.map((lang) => {
                    const selected = formData.targetLanguages.includes(lang);
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => handleToggleLanguage(lang)}
                        className={`text-xs px-3.5 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#2596be] text-white border-[#2596be] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specific Requirements / Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Specific Workflow Requirements / Knowledge Base Notes:
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  placeholder="e.g. We require bi-directional sync with Epic EHR, calendar booking with 30-min buffer, and fallback warm transfer to our emergency dispatch line."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                />
              </div>

              {/* Action Buttons: Submit & Direct Export */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Exportable immediately upon submission</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2596be] text-white font-bold text-sm shadow-md shadow-[#2596be]/30 hover:bg-[#1b7494] transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Validating & Deploying...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Specification</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
