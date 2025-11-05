
import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { generateTreatmentStream, generateGnmAnalysisStream } from './services/geminiService';
import PasswordProtection from './components/PasswordProtection';
import TitheBanner from './components/TitheBanner';
import SafariWarning from './components/SafariWarning';
import NavigationSection from './components/NavigationSection';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionForm from './components/QuestionForm';
import TreatmentResponse from './components/TreatmentResponse';
import BiologicalPrograms from './components/BiologicalPrograms';
import ConsultationCTA from './components/ConsultationCTA';
import HowToUse from './components/HowToUse';
import DivineLibraryCTA from './components/DivineLibraryCTA';
import HeroSection from './components/HeroSection';
import SuccessPage from './components/SuccessPage';
import SignupPage from './components/SignupPage';
import FloatingPrompt from './components/FloatingPrompt';

const MainApp: React.FC = () => {
    // Password protection state with expiration check
    const [isUnlocked, setIsUnlocked] = useState(() => {
        const unlockTime = localStorage.getItem('unlockTime');
        if (unlockTime) {
            const elapsed = Date.now() - parseInt(unlockTime, 10);
            const twentyFourHours = 24 * 60 * 60 * 1000;
            if (elapsed < twentyFourHours) {
                return true;
            } else {
                localStorage.removeItem('unlockTime');
            }
        }
        return false;
    });
    
    // State for Spiritual Treatment
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [submittedQuestion, setSubmittedQuestion] = useState<string>('');
    const [streamedResponse, setStreamedResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [hasResponded, setHasResponded] = useState<boolean>(false);

    // State for Biological Programs Analysis
    const [gnmVisible, setGnmVisible] = useState<boolean>(false);
    const [gnmStep, setGnmStep] = useState<number>(0); // 0: initial, 1: handedness, 2: symptoms, 3: loading, 4: response
    const [handDominance, setHandDominance] = useState<'Right' | 'Left' | null>(null);
    const [symptoms, setSymptoms] = useState<string>('');
    const [gnmResponse, setGnmResponse] = useState<string>('');
    const [isGnmLoading, setIsGnmLoading] = useState<boolean>(false);
    const [gnmError, setGnmError] = useState<string | null>(null);

    const handleFormSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const userQuestion = currentQuestion.trim();
        if (!userQuestion || isLoading) return;

        setIsLoading(true);
        setError(null);
        setStreamedResponse('');
        setSubmittedQuestion(userQuestion);
        setHasResponded(true);
        setGnmVisible(true); // Show the GNM section after first response

        try {
            const stream = await generateTreatmentStream(userQuestion);
            for await (const chunk of stream) {
                setStreamedResponse(prev => prev + chunk);
            }
        } catch (err) {
            console.error(err);
            setError('There was an issue connecting to the spiritual source. Please take a moment of peace and try again.');
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, currentQuestion]);
    
    const handleGnmSubmit = useCallback(async () => {
        if (!symptoms.trim() || !handDominance || isGnmLoading) return;

        setIsGnmLoading(true);
        setGnmError(null);
        setGnmResponse('');
        setGnmStep(3); // Set to loading step

        try {
            const stream = await generateGnmAnalysisStream(symptoms, handDominance);
            for await (const chunk of stream) {
                setGnmResponse(prev => prev + chunk);
            }
            setGnmStep(4); // Move to response step
        } catch (err) {
            console.error(err);
            setGnmError('There was an issue processing the analysis. Please try again.');
            setGnmStep(2); // Go back to symptom input on error
        } finally {
            setIsGnmLoading(false);
        }
    }, [symptoms, handDominance, isGnmLoading]);

    const resetGnm = useCallback(() => {
        setGnmStep(0);
        setHandDominance(null);
        setSymptoms('');
        setGnmResponse('');
        setIsGnmLoading(false);
        setGnmError(null);
    }, []);

    const handleReset = useCallback(() => {
        setCurrentQuestion('');
        setSubmittedQuestion('');
        setStreamedResponse('');
        setHasResponded(false);
        setError(null);
        setIsLoading(false);
        setGnmVisible(false);
        resetGnm();
    }, [resetGnm]);

    // If not unlocked, show password protection with limited access
    if (!isUnlocked) {
        return (
            <div className="flex flex-col min-h-screen">
                <SafariWarning />
                {/* Simplified banner for password protection screen */}
                <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-lg relative z-50">
                    <div className="container mx-auto max-w-6xl px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Left side - Message */}
                            <div className="text-center md:text-left">
                                <h2 className="font-cinzel text-lg md:text-xl font-bold text-slate-100 mb-1">
                                    The Most Powerful Law of Prosperity:
                                </h2>
                                <p className="text-gold-400 font-semibold text-base md:text-lg font-lora">
                                    The Tithe and Faith-Seed Sowing Law
                                </p>
                            </div>

                            {/* Right side - Buttons */}
                            <div className="flex-shrink-0 flex items-center gap-3 relative z-50">
                                <a
                                    href="https://www.biocodementor.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                >
                                    <span className="tracking-wide">TRANSFORM NOW!</span>
                                </a>
                                <a
                                    href="https://allow-ministries-tithing-app-759300603350.us-west1.run.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                    <span className="tracking-wide">GIVE NOW</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <PasswordProtection onUnlock={() => {
                    setIsUnlocked(true);
                    localStorage.setItem('unlockTime', Date.now().toString());
                }} />
                <FloatingPrompt />
            </div>
        );
    }

    const MainContent = () => (
        <div className="flex flex-col min-h-screen">
            <SafariWarning />
            <TitheBanner />
            <HeroSection />
            <NavigationSection />
            <main className="flex-grow container mx-auto max-w-4xl px-4 py-8 md:py-16">
                <Header />
                <section id="treatment-tool" className="mt-10">
                    <HowToUse />
                    <p className="text-center text-slate-400 mb-6 text-lg">
                        Describe any challenge or discord you are facing.<br />This is a space for quiet reflection and spiritual realignment.
                    </p>
                    <QuestionForm 
                        onSubmit={handleFormSubmit} 
                        isLoading={isLoading}
                        question={currentQuestion}
                        onQuestionChange={setCurrentQuestion} 
                    />
                    {error && (
                        <div className="mt-8 text-center text-red-400 bg-red-900/50 border border-red-500/30 p-4 rounded-lg">
                            {error}
                        </div>
                    )}
                    {hasResponded && (
                        <TreatmentResponse 
                            question={submittedQuestion}
                            streamedResponse={streamedResponse} 
                            isLoading={isLoading}
                            onReset={handleReset} 
                        />
                    )}
                </section>
                
                {hasResponded && !isLoading && <DivineLibraryCTA />}
                
                {gnmVisible && !isLoading && hasResponded && (
                   <section id="biological-programs" className="mt-12">
                        <BiologicalPrograms
                            step={gnmStep}
                            setStep={setGnmStep}
                            handDominance={handDominance}
                            setHandDominance={setHandDominance}
                            symptoms={symptoms}
                            setSymptoms={setSymptoms}
                            response={gnmResponse}
                            isLoading={isGnmLoading}
                            error={gnmError}
                            onSubmit={handleGnmSubmit}
                            onReset={resetGnm}
                        />
                   </section>
                )}
                
                <ConsultationCTA />

            </main>
            <FloatingPrompt />
            <Footer />
        </div>
    );

    return <MainContent />;
};

const App: React.FC = () => {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="*" element={<MainApp />} />
            </Routes>
        </Router>
    );
};

export default App;
