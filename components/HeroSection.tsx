import React from 'react';

const ShieldIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.814 3.051 10.77 7.608 13.566a.75.75 0 0 0 .784 0C15.199 20.52 18.25 15.564 18.25 9.75a12.74 12.74 0 0 0-.635-4.235.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08Z" clipRule="evenodd" />
    </svg>
);

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400/15 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold-400/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 border border-gold-400/25 rounded-full"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
                    
                    {/* Left Column - Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 text-red-400 text-sm font-bold uppercase tracking-wider">
                            <ShieldIcon className="w-4 h-4" />
                            CLASSIFIED TRAINING
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            The "Instant Hotline to God" That Deleted My 
                            <span className="text-gold-400"> Lyme Disease, PTSD, and Bankruptcy</span>
                            —With AI-Enhanced Mentorship
                        </h1>

                        {/* Subheadline */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-lora leading-relaxed">
                            Most manifestation gurus fumble Divine Laws—watering truth down to hustle, grind, or shallow positivity.
                        </h2>

                        {/* Results Section */}
                        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 lg:p-8">
                            <h3 className="text-2xl font-cinzel font-bold text-gold-400 mb-6">
                                From Bedridden to 8-Figures Using Nothing More Than Putting Divine Laws in Operation
                            </h3>
                            
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Malcolm discovered the original source code behind every modern teacher—the consciousness technology so powerful it was literally banned by religious institutions for 100 years.
                            </p>

                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                After Lyme disease left him bedridden and bankrupt, conventional medicine failed, and manifestation techniques produced nothing. Malcolm found the suppressed teachings of two renegades who documented thousands of "impossible" healings using mathematical consciousness protocols.
                            </p>

                            {/* Results List */}
                            <div className="space-y-3 mb-8">
                                <h4 className="text-xl font-bold text-white mb-4">The results?</h4>
                                <div className="grid gap-3">
                                    <div className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Complete recovery from chronic Lyme, PTSD, agoraphobia, and eating disorders</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Built an 8-figure empire with zero hustle (pure consciousness work)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Achieved pro-athlete fitness levels and sculpted physique through mental protocols alone</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">Now teaches others the exact system—enhanced with AI diagnostic tools</span>
                                    </div>
                                </div>
                            </div>

                            {/* Key Points */}
                            <div className="bg-black/30 border border-gold-400/20 rounded-lg p-6 mb-8">
                                <p className="text-lg font-bold text-white mb-4">
                                    <span className="text-red-400">This isn't another course.</span> It's the classified consciousness training that should have been public 100 years ago:
                                </p>
                                <div className="space-y-2 text-slate-300">
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                                        <span>The ONLY audio version of Rawson's banned formulas on Earth</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                                        <span>Eddy's original protocols before religious sanitization</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                                        <span>German New Medicine tracker identifying exact thought-disease patterns</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                                        <span>AI trained exclusively on successful cases (not theory)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                                        <span>26-level system producing documented results in 90 days</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                                        <span>Private Discord with real-time proof posts</span>
                                    </div>
                                </div>
                            </div>

                            {/* Final Hook */}
                            <div className="text-center lg:text-left">
                                <p className="text-slate-300 text-lg mb-2">
                                    While you've been visualizing, others are deleting "impossible" conditions, manifesting specific amounts on command, and operating in completely different realities.
                                </p>
                                <p className="text-xl font-bold text-white">
                                    <span className="text-gold-400">Divine laws work.</span> The question is whether you're ready to use it.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center lg:text-left">
                            <a
                                href="https://www.sswos.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-4 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-500 hover:via-red-400 hover:to-orange-400 text-white font-bold text-xl px-8 py-6 rounded-full shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-red-400/50 hover:border-red-300"
                            >
                                <ShieldIcon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                                <div className="text-left">
                                    <div className="text-2xl font-black tracking-wide">CLAIM YOUR OPERATOR STATUS NOW</div>
                                    <div className="text-sm font-normal opacity-90 italic">"Stop Hoping. Start Demonstrating. The Formula Is Here."</div>
                                </div>
                                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </a>
                            
                            {/* Disclaimer */}
                            <p className="text-xs text-slate-500 mt-6 max-w-2xl mx-auto lg:mx-0 italic">
                                Educational program based on historical consciousness research. Not medical advice. 
                                Individual results vary. Consult professionals for health/financial decisions.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative max-w-lg mx-auto lg:max-w-none">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-red-500/20 to-orange-500/20 rounded-2xl blur-3xl transform scale-110"></div>
                            
                            {/* Image Container */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-black/50 rounded-2xl border border-gold-400/30 overflow-hidden shadow-2xl">
                                <img 
                                    src="https://i.imgur.com/4xHwLuT.jpg" 
                                    alt="Malcolm Kingley - Consciousness Technology Expert"
                                    className="w-full h-auto object-cover"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                
                                {/* Bottom Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-gold-400/30">
                                        <p className="text-gold-400 font-cinzel font-bold text-lg mb-1">
                                            Malcolm Kingley
                                        </p>
                                        <p className="text-slate-300 text-sm">
                                            Consciousness Technology Pioneer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-3 py-2 rounded-full border-2 border-white shadow-lg animate-pulse">
                                CLASSIFIED
                            </div>
                            
                            <div className="absolute -bottom-4 -left-4 bg-gold-500 text-black text-xs font-bold px-3 py-2 rounded-full border-2 border-white shadow-lg">
                                AI-ENHANCED
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default HeroSection;