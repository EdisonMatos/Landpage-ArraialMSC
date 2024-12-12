import React, { useState } from "react";
import SectionArea from "./SectionArea";
import SectionWrapper from "./SectionWrapper";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dropdown } from "primereact/dropdown";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Button from "../../components/interactives/Button";

export default function Reservation({ className }) {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const handleClick = () => {
    console.log("Ooi, sou o Botão das telas MAIORES e estou funcionando Biell");
  };

  const ButtonFloating = () => {
    console.log("Ooi, sou o Botão das telas MENORES e estou funcionando Biell");
  };

  //Opções do Dropdow
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <SectionArea>
      <SectionWrapper>
        <div
          className={`${className}:"relative fixed z-20 bottom-0 justify-center mb-10 text-secondary font-mainFont w-[95%]`}
        >
          <div className="desktop1:hidden">
            {/* <Stack direction="row" spacing={2}>
              <Button onClick={ButtonFlooting} variant="contained">
                Fazer Reserva
              </Button>
            </Stack> */}
            <Button onClick={ButtonFloating} className="flex m-auto" label="fazer Reserva" size="small" />
          </div>

          <div className=" hidden desktop1:flex bg-white w-full gap-4 py-2 justify-evenly">
            {/* texto1 */}
            <div className="flex items-center desktop1:text-paragraph3">
              <div className="flex flex-col text-center w-full">
                <h1 className="font-semibold">FAÇA SUA RESERVA</h1>
                <p className=" text-paragraph2 ">Parcele em até 6x sem juros</p>
              </div>
              <div className="flex text-center">
                <h5>Melhor Preço Garantido</h5>
              </div>
            </div>
            {/* check */}
            <div className="flex items-end gap-4">
              <div className="flex flex-col items-start mb-1">
                <p>Selecione</p>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  className="w-[150px] h-[40px] font-mainFont bg-secondary/30 items-center"
                />
              </div>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* Flex-row para alinhar os DatePickers lado a lado */}
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex flex-col items-start mb-1">
                    <p>Data de Entrada</p>
                    <DatePicker
                      defaultValue={dayjs("2022-04-17")}
                      format="DD/MM/YYYY"
                      sx={{
                        width: "150px", // Define a largura
                        "& .MuiInputBase-root": {
                          height: "40px",
                          color: "#12759C", // Texto em branco
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#12759C", // Ícone em branco
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C", // Borda ("corda") em branco
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C", // Borda ao passar o mouse
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C", // Borda ao focar no campo
                        },
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start mb-1">
                    <p>Data de Saída</p>
                    <DatePicker
                      format="DD/MM/YYYY"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      sx={{
                        width: "150px", // Define a largura
                        "& .MuiInputBase-root": {
                          height: "40px",
                          color: "#12759C", // Texto em branco
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#12759C", // Ícone em branco
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C", // Borda ("corda") em branco
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C", // Borda ao passar o mouse
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C", // Borda ao focar no campo
                        },
                      }}
                    />
                  </div>
                </div>
              </LocalizationProvider>

              {/* <button
                onClick={handleClick}
                className="px-8 py-2 mb-1 bg-green-500"
              >
                Reservar
              </button> */}
              <Button onClick={handleClick} className="mb-1 h-[60px]" size="small" label="Reservar" />
            </div>

            {/* contato */}
            {/* <div className=" flex gap-4 w-auto bg-purple-600 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-phone-call"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>

            <h5 className="desktop1:text-paragraph3">(00) 0000-0000</h5>
          </div> */}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
