
import React from 'react';

const HeartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
);

const Header: React.FC = () => {
    return (
        <header className="relative">
            {/* Give Now Button - Desktop: Top Right, Mobile: Center */}
            <div className="absolute top-0 right-0 hidden md:block">
                <a
                    href="https://allow-ministries-tithing-app-779946580524.us-west1.run.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/90 to-gold-600/90 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out backdrop-blur-sm border border-gold-400/20"
                    aria-label="Give now to support Allow Ministries Foundation"
                >
                    <HeartIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="tracking-wide">GIVE NOW</span>
                </a>
            </div>

            {/* Mobile Give Now Button - Centered above title */}
            <div className="md:hidden text-center mb-6">
                <a
                    href="https://allow-ministries-tithing-app-779946580524.us-west1.run.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/90 to-gold-600/90 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out backdrop-blur-sm border border-gold-400/20"
                    aria-label="Give now to support Allow Ministries Foundation"
                >
                    <HeartIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="tracking-wide">GIVE NOW</span>
                </a>
            </div>

            {/* Main Header Content */}
            <div className="text-center">
                <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-gold-400 tracking-wider">
                    MALCOLM KINGLEY
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-blue font-lora">
                    Keeper of the Forbidden Gnosis
                </p>
            </div>
        </header>
    );
};

export default Header;