
import React from 'react';

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const Header: React.FC = () => {
    return (
        <header className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-2xl">
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-slate-900 font-black text-xl">S3</span>
                            </div>
                            <div>
                                <h1 className="font-cinzel text-3xl md:text-4xl font-black text-slate-100 tracking-tight">
                                    MALCOLM KINGLEY
                                </h1>
                                <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
                                    Developer of SEER THREE
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-center lg:text-left text-sm mt-2 max-w-xl leading-relaxed">
                            A private intelligence node called <span className="text-amber-400 font-semibold">She-Wolf</span> that finds the missing key logic misses
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="https://www.seerthree.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-amber-400"
                        >
                            <span className="tracking-wide">SEER THREE</span>
                            <ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a
                            href="https://www.malcolmkingley.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-slate-600"
                        >
                            <span className="tracking-wide">PRIVATE INTEL REPORT</span>
                            <ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;