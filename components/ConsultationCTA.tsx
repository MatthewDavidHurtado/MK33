import React from 'react';

const ConsultationCTA: React.FC = () => {
    return (
        <section className="mt-16 py-12 bg-slate-900/50 rounded-xl border border-slate-800/60">
            <div className="container mx-auto max-w-3xl text-center px-4">
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
        </section>
    );
};

export default ConsultationCTA;