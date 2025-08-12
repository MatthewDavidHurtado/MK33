
import React, { useState, useRef } from 'react';

const Footer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        const video = videoRef.current;
        if (video && video.paused) {
            video.play();
        }
    };

    return (
        <footer className="w-full pt-16 pb-12 bg-black border-t border-slate-800/50">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                
                <div className="mb-12 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-4xl font-bold text-slate-100 mb-4">
                        “Test Me in this...”
                    </h2>
                    <blockquote className="text-slate-400 text-lg italic relative px-8">
                        <span className="absolute left-0 -top-2 text-6xl text-gold-400/30 font-lora opacity-75">“</span>
                        Bring the whole tithe into the storehouse, that there may be food in My house. Test Me in this,” says the Lord of hosts, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”
                    </blockquote>
                    <p className="text-right text-slate-500 mt-2 pr-4">— Malachi 3:10</p>
                </div>

                <div className="my-12 max-w-3xl mx-auto">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative border border-slate-800">
                        <video
                            ref={videoRef}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            src="https://healvideos.s3.us-east-2.amazonaws.com/permanent_overflow_is_yours_already_-_claim_it.+(720p).mp4"
                            className="w-full h-full"
                            controls={isPlaying ? true : false}
                            preload="metadata"
                            title="A Message on Tithing from Malcolm Kingley"
                        >
                            Your browser does not support the video tag.
                        </video>
                        {!isPlaying && (
                            <div 
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/50 transition-colors duration-300 cursor-pointer"
                                onClick={handlePlayClick}
                                role="button"
                                aria-label="Play video"
                            >
                                <div className="bg-black/50 rounded-full p-4 hover:bg-gold-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="mt-4 text-gold-400 font-bold text-lg uppercase tracking-widest font-cinzel">
                                    Press Play
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div className="mb-8">
                    <p className="text-slate-400 mb-6 text-base max-w-xl mx-auto">
                        Your support helps to spread this gospel of Divine Law and sustains the work of ALLOW MINISTRIES FOUNDATION.
                    </p>
                    <a
                        href="https://allow-ministries-tithing-app-779946580524.us-west1.run.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-wider text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        aria-label="Give now to support Allow Ministries Foundation"
                    >
                        GIVE NOW
                    </a>
                </div>

                <div className="text-xs text-slate-500 space-y-4 max-w-3xl mx-auto !mt-12">
                    <p>
                        This application provides simulated healing reflections based on the principles of Divine Law, as interpreted by an AI embodying Malcolm Kingley. It is intended for inspirational and educational purposes only.
                    </p>
                    <p>
                        It is not a substitute for personal reflection, study of Divine Law, guidance from a qualified practitioner, or professional medical or psychological advice. The AI's responses, including any suggestions related to emotional conflicts (inspired by Dr. Hamer's discoveries/German New Medicine), are generated for self-reflection and are not diagnostic. They do not represent actual healing treatments or personal counsel from Malcolm Kingley or any specific authority on Divine Law or German New Medicine.
                    </p>

                    <div className="!mt-8 flex flex-col items-center">
                        <p className="font-cinzel text-3xl font-bold text-slate-200 mb-3">
                            ALLOW
                        </p>
                        <img 
                            src="https://i.imgur.com/zDr7njf.png" 
                            alt="Allow Ministries Logo"
                            className="w-24 h-auto mb-4 opacity-80"
                        />
                        <p className="font-semibold text-slate-400 text-center">
                            ALLOW MINISTRIES is a 508(C)(1)(A) - Registered in the State of Washington.
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
                        <a href="https://v3-of-master-copy-of-with-scan-biological-code-ti-759385455270.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">MK Private Client Portal</a>
                    </div>
                    
                    <p className="!mt-6">
                        © 2025 Allow Ministries. App design and concept based on Divine Law principles.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;