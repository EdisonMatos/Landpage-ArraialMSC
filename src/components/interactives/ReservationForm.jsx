import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import { CiUser, CiPhone, CiMail, CiChat1 } from "react-icons/ci";
import links from "../../content/links";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const sendToWhatsapp = () => {
    const validationErrors = {};

    if (!validateName(name)) {
      validationErrors.name = "O campo nome é obrigatório";
    }

    if (!validatePhone(phone)) {
      validationErrors.phone = "O campo telefone é obrigatório";
    }

    if (!email) {
      validationErrors.email = "O campo email é obrigatório";
    } else if (!validateEmail(email)) {
      validationErrors.email =
        "O formato do email digitado é inválido. Verifique.";
    }

    if (!validateMessage(message)) {
      validationErrors.message = "O campo mensagem é obrigatório";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const numeroWhatsapp = links.ctaWhatsapp;

    const mensagemWhatsapp = `Nome: ${name} \nTelefone: ${phone} \nEmail: ${email} \nMensagem: ${message}`;

    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagemWhatsapp
    )}`;

    window.open(linkWhatsapp, "_blank");
  };

  const validateName = (name) => !!name;

  const validatePhone = (phone) => {
    console.log("Validating phone:", phone);
    const phoneNumberPattern = /^[\d()-\s]+$/;
    const cleanedPhone = phone.replace(/[^\d]/g, "");
    console.log("Cleaned phone:", cleanedPhone);
    console.log("Phone length:", cleanedPhone.length);
    const isValid =
      phoneNumberPattern.test(phone) && cleanedPhone.length === 11;
    return isValid;
  };

 

  const validateMessage = (message) => !!message;

  return (
    <div className="phone3:mx-auto text-paragraph3 phone3:text-paragraph4 bg-white rounded-[10px] px-4 py-4">
      <h1 className="w-full mb-2 font-medium phone3:text-title1 tablet1:text-paragraph3">
        FAÇA SUA RESERVA
      </h1>

      <div className="flex desktop1:w-[13%] desktop3:w-[50%] flex-col">
        <p className="text-white">Hotel</p>
        <FormControl className="bg-white rounded-[6px] w-full">
          <Select
            displayEmpty
            defaultValue=""
            renderValue={(value) => (value ? value : "Selecione")}
            className="placeholder:text-gray-400"
          >
            <MenuItem value="Estalagem do Porto">Estalagem do Porto</MenuItem>
            <MenuItem value="Hotel da Canoa">Hotel da Canoa</MenuItem>
            <MenuItem value="Pousada Porto Praia">Pousada Porto Praia</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="flex flex-col desktop1:gap-3 desktop3:gap-4 w-auto">
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

      <div className="flex mt-6 justify-center">
        <button
          className="flex items-center w-full px-4 py-2 font-medium text-secondary transition bg-primary rounded-lg text-title1 h-14 phone2:h-14 phone3:h18 hover:bg-[#1bb0ce] hover:text-white"
          onClick={sendToWhatsapp}
        >
          <div className="grid grid-cols-2 items-center justify-evenly w-[60%]">
            <img src={WhatsAppIcon} className="w-10 h-10" alt="WhatsApp Icon" />
            <p className="secondaryspace-nowrap text-paragraph4 phone1:text-paragraph5 phone2:text-title2 tablet1:text-title1">
              Pesquisar
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
