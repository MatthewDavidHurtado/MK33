import React, { useState, useEffect } from 'react';

const SpeakerWaveIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

interface FloatingPromptProps {
    onOpenPopup?: () => void;
}

const FloatingPrompt: React.FC<FloatingPromptProps> = ({ onOpenPopup }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show the prompt after 10 seconds
        const timer = setTimeout(() => {
            if (!isDismissed) {
                setIsVisible(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [isDismissed]);

    const handleClick = () => {
        window.location.href = '/signup';
    };

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVisible(false);
        setIsDismissed(true);
    };

    if (!isVisible || isDismissed) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm">
            <div 
                className="bg-gradient-to-br from-gold-500 via-gold-400 to-yellow-400 text-black rounded-2xl shadow-2xl border-2 border-gold-300 cursor-pointer transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
                onClick={handleClick}
            >
                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                    aria-label="Dismiss prompt"
                >
                    <CloseIcon className="w-3 h-3" />
                </button>

                <div className="p-4">
                    {/* Product Image */}
                    <div className="flex justify-center mb-3">
                        <img 
                            src="https://i.imgur.com/jqSROJQ.png" 
                            alt="Awaken The God Within Audiobook"
                            className="w-24 h-32 object-cover rounded-md shadow-lg border border-gold-300/30"
                        />
                    </div>

                    {/* Header with icon */}
                    <div className="flex items-center gap-2 mb-2">
                        <SpeakerWaveIcon className="w-6 h-6 text-black" />
                        <span className="font-bold text-sm uppercase tracking-wide">Free Audio Masterclass</span>
                    </div>

                    {/* Main content */}
                    <div className="mb-3">
                        <h3 className="font-cinzel font-bold text-lg leading-tight mb-1">
                            Awaken The God Within!
                        </h3>
                        <p className="text-sm leading-snug">
                            Unlock Intuition With Ease to Allow Your Best Life to Unfold, Effortlessly.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <div className="bg-black text-gold-400 font-bold text-xs px-3 py-2 rounded-full inline-block hover:bg-gray-900 transition-colors">
                            GET FREE ACCESS NOW →
                        </div>
                    </div>
                </div>

                {/* Pulsing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-300 animate-ping opacity-20"></div>
            </div>
        </div>
    );
};

export default FloatingPrompt;