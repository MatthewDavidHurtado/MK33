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
        <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4">
                        <BookIcon className="w-32 h-32 text-amber-500 transform rotate-12" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <BookIcon className="w-24 h-24 text-amber-500 transform -rotate-12" />
                    </div>
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <StarIcon className="w-7 h-7 text-amber-400" />
                        <BookIcon className="w-9 h-9 text-amber-400" />
                        <StarIcon className="w-7 h-7 text-amber-400" />
                    </div>

                    <h2 className="font-cinzel text-3xl md:text-4xl font-black text-amber-400 mb-4 tracking-tight">
                        The Sacred Library Awaits
                    </h2>

                    <p className="text-slate-300 text-lg md:text-xl mb-3 font-lora">
                        Deepen your understanding at the
                    </p>

                    <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 mb-6 tracking-wide">
                        DIVINE LAW SCHOOL
                    </h3>

                    <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                        Access Malcolm Kingley's complete collection of 5 transformative books—yours absolutely free. These sacred texts contain the keys to understanding Divine Law and your spiritual inheritance.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 text-sm text-amber-300 mb-10">
                        <span className="bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 font-semibold">Divine Science</span>
                        <span className="bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 font-semibold">Spiritual Law</span>
                        <span className="bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 font-semibold">Consciousness</span>
                        <span className="bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 font-semibold">Healing</span>
                        <span className="bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 font-semibold">Abundance</span>
                    </div>

                    <a
                        href="https://legendary-melomakarona-3b8eea.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold text-base md:text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-amber-400"
                        aria-label="Visit the Divine Law School Sacred Library"
                    >
                        <BookIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        <span className="tracking-wide">ENTER THE SACRED LIBRARY</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </a>

                    <p className="text-xs text-slate-500 mt-6 italic">
                        "Study to show thyself approved unto God" — 2 Timothy 2:15
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DivineLibraryCTA;