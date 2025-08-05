import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

const EmailOptinPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // Show after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsSubmitting(true);
        // Add your email submission logic here
        console.log('Email submitted:', email);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsVisible(false);
        }, 1000);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 border border-slate-600 rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-10 h-10 text-amber-200" />
                    </div>

                    <h2 className="text-2xl font-bold text-amber-400 mb-4 font-cinzel tracking-wide">
                        GET ON MALCOLM'S LIST!
                    </h2>

                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                            alt="Malcolm"
                            className="w-20 h-20 rounded-full object-cover border-2 border-amber-400"
                        />
                        <div className="text-left">
                            <p className="text-lg font-semibold text-slate-300">
                                Receive Priority Access to New Videos, Tools & Trainings.
                            </p>
                        </div>
                    </div>

                    <p className="text-xl font-bold text-gold-400 mb-6 font-cinzel tracking-wide">
                        SIGN UP NOW
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Joining...' : 'JOIN THE LIST'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmailOptinPopup;