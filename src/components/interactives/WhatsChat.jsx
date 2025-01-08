import { useState, useEffect } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/logo/logo.webp";
import "../../../src/index.css";
import links from "../../content/links";

const whatsappContactLink = `https://wa.me/${links.ctaWhatsapp}`;

export default function WhatsChat({ Chat }) {
  const [showNotification, setShowNotification] = useState(false); // Notificação inicialmente invisível
  const [isRedirecting, setIsRedirecting] = useState(false); // Controla se o usuário está redirecionando

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && Chat) {
        // Quando o site for visível e o chat estiver ativo, exibe a notificação
        setTimeout(() => {
          if (!isRedirecting) {
            setShowNotification(true); // Exibe a notificação
          }
        }, 5000); // Atraso de 5 segundos
      } else {
        // Quando o site não está visível, esconde a notificação
        setShowNotification(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRedirecting, Chat]);

  const handleRedirectClick = () => {
    setIsRedirecting(true); // Marca que o usuário está sendo redirecionado
    setShowNotification(false); // Esconde a notificação ao redirecionar
  };

  const handleReturn = () => {
    // Resetar isRedirecting após o usuário voltar à página
    setIsRedirecting(false);
    // Quando o usuário voltar ao site, mostramos novamente a notificação após um tempo
    setTimeout(() => {
      if (Chat && !isRedirecting) {
        setShowNotification(true);
      }
    }, 5000); // Atraso de 5 segundos após o retorno
  };

  useEffect(() => {
    // Detecta quando a página volta após ser redirecionada
    if (isRedirecting) {
      window.addEventListener("focus", handleReturn); // Quando a aba for focada novamente
    }

    return () => {
      window.removeEventListener("focus", handleReturn);
    };
  }, [isRedirecting]);

  return (
    <div>
      {/* Exibe a notificação se estiver visível e o chat estiver ativo */}
      {showNotification && Chat && !isRedirecting ? (
        <FloatingWhatsApp
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsappContactLink}
          notificationDelay={5}
          accountName="Dr. Lúcio Semenssato"
          avatar={imgProfilePicture}
          initialMessageByServer="Gostaria de falar com um Advogado Trabalhista agora mesmo? Clique abaixo 👇"
          initialMessageByClient="Hello! I found your contact on your website. I would like to chat with you about..."
          statusMessage="Disponível"
          startChatText="Falar no whatsapp"
          tooltipText={
            <p className="text-paragraph4">
              Disponível <strong>24h</strong>
            </p>
          }
          allowEsc={true}
        />
      ) : (
        <a
          href={whatsappContactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-redirect"
          onClick={handleRedirectClick}
        >
          {/* Ícone do WhatsApp aparece quando o usuário não está redirecionando */}
          <FloatingWhatsApp
            phoneNumber={whatsappContactLink}
            notificationDelay={5}
            accountName="Dr. Lúcio Semenssato"
            avatar={imgProfilePicture}
            tooltipText={
              <p className="text-paragraph4">
                Atendimento<strong> 24h</strong>
              </p>
            }
            chatboxHeight={0}
          />
        </a>
      )}
    </div>
  );
}
