
import React, { useState, useCallback } from 'react';
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
import FloatingLibraryWidget from './components/FloatingLibraryWidget';
import WorkshopPopup from './components/WorkshopPopup';

const App: React.FC = () => {
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
        <div className="flex flex-col min-h-screen">
            <SafariWarning />
            <TitheBanner />
            <NavigationSection />
            <main className="flex-grow container mx-auto max-w-4xl px-4 py-8 md:py-16">
                <Header />
                <section id="treatment-tool" className="mt-10">
                    <HowToUse />
                    <p className="text-center text-slate-400 mb-6 text-lg">
                        Describe any challenge or discord you are facing. This is a space for quiet reflection and spiritual realignment.
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
            <Footer />
            <FloatingLibraryWidget />
            <WorkshopPopup />
        </div>
    );
};

export default App;
