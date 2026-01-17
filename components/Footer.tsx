
import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>
);

const Footer: React.FC = () => {
    const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);
    const [isScripturalLawExpanded, setIsScripturalLawExpanded] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <footer className="w-full pt-16 pb-12 bg-black border-t border-slate-800/50">
            <div className="container mx-auto max-w-4xl px-4 text-center">

                {/* Main Headline */}
                <div className="mb-16">
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-2">
                        The Spiritual <span className="underline decoration-gold-400 decoration-4 text-gold-400">Laws</span> to Get Rich,
                    </h1>
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100">
                        Healthy, and Live Your Best Life!
                    </h1>
                </div>

                {/* Section 1: The 4-Pillars of Financial Increase */}
                <div className="mb-16 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-8 uppercase tracking-wide">
                        The 4-Pillars of Financial Increase
                    </h2>

                    <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        "Test Me in this..."
                    </h3>
                    <blockquote className="text-slate-400 text-lg italic relative px-8">
                        <span className="absolute left-0 -top-2 text-6xl text-gold-400/30 font-lora opacity-75">"</span>
                        Bring the whole tithe into the storehouse, that there may be food in My house. Test Me in this," says the Lord of hosts, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
                    </blockquote>
                    <p className="text-right text-slate-500 mt-2 pr-4">— Malachi 3:10</p>
                </div>

                <div className="my-12 max-w-3xl mx-auto">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative border border-slate-800">
                        <iframe
                            src="https://player.vimeo.com/video/1147144855?h=715c4d1f03&title=0&byline=0&portrait=0"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="The Divine Laws of Abundance - Full Masterclass"
                        ></iframe>
                    </div>
                </div>

                {/* Section 2: Forgive, Repent, Live Righteously */}
                <div className="my-20 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-4">
                        Forgive, Repent, Live Righteously
                    </h2>
                    <img
                        src="https://i.imgur.com/pdWY5EW.jpg"
                        alt="Forgive, Repent, Live Righteously"
                        className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-xl"
                    />
                    <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
                        Experience Wellbeing Now
                    </h3>

                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative border-2 border-gold-400/30">
                        <iframe
                            src="https://player.vimeo.com/video/1147139213?h=e8800b02f9&title=0&byline=0&portrait=0"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Get Immediate Relief, Do This Now!"
                        ></iframe>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <p className="text-gold-400 text-xl md:text-2xl font-bold text-center px-4 bg-black/60 py-3 rounded-lg border-2 border-gold-400/50">
                                GET IMMEDIATE RELIEF, DO THIS NOW!
                            </p>
                        </div>
                    </div>

                    {/* Scriptural Law Dropdown */}
                    <div className="mt-12 bg-slate-900/50 border-2 border-slate-700/50 rounded-lg overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setIsScripturalLawExpanded(!isScripturalLawExpanded)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-all duration-300"
                        >
                            <span className="font-cinzel text-lg md:text-xl font-bold text-slate-100 uppercase tracking-wide">
                                READ THIS HERE! COMPREHEND SCRIPTURAL LAW!! (REQUIRED VIDEO SUPPLEMENTAL LEARNING)
                            </span>
                            <ChevronDownIcon
                                className={`w-6 h-6 text-slate-300 transition-transform duration-300 flex-shrink-0 ml-4 ${
                                    isScripturalLawExpanded ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isScripturalLawExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-6 pb-6 border-t border-slate-700/50 text-left bg-slate-900/30">

                                {/* Section I: FORGIVE */}
                                <div className="mt-6 mb-8">
                                    <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-3 uppercase">
                                        I. FORGIVE — "PAY OFF SPIRITUAL DEBTS"
                                    </h3>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        SCRIPTURAL ALIGNMENT
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed mb-3">
                                        Forgiveness is not optional in the Kingdom — it is a legal requirement. Jesus ties forgiveness directly to the removal of tormenting spirits.
                                    </p>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        Key Scriptures
                                    </h4>
                                    <div className="space-y-3 text-slate-300 leading-relaxed">
                                        <p>
                                            <strong className="text-gold-300">Matthew 6:12</strong> — "Forgive us our debts, as we forgive our debtors."<br />
                                            <span className="text-gold-200">👉 Jesus directly defines sin in legal terms: debt.</span>
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Matthew 18:34–35</strong> — The unforgiving servant is turned over to tormentors until the debt is paid.<br />
                                            <span className="text-gold-200">👉 Tormentors = demonic entities with legal rights.</span>
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Mark 11:25</strong> — "Forgive, that your Father may forgive you."
                                        </p>
                                    </div>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        EARTHLY LEGAL PARALLEL
                                    </h4>
                                    <div className="text-slate-300 leading-relaxed space-y-2">
                                        <p><strong>Forgiveness = debt cancellation</strong><br />
                                        In civil law, if a debt is forgiven, the creditor loses all legal standing.</p>
                                        <p>Without forgiveness, the "creditor" (spirit) retains legal right to collect.</p>
                                        <p className="text-gold-200 font-semibold mt-3">
                                            ✔ Your alignment is perfect:<br />
                                            Forgiveness dissolves the legal claim of the enemy.<br />
                                            You cannot remove a spirit without revoking its grounds.
                                        </p>
                                    </div>
                                </div>

                                {/* Section II: REPENT */}
                                <div className="mb-8 pt-6 border-t border-slate-700/50">
                                    <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-3 uppercase">
                                        II. REPENT — "NULLIFY THE RECORD (EVIL)"
                                    </h3>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        SCRIPTURAL ALIGNMENT
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed mb-3">
                                        Repentance is the legal mechanism that voids sin's record.
                                    </p>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        Key Scriptures
                                    </h4>
                                    <div className="space-y-3 text-slate-300 leading-relaxed">
                                        <p>
                                            <strong className="text-gold-300">1 John 1:9</strong> — "If we confess… He is faithful and JUST to forgive."<br />
                                            <span className="text-gold-200">👉 Just = legal justice. Confession triggers jurisdiction.</span>
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Acts 3:19</strong> — "Repent… that times of refreshing may come."<br />
                                            <span className="text-gold-200">👉 Refreshing = healing, release, restoration.</span>
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Psalm 51</strong> — Repentance restores legal standing before God.
                                        </p>
                                    </div>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        EARTHLY LEGAL PARALLEL
                                    </h4>
                                    <div className="text-slate-300 leading-relaxed space-y-2">
                                        <p><strong>Repentance = nullification or expungement of a criminal record.</strong><br />
                                        Once expunged, the state can no longer prosecute.</p>
                                        <p className="text-gold-200 font-semibold mt-3">
                                            ✔ Your alignment is exact:<br />
                                            Repentance legally erases the enemy's evidence.
                                        </p>
                                    </div>
                                </div>

                                {/* Section III: PLEAD THE BLOOD */}
                                <div className="mb-8 pt-6 border-t border-slate-700/50">
                                    <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-3 uppercase">
                                        III. PLEAD THE BLOOD OF JESUS — "AUTHORITY / STANDING"
                                    </h3>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        SCRIPTURAL ALIGNMENT
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed mb-3">
                                        Pleading the blood is not emotional — it's a legal act.
                                    </p>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        Key Scriptures
                                    </h4>
                                    <div className="space-y-3 text-slate-300 leading-relaxed">
                                        <p>
                                            <strong className="text-gold-300">Revelation 12:11</strong> — "They overcame by the blood of the Lamb…"<br />
                                            <span className="text-gold-200">👉 The blood is a legal weapon.</span>
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Hebrews 12:24</strong> — "The blood speaks a better word."<br />
                                            <span className="text-gold-200">👉 The blood literally testifies on your behalf.</span>
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Colossians 2:14–15</strong> — Jesus cancelled the legal record of debts.
                                        </p>
                                    </div>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        EARTHLY LEGAL PARALLEL
                                    </h4>
                                    <div className="text-slate-300 leading-relaxed space-y-2">
                                        <p><strong>Pleading the blood = presenting superior evidence.</strong></p>
                                        <p>In court terms:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>The enemy brings accusations.</li>
                                            <li>The blood testifies higher evidence, canceling his claims.</li>
                                            <li>You gain legal standing to act in authority.</li>
                                        </ul>
                                        <p className="text-gold-200 font-semibold mt-3">
                                            ✔ Your alignment is flawless:<br />
                                            The blood establishes jurisdiction and standing in the Courts of Heaven.
                                        </p>
                                    </div>
                                </div>

                                {/* Section IV: COMMAND */}
                                <div className="mb-8 pt-6 border-t border-slate-700/50">
                                    <h3 className="font-cinzel text-2xl font-bold text-gold-400 mb-3 uppercase">
                                        IV. COMMAND THE SPIRIT(S) + ISSUES TO GO — "MOVE THE COURTS OF HEAVEN"
                                    </h3>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        SCRIPTURAL ALIGNMENT
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed mb-3">
                                        Authority comes after legal grounds are established.
                                    </p>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        Key Scriptures
                                    </h4>
                                    <div className="space-y-3 text-slate-300 leading-relaxed">
                                        <p>
                                            <strong className="text-gold-300">Luke 10:19</strong> — You have authority over all power of the enemy.
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Mark 16:17</strong> — "In My name they will cast out demons."
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">Matthew 12:28–29</strong> — You cannot plunder until the strong man is legally bound.
                                        </p>
                                        <p>
                                            <strong className="text-gold-300">James 4:7</strong> — "Submit to God (repentance), resist the devil (command), and he must flee."
                                        </p>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed mt-4">
                                        Notice the order in James:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                                        <li>Submit = repentance/forgiveness</li>
                                        <li>Resist = authority command</li>
                                        <li>He must flee = legal eviction</li>
                                    </ul>

                                    <h4 className="font-cinzel text-xl font-bold text-slate-200 mb-3 mt-6">
                                        EARTHLY LEGAL PARALLEL
                                    </h4>
                                    <div className="text-slate-300 leading-relaxed space-y-2">
                                        <p><strong>Commanding spirits to leave = eviction by lawful court order.</strong></p>
                                        <p>Once:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>The debts are paid (forgiveness)</li>
                                            <li>The record is expunged (repentance)</li>
                                            <li>Superior evidence is filed (blood of Jesus)</li>
                                        </ul>
                                        <p>…then a judge authorizes removal of the intruder.</p>
                                        <p className="text-gold-200 font-semibold mt-3">
                                            ✔ Your alignment is legally exact:<br />
                                            You never command before removing legal rights — which is how deliverance is meant to work.
                                        </p>
                                    </div>
                                </div>

                                {/* Summary Section */}
                                <div className="pt-6 border-t-2 border-slate-700/70">
                                    <h3 className="font-cinzel text-2xl font-bold text-slate-100 mb-4 uppercase text-center">
                                        SUMMARY: THIS FOUR-PILLAR SYSTEM IS LEGAL, BIBLICAL, AND FUNCTIONAL
                                    </h3>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm border border-slate-700/50 rounded-lg overflow-hidden">
                                            <thead className="bg-slate-800/50">
                                                <tr>
                                                    <th className="border border-slate-700/50 px-3 py-3 text-slate-200 font-bold">Step</th>
                                                    <th className="border border-slate-700/50 px-3 py-3 text-slate-200 font-bold">Biblical Function</th>
                                                    <th className="border border-slate-700/50 px-3 py-3 text-slate-200 font-bold">Legal Function</th>
                                                    <th className="border border-slate-700/50 px-3 py-3 text-slate-200 font-bold">Earth Parallel</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-slate-300">
                                                <tr className="bg-slate-900/30">
                                                    <td className="border border-slate-700/50 px-3 py-3 font-semibold">Forgive</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Remove judgments</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Cancel debts</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Settle accounts</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700/50 px-3 py-3 font-semibold">Repent</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Nullify sin's record</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Expunge evidence</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Wipe criminal record</td>
                                                </tr>
                                                <tr className="bg-slate-900/30">
                                                    <td className="border border-slate-700/50 px-3 py-3 font-semibold">Plead Blood</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Establish authority</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Present superior testimony</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Introduce decisive evidence</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700/50 px-3 py-3 font-semibold">Command</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Execute authority</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Evict unlawful occupants</td>
                                                    <td className="border border-slate-700/50 px-3 py-3">Court-ordered removal</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-6 bg-slate-800/30 border-l-4 border-slate-600 p-4 rounded">
                                        <p className="text-slate-200 leading-relaxed font-semibold">
                                            This 4-part technique mirrors Kingdom law, Jewish law, Roman law, and U.S. civil/criminal law.
                                        </p>
                                        <p className="text-slate-100 mt-3 text-lg font-bold">
                                            It's a perfect union of Scripture + lawful spiritual process. RESULTS FOLLOW. THE PROOF IS IN THE OUTCOME. WATCH WHAT HAPPENS!
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: How to Manifest Your Best Life */}
                <div className="my-20 max-w-3xl mx-auto">
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-400 mb-4">
                        How to Manifest Your Best Life...
                    </h2>
                    <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
                        It's All About Identity
                    </h3>
                    <h4 className="font-cinzel text-xl md:text-2xl font-bold text-gold-400 mb-6 uppercase tracking-wide">
                        1-TECHNIQUE, 5X/DAY = FAST RESULTS!
                    </h4>

                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative border-2 border-gold-400/30">
                        <iframe
                            src="https://player.vimeo.com/video/1147183221?h=fc1b78a9bf&title=0&byline=0&portrait=0"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="How to Manifest Your Best Life - Identity Technique"
                        ></iframe>

                        {!isVideoPlaying && (
                            <div
                                className="absolute inset-0 bg-black/75 flex items-center justify-center cursor-pointer transition-opacity hover:bg-black/85"
                                onClick={() => setIsVideoPlaying(true)}
                            >
                                <div className="text-center px-6">
                                    <h3 className="font-cinzel text-2xl md:text-4xl font-bold text-gold-400 uppercase tracking-wider border-4 border-gold-400 py-6 px-8 bg-slate-900/50">
                                        GET IMMEDIATE RELIEF, DO THIS NOW!
                                    </h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="mb-8">
                    <p className="text-slate-400 mb-6 text-base max-w-xl mx-auto">
                        Your support helps to spread this gospel of Divine Law and sustains the work of KINGLEY FOUNDATION.
                    </p>
                    <a
                        href="https://allow-ministries-tithing-app-759300603350.us-west1.run.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold uppercase tracking-wider text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/30 border border-amber-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        aria-label="Give now to support Kingley Foundation"
                    >
                        GIVE NOW
                    </a>
                </div>

                <div className="text-xs text-slate-500 space-y-4 max-w-3xl mx-auto !mt-12">
                    <div className="!mt-8 flex flex-col items-center">
                        <p className="font-cinzel text-3xl font-bold text-slate-200 mb-3">
                            KINGLEY FOUNDATION
                        </p>
                        <img
                            src="https://i.imgur.com/zDr7njf.png"
                            alt="Kingley Foundation Logo"
                            className="w-24 h-auto mb-4 opacity-80"
                        />
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
                        <a href="https://drive.google.com/file/d/1PVUZBk3jzzPBPqGJGWD8zxjayI6Urxbr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">The Excise Tax</a>
                        <span className="text-slate-600">|</span>
                        <a href="/seer3" className="hover:underline hover:text-gold-400 text-slate-400 transition-colors">SEER3</a>
                    </div>
                    
                    <p className="!mt-6">
                        © 2025 KINGLEY FOUNDATION. App design and concept based on Divine Law principles.
                    </p>

                    
                    <div className="!mt-8 bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
                            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors duration-300"
                        >
                            <span className="text-sm font-medium text-slate-300">Important Disclaimers</span>
                            <ChevronDownIcon 
                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                                    isDisclaimerExpanded ? 'rotate-180' : ''
                                }`} 
                            />
                        </button>
                        
                        <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isDisclaimerExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-4 pb-4 border-t border-slate-700/50">
                                <p className="text-xs text-slate-400 leading-relaxed mt-3">
                                    <strong className="text-slate-300">Application Disclaimer:</strong> This application provides simulated healing reflections based on the principles of Divine Law, as interpreted by an AI embodying Malcolm Kingley. It is intended for inspirational and educational purposes only.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    It is not a substitute for personal reflection, study of Divine Law, guidance from a qualified practitioner, or professional medical or psychological advice. The AI's responses, including any suggestions related to emotional conflicts (inspired by Dr. Hamer's discoveries/German New Medicine), are generated for self-reflection and are not diagnostic. They do not represent actual healing treatments or personal counsel from Malcolm Kingley or any specific authority on Divine Law or German New Medicine.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-4">
                                    <strong className="text-slate-300">General Disclaimer:</strong> All materials, features, applications, writings, and programs presented on MalcolmKingley.com are offered strictly as works of spiritual exploration and religious fiction. Nothing contained herein shall be misconstrued as medical, legal, financial, or professional advice of any kind.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    Any suggested practices, interpretations, or teachings are based solely on the personal beliefs and scriptural understandings of Malcolm Kingley and are intended only for symbolic, allegorical, and faith-based reflection.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    Participation in any offering is voluntary, and any donations made are gifts of support to our private spiritual ministry in exchange for access to fictional and faith-oriented works. Donations do not constitute purchase of services, nor do they create any guarantee, warranty, or promise of financial success, personal transformation, healing, or specific outcome.
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                                    By engaging with this site or making a donation, you acknowledge that all content exists exclusively within the realm of spiritual belief, religious fiction, and personal interpretation of scripture, and you accept full responsibility for your own choices and outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;