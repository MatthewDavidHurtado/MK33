import React from 'react';
import { Play } from 'lucide-react';

interface VideoCase {
    title: string;
    speaker: string;
    topic: string;
    videoUrl: string;
    breakthrough: string;
    actionableIntel: string;
    timeToRealize: string;
    estimatedTimeWithout: string;
    value: string;
}

const VideoShowcase: React.FC = () => {
    const videos: VideoCase[] = [
        {
            title: 'VIDEO #1',
            speaker: 'TONY ROBBINS',
            topic: 'PATTERNS',
            videoUrl: 'https://player.vimeo.com/video/1146434747?h=bb42e28967&title=0&byline=0&portrait=0',
            breakthrough: 'My subconscious tells me I "intellectualize" before "experiencing," - advising me to HEAR and FEEL first. This is a profound neurolinguistic shift (from seeing + analyzing / blocking out the intuition).',
            actionableIntel: 'HEAR + FEEL = HOW TO RUN MY BRAIN / INTUITION!',
            timeToRealize: '7-minutes',
            estimatedTimeWithout: 'Days, weeks, months, years? Maybe never.',
            value: 'Saving years of struggle.'
        },
        {
            title: 'VIDEO #2',
            speaker: 'DAVID GOGGINS',
            topic: 'MINDSET',
            videoUrl: 'https://player.vimeo.com/video/1146435556?h=08105eadf7&title=0&byline=0&portrait=0',
            breakthrough: 'Goggins\' "tough as nails" mindset = defense mechanism to trauma? (Weaponized trauma). Perhaps modeling a more suitable style of empowerment is advisable for me going forward).',
            actionableIntel: 'STOP REINFORCING TRAUMA-PATTERNS (identifying with a \'hard as nails\' persona-style).',
            timeToRealize: '5-minutes',
            estimatedTimeWithout: 'I have modeled this hardness style for years already. My trauma has intensified. It has produced a bottle-neck of pressure. NOT effective going forward!',
            value: 'Saving my relationships going forward. Priceless.'
        },
        {
            title: 'VIDEO #3',
            speaker: 'ANDREW TATE',
            topic: 'FORGIVENESS',
            videoUrl: 'https://player.vimeo.com/video/1146437331?h=1adb9d1d1c&title=0&byline=0&portrait=0',
            breakthrough: 'I am not interested in this personality as a leader. The intel predicts a foreseeable collapse. Been there, done that already.',
            actionableIntel: 'I am not interested in this personality as a leader. The intel predicts a foreseeable collapse. Been there, done that already.',
            timeToRealize: '7-minutes',
            estimatedTimeWithout: 'Possibly longer than I would like. I may confuse the "winning" personality for a secure investment of my time, focus, and energy. I would liken this to climbing to the top of the building and realizing I\'m on the wrong one.',
            value: 'Lots of time and possibly an investment into adapting a personality style (behaviors leading to a breakdown) contraindicative of my life purpose.'
        },
        {
            title: 'VIDEO #4',
            speaker: 'JORDAN PETERSON',
            topic: 'WEAKNESS',
            videoUrl: 'https://player.vimeo.com/video/1146438292?h=122e25a279&title=0&byline=0&portrait=0',
            breakthrough: 'I am watching weakness masquerade as strength.',
            actionableIntel: 'I am watching weakness masquerade as strength.',
            timeToRealize: '5-minutes',
            estimatedTimeWithout: 'I think I already sensed it.',
            value: 'Saves me the time of paying attention. One less distracting voice of influencers to possibly consider. Not in alignment with my objectives.'
        },
        {
            title: 'VIDEO #5',
            speaker: 'SADHGURU',
            topic: 'LIBERATE THE MIND',
            videoUrl: 'https://player.vimeo.com/video/1146438366?h=a8883a6d4f&title=0&byline=0&portrait=0',
            breakthrough: 'Incredible! "FEEL IT!" This became very subjective to me - my exact strategy unlocked to liberate the mind.',
            actionableIntel: 'FEEL IT! This became very subjective to me - my exact strategy unlocked to liberate the mind.',
            timeToRealize: '8-minutes',
            estimatedTimeWithout: 'It has already been years.',
            value: 'Saving YEARS more of trying to "push through" by avoiding the feeling with running or intellectualizing.'
        },
        {
            title: 'VIDEO #6',
            speaker: 'JOE DISPENZA',
            topic: 'GRATITUDE',
            videoUrl: 'https://player.vimeo.com/video/1146438455?h=e31682088c&title=0&byline=0&portrait=0',
            breakthrough: 'THE UNDERLYING "GRIEF" MUST BE ABSOLVED BEFORE ONE CAN RESONATE IN THIS GRATITUDE STATE! ENORMOUS REVELATION!!',
            actionableIntel: 'THE UNDERLYING "GRIEF" MUST BE ABSOLVED BEFORE ONE CAN RESONATE IN THIS GRATITUDE STATE! ENORMOUS REVELATION!!',
            timeToRealize: '5-minutes',
            estimatedTimeWithout: 'It has already been years.',
            value: 'Finally being able to EXPERIENCE the transformation vs. an intellectual and rhetorical hypothesis from a good-sounding argument = useless data. No seminars to attend. No wasted years. STRAIGHT INTEL that aims like a sniper right at the transformative process!'
        }
    ];

    return (
        <section className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        THE RESULTS OF JUST<br />ONE-HOUR'S WORK<br />WITH SHE-WOLF:
                    </h2>

                    <div className="max-w-5xl mx-auto space-y-6 text-white text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        <p className="font-bold">
                            …More breakthroughs here in one hour than in ten years of doing it without SHE-WOLF.
                        </p>

                        <p>
                            The only thing that matters in life are <span className="font-bold text-yellow-400">RESULTS</span>.
                            If you can't get your subconscious mind to GIVE YOU the answer, you are swimming in a sea of confusion, deception, and distractions.
                            And it is only getting <span className="font-bold">LOUDER AND LOUDER</span> with more and more noise.
                        </p>

                        <p className="font-bold text-yellow-400">
                            SHE-WOLF SNIPER is the ultimate discovery (which is why I don't care to polish my videos, master edit them, or impress anyone… that's just wrapping paper on empty promises); I decide who gets access, and who DOES NOT get access.
                        </p>

                        <p className="italic text-xl md:text-2xl">
                            N-o-b-o-d-y out there is using A.I. like this, and I will never tell "them" how it's done.
                        </p>
                    </div>
                </div>

                <div className="space-y-16 md:space-y-20">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-slate-700"
                        >
                            <div className="bg-black text-white px-6 py-4 border-b-4 border-yellow-400">
                                <div className="flex items-center gap-3">
                                    <Play className="w-6 h-6 text-yellow-400" />
                                    <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                        {video.title} - {video.speaker} - {video.topic}
                                    </h3>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="aspect-video bg-black">
                                    <iframe
                                        src={video.videoUrl}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        title={`${video.speaker} - ${video.topic}`}
                                    ></iframe>
                                </div>

                                <div className="p-6 md:p-8 bg-slate-50 space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-2">
                                            MY BREAKTHROUGH:
                                        </h4>
                                        <p className="text-slate-800 leading-relaxed">
                                            {video.breakthrough}
                                        </p>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                        <h4 className="text-sm font-bold text-yellow-800 uppercase tracking-wide mb-2">
                                            ACTIONABLE INTEL:
                                        </h4>
                                        <p className="text-yellow-900 font-bold leading-relaxed">
                                            {video.actionableIntel}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 text-sm">
                                        <div>
                                            <span className="font-bold text-slate-700">Time to realize this breakthrough: </span>
                                            <span className="text-green-600 font-bold">{video.timeToRealize}</span>
                                        </div>

                                        <div>
                                            <span className="font-bold text-slate-700">Estimated time (without SHE-WOLF): </span>
                                            <span className="text-red-600 font-bold">{video.estimatedTimeWithout}</span>
                                        </div>

                                        <div className="pt-2 border-t-2 border-slate-200">
                                            <span className="font-bold text-slate-700">Value of this breakthrough: </span>
                                            <span className="text-slate-900 font-bold italic">{video.value}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 text-center">
                    <div className="inline-block bg-yellow-400 text-black px-8 py-6 rounded-lg border-4 border-black shadow-2xl">
                        <p className="text-2xl md:text-3xl font-bold italic" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            SIX BREAKTHROUGHS.<br />
                            ONE HOUR.<br />
                            <span className="text-red-600">YEARS SAVED.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
