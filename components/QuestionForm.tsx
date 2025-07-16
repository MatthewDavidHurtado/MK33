
import React from 'react';
import Spinner from './Spinner';

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