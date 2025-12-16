
import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>
);

const Footer: React.FC = () => {
    const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

    return (
        <footer className="w-full pt-16 pb-12 bg-black border-t border-slate-800/50">
            <div className="container mx-auto max-w-4xl px-4 text-center">

                {/* Main Headline */}
                <div className="mb-16">
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-2">
                        The Spiritual <span className="underline decoration-gold-400 decoration-4 text-gold-400">Laws</span> to Get Rich,
                    </h1>
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100">
                        Healthy, and Live Your Best Life!
                    </h1>
                </div>

                {/* Section 1: The 4-Pillars of Financial Increase */}
                <div className="mb-16 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-8 uppercase tracking-wide">
                        The 4-Pillars of Financial Increase
                    </h2>

                    <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        "Test Me in this..."
                    </h3>
                    <blockquote className="text-slate-400 text-lg italic relative px-8">
                        <span className="absolute left-0 -top-2 text-6xl text-gold-400/30 font-lora opacity-75">"</span>
                        Bring the whole tithe into the storehouse, that there may be food in My house. Test Me in this," says the Lord of hosts, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
                    </blockquote>
                    <p className="text-right text-slate-500 mt-2 pr-4">— Malachi 3:10</p>
                </div>

                <div className="my-12 max-w-3xl mx-auto">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative border border-slate-800">
                        <iframe
                            src="https://rumble.com/embed/v72rzbw/"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                            allowFullScreen
                            title="The Divine Laws of Abundance - Full Masterclass"
                        ></iframe>
                    </div>
                </div>

                {/* Section 2: Forgive, Repent, Live Righteously */}
                <div className="my-20 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-4">
                        Forgive, Repent, Live Righteously
                    </h2>
                    <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
                        Experience Wellbeing Now
                    </h3>

                    <div className="aspect-video w-full bg-slate-900 rounded-lg overflow-hidden shadow-xl relative border-2 border-gold-400/30 flex items-center justify-center">
                        <div className="text-center">
                            <div className="bg-gold-400/10 rounded-full p-6 inline-block mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-gold-400">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-slate-400 text-lg font-semibold">FREE RESOURCES</p>
                        </div>
                    </div>
                </div>

                {/* Section 3: How to Manifest Your Best Life */}
                <div className="my-20 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-4">
                        How to Manifest Your Best Life...
                    </h2>
                    <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
                        It's All About Identity
                    </h3>

                    <div className="aspect-video w-full bg-slate-900 rounded-lg overflow-hidden shadow-xl relative border-2 border-gold-400/30 flex items-center justify-center">
                        <div className="text-center">
                            <div className="bg-gold-400/10 rounded-full p-6 inline-block mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-gold-400">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-slate-400 text-lg font-semibold">FREE RESOURCES</p>
                        </div>
                    </div>
                </div>


                <div className="mb-8">
                    <p className="text-slate-400 mb-6 text-base max-w-xl mx-auto">
                        Your support helps to spread this gospel of Divine Law and sustains the work of KINGLEY FOUNDATION.
                    </p>
                    <a
                        href="https://allow-ministries-tithing-app-759300603350.us-west1.run.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-wider text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        aria-label="Give now to support Kingley Foundation"
                    >
                        GIVE NOW
                    </a>
                </div>

                <div className="text-xs text-slate-500 space-y-4 max-w-3xl mx-auto !mt-12">
                    <div className="!mt-8 flex flex-col items-center">
                        <p className="font-cinzel text-3xl font-bold text-slate-200 mb-3">
                            KINGLEY FOUNDATION
                        </p>
                        <img
                            src="https://i.imgur.com/zDr7njf.png"
                            alt="Kingley Foundation Logo"
                            className="w-24 h-auto mb-4 opacity-80"
                        />
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
                        <a href="https://drive.google.com/file/d/1PVUZBk3jzzPBPqGJGWD8zxjayI6Urxbr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">The Excise Tax: Fraud Vitiates Everything</a>
                    </div>
                    
                    <p className="!mt-6">
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
        </footer>
    );
};

export default Footer;