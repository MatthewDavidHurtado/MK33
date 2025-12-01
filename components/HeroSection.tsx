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
        <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400/15 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold-400/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 border border-gold-400/25 rounded-full"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl px-4 py-12 lg:py-20">
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 via-gold-500/10 to-gold-400/10 blur-3xl -z-10"></div>

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
                                title="Kingley Foundation Offer"
                            >
                                Your browser does not support the video tag.
                            </video>

                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/90 via-black/80 to-slate-900/90 hover:from-slate-900/70 hover:via-black/60 hover:to-slate-900/70 transition-all duration-300 cursor-pointer"
                                    onClick={handlePlayClick}
                                    role="button"
                                    aria-label="Play video"
                                >
                                    <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-full p-8 hover:scale-110 transition-transform duration-300 shadow-2xl">
                                        <PlayIcon className="w-16 h-16 text-black ml-1" />
                                    </div>
                                    <p className="mt-6 text-gold-400 font-bold text-xl uppercase tracking-widest font-cinzel">
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
                        <div className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-300 hover:to-gold-400 text-black rounded-2xl p-8 shadow-2xl hover:shadow-gold-500/30 transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-gold-300">
                            <div className="flex items-center justify-center gap-4">
                                <CalendarIcon className="w-10 h-10 flex-shrink-0" />
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-black tracking-wider font-cinzel">
                                        SCHEDULE CONSULTATION
                                    </div>
                                    <div className="text-base lg:text-lg font-semibold text-black/80 italic font-lora mt-1">
                                        Book Your Spiritual Guidance Session
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default HeroSection;