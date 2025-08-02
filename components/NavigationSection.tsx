import React from 'react';

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .708A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
    </svg>
);

const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6a1.5 1.5 0 0 0-1.5 1.5v11.25c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5H5.25Z" clipRule="evenodd" />
    </svg>
);

const ChurchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054a8.25 8.25 0 0 0 5.58.652l3.109-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.73l-3.45.902a9.75 9.75 0 0 1-6.725-.738l-.108-.054a8.25 8.25 0 0 0-5.58-.652L2.75 15.144a.75.75 0 0 1-.916-.81 47.784 47.784 0 0 0-.005-10.337A.75.75 0 0 1 2.404 3.7l.348-.087A69.044 69.044 0 0 1 3 3.382V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    </svg>
);

const MusicalNoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V3.697a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.075Z" clipRule="evenodd" />
    </svg>
);

const AcademicCapIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
    </svg>
);

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

interface NavigationCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    gradient: string;
    badge?: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ title, description, icon, href, gradient, badge }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden bg-gradient-to-br ${gradient} rounded-xl border border-slate-700/50 hover:border-gold-400/30 p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/10`}
    >
        {badge && (
            <div className="absolute top-3 right-3 bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                {badge}
            </div>
        )}
        
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center group-hover:bg-black/30 transition-colors">
                {icon}
            </div>
            
            <div className="flex-1 min-w-0">
                <h3 className="font-cinzel text-lg font-bold text-slate-100 mb-2 group-hover:text-gold-300 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {description}
                </p>
                <div className="flex items-center text-gold-400 text-sm font-semibold group-hover:text-gold-300 transition-colors">
                    <span>Explore</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
        
        {/* Subtle hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
);

const NavigationSection: React.FC = () => {
    return (
        <section className="w-full bg-gradient-to-b from-slate-900/50 to-black/50 border-b border-slate-800/50 py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-10">
                    <h2 className="font-cinzel text-3xl font-bold text-gold-400 mb-3">
                        Spiritual Resources & Guidance
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Access Malcolm Kingley's complete collection of transformative resources for your spiritual journey
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <NavigationCard
                        title="Sacred Library"
                        description="Access Malcolm's complete collection of 5 transformative books on Divine Law and spiritual principles."
                        icon={<BookIcon className="w-6 h-6 text-gold-400" />}
                        href="https://legendary-melomakarona-3b8eea.netlify.app"
                        gradient="from-slate-900/80 via-slate-800/60 to-slate-900/80"
                        badge="FREE"
                    />
                    
                    <NavigationCard
                        title="Breakthrough Session"
                        description="Book your 15-minute precision guidance session for decisive clarity and proven action plans."
                        icon={<CalendarIcon className="w-6 h-6 text-blue-400" />}
                        href="https://calendly.com/sealintelligence/spiritual-consultation?month=2025-07"
                        gradient="from-blue-900/40 via-slate-800/60 to-blue-900/40"
                    />
                    
                    <NavigationCard
                        title="Quantum Church 24/7"
                        description="Join the continuous spiritual service and master the forbidden gnosis with advanced training."
                        icon={<ChurchIcon className="w-6 h-6 text-purple-400" />}
                        href="https://allow-quantum-church-service-24-7-759385455270.us-west1.run.app/"
                        gradient="from-purple-900/40 via-slate-800/60 to-purple-900/40"
                        badge="LIVE"
                    />
                    
                    <NavigationCard
                        title="Custom Sacred Song"
                        description="Get your personalized spiritual song - a powerful life-hack for transformation and alignment."
                        icon={<MusicalNoteIcon className="w-6 h-6 text-emerald-400" />}
                        href="https://custom-sacred-song-759385455270.us-west1.run.app/"
                        gradient="from-emerald-900/40 via-slate-800/60 to-emerald-900/40"
                        badge="NEW"
                    />
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <button 
                        onClick={() => {
                            const treatmentSection = document.getElementById('treatment-tool');
                            if (treatmentSection) {
                                treatmentSection.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'start' 
                                });
                            }
                        }}
                        className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer"
                    >
                        <AcademicCapIcon className="w-5 h-5 text-gold-400" />
                        <span className="text-slate-300 text-sm">
                            Start with the <strong className="text-gold-400">Spiritual Treatment Tool</strong> below
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NavigationSection;