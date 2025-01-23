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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // Torna o chat visível se o usuário rolar mais de 100px
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Salva o estado do chat no localStorage
    localStorage.setItem("chatVisible", isVisible);
  }, [isVisible]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Reaparece a mensagem e a notificação após 3 segundos quando o usuário retorna à página
        const showNotificationTimeout = setTimeout(() => {
          setIsVisible(true);
        }, 3000);
        return () => clearTimeout(showNotificationTimeout);
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
            notification={true}
            notificationDelay={2}
            notificationLoop={2}
            accountName={infos.name}
            avatar={imgProfilePicture}
            initialMessageByServer={infos.whatsChatDefaultMessage}
            initialMessageByClient={infos.whatsappDefaultMessage}
            statusMessage="Disponível"
            startChatText="Falar no whatsapp"
            tooltipText={
              <p ref={tooltipTextRef} className="_tooltip_181xn_903">
                WhatsApp
              </p>
            }
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
            tooltipText={
              <p ref={tooltipTextRef} className="_tooltip_181xn_903">
                WhatsApp
              </p>
            }
            chatboxHeight={0}
          />
        </a>
      )}
    </div>
  );
}
