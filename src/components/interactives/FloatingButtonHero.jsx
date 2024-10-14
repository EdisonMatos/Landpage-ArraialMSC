import * as React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Faça sua Reserva 
      </Fab>
      {/* <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Faça sua Reserva
      </Fab>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Faça sua Reserva
      </Fab> */}
    </Box>
  );
}
