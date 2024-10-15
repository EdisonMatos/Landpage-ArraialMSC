import "@mui/material/styles";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import links from "../../content/links";
import FloatingButtonHero from "../interactives/FloatingButtonHero";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

const ReservationWhats = ({ className }) => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <SectionArea paddingTopAndBottom={false} className={`py-0 absolute bottom-[-25%] desktop1:bottom-0 z-10 ${className}`}>
      <SectionWrapper className="">
        <div className="desktop1:hidden">
          <FloatingButtonHero className="" />
        </div>

        <div className="hidden desktop1:flex desktop1:bg-[#1bb0ce] desktop3:bottom-[10%] left-0 z-10  desktop1:w-full justify-between  desktop1:gap-2 desktop3:gap-4 desktop3:w-full desktop3:flex-row py-2">
          <div className="flex flex-col desktop1:w-[17%] desktop3:flex-row desktop3:gap-2 items-center w-auto desktop3:w-[50%]">
            <div className="leading-[19px] w-full desktop3:w-[240px]">
              <h1 className="font-bold desktop3:text-title1 text-white text-center ">
                FAÇA SUA RESERVA
              </h1>
              <p className="desktop1:text-paragraph1 desktop3:text-paragraph3 font-bold text-center text-green-700 ">
                Parcele em até 6x sem juros
              </p>
            </div>
            <div className="desktop1:w-full desktop3:w-[40%]">
              <p className="text-paragraph2 desktop3:text-paragraph4 font-bold text-center leading-[18px] text-white">
                Melhor Preço <br /> Garantido
              </p>
            </div>
          </div>
          {/* Container das caixas */}
          <div className="flex desktop1:w-[13%] desktop3:w-[50%] flex-col">
            <p className="text-white">Hotel</p>
            <FormControl className="bg-white rounded-[6px] w-full">
              <Select
                displayEmpty
                defaultValue=""
                renderValue={(value) => (value ? value : "Selecione")}
                className="placeholder:text-gray-400"
              >
                <MenuItem value="Estalagem do Porto">
                  Estalagem do Porto
                </MenuItem>
                <MenuItem value="Hotel da Canoa">Hotel da Canoa</MenuItem>
                <MenuItem value="Pousada Porto Praia">
                  Pousada Porto Praia
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex desktop1:gap-3 desktop3:gap-4 w-[35%]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex flex-col desktop1:gap-0 desktop3:w-full">
                <p className="text-white">Data de Entrada</p>
                <DatePicker
                  className="bg-white rounded-[6px] w-auto desktop3:w-[150px]"
                  label=""
                  defaultValue={dayjs("2022-04-17")}
                />
              </div>
              <div className="flex flex-col desktop3:w-full">
                <p className="text-white">Data de Saída</p>
                <DatePicker
                  className="bg-white rounded-[6px] desktop1:w-auto desktop3:w-[150px]"
                  label=""
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </div>
            </LocalizationProvider>
          </div>
          <div className="flex relative desktop1:top-6 desktop3:top-[25px] h-[56px] w-auto bg-white">
            <a
              href={whatsappContactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex bg-green-500 desktop1:px-[29px] desktop3:px-[30px] py-[16px] w-full text-white font-bold">
                Pesquisar
              </button>
            </a>
          </div>
          <div className="flex desktop1:gap-2 desktop3:w-full text-white">
            <div className="flex h-8 relative desktop1:top-10 desktop3:top-[40px] cursor-pointer hover:text-green-600 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </div>
            <div className="flex h-8 relative desktop1:top-10 desktop3:top-[40px] cursor-pointer hover:text-green-600 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-call"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                <path d="M14.05 6A5 5 0 0 1 18 10" />
              </svg>
            </div>
            <div className="flex desktop1:w-auto relative desktop1:top-10 desktop1:text-paragraph2 desktop1:h-9 desktop3:top-[37px] desktop3:text-title1 ">
              <p className="">(00)00000-0000</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
};

export default ReservationWhats;
