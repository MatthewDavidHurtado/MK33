import React, { useRef, useCallback, useEffect } from 'react';
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
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const scrollPositionRef = useRef<number>(0);

    // Prevent any scroll behavior on mount
    useEffect(() => {
        const preventScroll = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        const textarea = textareaRef.current;
        if (textarea) {
            // Disable all scroll-related events on the textarea
            textarea.addEventListener('focus', preventScroll, { passive: false });
            textarea.addEventListener('click', preventScroll, { passive: false });
            
            return () => {
                textarea.removeEventListener('focus', preventScroll);
                textarea.removeEventListener('click', preventScroll);
            };
        }
    }, []);

    const handleInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Store current scroll position
        scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update the value
        onQuestionChange(e.target.value);
        
        // Force scroll position to stay the same
        requestAnimationFrame(() => {
            window.scrollTo(0, scrollPositionRef.current);
        });
    }, [onQuestionChange]);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Lock scroll position
        scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
        
        // Prevent any default focus behavior
        setTimeout(() => {
            window.scrollTo(0, scrollPositionRef.current);
        }, 0);
        
        return false;
    }, []);

    const handleClick = useCallback((e: React.MouseEvent<HTMLTextAreaElement>) => {
        e.stopPropagation();
        
        // Lock scroll position
        scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
        
        setTimeout(() => {
            window.scrollTo(0, scrollPositionRef.current);
        }, 0);
    }, []);

    const handleFormSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!question.trim() || isLoading) return;
        
        // Lock current scroll position
        scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
        
        onSubmit(e);
        
        // Ensure we stay at the same position
        setTimeout(() => {
            window.scrollTo(0, scrollPositionRef.current);
        }, 100);
    }, [question, isLoading, onSubmit]);

    return (
        <div className="w-full max-w-2xl mx-auto" style={{ position: 'relative' }}>
            <form 
                ref={formRef}
                onSubmit={handleFormSubmit} 
                className="bg-slate-900/50 p-2 border border-slate-700/80 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-2"
                style={{ 
                    scrollBehavior: 'auto',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                <textarea
                    ref={textareaRef}
                    value={question}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onClick={handleClick}
                    placeholder="What is going on that you'd like to address?"
                    className="w-full h-24 sm:h-auto sm:min-h-[50px] resize-none p-3 text-slate-200 placeholder-slate-500 bg-transparent border-none focus:ring-0 focus:outline-none transition-all duration-300 flex-grow"
                    disabled={isLoading}
                    rows={2}
                    aria-label="Your concern"
                    style={{ 
                        scrollBehavior: 'auto',
                        outline: 'none !important',
                        border: 'none !important',
                        boxShadow: 'none !important',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        appearance: 'none'
                    }}
                    autoComplete="off"
                    spellCheck="false"
                />
                <button
                    type="submit"
                    disabled={isLoading || !question.trim()}
                    className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-gold-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-gold-400 transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:hover:bg-slate-600"
                    aria-label="Get a spiritual treatment for your concern"
                    style={{ outline: 'none !important' }}
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