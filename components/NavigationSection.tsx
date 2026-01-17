import React from 'react';

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .708A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
    </svg>
);

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const NavigationSection: React.FC = () => {
    return (
        <section className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/50 py-16">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full shadow-lg mb-6">
                        <span className="text-green-400 font-black text-xs uppercase tracking-widest">Free Access</span>
                    </div>

                    <h2 className="font-cinzel text-3xl md:text-4xl font-black text-slate-100 mb-4 tracking-tight">
                        SACRED LIBRARY
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Access Malcolm's complete collection of 5 transformative books on Divine Law and spiritual principles.
                    </p>

                    <a
                        href="https://legendary-melomakarona-3b8eea.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <BookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="tracking-wide">Explore the Library</span>
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NavigationSection;