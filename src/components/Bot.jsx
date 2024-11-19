import React, { useEffect } from 'react';

const ChatBotComponent = () => {
  useEffect(() => {
    // Inject the script tag for the chatbot when the component mounts
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', '5Bu4449XhdbdNOZyNU491');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    // Optional cleanup if needed on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '700px' }}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/5Bu4449XhdbdNOZyNU491"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default ChatBotComponent;
