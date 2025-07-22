import React from 'react';

const HeartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
);

const TitheBanner: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-lg">
            <div className="container mx-auto max-w-6xl px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left side - Message */}
                    <div className="text-center md:text-left">
                        <h2 className="font-cinzel text-lg md:text-xl font-bold text-slate-100 mb-1">
                            The Most Powerful Law of Prosperity:
                        </h2>
                        <p className="text-gold-400 font-semibold text-base md:text-lg font-lora">
                            The Tithe
                        </p>
                    </div>
                    
                    {/* Right side - Button */}
                    <div className="flex-shrink-0">
                        <a
                            href="https://allow-ministries-tithing-app-779946580524.us-west1.run.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            aria-label="Give now to support Allow Ministries Foundation"
                        >
                            <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            <span className="tracking-wide">GIVE NOW</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitheBanner;