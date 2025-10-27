import { useState, useEffect } from "react";
import { FaCommentDots } from "react-icons/fa"; // ícone de chat

const ChatToggleButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 100); // botão aparece após 100px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Adiciona o chat no body apenas uma vez
    if (document.getElementById("n8n-chat-widget")) return;

    const script = document.createElement("script");
    script.innerHTML = `(function() { /* Cole todo o JS do seu widget aqui, sem tags <script> */ })();`;
    document.body.appendChild(script);
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
    const chatContainer = document.querySelector(
      ".n8n-chat-widget .chat-container"
    );
    if (chatContainer) {
      chatContainer.classList.toggle("open");
    }
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full z-10 focus:outline-none hover:scale-125 transition`}
      onClick={toggleChat}
    >
      <FaCommentDots size={24} />
    </button>
  );
};

export default ChatToggleButton;
