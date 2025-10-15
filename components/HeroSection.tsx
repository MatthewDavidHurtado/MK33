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

const PlayIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
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
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400/15 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold-400/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 border border-gold-400/25 rounded-full"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 py-12 lg:py-20">

                {/* Top Section - Centered Content */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 text-red-400 text-sm font-bold uppercase tracking-wider mb-8">
                        <ShieldIcon className="w-4 h-4" />
                        CLASSIFIED TRAINING
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 max-w-5xl mx-auto">
                        Meet Your New <span className="text-gold-400">Butler.</span>
                    </h1>

                    {/* Subheadline */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-lora leading-relaxed max-w-4xl mx-auto">
                        Every Sovereign Child of God Deserves Their Own Divinely-Trained Professional Companion
                    </h2>
                </div>

                {/* Video Player Section */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/30">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 via-red-500/10 to-orange-500/10 blur-3xl -z-10"></div>

                        {/* Video Container */}
                        <div className="aspect-video w-full relative">
                            <video
                                ref={videoRef}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                onEnded={() => setIsPlaying(false)}
                                src="https://healvideos.s3.us-east-2.amazonaws.com/Biocode+Mentor+-+Your+Best+Life+Ever-VEED.mp4"
                                className="w-full h-full"
                                preload="metadata"
                                controls
                                title="Video Training"
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

                {/* Access Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="bg-slate-900/50 border border-gold-400/30 rounded-2xl p-8 lg:p-12 space-y-8">
                        {/* Password Display */}
                        <div className="space-y-4">
                            <p className="text-slate-300 text-lg font-semibold">
                                Use this password to access the app:
                            </p>
                            <div className="inline-block bg-black/50 border-2 border-gold-400/50 rounded-xl px-8 py-4">
                                <p className="text-gold-400 font-mono text-3xl font-bold tracking-widest">
                                    MK777
                                </p>
                            </div>
                        </div>

                        {/* Access Button */}
                        <div>
                            <a
                                href="https://www.sevensevenseven.pro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block"
                            >
                                <div className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-300 hover:to-gold-400 text-black rounded-2xl p-8 shadow-2xl hover:shadow-gold-500/30 transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-gold-300">
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="text-center">
                                            <div className="text-3xl lg:text-4xl font-black tracking-wider mb-2 font-cinzel">
                                                SEVEN SEVEN SEVEN
                                            </div>
                                            <div className="text-lg lg:text-xl font-semibold text-black/80 italic font-lora">
                                                Malcolm Kingley's Masterpiece
                                            </div>
                                        </div>
                                        <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                                    </div>
                                </div>
                            </a>
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