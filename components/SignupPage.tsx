import React from 'react';

const SignupPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-gold-400 mb-4">
                        GET THIS AUDIOBOOK NOW!
                    </h1>
                    <p className="text-slate-300 text-xl mb-6">
                        Discover the forbidden consciousness technology that transforms reality itself.
                    </p>
                    
                    {/* Book Image */}
                    <div className="mb-8">
                        <img 
                            src="https://i.imgur.com/k99hIPs.png" 
                            alt="Get This Audiobook Now"
                            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        {/* Simple Contact Form */}
                        <form 
                            action="https://ebb9efec.sibforms.com/serve/MUIFAJlY3SgkoxDQKI_VJupwId32gWNo_LG8uNdLN1lsMSoKIjwKL02o2FXZLiRYEDwRscZE-ew0ADjtODYSfejKq_bskWf47PTHTrjBrv1mbHSOh407JrRT60DIKvB3vBK2NLrA11mc5RMYLs4wv-n1KTIY8wsZAN6655527WQURspcNrNscsjfI_L2CvUCyQD9vDAOTBnALgGm" 
                            method="POST"
                            className="max-w-md mx-auto"
                        >
                            <div className="mb-6">
                                <label htmlFor="FIRSTNAME" className="block text-gray-700 text-sm font-bold mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="FIRSTNAME"
                                    name="FIRSTNAME"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="Enter your first name"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="EMAIL" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="EMAIL"
                                    name="EMAIL"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    GET MY FREE AUDIOBOOK
                                </button>
                            </div>

                            <input type="hidden" name="locale" value="en" />
                        </form>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-8">
                    <a
                        href="/"
                        className="text-gold-400 hover:text-gold-300 font-semibold transition-colors duration-300"
                    >
                        ← Back to Main Site
                    </a>
                </div>
            </div>

            {/* Background Decorative Elements */}
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