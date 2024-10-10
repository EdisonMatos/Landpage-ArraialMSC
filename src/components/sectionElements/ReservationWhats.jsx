import '@mui/material/styles';
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ReservationWhats = () => {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <SectionArea paddingTopAndBottom={false} className="bg-[#1bb0ce] py-0">
      <SectionWrapper className="w-full">
        <div className="flex gap-4 w-full py-4">
          <div className="flex gap-4 items-center w-[50%]">
            <div className="leading-[19px] w-[230px]">
              <h1 className="font-bold text-title2 text-white text-center">FAÇA SUA RESERVA</h1>
              <p className="text-paragraph3 font-bold text-center text-green-700 ">Parcele em até 6x sem juros</p>
            </div>
            <div>
              <p className="font-bold text-center leading-[18px] text-white">Melhor Preço <br /> Garantido</p>
            </div>
          </div>
          {/* Container das caixas */}
          <div className='w-[50%] flex flex-col gap-4'>
            <p className="text-white">
              Hotel
            </p>
            <FormControl className='w-full bg-white rounded-[6px] w-full'>
              <Select placeholder='Selecione' label="">
                <MenuItem value="Estalagem do Porto">Estalagem do Porto</MenuItem>
                <MenuItem value="Hotel da Canoa">Hotel da Canoa</MenuItem>
                <MenuItem value="Pousada Porto Praia">Pousada Porto Praia</MenuItem>
                
              </Select>
            </FormControl>
          </div>
          <div className="flex gap-4 w-full"> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex flex-col gap-4 w-full">
                <p className="text-white">Data de Entrada</p>
                  <DatePicker
                    className="bg-white rounded-[6px] w-[150px]"
                    label=""
                    defaultValue={dayjs('2022-04-17')}
                  />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <p className="text-white">Data de Saída</p>
                <DatePicker
                  className="bg-white rounded-[6px] w-[150px]"
                  label=""
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </div>
            </LocalizationProvider>
          </div>
          <div className='relative top-[40px] w-auto'>
            <button className='flex bg-green-500 px-[30px] py-[16px] w-full text-white font-bold'>Pesquisar</button>
          </div>
          <div className='flex gap-6 w-full text-white'>
            <div className='flex relative top-[50px]'>
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
            <div className='flex relative top-[50px]'>
              <svg xmlns="http://www.w3.org/2000/svg" 
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                <path d="M14.05 2a9 9 0 0 1 8 7.94"/>
                <path d="M14.05 6A5 5 0 0 1 18 10"/>
              </svg>
            </div>
            <div className='flex relative top-[50px]'>
              (00)00000-0000
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
};

export default ReservationWhats;
