import React from 'react';
import { CheckCircle, XCircle, Clock, TrendingUp, Target, Zap } from 'lucide-react';

const SchedulePage: React.FC = () => {
    const handleBooking = () => {
        window.location.href = 'mailto:contact@kingleyfoundation.org?subject=Session Booking Request';
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
            <div className="container mx-auto max-w-6xl px-4 py-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-gold-400 mb-4">
                        Private Strategy Session
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light">
                        Precision Clarity Through Divine Law
                    </p>
                </div>

                {/* Welcome Video */}
                <div className="mb-20 max-w-4xl mx-auto">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-gold-400/30">
                        <iframe
                            src="https://player.vimeo.com/video/1147183221?h=fc1b78a9bf&title=0&byline=0&portrait=0"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Welcome to Private Strategy Session"
                        ></iframe>
                    </div>
                </div>

                {/* What We Accomplish */}
                <div className="mb-20">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-8 text-center">
                        What We'll Accomplish Together
                    </h2>
                    <div className="bg-slate-800/50 border border-gold-400/20 rounded-lg p-8 backdrop-blur-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                                <Target className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-2">Recorded Analysis</h3>
                                    <p className="text-slate-300">Full session recording for your reference and continued study</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Zap className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-2">Detailed Protocol</h3>
                                    <p className="text-slate-300">Step-by-step instructions tailored to your specific situation</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <TrendingUp className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-2">Strategic Clarity</h3>
                                    <p className="text-slate-300">Clear, proven plan of action based on Divine Law principles</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-2">Precision Guidance</h3>
                                    <p className="text-slate-300">Direct application of Scriptural Law to your circumstances</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Value Comparison Infographic */}
                <div className="mb-20">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-4 text-center">
                        The Cost of Indecision
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
                        This is not a guarantee, but rather a clear picture of the LOST OPPORTUNITY COST when strategic guidance with precision clarity is ignored.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Without Guidance */}
                        <div className="bg-slate-800/30 border-2 border-red-900/50 rounded-lg p-6">
                            <div className="text-center mb-6">
                                <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                                <h3 className="font-cinzel text-xl font-bold text-red-400 mb-2">Without Guidance</h3>
                                <p className="text-slate-500 text-sm">Wandering in Confusion</p>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✗</span>
                                    <span>Years lost to trial and error</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✗</span>
                                    <span>Repeated patterns of failure</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✗</span>
                                    <span>Financial struggles continue</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✗</span>
                                    <span>Health deteriorates further</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✗</span>
                                    <span>Relationships remain strained</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✗</span>
                                    <span>No clear path forward</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-red-900/30 text-center">
                                <p className="text-red-400 font-bold text-lg">Opportunity Cost</p>
                                <p className="text-3xl font-bold text-red-500 mt-2">Immeasurable</p>
                            </div>
                        </div>

                        {/* Generic Advice */}
                        <div className="bg-slate-800/30 border-2 border-yellow-900/50 rounded-lg p-6">
                            <div className="text-center mb-6">
                                <div className="w-12 h-12 text-yellow-500 mx-auto mb-3 flex items-center justify-center text-2xl">⚠</div>
                                <h3 className="font-cinzel text-xl font-bold text-yellow-400 mb-2">Generic Solutions</h3>
                                <p className="text-slate-500 text-sm">Surface-Level Help</p>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">△</span>
                                    <span>One-size-fits-all approaches</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">△</span>
                                    <span>Temporary relief, no root solution</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">△</span>
                                    <span>Multiple practitioners, inconsistent results</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">△</span>
                                    <span>Thousands spent over years</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">△</span>
                                    <span>Partial understanding at best</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">△</span>
                                    <span>Slow, incremental progress</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-yellow-900/30 text-center">
                                <p className="text-yellow-400 font-bold text-lg">Typical Investment</p>
                                <p className="text-3xl font-bold text-yellow-500 mt-2">$10,000+</p>
                                <p className="text-xs text-slate-500 mt-1">Over 2-5 years</p>
                            </div>
                        </div>

                        {/* Strategic Precision */}
                        <div className="bg-gradient-to-b from-gold-400/10 to-gold-400/5 border-2 border-gold-400 rounded-lg p-6 shadow-2xl shadow-gold-400/20 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                                PRECISION PATH
                            </div>
                            <div className="text-center mb-6 mt-2">
                                <CheckCircle className="w-12 h-12 text-gold-400 mx-auto mb-3" />
                                <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-2">Strategic Guidance</h3>
                                <p className="text-slate-400 text-sm">Divine Law Applied</p>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-gold-400 mr-2">✓</span>
                                    <span>Immediate clarity on root causes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold-400 mr-2">✓</span>
                                    <span>Proven protocol tailored to you</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold-400 mr-2">✓</span>
                                    <span>Recorded session for ongoing reference</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold-400 mr-2">✓</span>
                                    <span>Years of research distilled</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold-400 mr-2">✓</span>
                                    <span>Clear action steps from day one</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold-400 mr-2">✓</span>
                                    <span>Direct application of Scriptural Law</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-gold-400/30 text-center">
                                <p className="text-gold-400 font-bold text-lg">Single Session</p>
                                <p className="text-3xl font-bold text-gold-400 mt-2">$997</p>
                                <p className="text-xs text-slate-400 mt-1">Immediate precision clarity</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="mb-20">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-12 text-center">
                        Investment Options
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Standard Session */}
                        <div className="bg-slate-800/50 border border-gold-400/30 rounded-lg p-8 hover:border-gold-400 transition-all duration-300">
                            <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-2">Standard Session</h3>
                            <p className="text-slate-400 mb-6">One Hour Strategic Consultation</p>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gold-400">$997</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-slate-300">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>1-hour session (recorded)</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Detailed analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Protocol instructions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Proven plan of action</span>
                                </li>
                            </ul>
                            <button
                                onClick={handleBooking}
                                className="w-full bg-gold-400 hover:bg-gold-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Wellbeing Session */}
                        <div className="bg-gradient-to-b from-gold-400/10 to-gold-400/5 border-2 border-gold-400 rounded-lg p-8 relative shadow-xl shadow-gold-400/20">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                                First Wellbeing Session
                            </div>
                            <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-2 mt-2">Deep Dive Session</h3>
                            <p className="text-slate-300 mb-6">Two Hours for Wellbeing Issues</p>
                            <div className="mb-2">
                                <span className="text-3xl font-bold text-slate-500 line-through">$1,994</span>
                            </div>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gold-400">$1,497</span>
                                <span className="text-slate-400 ml-2">discounted</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-slate-300">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>2-hour session (recorded)</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Required for wellbeing issues</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Comprehensive analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Detailed protocol</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Strategic clarity</span>
                                </li>
                            </ul>
                            <button
                                onClick={handleBooking}
                                className="w-full bg-gold-400 hover:bg-gold-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Retainer Package */}
                        <div className="bg-slate-800/50 border border-gold-400/30 rounded-lg p-8 hover:border-gold-400 transition-all duration-300">
                            <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-2">Retainer Package</h3>
                            <p className="text-slate-400 mb-6">Pre-Paid 10-Session Package</p>
                            <div className="mb-2">
                                <span className="text-2xl font-bold text-slate-500 line-through">$9,970</span>
                            </div>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gold-400">$8,997</span>
                                <div className="text-green-400 text-sm mt-1 font-semibold">Save $973</div>
                            </div>
                            <ul className="space-y-3 mb-8 text-slate-300">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>10 one-hour sessions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>All sessions recorded</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Like having a spiritual advisor on retainer</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Ongoing strategic guidance</span>
                                </li>
                            </ul>
                            <button
                                onClick={handleBooking}
                                className="w-full bg-gold-400 hover:bg-gold-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="max-w-4xl mx-auto bg-slate-800/30 border border-slate-700 rounded-lg p-8 text-center">
                    <p className="text-slate-400 text-sm leading-relaxed">
                        All donations are non-refundable and go towards <span className="text-gold-400 font-semibold">KINGLEY FOUNDATION 508(c)(1)(a)</span> to expand our research and development in spreading the gospel in the age of A.I. and "quantum." These sessions provide strategic guidance based on Divine Law principles. While we apply proven protocols with precision clarity, individual results depend on your application of the principles shared.
                    </p>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-block text-gold-400 hover:text-gold-300 font-semibold transition-colors duration-300"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SchedulePage;
