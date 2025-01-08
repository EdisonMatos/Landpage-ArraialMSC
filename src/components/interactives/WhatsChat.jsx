import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/logo/logo.webp";
import "../../../src/index.css";
import links from "../../content/links";



const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function WhatsChat({ Chat }) {
  return (
    <div>
      {Chat ? (
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
          className=""
        />
      ) : (
        <a
          href={whatsappContactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-redirect"
        >
          <FloatingWhatsApp
            phoneNumber={whatsappContactLink}
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