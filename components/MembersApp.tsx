import React, { useState, useRef, useEffect } from 'react';
import PasswordProtection from './PasswordProtection';
import QuestionForm from './QuestionForm';
import TreatmentResponse from './TreatmentResponse';
import BiologicalPrograms from './BiologicalPrograms';
import HowToUse from './HowToUse';
import { generateTreatmentStream, generateGnmAnalysisStream } from '../services/geminiService';

type Tool = 'treatment' | 'biological';

const MembersApp: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Spiritual Treatment state
  const [question, setQuestion] = useState('');
  const [treatmentResponse, setTreatmentResponse] = useState('');
  const [isTreatmentLoading, setIsTreatmentLoading] = useState(false);
  const [showTreatmentResponse, setShowTreatmentResponse] = useState(false);

  // Biological Programs state
  const [step, setStep] = useState(0);
  const [handDominance, setHandDominance] = useState<'Right' | 'Left' | null>(null);
  const [symptoms, setSymptoms] = useState('');
  const [bioResponse, setBioResponse] = useState('');
  const [isBioLoading, setIsBioLoading] = useState(false);
  const [bioError, setBioError] = useState<string | null>(null);

  const [activeTool, setActiveTool] = useState<Tool>('treatment');
  const responseRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => setIsUnlocked(true);

  const handleTreatmentSubmit = async () => {
    if (!question.trim()) return;
    setShowTreatmentResponse(true);
    setIsTreatmentLoading(true);
    setTreatmentResponse('');
    try {
      const stream = await generateTreatmentStream(question);
      let accumulated = '';
      for await (const chunk of stream) {
        accumulated += chunk;
        setTreatmentResponse(accumulated);
      }
    } catch (err) {
      setTreatmentResponse('An error occurred while generating your spiritual treatment. Please try again.');
    } finally {
      setIsTreatmentLoading(false);
    }
  };

  const handleTreatmentReset = () => {
    setQuestion('');
    setTreatmentResponse('');
    setShowTreatmentResponse(false);
  };

  const handleBioSubmit = async () => {
    if (!symptoms.trim() || !handDominance) return;
    setStep(3);
    setIsBioLoading(true);
    setBioError(null);
    setBioResponse('');
    try {
      const stream = await generateGnmAnalysisStream(symptoms, handDominance);
      let accumulated = '';
      for await (const chunk of stream) {
        accumulated += chunk;
        setBioResponse(accumulated);
      }
      setStep(4);
    } catch (err) {
      setBioError('An error occurred during analysis. Please try again.');
      setStep(2);
    } finally {
      setIsBioLoading(false);
    }
  };

  const handleBioReset = () => {
    setStep(0);
    setHandDominance(null);
    setSymptoms('');
    setBioResponse('');
    setBioError(null);
  };

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showTreatmentResponse]);

  if (!isUnlocked) {
    return <PasswordProtection onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen bg-black text-slate-300">
      <div className="relative z-10 container mx-auto max-w-4xl px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Spiritual Guidance Portal
          </h1>
          <p className="text-slate-400 italic" style={{ fontFamily: "'Lora', serif" }}>
            Members-Only Treatment & Analysis Tools
          </p>
          <div className="w-24 h-px bg-gold-500/40 mx-auto mt-4"></div>
        </div>

        {/* How To Use */}
        <HowToUse />

        {/* Tool Selector */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTool('treatment')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTool === 'treatment'
                ? 'bg-gold-500 text-slate-900'
                : 'bg-slate-900/50 text-slate-400 border border-slate-700/80 hover:text-slate-200'
            }`}
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Spiritual Treatment
          </button>
          <button
            onClick={() => setActiveTool('biological')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTool === 'biological'
                ? 'bg-gold-500 text-slate-900'
                : 'bg-slate-900/50 text-slate-400 border border-slate-700/80 hover:text-slate-200'
            }`}
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Biological Programs
          </button>
        </div>

        {/* Spiritual Treatment Tool */}
        {activeTool === 'treatment' && (
          <div className="transition-opacity duration-500">
            {!showTreatmentResponse ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-100 mb-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  Receive a Spiritual Treatment
                </h2>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                  Share what is going on that you'd like to address. Malcolm's spiritual guidance will provide a personalized treatment and explain the method.
                </p>
                <QuestionForm
                  onSubmit={handleTreatmentSubmit}
                  isLoading={isTreatmentLoading}
                  question={question}
                  onQuestionChange={setQuestion}
                />
              </div>
            ) : (
              <div ref={responseRef}>
                <TreatmentResponse
                  question={question}
                  streamedResponse={treatmentResponse}
                  isLoading={isTreatmentLoading}
                  onReset={handleTreatmentReset}
                />
              </div>
            )}
          </div>
        )}

        {/* Biological Programs Tool */}
        {activeTool === 'biological' && (
          <div className="transition-opacity duration-500">
            <BiologicalPrograms
              step={step}
              setStep={setStep}
              handDominance={handDominance}
              setHandDominance={setHandDominance}
              symptoms={symptoms}
              setSymptoms={setSymptoms}
              response={bioResponse}
              isLoading={isBioLoading}
              error={bioError}
              onSubmit={handleBioSubmit}
              onReset={handleBioReset}
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 text-center">
          <p className="text-slate-500 text-sm" style={{ fontFamily: "'Lora', serif" }}>
            Kingley Foundation — 508(c)(1)(A) — State of Washington
          </p>
          <p className="text-slate-600 text-xs mt-2">
            These tools are for spiritual exploration and educational purposes only.
            They do not constitute medical, legal, financial, or professional advice.
          </p>
          <a href="/" className="inline-block mt-4 text-gold-500 hover:text-gold-400 font-semibold transition-colors duration-300 text-sm">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default MembersApp;
