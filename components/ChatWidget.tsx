import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
    useEffect(() => {
        // Create and append the script element
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import Chatbot from "https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js";
            Chatbot.init({
                chatbotId: "d84bfb5c-74d9-4df1-9857-d37c7e470aff",
            });
        `;
        
        document.head.appendChild(script);
        
        // Cleanup function to remove the script when component unmounts
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return null; // This component doesn't render anything visible itself
};

export default ChatWidget;