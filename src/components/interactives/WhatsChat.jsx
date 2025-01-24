import React, { useState, useEffect, useRef } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/favico/android-icon-192x192.png";
import "../../../src/index.css";
import links from "../../content/links";
import infos from "../../content/infos";

const whatsNumber = `${links.ctaWhatsapp}`;
const whatsappContactLink = `https://wa.me/${whatsNumber}`;

export default function WhatsChat({ Chat }) {
  const tooltipTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(
    localStorage.getItem("chatVisible") === "true"
  );
  const [showNotification, setShowNotification] = useState(true);
  const [resetMessage, setResetMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // Torna o ícone visível após rolar a tela
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Salva o estado do componente no localStorage
    localStorage.setItem("chatVisible", isVisible);
  }, [isVisible]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Reexibe a notificação e a mensagem "WhatsApp" ao retornar à página
        setShowNotification(false); // Reseta a notificação
        setTimeout(() => setShowNotification(true), 0); // Reativa a notificação imediatamente
        setResetMessage(true); // Força o reset da mensagem inicial
        setTimeout(() => setResetMessage(false), 0); // Reativa a mensagem inicial
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleCloseChat = () => {
    // Oculta o chat e o exibe novamente após um curto intervalo
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  return (
    <div>
      {Chat ? (
        isVisible && (
          <FloatingWhatsApp
            className="custom-whatsapp-button"
            status="w-3"
            chatboxHeight="auto"
            phoneNumber={whatsNumber}
            notification={showNotification}
            notificationDelay={2}
            notificationLoop={2}
            accountName={infos.name}
            avatar={imgProfilePicture}
            initialMessageByServer={
              resetMessage ? "" : infos.whatsChatDefaultMessage
            } // Controla o reset da mensagem inicial
            initialMessageByClient={
              resetMessage ? "" : infos.whatsappDefaultMessage
            }
            statusMessage="Disponível"
            startChatText="Falar no whatsapp"
            allowEsc={true}
            onClose={handleCloseChat} // Aciona ao fechar o chat
          />
        )
      ) : (
        <a
          href={whatsappContactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-redirect"
        >
          <FloatingWhatsApp
            phoneNumber={whatsappContactLink}
            accountName="Arraial"
            notification={showNotification}
            notificationDelay={2}
            notificationLoop={2}
            chatboxHeight={0}
          />
        </a>
      )}
    </div>
  );
}
