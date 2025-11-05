import links from "./links";

import logo from "../assets/imgs/logo/logo.webp";
import solidLogo from "../assets/imgs/logo/solidLogo.webp";
import bgHeroImg from "../assets/imgs/hero/bgHero.webp";

import imgFeatures from "../assets/imgs/features/imgFeatures.webp";
import imgDivisor from "../assets/imgs/features/imgDivisor.webp";

import aboutImg1 from "../assets/imgs/about/imgAbout.webp";
import aboutSocialImg from "../assets/imgs/about/aboutSocialImg.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/featuresImg1.jpg";
import featuresImg2 from "../assets/imgs/features/featuresImg2.jpg";
import featuresImg3 from "../assets/imgs/features/featuresImg3.jpg";
import featuresImg4 from "../assets/imgs/features/featuresImg4.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/testimonial1.webp";
import imgTestimonial2 from "../assets/imgs/testimonials/testimonial2.webp";
import imgTestimonial3 from "../assets/imgs/testimonials/testimonial3.webp";
import imgTestimonial4 from "../assets/imgs/testimonials/testimonial4.webp";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logomarca Arraial Melhor Só o Céu",
      },
      solidLogo: {
        img: solidLogo,
        alt: "Logomarca Arraial Melhor Só o Céu",
      },
      menuItems: ["Início", "Serviços", "Quem somos", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "Experiências autênticas em Arraial do Cabo – RJ",
      title: (
        <h1 className="mb-[16px]">
          Mais do que um passeio de barco. <br />
          Uma lembrança que vai te acompanhar pra sempre.
        </h1>
      ),
      subtitle:
        "Navegue pelas águas mais cristalinas do Brasil com quem conhece cada canto de Arraial do Cabo — e transforma o seu dia no mar em uma experiência leve, segura e inesquecível.",
      ctaButtonText: "Quero viver essa experiência",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "Quer saber mais? Clique aqui",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    trustedBy: {
      title: "Nossas Marcas Parceiras",
      subtitle: "Trabalhamos com as melhores marcas do mercado",
      trustedMore: {
        title: "Seguradoras",
        subtitle:
          "Confiança que apenas as maiores seguradoras do Brasil oferecem",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "Anos de experiência",
      number2: 500,
      number2Description: "Em ações ganhas para clientes",
      number3: 1000,
      number3Description: "Ações jurídicas",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "imagem empty",
      },
      miniTag: "NOSSA TRAJETÓRIA",
      title: "Quem somos?",
      subtitle: "",
      paragraph: (
        <div>
          A gente é movido pelo mesmo encanto que faz tanta gente se apaixonar
          por Arraial do Cabo.
          <br />
          <br />
          Somos uma equipe local, que cresceu com o pé na areia e o coração no
          mar — e que decidiu transformar essa paixão em experiência pra quem
          visita esse paraíso.
          <br />
          <br />
          Nossos passeios te levam a lugares que a maioria só vê em foto: Ilha
          do Farol, Praia do Forno, Prainhas do Pontal do Atalaia…
          <br />
          <br />
          Mas o que faz diferença não é o roteiro — é o cuidado em cada detalhe.
          A gente quer que você volte pra casa com a sensação de ter vivido um
          dia leve, bonito e inesquecível.
        </div>
      ),
      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: "Foto Profissional",
        },
        miniTag: "FIQUE POR DENTRO",
        title: "Siga a gente nas redes sociais",
        subtitle: "",
        paragraph: (
          <p>
            🌊 Quer sentir o clima de Arraial mesmo antes de embarcar? Acompanhe
            nossa página e descubra os bastidores dos passeios, dicas de viagem
            e os lugares mais incríveis que você precisa conhecer.
            <br />
            <br />
            Vem fazer parte da nossa trip e viva a experiência de Arraial do
            Cabo todos os dias com a gente!
          </p>
        ),
      },
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Conheça as mentes brilhantes por trás do nosso sucesso",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    features: {
      miniTag: "Aventura única em Arraial do Cabo",
      title:
        "Descubra o que torna Arraial do Cabo tão especial — do jeito certo de viver o mar.",
      subtitle:
        "Embarque em um passeio que une aventura, conforto e paisagens que parecem de outro mundo. Tudo isso com uma equipe que entende o mar e cuida de cada detalhe pra sua experiência ser perfeita do início ao fim.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        title: "Águas Cristalinas",
        subtitle:
          "Navegue por águas tão transparentes que você enxerga o fundo do mar — e entende por que chamam Arraial de “Caribe Brasileiro”.",
        img: featuresImg1,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre sites.`,
      },
      card2: {
        title: "Praias Paradisíacas",
        subtitle:
          "Areia branca, mar turquesa e um visual que nenhuma foto consegue traduzir. A gente te leva até os pontos mais bonitos e tranquilos da região.",
        img: featuresImg2,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card3: {
        title: "Vida Marinha",
        subtitle:
          "Mergulhe com tartarugas, cardumes e estrelas-do-mar que parecem saídas de um documentário. Cada parada é um novo cenário pra você viver — e registrar.",
        img: featuresImg3,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card4: {
        title: "Conforto a Bordo",
        subtitle:
          "Nosso barco foi pensado pra você relaxar. Tem sombra, área aberta, som ambiente e o cuidado que transforma um simples passeio em um dia inesquecível.",
        img: featuresImg4,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
    },
    steps: {
      miniTag:
        "Tudo simples e tranquilo — do jeito que uma boa experiência deve ser.",
      title: "Como funciona nosso passeio?",
      subtitle: "empty",
      imgSteps: imgSteps,
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Horários",
          cardDescription: (
            <p>
              Saídas diárias, das <strong>9h às 14h</strong>. <br />
              Chegue com 30 minutinhos de antecedência e já comece o dia
              respirando o ar do cais — o resto a gente cuida.
            </p>
          ),
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Duração",
          cardDescription: (
            <p>
              São{" "}
              <strong>
                4 horas de mar, sol e paisagens que não saem da cabeça
              </strong>
              . <br />
              Tempo ideal pra viver tudo, com conforto e sem pressa.
            </p>
          ),
        },
        card3: {
          stepNumber: 3,
          cardTitle: "O que levar?",
          cardDescription: (
            <p>
              Só o essencial:{" "}
              <strong>protetor, chapéu, toalha e roupa de banho</strong>. <br />
              E claro — uma câmera ou celular pra registrar cada momento (você
              vai querer lembrar disso depois).
            </p>
          ),
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Segurança",
          cardDescription: (
            <p>
              Todo mundo embarca com <strong>colete salva-vidas</strong> e a
              tripulação segue rigorosamente os protocolos. <br />
              Segurança e tranquilidade vêm em primeiro lugar — sempre.
            </p>
          ),
        },
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "CONTATE AGORA",
      title: "Pronto para sua próxima aventura?",
      subtitle: (
        <p>
          Garanta seu passeio e descubra por que Arraial do Cabo é chamado de o
          <i> Caribe Brasileiro</i>. <br />
          Entre em contato agora e prepare-se para uma experiência que você vai
          querer repetir!
        </p>
      ),
      ctaButtonText: "Fale com a gente no WhatsApp",
    },
    testimonials: {
      miniTag: "FEEDBACKS REAIS",
      title: "Clientes sempre satisfeitos",
      subtitle: "Nossos clientes são a prova do que oferecemos.",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle:
        "Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!",
      questions: {
        question1: {
          question: "Posso levar meu próprio cooler para o passeio?",
          answer:
            "De acordo com a lei municipal 2.348/2021, é proibido entrar com cooler, bolsa térmica ou semelhantes, garrafas ou copos de vidro também são proibidos.",
        },
        question2: {
          question: "Crianças pagam pelo passeio?",
          answer:
            "Crianças até 3 anos não pagam, entretanto, todas contam como passageiros à bordo do barco.",
        },
        question3: {
          question: "Se no dia do meu passeio estiver chovendo?",
          answer:
            "Caso não haja condições de desembarque ou visitação de algum local descrito acima, devido às condições do mar, compensamos o tempo em outro ponto turístico se possível for.",
        },
        question4: {
          question: "Até que horas posso chegar no barco?",
          answer:
            "Nosso passeio inicia a partir das 9:30h  (favor confirmar o horário), tendo que estar para o check-in com 1h de antecedência, lembrando que a cidade fica lotada sempre, então pedimos que saiam cedo para evitar que percam o passeio, caso aconteça de perder o horário, o valor não é reembolsado, pois sairemos com as vagas em aberto, o valor só é devolvido em caso de cancelamento do passeio por motivos climáticos.",
        },
      },
    },
    carouselv1: {
      title: "Título CarouselDivsV1",
      subtitle: "Aqui você substitui, só coloquei pra ver se eu sabia fazer.",
    },
  },
};

export default content;
