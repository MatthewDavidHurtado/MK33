import React, { useState, useEffect } from 'react';

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const EmailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
);

const EmailOptinPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup
        const hasSeenPopup = localStorage.getItem('mk-email-popup-seen');
        
        if (!hasSeenPopup) {
            // Show popup after 10 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Remember that user has seen the popup
        localStorage.setItem('mk-email-popup-seen', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-gold-400/30 shadow-2xl shadow-gold-500/20 max-w-md w-full relative animate-in zoom-in-95 duration-300">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors p-1 z-10"
                    aria-label="Close email signup"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-400/20">
                            <EmailIcon className="w-8 h-8 text-gold-400" />
                        </div>
                    </div>
                    <h2 className="font-cinzel text-2xl font-bold text-gold-400 mb-4">
                        Receive My Private Emails
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        Get exclusive spiritual insights, advanced teachings, and personal guidance delivered directly to your inbox.
                    </p>

                    {/* Benefits list */}
                    <div className="text-left mb-8 space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">Advanced Divine Law teachings</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">Exclusive spiritual insights</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">Personal guidance from Malcolm</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">Early access to new resources</span>
                        </div>
                    </div>

                    {/* MailerLite Form */}
                    <div className="mb-6">
                        <div className="ml-embedded" data-form="lqwaKr"></div>
                    </div>

                    <p className="text-xs text-slate-500 mt-4">
                        Join thousands receiving transformative spiritual guidance
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmailOptinPopup;