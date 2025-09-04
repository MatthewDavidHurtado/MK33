import React from 'react';

const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
);

const HomeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
);

const SuccessPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Success Icon */}
                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircleIcon className="w-16 h-16 text-green-400" />
                    </div>
                </div>

                {/* Success Message */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-gold-400 mb-6">
                        SUCCESS!
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                        Your Audiobook is Ready!
                    </h2>
                    
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                        Thank you for claiming your free audiobook! Your transformative journey begins right now. 
                        Press play below to discover the forbidden consciousness technology that transforms reality itself.
                    </p>

                    {/* Audiobook Player */}
                    <div className="bg-black/30 border border-gold-400/30 rounded-xl p-6 mb-8">
                        <div className="mb-4">
                            <h3 className="text-gold-300 font-semibold text-xl font-cinzel mb-2">
                                🎧 Awaken The God Within
                            </h3>
                            <p className="text-slate-400 text-sm">
                                Your complete audiobook experience - listen now or bookmark this page to return anytime
                            </p>
                        </div>
                        
                        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl border border-slate-700">
                            <video
                                controls
                                preload="metadata"
                                className="w-full h-full"
                                style={{backgroundColor: '#000'}}
                            >
                                <source src="https://healvideos.s3.us-east-2.amazonaws.com/Awaken+The+God+Within-VEED.mp4" type="video/mp4" />
                                Your browser does not support the video tag. Please use a modern browser to listen to your audiobook.
                            </video>
                        </div>
                        
                        <div className="mt-4 text-center">
                            <p className="text-gold-300 text-sm font-semibold">
                                ⭐ Bookmark this page to access your audiobook anytime
                            </p>
                        </div>
                    </div>

                    {/* Return Home Button */}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        <HomeIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        <span className="tracking-wide">RETURN TO HOME</span>
                    </a>

                    {/* Additional Message */}
                    <div className="mt-8 pt-6 border-t border-slate-700/50">
                        <p className="text-slate-400 text-sm">
                            Continue exploring Malcolm Kingley's spiritual guidance tools and resources while you wait for your audiobook.
                        </p>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/10 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400/15 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold-400/10 rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-28 h-28 border border-gold-400/20 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;