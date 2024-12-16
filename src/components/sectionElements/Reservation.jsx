import React, { useState, useEffect } from "react";
import SectionArea from "./SectionArea";
import SectionWrapper from "./SectionWrapper";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dropdown } from "primereact/dropdown";
import Button from "../../components/interactives/Button";
import { Dialog } from "primereact/dialog";
import { CalendarDays } from "lucide-react";

export default function Reservation({ className }) {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [checkInValue, setCheckInValue] = useState(dayjs("2024-04-17"));
  const [checkOutValue, setCheckOutValue] = useState(dayjs("2024-04-18"));
  const [selectedOption, setSelectedOption] = useState({ name: "Passeio de Barco", code: "BARCO" });

  // Opções do Dropdown
  const cities = [
    { name: "Passeio de Barco", code: "BARCO" },
    { name: "Passeio de Buggy", code: "BUGGY" },
  ];

  useEffect(() => {
    console.log("Selected City changed: ", selectedOption);
  }, [selectedOption]);

  const onClick = () => {
    setModalTitle("Faça sua Reserva");
    setModalContent(
      <p>
        <div className="flex flex-col bg-white w-[95%] gap-2 py-2 justify-evenly m-auto">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col m-auto">
              <p>Selecione</p>
              <Dropdown
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.value)}
                options={cities}
                optionLabel="name"
                className="w-[228px] phone3:w-[239px] h-[40px] font-mainFont bg-secondary/30 items-center"
              />
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Flex-row para alinhar os DatePickers lado a lado */}
              <div className="flex flex-col gap-4 m-auto items-center">
                <div className="flex flex-col items-start mb-1">
                  <p>Data de Entrada</p>
                  <DatePicker
                    value={checkInValue}
                    onChange={(newValue) => setCheckInValue(newValue)}
                    format="DD/MM/YYYY"
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-root": {
                        height: "40px",
                        color: "#12759C",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#12759C",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#12759C",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#12759C",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#12759C",
                      },
                    }}
                  />
                </div>
                <div className="flex flex-col items-start mb-1">
                  <p>Data de Saída</p>
                  <DatePicker
                    value={checkOutValue}
                    onChange={(newValue) => setCheckOutValue(newValue)}
                    format="DD/MM/YYYY"
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-root": {
                        height: "40px",
                        color: "#12759C",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#12759C",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#12759C",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#12759C",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#12759C",
                      },
                    }}
                  />
                </div>
              </div>
            </LocalizationProvider>

            <Button
              onClick={handleClick}
              className="mb-1 w-full h-[40px] m-auto"
              gap={false}
              size="small"
              label="Reservar"
              hover={false}
            />
          </div>
        </div>
      </p>
    );
    setVisible(true);
  };

  const handleClick = () => {
    // Coletando os dados selecionados
    const city = selectedOption?.name || "Não selecionado"; // Cidade
    const checkInDate =
      dayjs(checkInValue?.$d).format("DD/MM/YYYY") || "Data não selecionada"; // Data de entrada
    const checkOutDate =
      dayjs(checkOutValue?.$d).format("DD/MM/YYYY") || "Data não selecionada"; // Data de saída

    // Montando a mensagem para o WhatsApp
    const message = `Olá! Gostaria de fazer uma reserva com os seguintes detalhes:
  - Cidade: ${city}
  - Data de Entrada: ${checkInDate}
  - Data de Saída: ${checkOutDate}`;

    // Link do WhatsApp com a mensagem
    const whatsappLink = `https://wa.me/21972613067?text=${encodeURIComponent(
      message
    )}`;

    // Abrir o link do WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <SectionArea className="fixed bottom-0 z-20">
      <SectionWrapper className="fixed bottom-0">
        <div
          className={`${className}:"fixed z-20 justify-center mb-10 text-secondary font-mainFont w-[95%]`}
        >
          <div className="desktop1:hidden">
            <Button
              onClick={onClick}
              className="flex w-[65%] m-auto mb-[-4px]"
              label="Fazer Reserva"
              size="small"
              icon={<CalendarDays className="w-5 h-5" />}
            />
          </div>

          <div className="hidden desktop1:flex bg-white w-[826px] rounded-md gap-2 py-2 justify-evenly m-auto shadow-md">
            {/* texto1 */}
            <div className="flex items-center desktop1:text-paragraph3">
              <div className="flex flex-col text-center w-auto">
                <h1 className="font-semibold">FAÇA SUA RESERVA</h1>
                <p className="text-paragraph2">Parcele em até 6x sem juros</p>
              </div>
            </div>
            {/* check */}
            <div className="flex items-end gap-4">
              <div className="flex flex-col items-start mb-1">
                <p>Atvidade</p>
                <Dropdown
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.value)}
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
                      value={checkInValue}
                      onChange={(newValue) => setCheckInValue(newValue)}
                      format="DD/MM/YYYY"
                      sx={{
                        width: "150px",
                        "& .MuiInputBase-root": {
                          height: "40px",
                          color: "#12759C",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#12759C",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C",
                        },
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start mb-1">
                    <p>Data de Saída</p>
                    <DatePicker
                      value={checkOutValue}
                      onChange={(newValue) => setCheckOutValue(newValue)}
                      format="DD/MM/YYYY"
                      sx={{
                        width: "150px",
                        "& .MuiInputBase-root": {
                          height: "40px",
                          color: "#12759C",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#12759C",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#12759C",
                        },
                      }}
                    />
                  </div>
                </div>
              </LocalizationProvider>

              <Button
                onClick={handleClick}
                className="mb-1 h-[60px]"
                gap={false}
                size="small"
                label="Reservar"
              />
            </div>
          </div>
          <Dialog
            className="font-secondFont desktop1:hidden"
            header={modalTitle}
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "50vw" }}
            breakpoints={{
              "1024px": "300px",
              "768px": "300px",
              "639px": "300px",
              "375px": "288px",
            }}
          >
            <p className="m-0 ">{modalContent}</p>
          </Dialog>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
