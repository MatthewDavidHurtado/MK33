import React, { useState, useEffect } from 'react';

const XMarkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

const SSFModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal immediately when page loads
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Small delay to ensure page is loaded

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        console.log('Close button clicked'); // Debug log
        setIsVisible(false);
    };

    const handleEnroll = () => {
        window.open('https://spiritual-special-forces-operator-school-759385455270.us-west1.run.app/', '_blank');
        console.log('Enroll button clicked'); // Debug log
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={handleClose}
        >
            <div className="relative max-w-md w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl border-2 border-gold-400/50 shadow-2xl shadow-gold-500/20 animate-scale-in overflow-hidden">
                {/* Prevent modal content clicks from closing */}
                <div onClick={(e) => e.stopPropagation()}>
                
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors duration-300 shadow-lg"
                    aria-label="Close modal"
                    type="button"
                   style={{ zIndex: 9999 }}
                >
                    <XMarkIcon className="w-3 h-3 text-white" />
                </button>

                {/* Header with Stars */}
                <div className="relative bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 p-4 text-center">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                        <div className="flex justify-center items-center gap-2 mb-2">
                            <StarIcon className="w-4 h-4 text-black animate-pulse" />
                            <StarIcon className="w-5 h-5 text-black animate-pulse [animation-delay:0.2s]" />
                            <StarIcon className="w-4 h-4 text-black animate-pulse [animation-delay:0.4s]" />
                        </div>
                        <h2 className="font-bold text-lg text-black mb-2 tracking-wide font-inter">
                            THE ULTIMATE SPIRITUAL TRAINING
                        </h2>
                        <div className="bg-black/20 rounded-lg px-3 py-1 inline-block">
                            <h3 className="font-bold text-base text-black tracking-wide font-inter">
                                SPIRITUAL SPECIAL FORCES
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-5">
                    <div className="space-y-4">
                        
                        {/* Training Image */}
                        <div className="text-center">
                            <div className="relative mb-4">
                                <img 
                                    src="https://i.imgur.com/6N57v1h.jpg" 
                                    alt="Spiritual Special Forces Training"
                                    className="w-32 h-20 mx-auto rounded-lg shadow-xl border border-gold-400/40 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                            </div>
                            <div className="bg-slate-800/60 rounded-lg p-3 border border-gold-400/30">
                                <h4 className="font-bold text-base text-gold-400 mb-1 font-inter">
                                    90-Day Elite Program
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    5 Powerful Demonstrations
                                </p>
                            </div>
                        </div>

                        {/* Patch & Details */}
                        <div className="text-center">
                            <div className="mb-4">
                                <h4 className="font-bold text-lg text-gold-400 mb-2 font-inter">
                                    EARN YOUR SSF PATCH
                                </h4>
                                <div className="flex justify-center mb-3">
                                    <img 
                                        src="https://i.imgur.com/zDr7njf.png" 
                                        alt="SSF Patch"
                                        className="w-12 h-12 rounded-full border-2 border-gold-400 shadow-lg"
                                    />
                                </div>
                                <div className="space-y-1 text-slate-300 text-xs">
                                    <div className="flex items-center justify-center gap-2">
                                        <StarIcon className="w-3 h-3 text-gold-400" />
                                        <span>Elite Spiritual Combat Training</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <StarIcon className="w-3 h-3 text-gold-400" />
                                        <span>Advanced Divine Law Mastery</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <StarIcon className="w-3 h-3 text-gold-400" />
                                        <span>Exclusive SSF Community Access</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={handleEnroll}
                                className="group w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <span className="tracking-wide">ENROLL NOW</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-2.5 border border-gold-400/20 text-center">
                        <p className="text-gold-300 font-bold text-sm font-inter">
                            "BE STRONG AND COURAGEOUS" - JOSHUA 1:9
                        </p>
                        <p className="text-slate-400 text-xs mt-1">
                            Limited Time Enrollment - Transform Your Spiritual Warfare
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scale-in {
                    from { 
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.4s ease-out;
                }
            `}</style>
        </div>
    );
};

export default SSFModal;
    )
}