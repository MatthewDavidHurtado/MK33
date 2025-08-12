import React, { useState, useEffect } from 'react';

const XMarkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const SSFModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleEnroll = () => {
        window.open('https://spiritual-special-forces-operator-school-759385455270.us-west1.run.app/', '_blank');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleClose}
        >
            <div 
                className="relative max-w-md w-full bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl shadow-gold-500/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/80 rounded-full transition-colors duration-200 border border-slate-600/50"
                >
                    <XMarkIcon className="w-4 h-4 text-slate-300" />
                </button>

                {/* Top Hero Image */}
                <div className="relative h-48 overflow-hidden">
                    <img 
                        src="https://i.imgur.com/cq7X3Bo.jpg" 
                        alt="Spiritual Special Forces Training"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Patch and Title Section */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <img 
                                src="https://i.imgur.com/zDr7njf.png" 
                                alt="SSF Operator Patch"
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                        <h2 className="font-cinzel text-xl font-bold text-slate-100 mb-2">
                            Earn Your Official Patch
                        </h2>
                        <p className="text-slate-400 text-sm">
                                Join an elite brotherhood. Complete 5 verified demonstrations and earn your official certification.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300">90-Day Elite Combat Training Program</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300">Verified Combat Demonstrations</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300">Official SSF Operator Certification</span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={handleEnroll}
                                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-sm py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <>
                                <div className="font-cinzel text-base font-bold">
                                    Become a Spiritual Warfare Special Operator
                                </div>
                                <div className="text-sm font-semibold opacity-90 mt-1">
                                    90-Day Elite Combat Training
                                </div>
                            </>
                    </div>

                    <div className="text-center pt-2 border-t border-slate-700/50">
                        <p className="text-slate-500 text-xs">
                            <span className="text-slate-300 font-semibold">247 operators</span> have earned their certification
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSFModal;
    )
}