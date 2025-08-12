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
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
        >
            <div 
                className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    type="button"
                >
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                </button>

                {/* Hero Image */}
                <div className="relative h-48 bg-gradient-to-br from-amber-400 to-orange-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <img 
                        src="https://i.imgur.com/6N57v1h.jpg" 
                        alt="Five Verified Spiritual Demonstrations"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-bold text-gray-800 tracking-wide">ELITE TRAINING</span>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-16">
                        <h1 className="text-white font-bold text-xl leading-tight drop-shadow-lg">
                            Spiritual Special Forces
                        </h1>
                        <p className="text-white/90 text-sm font-medium">90-Day Operator Program</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h2 className="text-gray-900 font-bold text-lg mb-2">
                            Master the Forbidden Gnosis
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Intensive spiritual combat training with 5 verified demonstrations. 
                            Earn your official SSF patch and join an elite community.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <img 
                                    src="https://i.imgur.com/zDr7njf.png" 
                                    alt="SSF Patch"
                                    className="w-6 h-6 rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-gray-900 font-semibold text-sm">Official Certification</p>
                                <p className="text-gray-500 text-xs">Verified completion patch</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-amber-600 font-bold text-sm">90 Days</p>
                            <p className="text-gray-500 text-xs">Training Period</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={handleEnroll}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Begin Training
                    </button>

                    {/* Footer */}
                    <div className="text-center pt-2">
                        <p className="text-gray-400 text-xs">
                            "Be strong and courageous" — Joshua 1:9
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSFModal;