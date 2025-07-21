import React, { useState, useEffect } from 'react';

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const WorkshopPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a brief delay when component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-gold-400/30 rounded-2xl shadow-2xl shadow-gold-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                    aria-label="Close popup"
                >
                    <CloseIcon className="w-5 h-5" />
                </button>

                <div className="p-8">
                    {/* Above Headline Text */}
                    <div className="text-center mb-4">
                        <p className="text-gold-400 font-bold text-lg tracking-wide">
                            WAIT! Malcolm Kingley is launching his first "next level" live workshop.
                        </p>
                    </div>

                    {/* Workshop Image */}
                    <div className="mb-6 flex justify-center">
                        <img 
                            src="https://i.imgur.com/cZE2WrD.png" 
                            alt="WOW-Factor 100 Workshop"
                            className="max-w-full h-auto rounded-lg shadow-lg max-h-48 object-contain"
                        />
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-cinzel text-2xl md:text-3xl font-bold text-center text-slate-100 mb-4 leading-tight">
                        JOIN MY UPCOMING WORKSHOP:<br />
                        BUILD UNSTOPPABLE WEALTH WITH THE SOVEREIGN CODE SYSTEM.
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-center text-gold-400 text-lg font-semibold mb-6">
                        Watch Malcolm's Webinar and Register Now.
                    </p>

                    {/* Dates Section */}
                    <div className="bg-slate-800/50 rounded-xl p-6 mb-6 text-center border border-slate-700/50">
                        <div className="text-slate-100 font-bold text-xl mb-2">
                            Aug 5, 6, 7
                        </div>
                        <div className="text-gold-400 font-semibold text-lg mb-2">
                            LIVE STREAM
                        </div>
                        <div className="text-slate-300 text-sm">
                            30 Day Replays Available
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <a
                            href="https://admirable-pothos-d42b08.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                            className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        >
                            WATCH WEBINAR & REGISTER NOW
                        </a>
                    </div>

                    {/* Bottom note */}
                    <p className="text-center text-slate-500 text-xs mt-4">
                        Click anywhere outside this window to close
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkshopPopup;