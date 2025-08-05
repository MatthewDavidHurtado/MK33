import React from 'react';

const ChatWidget: React.FC = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden">
                <div className="p-3 bg-gradient-to-r from-gold-500/20 to-gold-600/20 border-b border-slate-700/50">
                    <h3 className="font-cinzel text-gold-400 font-semibold text-sm">
                        Ask Malcolm Anything
                    </h3>
                </div>
                <iframe
                    width="350"
                    height="500"
                    frameBorder="0"
                    src="https://denser.ai/u/embed/d84bfb5c-74d9-4df1-9857-d37c7e470aff"
                    title="Malcolm Kingley Chat Assistant"
                    className="block"
                />
            </div>
        </div>
    );
};

export default ChatWidget;