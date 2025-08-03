
import React from 'react';
import Spinner from './Spinner';

const GlobeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
    </svg>
);

interface QuestionFormProps {
    onSubmit: (e: React.FormEvent) => void;
    isLoading: boolean;
    question: string;
    onQuestionChange: (value: string) => void;
}

const SendIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
);

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit, isLoading, question, onQuestionChange }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={onSubmit} className="bg-slate-900/50 p-2 border border-slate-700/80 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-2">
                <textarea
                    value={question}
                    onChange={(e) => onQuestionChange(e.target.value)}
                    placeholder="What is going on that you'd like to address?"
                    className="w-full h-24 sm:h-auto sm:min-h-[50px] resize-none p-3 text-slate-200 placeholder-slate-500 bg-transparent border-none focus:ring-0 transition-all duration-300 flex-grow"
                    disabled={isLoading}
                    rows={2}
                    aria-label="Your concern"
                />
                <button
                    type="submit"
                    disabled={isLoading || !question.trim()}
                    className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-gold-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-gold-400 transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:hover:bg-slate-600"
                    aria-label="Get a spiritual treatment for your concern"
                >
                    {isLoading ? (
                        <>
                            <Spinner />
                            <span>Reflecting...</span>
                        </>
                    ) : (
                        <>
                           <span>Get Treatment</span>
                           <SendIcon className="w-5 h-5"/>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default QuestionForm;