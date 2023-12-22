import React from 'react'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function AppMui({ children }) { 
  const theme = createTheme({
    palette:{
      mode: 'light',
      primary: {
        main:"#FB3088"
      },
      secondary: {
        main: "#593088"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
};

export default AppMui;
