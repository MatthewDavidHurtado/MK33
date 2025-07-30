import React, { useState, useEffect } from 'react';

const ExclamationTriangleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const SafariWarning: React.FC = () => {
    const [isSafari, setIsSafari] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Detect Safari browser
        const userAgent = navigator.userAgent.toLowerCase();
        const isSafariBrowser = userAgent.includes('safari') && !userAgent.includes('chrome') && !userAgent.includes('chromium');
        setIsSafari(isSafariBrowser);
    }, []);

    if (!isSafari || !isVisible) {
        return null;
    }

    return (
        <div className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white shadow-lg relative z-50">
            <div className="container mx-auto max-w-6xl px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <ExclamationTriangleIcon className="w-6 h-6 flex-shrink-0" />
                        <div className="text-sm md:text-base">
                            <span className="font-bold">Safari Browser Detected:</span> This spiritual guidance tool works best on <strong>Google Chrome</strong> for optimal performance and functionality.
                        </div>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Dismiss Safari warning"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SafariWarning;