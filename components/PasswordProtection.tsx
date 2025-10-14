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
            if (password === 'GIVE_777!') {
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
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-y-auto">
            {/* Background Pattern */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400/15 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold-400/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 border border-gold-400/25 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-gold-400 mb-6 leading-tight">
                        How I Went from Bedridden and Broke to Building a 7-Figure Purpose-Driven Business in Record Time
                    </h1>
                    <p className="text-2xl md:text-3xl text-slate-200 font-light mb-8">
                        Discover the exact spiritual and mental framework I used—no connections, no outside backing—just forbidden knowledge!
                    </p>

                    {/* Video Container */}
                    <div className="max-w-5xl mx-auto mb-6">
                        <div className="relative bg-slate-900/50 border-2 border-gold-400/30 rounded-2xl p-2 shadow-2xl hover:border-gold-400/50 transition-all duration-300">
                            <div className="relative" style={{ paddingBottom: '56.25%' }}>
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                    style={{ objectFit: 'contain' }}
                                >
                                    <source src="https://healvideos.s3.us-east-2.amazonaws.com/Malcolm+Kingley+One-On-One+VIP-VEED.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
                </div>

                {/* Malcolm's Story */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-6">
                                One-On-One Mentorship With Malcolm Kingley
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                From bedridden and bankrupt with Lyme disease to training like a pro athlete and manifesting a seven-figure online empire in just a few short years.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Malcolm discovered the forbidden teachings that shattered his limitations. Now, he's offering to guide you through the same transformation.
                            </p>
                            <div className="bg-gold-500/10 border border-gold-400/30 rounded-xl p-6">
                                <p className="text-gold-400 font-semibold text-xl mb-2">90-Day Transformation Clinic</p>
                                <p className="text-slate-400">
                                    Direct spiritual oversight combined with cutting-edge AI tools designed to accelerate your journey to mastery.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="https://i.imgur.com/pidU9X4.jpg"
                                alt="Malcolm Kingley"
                                className="w-full rounded-2xl shadow-2xl border border-gold-400/20"
                            />
                        </div>
                    </div>
                </div>

                {/* Your Transformation Arsenal */}
                <div className="mb-16">
                    <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center text-gold-400 mb-4">
                        Your Transformation Arsenal
                    </h2>
                    <p className="text-center text-slate-400 text-xl mb-12 max-w-3xl mx-auto">
                        Malcolm invested months building these proprietary tools as companions to his spiritual oversight process.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* BIOCODE MENTOR */}
                        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://i.imgur.com/tRvgmuR.png"
                                    alt="BIOCODE MENTOR"
                                    className="w-full h-48 object-cover rounded-xl"
                                />
                            </div>
                            <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-4">
                                BIOCODE MENTOR
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                The world's only super-AI using German New Medicine and proprietary models to pinpoint with laser-accuracy the triggers that keep you stuck.
                            </p>
                        </div>

                        {/* SSWOS */}
                        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://i.imgur.com/YotSVTH.png"
                                    alt="Spiritual Special Warfare Operator School"
                                    className="w-full h-48 object-cover rounded-xl"
                                />
                            </div>
                            <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-4">
                                Spiritual Special Warfare Operator School
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Plug-and-play foundation to learn the forbidden knowledge of F.L. Rawson, Mary Baker Eddy, and Joel Goldsmith—transcending linear learning into daily practice and quantum shifts through DOING.
                            </p>
                        </div>

                        {/* 24/7 Quantum Church */}
                        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300 md:col-span-2">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1">
                                    <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-4">
                                        24/7 Quantum Church
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        Ultimate modals for working with Biblical wisdom in conjunction with advanced AI models that collaborate to do one thing: get you to spiritual mastery level as fast as possible.
                                    </p>
                                    <div className="flex items-start gap-3 mb-3">
                                        <CheckIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                        <p className="text-slate-400">Biblical wisdom meets cutting-edge AI</p>
                                    </div>
                                    <div className="flex items-start gap-3 mb-3">
                                        <CheckIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                        <p className="text-slate-400">24/7 access to spiritual guidance</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                        <p className="text-slate-400">Accelerated path to mastery</p>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <img
                                        src="https://i.imgur.com/XrR5SQ8.png"
                                        alt="24/7 Quantum Church"
                                        className="w-full h-64 object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-gold-500/20 via-gold-600/10 to-transparent border border-gold-400/50 rounded-3xl p-8 md:p-12 mb-12 text-center">
                    <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold-400 mb-6">
                        Are You Ready?
                    </h2>
                    <p className="text-slate-200 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        This isn't for everyone. Malcolm personally oversees every transformation. The question is: Do you qualify?
                    </p>
                    <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg px-12 py-5 rounded-xl shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        SCHEDULE YOUR 15-MINUTE QUALIFICATION INTERVIEW
                    </a>
                    <p className="text-slate-400 mt-6 text-sm">
                        Limited spots available. Serious applicants only.
                    </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-12">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                    <div className="flex items-center gap-2">
                        <LockIcon className="w-5 h-5 text-gold-400" />
                        <span className="text-slate-400 text-sm font-medium">MEMBER ACCESS</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                </div>

                {/* Password Form */}
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-2">
                            Existing Members
                        </h3>
                        <p className="text-slate-400">
                            Enter your password to access the platform
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 pr-12 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                                        placeholder="Enter password..."
                                        required
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm text-center">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading || !password.trim()}
                                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 disabled:from-slate-600 disabled:to-slate-700 text-black disabled:text-slate-400 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1 disabled:transform-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        <span>Verifying...</span>
                                    </div>
                                ) : (
                                    'UNLOCK ACCESS'
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-20 pt-12 border-t border-slate-700/50">
                    <div className="text-xs text-slate-500 space-y-4 max-w-3xl mx-auto">
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
        </div>
    );
};

export default PasswordProtection;
