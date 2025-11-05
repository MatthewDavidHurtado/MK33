import React, { useState, useRef } from 'react';

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>
);

const PlayIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
    </svg>
);

const Step: React.FC<{ number: number; title: string; children: React.ReactNode; isOptional?: boolean }> = ({ number, title, children, isOptional }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold-500/10 border border-gold-400/20 text-gold-400 font-bold rounded-full font-sans">
            {number}
        </div>
        <div className="font-lora">
            <h3 className="font-semibold text-slate-100 text-lg">
                {title}
                {isOptional && <span className="text-xs text-slate-500 font-normal ml-2">(Optional)</span>}
            </h3>
            <p className="text-slate-400 mt-1">
                {children}
            </p>
        </div>
    </div>
);

const HowToUse: React.FC = () => {
    const [isStepsExpanded, setIsStepsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        const video = videoRef.current;
        if (video && video.paused) {
            video.play();
        }
    };

    return (
        <div className="mb-12 bg-slate-900/30 border border-slate-800/50 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 sm:p-8 pb-4">
                <h2 className="text-3xl font-cinzel text-center text-gold-400 mb-6">How It Works</h2>
                
                {/* Video Section */}
                <div className="mb-8 max-w-4xl mx-auto">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative border border-slate-800">
                        <video
                            ref={videoRef}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            src="https://healvideos.s3.us-east-2.amazonaws.com/MK+App-VEED.mp4"
                            controls
                            className="w-full h-full object-cover"
                            preload="metadata"
                            title="How to Use Malcolm Kingley's Spiritual Guidance App"
                        >
                            Your browser does not support the video tag.
                        </video>
                        {!isPlaying && (
                            <div 
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 cursor-pointer"
                                onClick={handlePlayClick}
                                role="button"
                                aria-label="Play instructional video"
                            >
                                <div className="bg-black/60 rounded-full p-6 hover:bg-gold-500/20 transition-colors duration-300 group">
                                    <PlayIcon className="w-16 h-16 text-white group-hover:text-gold-400 transition-colors duration-300" />
                                </div>
                                <p className="mt-4 text-white font-bold text-lg uppercase tracking-widest font-cinzel">
                                    Watch Tutorial
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowToUse;