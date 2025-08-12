import React from 'react';

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .708A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
    </svg>
);

const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

const DivineLibraryCTA: React.FC = () => {
    return (
        <div className="my-16 relative">
            {/* Decorative border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent h-px top-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent h-px bottom-0"></div>
            
            <div className="bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-gold-400/30 shadow-2xl shadow-gold-500/10 p-8 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4">
                        <BookIcon className="w-32 h-32 text-gold-400 transform rotate-12" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <BookIcon className="w-24 h-24 text-gold-400 transform -rotate-12" />
                    </div>
                </div>

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <StarIcon className="w-6 h-6 text-gold-400" />
                        <BookIcon className="w-8 h-8 text-gold-400" />
                        <StarIcon className="w-6 h-6 text-gold-400" />
                    </div>
                    
                    <h2 className="font-cinzel text-3xl font-bold text-gold-400 mb-3">
                        The Sacred Library Awaits
                    </h2>
                    
                    <p className="text-slate-300 text-lg mb-2 font-lora">
                        Deepen your understanding at the
                    </p>
                    
                    <h3 className="font-cinzel text-2xl font-bold text-slate-100 mb-4 tracking-wide">
                        DIVINE LAW SCHOOL
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Access Malcolm Kingley's complete collection of 5 transformative books—yours absolutely free. These sacred texts contain the keys to understanding Divine Law and your spiritual inheritance.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 text-sm text-gold-300 mb-8">
                        <span className="bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">Divine Science</span>
                        <span className="bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">Spiritual Law</span>
                        <span className="bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">Consciousness</span>
                        <span className="bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">Healing</span>
                        <span className="bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">Abundance</span>
                    </div>
                    
                    <a
                        href="https://legendary-melomakarona-3b8eea.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        aria-label="Visit the Divine Law School Sacred Library"
                    >
                        <BookIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        <span className="tracking-wide">ENTER THE SACRED LIBRARY</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    
                    <p className="text-xs text-slate-500 mt-4 italic">
                        "Study to show thyself approved unto God" — 2 Timothy 2:15
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DivineLibraryCTA;