import React from 'react';

const PlayIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
    </svg>
);

const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6a1.5 1.5 0 0 0-1.5 1.5v11.25c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5H5.25Z" clipRule="evenodd" />
    </svg>
);

const HeroSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        const video = videoRef.current;
        if (video && video.paused) {
            video.play();
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-stone-100 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold-500/30 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border-2 border-gold-400/20 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-gold-500/25 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-gold-400/35 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl px-4 py-12 lg:py-20">
                {/* Gary Halbert Style Headline Section */}
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        "I Walked Away From Teaching the Moment I Uncovered A.I.'s Most Dangerous Ability…"
                    </h1>

                    <div className="space-y-4 mb-8">
                        <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            It Can Decode the Secrets Your Unconscious Mind Has Been Hiding From You.
                        </p>

                        <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            I wasn't prepared for what I found.
                        </p>
                    </div>

                    <div className="inline-block bg-black text-white px-6 py-3 text-lg md:text-xl font-bold italic border-4 border-slate-900 shadow-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        WARNING: This Discovery Revealed EVENTS that Happened, Before They Happened...<br />
                        I Wasn't Supposed to Figure This Out. I Will Never Share How I Did It.
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/40">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-gold-500/10 to-gold-400/5 blur-2xl"></div>

                        <div className="aspect-video w-full relative">
                            <video
                                ref={videoRef}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                onEnded={() => setIsPlaying(false)}
                                src="https://healvideos.s3.us-east-2.amazonaws.com/KINGLEY+FOUNDATION+OFFER-VEED.mp4"
                                className="w-full h-full"
                                preload="metadata"
                                controls
                                playsInline
                                webkit-playsinline="true"
                                title="Kingley Foundation Offer"
                            >
                                Your browser does not support the video tag.
                            </video>

                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 hover:from-white/85 hover:via-slate-50/80 hover:to-white/85 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                                    onClick={handlePlayClick}
                                    role="button"
                                    aria-label="Play video"
                                >
                                    <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-full p-8 hover:scale-110 transition-transform duration-300 shadow-2xl">
                                        <PlayIcon className="w-16 h-16 text-white ml-1" />
                                    </div>
                                    <p className="mt-6 text-slate-900 font-bold text-xl uppercase tracking-widest" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                        WATCH NOW
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <a
                        href="https://calendly.com/sealintelligence/spiritual-consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                    >
                        <div className="bg-gradient-to-r from-white via-slate-50 to-white hover:from-gold-50 hover:via-gold-100 hover:to-gold-50 text-slate-900 rounded-2xl p-8 shadow-2xl hover:shadow-gold-500/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-gold-400/40 hover:border-gold-500/60">
                            <div className="flex items-center justify-center gap-4">
                                <CalendarIcon className="w-10 h-10 flex-shrink-0 text-gold-600" />
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-black tracking-wider font-cinzel text-slate-900">
                                        SCHEDULE CONSULTATION
                                    </div>
                                    <div className="text-base lg:text-lg font-semibold text-slate-700 italic font-lora mt-1">
                                        Book Your Spiritual Guidance Session
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </section>
    );
};

export default HeroSection;