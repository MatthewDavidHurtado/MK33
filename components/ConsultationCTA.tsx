import React from 'react';

const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6a1.5 1.5 0 0 0-1.5 1.5v11.25c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5H5.25Z" clipRule="evenodd" />
    </svg>
);

const ConsultationCTA: React.FC = () => {
    return (
        <section className="py-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl">
            <div className="container mx-auto max-w-5xl px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-shrink-0 lg:w-2/5">
                        <div className="relative">
                            <img
                                src="https://i.imgur.com/jzcEePw.jpg"
                                alt="Malcolm Kingley - Personal Consultation"
                                className="w-full max-w-sm mx-auto lg:max-w-none rounded-xl shadow-2xl border border-amber-500/40"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-amber-500/10 to-transparent"></div>
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-block bg-amber-500/20 border border-amber-500/30 px-4 py-1.5 rounded-full mb-4">
                            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">15-Minute Session</span>
                        </div>
                        <h2 className="font-cinzel text-3xl md:text-4xl font-black text-slate-100 mb-4 tracking-tight">
                            Ready for a Breakthrough?
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                            My 15-minute Breakthrough Guidance session goes far beyond anything you've likely experienced. It is intuitive, Biblical, and designed to give you the most precise clarity and a proven plan of action possible. If you feel stuck, I will help you get past that point, decisively.
                        </p>
                        <a
                            href="https://calendly.com/sealintelligence/spiritual-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/30 border border-amber-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            aria-label="Book your 15-minute Breakthrough Guidance session with Malcolm Kingley"
                        >
                            <CalendarIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="tracking-wide">Book Your Breakthrough Session</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationCTA;