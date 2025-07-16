
import React from 'react';

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
    return (
        <div className="mb-12 bg-slate-900/30 border border-slate-800/50 rounded-xl p-6 sm:p-8">
            <h2 className="text-3xl font-cinzel text-center text-gold-400 mb-8">How It Works</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
                <Step number={1} title="Receive Your Spiritual Treatment">
                    Describe the challenge or situation you are facing. You will receive a custom-crafted spiritual treatment designed to dissolve the illusion of error and reveal the underlying spiritual Truth.
                </Step>
                <Step number={2} title="Analyze the Biological Program">
                     For physical conditions, you can then proceed to the biological analysis. This provides deeper insight into the specific mental conflict at the root of the ailment, based on the principle that all manifestation begins in Mind.
                </Step>
                <Step number={3} title="Access Precision Guidance">
                    For direct, ultra-custom support, schedule a one-on-one breakthrough session with Malcolm Kingley for precision guidance tailored to your unique situation.
                </Step>
                <Step number={4} title="Invoke the Law of Increase" isOptional={true}>
                    To activate the divine law of abundance and create a powerful expectation for your breakthrough, you may plant your tithe or faith-seed. The video in the footer provides further illumination on this principle.
                </Step>
            </div>
        </div>
    );
};

export default HowToUse;
