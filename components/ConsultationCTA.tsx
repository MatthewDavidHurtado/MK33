import React from 'react';

const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6a1.5 1.5 0 0 0-1.5 1.5v11.25c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5H5.25Z" clipRule="evenodd" />
    </svg>
);

const ConsultationCTA: React.FC = () => {
    return (
        <section className="py-12 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 rounded-2xl border-2 border-gold-400/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(224, 197, 110, 0.2) 0%, transparent 50%)'
            }}></div>

            <div className="container mx-auto max-w-5xl px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-shrink-0 lg:w-2/5">
                        <div className="relative">
                            <img
                                src="https://i.imgur.com/jzcEePw.jpg"
                                alt="Malcolm Kingley - Personal Consultation"
                                className="w-full max-w-sm mx-auto lg:max-w-none rounded-xl shadow-2xl border-4 border-gold-500/60"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gold-500/5 to-transparent"></div>
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-block bg-gold-500 border-2 border-gold-600 px-4 py-1.5 rounded-full mb-4 shadow-md">
                            <span className="text-white font-bold text-xs uppercase tracking-widest">15-Minute Session • $75</span>
                        </div>
                        <h2 className="font-cinzel text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                            Ready for a Breakthrough?
                        </h2>
                        <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8">
                            My 15-minute Breakthrough Guidance session goes far beyond anything you've likely experienced. It is intuitive, Biblical, and designed to give you the most precise clarity and a proven plan of action possible. If you feel stuck, I will help you get past that point, decisively.
                        </p>
                        <a
                            href="https://calendly.com/sealintelligence/spiritual-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gold-500/50 border-2 border-gold-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
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