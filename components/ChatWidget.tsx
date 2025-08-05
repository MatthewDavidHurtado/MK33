import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
    useEffect(() => {
        // Remove any existing chatbot scripts
        const existingScript = document.querySelector('script[src*="denserai/embed-chat"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Create and inject the module script
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import Chatbot from "https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js";
            Chatbot.init({
                chatbotId: "209f8130-6e89-49b7-92d5-91f3727d3b96",
            });
        `;
        
        document.head.appendChild(script);

        // Cleanup function
        return () => {
            const scriptToRemove = document.querySelector('script[type="module"]');
            if (scriptToRemove && scriptToRemove.innerHTML.includes('denserai')) {
                scriptToRemove.remove();
            }
        };
    }, []);

    // Return null since the chatbot will be injected by the script
    return null;
};

export default ChatWidget;