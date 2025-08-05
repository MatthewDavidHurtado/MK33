import React from 'react';

const ChatWidget: React.FC = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-slate-900 border border-gold-400/30 rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-2 border-b border-gold-400/20">
                    <h3 className="font-cinzel text-gold-400 font-semibold text-sm">
                        Ask Malcolm Anything
                    </h3>
                </div>
                <iframe
                    src="https://denser.ai/u/embed/d84bfb5c-74d9-4df1-9857-d37c7e470aff"
                    width="350"
                    height="500"
                    style={{ border: 'none' }}
                    title="Malcolm Kingley Chat Assistant"
                    allow="microphone; camera"
                />
            </div>
        </div>
    );
};

export default ChatWidget;