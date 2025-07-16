
import React from 'react';

interface TreatmentResponseProps {
    question: string;
    streamedResponse: string;
    isLoading: boolean;
    onReset: () => void;
}

const TreatmentResponse: React.FC<TreatmentResponseProps> = ({ question, streamedResponse, isLoading, onReset }) => {
    const hasContent = streamedResponse.trim().length > 0;
    const separator = '\n\n---\n\n';
    
    const parts = streamedResponse.split(separator);
    const treatment = parts[0];
    const explanation = parts.length > 1 ? parts.slice(1).join(separator) : '';

    return (
        <div className="mt-10 transition-opacity duration-500 ease-in-out">
            <div className="bg-slate-900/50 p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-800/60">
                <div className="mb-6 pb-4 border-b border-slate-700/80">
                    <h3 className="text-slate-400 font-semibold">Your Concern:</h3>
                    <p className="text-slate-300 italic mt-1">"{question}"</p>
                </div>
                
                {/* Spiritual Treatment Section */}
                <div>
                    <h3 className="font-cinzel text-gold-400 text-xl font-bold mb-3">A Spiritual Treatment:</h3>
                    {(isLoading && !hasContent) ? (
                         <div className="flex items-center justify-center py-10">
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse [animation-delay:-0.15s] mx-2"></div>
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                        </div>
                    ) : (
                        <div 
                            className="font-lora text-lg md:text-xl text-slate-200 leading-relaxed whitespace-pre-wrap"
                        >
                            {treatment}
                            {isLoading && !explanation && <span className="inline-block w-2 h-5 bg-slate-300 animate-pulse ml-1" />}
                        </div>
                    )}
                </div>

                {/* Explanation Section */}
                {explanation && (
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-700">
                         <div 
                            className="text-slate-300 leading-relaxed whitespace-pre-wrap prose prose-invert prose-p:text-slate-300 prose-h2:text-gold-400 prose-h2:font-cinzel"
                        >
                            {explanation}
                            {isLoading && <span className="inline-block w-2 h-5 bg-slate-300 animate-pulse ml-1" />}
                        </div>
                    </div>
                )}

            </div>
            {!isLoading && hasContent && (
                <div className="mt-8 text-center">
                    <button
                        onClick={onReset}
                        className="bg-transparent text-gold-400 font-bold py-3 px-6 rounded-lg border border-gold-400/50 hover:bg-gold-500/10 hover:border-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gold-400 transition-all duration-300"
                        aria-label="Start a new treatment and analysis"
                    >
                        Get a New Treatment
                    </button>
                </div>
            )}
        </div>
    );
};

export default TreatmentResponse;