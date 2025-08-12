import React, { useState, useEffect } from 'react';

const XMarkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const ShieldIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.814 3.720 10.764 9.144 12.541a.75.75 0 0 0 1.212 0C18.030 20.514 21.75 15.564 21.75 9.75a12.74 12.74 0 0 0-.635-4.235.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08Z" clipRule="evenodd" />
    </svg>
);

const SSFModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={handleClose}
        >
            <div 
                className="relative max-w-lg w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-gold-400/40 shadow-2xl shadow-gold-500/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-red-600/90 hover:bg-red-600 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                    type="button"
                >
                    <XMarkIcon className="w-4 h-4 text-white" />
                </button>

                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-gold-600 via-gold-500 to-gold-700 p-8 text-center">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <ShieldIcon className="w-16 h-16 text-black mx-auto mb-4 drop-shadow-lg" />
                        <h1 className="font-bold text-2xl text-black mb-2 tracking-wide font-inter drop-shadow-sm">
                            SPIRITUAL SPECIAL FORCES
                        </h1>
                        <div className="bg-black/20 rounded-full px-4 py-2 inline-block backdrop-blur-sm">
                            <p className="font-bold text-sm text-black tracking-wider">
                                ELITE OPERATOR TRAINING
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-8 space-y-6">
                    
                    {/* Program Overview */}
                    <div className="text-center">
                        <h2 className="font-bold text-xl text-slate-100 mb-3 font-inter">
                            90-Day Transformation Program
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Master the forbidden gnosis through intensive spiritual combat training. 
                            Earn your official SSF patch and join an elite community of operators.
                        </p>
                    </div>

                    {/* Training Image - Better Layout */}
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                        <div className="aspect-video w-full rounded-lg overflow-hidden mb-3 bg-slate-900/50 border border-slate-600/30">
                            <img 
                                src="https://i.imgur.com/6N57v1h.jpg" 
                                alt="Five Verified Spiritual Demonstrations"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-gold-400 text-sm mb-1">
                                5 VERIFIED DEMONSTRATIONS
                            </h3>
                            <p className="text-slate-400 text-xs">
                                Proven spiritual techniques for real-world application
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30 text-center">
                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <ShieldIcon className="w-4 h-4 text-gold-400" />
                            </div>
                            <p className="text-slate-300 text-xs font-semibold">Elite Training</p>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30 text-center">
                            <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <img 
                                    src="https://i.imgur.com/zDr7njf.png" 
                                    alt="SSF Patch"
                                    className="w-5 h-5 rounded-full"
                                />
                            </div>
                            <p className="text-slate-300 text-xs font-semibold">Official Patch</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4">
                        <button
                            onClick={handleEnroll}
                            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold-500/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        >
                            ENROLL IN SSF TRAINING
                        </button>
                        
                        <div className="text-center">
                            <p className="text-gold-300 font-bold text-sm mb-1">
                                "BE STRONG AND COURAGEOUS"
                            </p>
                            <p className="text-slate-500 text-xs">
                                Joshua 1:9 • Limited Time Enrollment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSFModal;