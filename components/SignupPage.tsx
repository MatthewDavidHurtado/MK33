import React, { useState } from 'react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SignupPage: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch(`${SUPABASE_URL}/functions/v1/brevo-subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({ email, firstName }),
            });

            if (response.ok || response.status === 204) {
                setStatus('success');
            } else {
                const data = await response.json();
                setErrorMessage(data?.message || 'Subscription failed. Please try again.');
                setStatus('error');
            }
        } catch {
            setErrorMessage('Network error. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-8">
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-gold-400 mb-4">
                        GET THIS AUDIOBOOK NOW!
                    </h1>
                    <p className="text-slate-300 text-xl mb-6">
                        Discover the forbidden consciousness technology that transforms reality itself.
                    </p>

                    <div className="mb-8">
                        <img
                            src="https://i.imgur.com/k99hIPs.png"
                            alt="Get This Audiobook Now"
                            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg mx-auto">
                    <div className="p-8 md:p-12">
                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">You're in!</h2>
                                <p className="text-gray-600">Your subscription has been confirmed. Check your inbox shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="FIRSTNAME"
                                        className="block text-sm font-bold text-gray-700 mb-1"
                                    >
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="FIRSTNAME"
                                        type="text"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        placeholder="Your first name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="EMAIL"
                                        className="block text-sm font-bold text-gray-700 mb-1"
                                    >
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="EMAIL"
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-300 text-red-700 rounded-lg px-4 py-3 text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-200 text-black font-bold text-lg rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Subscribing...
                                        </>
                                    ) : 'SUBSCRIBE'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <a
                        href="/"
                        className="text-gold-400 hover:text-gold-300 font-semibold transition-colors duration-300"
                    >
                        Back to Main Site
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/10 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400/15 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold-400/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 border border-gold-400/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default SignupPage;
