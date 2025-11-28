import React, { useState } from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
);

const LockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V12.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25ZM8.25 6.75v3h7.5v-3a3.75 3.75 0 1 0-7.5 0Z" clipRule="evenodd" />
    </svg>
);

const EyeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
    </svg>
);

const EyeSlashIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
    </svg>
);

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>
);

interface PasswordProtectionProps {
    onUnlock: () => void;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        setTimeout(() => {
            if (password === 'MK777Q') {
                onUnlock();
            } else {
                setError('Incorrect password. Access denied.');
                setPassword('');
            }
            setIsLoading(false);
        }, 800);
    };

    const calendlyUrl = "https://calendly.com/sealintelligence/spiritual-consultation";

    return (
        <div className="min-h-screen bg-white overflow-y-auto">
            {/* Main Content Area */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center">
                {/* Marble Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 border-2 border-slate-900/10 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 border-2 border-slate-900/10 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-80 h-80 border-2 border-slate-900/10 rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-56 h-56 border-2 border-slate-900/10 rounded-full"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    {/* Founder Section */}
                    <div className="mb-12">
                        <img
                            src="https://imgur.com/jzcEePw.png"
                            alt="Malcolm Kingley"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 shadow-2xl border-4 border-gold-400/50 object-cover"
                        />
                        <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl md:text-3xl text-slate-700 mb-2 font-light italic">
                            Malcolm Kingley
                        </p>
                        <p className="text-lg text-slate-600 font-light">Founder</p>
                    </div>

                    {/* Foundation Name */}
                    <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-gold-600 to-slate-900 mb-8 tracking-tight">
                        Kingley Foundation
                    </h1>

                    {/* Divider */}
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>

                    {/* Coming Soon Message */}
                    <p className="text-2xl md:text-3xl text-slate-700 font-light mb-12 tracking-wide">
                        Coming Soon
                    </p>

                    {/* Decorative Elements */}
                    <div className="flex items-center justify-center gap-4 text-gold-500">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400"></div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 mt-20 pt-12 border-t border-gold-400/30">
                <div className="text-xs text-slate-500 space-y-4 max-w-3xl mx-auto px-4 pb-8">
                    <div className="flex flex-col items-center">
                        <p className="font-cinzel text-3xl font-bold text-slate-200 mb-3">
                            ALLOW
                        </p>
                        <img
                            src="https://i.imgur.com/zDr7njf.png"
                            alt="Allow Ministries Logo"
                            className="w-24 h-auto mb-4 opacity-80"
                        />
                        <p className="font-semibold text-slate-400 text-center">
                            KINGLEY FOUNDATION is a 508(C)(1)(A) - Registered in the State of Washington.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-x-2 gap-y-1 flex-wrap !mt-8">
                        <a href="https://thereisnothingbutgod.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">Privacy Policy</a>
                        <span className="text-slate-600">|</span>
                        <a href="https://thereisnothingbutgod.com/terms-conditions-1#fabb29ed-cba7-4721-bc63-139a4b4ec7a8" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">Terms and Conditions</a>
                        <span className="text-slate-600">|</span>
                        <a href="https://thereisnothingbutgod.com/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">Disclaimer</a>
                        <span className="text-slate-600">|</span>
                        <a href="https://thereisnothingbutgod.com/gdpr" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">GDPR</a>
                        <span className="text-slate-600">|</span>
                        <a href="https://thereisnothingbutgod.com/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">Cookie Policy</a>
                    </div>

                    <div className="flex justify-center items-center gap-x-4 gap-y-1 flex-wrap !mt-4">
                        <a href="https://app.ardrive.io/#/file/1f5d713c-d94e-4036-b6fe-faf29a2d7505/view" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">Ministry Documentation</a>
                        <span className="text-slate-600">|</span>
                        <a href="https://malcolm-s-workspace-759385455270.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">MK Workspace</a>
                        <span className="text-slate-600">|</span>
                        <a href="https://bio-code-mentor-malcolm-kingley-779946580524.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">MK Private Client Portal</a>
                    </div>

                    <p className="!mt-6 text-center">
                        © 2025 KINGLEY FOUNDATION. App design and concept based on Divine Law principles.
                    </p>

                    <div className="!mt-8 bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
                            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors duration-300"
                        >
                            <span className="text-sm font-medium text-slate-300">Important Disclaimers</span>
                            <ChevronDownIcon
                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                                    isDisclaimerExpanded ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isDisclaimerExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-4 pb-4 border-t border-slate-700/50">
                                <p className="text-xs text-slate-400 leading-relaxed mt-3">
                                    <strong className="text-slate-300">Application Disclaimer:</strong> This application provides simulated healing reflections based on the principles of Divine Law, as interpreted by an AI embodying Malcolm Kingley. It is intended for inspirational and educational purposes only.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    It is not a substitute for personal reflection, study of Divine Law, guidance from a qualified practitioner, or professional medical or psychological advice. The AI's responses, including any suggestions related to emotional conflicts (inspired by Dr. Hamer's discoveries/German New Medicine), are generated for self-reflection and are not diagnostic. They do not represent actual healing treatments or personal counsel from Malcolm Kingley or any specific authority on Divine Law or German New Medicine.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-4">
                                    <strong className="text-slate-300">General Disclaimer:</strong> All materials, features, applications, writings, and programs presented on MalcolmKingley.com are offered strictly as works of spiritual exploration and religious fiction. Nothing contained herein shall be misconstrued as medical, legal, financial, or professional advice of any kind.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    Any suggested practices, interpretations, or teachings are based solely on the personal beliefs and scriptural understandings of Malcolm Kingley and are intended only for symbolic, allegorical, and faith-based reflection.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    Participation in any offering is voluntary, and any donations made are gifts of support to our private spiritual ministry in exchange for access to fictional and faith-oriented works. Donations do not constitute purchase of services, nor do they create any guarantee, warranty, or promise of financial success, personal transformation, healing, or specific outcome.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    By engaging with this site or making a donation, you acknowledge that all content exists exclusively within the realm of spiritual belief, religious fiction, and personal interpretation of scripture, and you accept full responsibility for your own choices and outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordProtection;
