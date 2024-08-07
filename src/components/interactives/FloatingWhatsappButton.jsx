import React, { useState, useEffect } from "react";
import whatsappWebm from "../../assets/importAssets/whatsappGif.webp";
import Modal from "../util/Modal";
import links from "../../content/links";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

const FloatingWhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-2 right-3 p-4 text-secondary z-20 rounded-full focus:outline-none hover:scale-125 transition`}
      // onClick={() => setOpenModal(!openModal)}
    >
      {openModal ? null : (
        <a href={whatsappContactLink} target="_blank">
          <button>
            <img
              className="w-16"
              src={whatsappWebm}
              alt="Floating WhatsApp Button"
            />
          </button>
        </a>
      )}
      <Modal isOpen={openModal} setCloseModal={setOpenModal} />
    </button>
  );
};

export default FloatingWhatsappButton;
