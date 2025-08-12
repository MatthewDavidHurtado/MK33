
import React from 'react';

interface BiologicalProgramsProps {
    step: number;
    setStep: (step: number) => void;
    handDominance: 'Right' | 'Left' | null;
    setHandDominance: (hand: 'Right' | 'Left') => void;
    symptoms: string;
    setSymptoms: (symptoms: string) => void;
    response: string;
    isLoading: boolean;
    error: string | null;
    onSubmit: () => void;
    onReset: () => void;
}

const HandIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.233 3.613A.75.75 0 0 1 12 4.5v9.452l2.232-2.232a.75.75 0 0 1 1.06 1.061l-3.5 3.5a.75.75 0 0 1-1.062 0l-3.5-3.5a.75.75 0 1 1 1.061-1.06l2.232 2.231V4.5a.75.75 0 0 1 .233-.887Z" />
        <path fillRule="evenodd" d="M12 21.75c-5.144 0-9.25-3.933-9.25-8.75S6.856 4.25 12 4.25c5.144 0 9.25 3.933 9.25 8.75 0 4.71-3.977 8.573-8.995 8.744l-.255.006Z" clipRule="evenodd" />
    </svg>
);


const BiologicalPrograms: React.FC<BiologicalProgramsProps> = ({
    step, setStep, handDominance, setHandDominance, symptoms, setSymptoms,
    response, isLoading, error, onSubmit, onReset
}) => {
    const renderContent = () => {
        switch (step) {
            case 0: // Initial state
                return (
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-cinzel font-semibold text-slate-100 mb-3">Understand Your Body's Response</h2>
                        <p className="text-slate-400 mb-6 max-w-prose mx-auto">
                            Our bodies have intelligent, built-in biological programs that respond to life events. To explore the potential meaning behind physical symptoms, we can start an analysis.
                        </p>
                        <button
                            onClick={() => setStep(1)}
                            className="bg-muted-blue/80 text-white font-semibold py-3 px-6 rounded-lg hover:bg-muted-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-muted-blue transition-all duration-300"
                        >
                            Analyze Physical Symptoms
                        </button>
                    </div>
                );

            case 1: // Handedness
                return (
                    <div className="text-center p-8">
                        <HandIcon className="w-12 h-12 text-gold-400 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">First, what is your dominant hand?</h3>
                        <p className="text-slate-400 mb-6">This determines how your body responds to different types of life events. To find out, quickly clap your hands together—the hand on top is your dominant one.</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => { setHandDominance('Left'); setStep(2); }} className="font-semibold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">Left</button>
                            <button onClick={() => { setHandDominance('Right'); setStep(2); }} className="font-semibold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">Right</button>
                        </div>
                    </div>
                );

            case 2: // Symptoms input
                return (
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4 text-center">Describe the physical symptoms.</h3>
                         <textarea
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="For example: 'Pain in my right shoulder', 'eczema on my left elbow', 'a persistent cough'."
                            className="w-full h-32 p-3 text-slate-300 placeholder-slate-500 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                            disabled={isLoading ? true : false}
                            aria-label="Describe your physical symptoms"
                        />
                        {error && <p className="text-red-400 text-center mt-4">{error}</p>}
                        <div className="mt-4 flex justify-center">
                             <button
                                onClick={onSubmit}
                                disabled={isLoading || !symptoms.trim() ? true : false}
                                className="bg-gold-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-gold-400 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:text-slate-400 transition-all duration-300"
                            >
                               {isLoading ? 'Analyzing...' : 'Get Analysis'}
                            </button>
                        </div>
                    </div>
                );

            case 3: // Loading
                return (
                    <div className="p-12 text-center">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Analyzing the Biological Program...</h3>
                        <div className="flex items-center justify-center py-10">
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse [animation-delay:-0.15s] mx-2"></div>
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-slate-400">Please wait while we cross-reference the information.</p>
                    </div>
                );

            case 4: // Response
                return (
                    <div className="p-6 sm:p-8">
                         <div className="mb-6 pb-4 border-b border-slate-700">
                            <h3 className="text-slate-400 font-semibold">Your Inputs:</h3>
                            <p className="text-slate-300 mt-1">
                                <span className="font-medium text-slate-200">Handedness:</span> {handDominance} | <span className="font-medium text-slate-200">Symptoms:</span> <span className="italic">"{symptoms}"</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gold-400 font-cinzel text-xl font-bold mb-3">Biological Program Analysis:</h3>
                            <div className="text-slate-300 leading-relaxed whitespace-pre-wrap prose prose-invert max-w-none prose-p:text-slate-300 prose-strong:text-slate-100">
                                {response}
                                {isLoading && <span className="inline-block w-2 h-5 bg-slate-400 animate-pulse ml-1" />}
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button
                                onClick={onReset}
                                className="bg-transparent text-gold-400 font-bold py-3 px-6 rounded-lg border border-gold-400/50 hover:bg-gold-500/10 hover:border-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gold-400 transition-all duration-300"
                            >
                                Start New Analysis
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-black/20 backdrop-blur-sm p-2 rounded-xl shadow-2xl border border-slate-800/60 transition-all duration-500 ease-in-out">
            <div className="bg-slate-900/70 rounded-lg">
                {renderContent()}
            </div>
        </div>
    );
};

export default BiologicalPrograms;