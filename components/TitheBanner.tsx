import React from 'react';

const HeartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
);

const TitheBanner: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 shadow-lg relative z-50">
            <div className="container mx-auto max-w-7xl px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    <p className="text-slate-300 text-sm md:text-base font-lora">
                        Ready to Put God First in Your Finances?
                    </p>
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <a
                            href="https://allow-ministries-tithing-app-759300603350.us-west1.run.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-amber-400"
                            aria-label="Give now to support Kingley Foundation"
                        >
                            <HeartIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                            <span className="tracking-wide">GIVE NOW</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitheBanner;