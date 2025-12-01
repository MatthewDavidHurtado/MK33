
import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { generateTreatmentStream, generateGnmAnalysisStream } from './services/geminiService';
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

const MainApp: React.FC = () => {
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

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            <SafariWarning />
            <TitheBanner />
            <HeroSection />
            <NavigationSection />
            <main className="flex-grow container mx-auto max-w-4xl px-4 py-8 md:py-16">
                <Header />

                <ConsultationCTA />

            </main>
            <Footer />
        </div>
    );
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
