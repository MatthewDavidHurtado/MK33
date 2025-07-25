import React, { useState } from 'react';

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .708A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const FloatingLibraryWidget: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Expanded Card */}
            {isExpanded && (
                <div className="mb-4 w-80 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl border border-gold-400/30 shadow-2xl shadow-gold-500/20 p-6 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <BookIcon className="w-6 h-6 text-gold-400" />
                            <h3 className="font-cinzel text-lg font-bold text-gold-400">Spiritual Resources</h3>
                        </div>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                            aria-label="Close spiritual resources"
                        >
                            <CloseIcon className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Access Malcolm Kingley's complete collection of <strong className="text-gold-400">5 transformative books</strong> and join the 24/7 Quantum Church Service for advanced spiritual training.
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                        {['Divine Science', 'Quantum Church', 'Forbidden Gnosis'].map((topic) => (
                            <span key={topic} className="text-xs bg-gold-400/10 text-gold-300 px-2 py-1 rounded-full border border-gold-400/20">
                                {topic}
                            </span>
                        ))}
                    </div>
                    
                    <div className="space-y-3">
                        <a
                            href="https://legendary-melomakarona-3b8eea.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-center py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                            onClick={() => setIsExpanded(false)}
                        >
                            Enter Sacred Library
                        </a>
                        
                        <a
                            href="https://allow-ministries-quantum-church-service.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                            onClick={() => setIsExpanded(false)}
                        >
                            <div className="text-sm">QUANTUM CHURCH SERVICE 24/7</div>
                            <div className="text-xs opacity-90">Master The Forbidden Gnosis!</div>
                        </a>
                    </div>
                </div>
            )}
            
            {/* Floating Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`group relative w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:scale-110 transition-all duration-300 flex items-center justify-center ${isExpanded ? 'rotate-12' : ''}`}
                aria-label={isExpanded ? "Close spiritual resources" : "Open spiritual resources"}
            >
                <BookIcon className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
                
                {/* Pulsing ring animation when not expanded */}
                {!isExpanded && (
                    <div className="absolute inset-0 rounded-full border-2 border-gold-400/50 animate-ping"></div>
                )}
                
                {/* Notification dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                </div>
            </button>
        </div>
    );
};

export default FloatingLibraryWidget;