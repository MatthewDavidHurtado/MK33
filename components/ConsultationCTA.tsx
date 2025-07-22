import React from 'react';

const ConsultationCTA: React.FC = () => {
    return (
        <section className="mt-16 py-12 bg-slate-900/50 rounded-xl border border-slate-800/60">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="flex-shrink-0 lg:w-1/3">
                        <div className="relative">
                            <img 
                                src="https://i.imgur.com/gPQK1Fb.jpg" 
                                alt="Malcolm Kingley - Personal Consultation"
                                className="w-full max-w-xs mx-auto lg:max-w-none rounded-xl shadow-2xl border border-slate-700/50"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="font-cinzel text-3xl font-bold text-slate-100 mb-4">
                            Ready for a Breakthrough?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            My 15-minute Breakthrough Guidance session goes far beyond anything you've likely experienced. It is intuitive, Biblical, and designed to give you the most precise clarity and a proven plan of action possible. If you feel stuck, I will help you get past that point, decisively.
                        </p>
                        <a
                            href="https://calendly.com/sealintelligence/spiritual-consultation?month=2025-07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-transparent hover:bg-gold-500/10 text-gold-400 font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-gold-500/10 border border-gold-400/50 hover:border-gold-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            aria-label="Book your 15-minute Breakthrough Guidance session with Malcolm Kingley"
                        >
                            Book Your Breakthrough Session
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationCTA;