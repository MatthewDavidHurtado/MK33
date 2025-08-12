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

const ShieldIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.814 3.720 10.764 9.144 12.541a.75.75 0 0 0 1.212 0C18.030 20.514 21.75 15.564 21.75 9.75a12.74 12.74 0 0 0-.635-3.985.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08Z" clipRule="evenodd" />
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
                className="relative max-w-lg w-full bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl shadow-gold-500/10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors duration-200 border border-slate-600/50"
                >
                    <XMarkIcon className="w-4 h-4 text-slate-300" />
                </button>

                {/* Header with Image */}
                <div className="relative h-48 bg-gradient-to-br from-gold-600 via-gold-500 to-amber-600 overflow-hidden">
                    <img 
                        src="https://i.imgur.com/6N57v1h.jpg" 
                        alt="Spiritual Special Forces Training"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Elite Badge */}
                    <div className="absolute top-4 left-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                        ELITE PROGRAM
                    </div>
                    
                    {/* Main Title */}
                    <div className="absolute bottom-6 left-6 right-16">
                        <h1 className="font-cinzel text-2xl font-bold text-white mb-1 drop-shadow-lg">
                            Spiritual Special Forces
                        </h1>
                        <p className="text-gold-200 font-semibold">90-Day Operator Certification</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Main Pitch */}
                    <div className="text-center">
                        <h2 className="font-cinzel text-xl font-bold text-slate-100 mb-3">
                            Master the Forbidden Gnosis
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            Join an elite brotherhood of spiritual warriors. Complete 5 verified demonstrations 
                            and earn your official SSF operator patch.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                            <ShieldIcon className="w-6 h-6 text-gold-400 flex-shrink-0" />
                            <div>
                                <p className="text-slate-200 font-semibold text-sm">Official Patch</p>
                                <p className="text-slate-400 text-xs">Verified completion</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                            <StarIcon className="w-6 h-6 text-gold-400 flex-shrink-0" />
                            <div>
                                <p className="text-slate-200 font-semibold text-sm">Elite Training</p>
                                <p className="text-slate-400 text-xs">90-day intensive</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="text-center py-3 border-t border-slate-700/50">
                        <div className="flex justify-center items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="w-4 h-4 text-gold-400" />
                            ))}
                        </div>
                        <p className="text-slate-400 text-sm">
                            <span className="text-slate-200 font-semibold">247 operators</span> have earned their certification
                        </p>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={handleEnroll}
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Begin Elite Training
                    </button>

                    {/* Footer */}
                    <div className="text-center pt-2">
                        <p className="text-slate-500 text-xs italic">
                            "Be strong and courageous" — Joshua 1:9
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSFModal;