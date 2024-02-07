// import React, { useEffect } from 'react'
// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';
// import { useState } from 'react';
// import App from '../App';

// function AppMui({ children }) {
//   // console.log(children);
//   const [themeMode, setThemeMode] = useState(localStorage.getItem('color-themeMui') || "light");

//   useEffect(()=>{
//     /* SI ESTÁ SETEADO EN EL LOCALSTORANGE */
//   if (localStorage.getItem('color-themeMui') !== null) {
//     console.log('entro en el 1');
//     if (localStorage.getItem('color-themeMui') === 'light') {
//         localStorage.setItem('color-themeMui', 'dark');
//     } else {
//         localStorage.setItem('color-themeMui', 'light');
//     }

//   /* SI NO ESTÁ SETEADO EN EL LOCALSTORANGE */
// } else {
//   console.log('entro en el 2');
//     if (themeMode === 'light') {
//       localStorage.setItem('color-themeMui', 'dark');
//     } else {
//       localStorage.setItem('color-themeMui', 'light');
//     }
// }
// },[themeMode])

// const toggleThemeMode = () => {
//   setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
// };

//   const theme = createTheme({
//     palette:{
//       mode: themeMode,
//       primary: {
//         main:"#FFFFFF",
//         dark:"#000000"
//       },
//       secondary: {
//         main: "#083088"
//       }
//     }
//   })
//   return (
//     <ThemeProvider theme={theme}>
//       <App toggleThemeMode={toggleThemeMode}/>
//     </ThemeProvider>
//   )
// };

// export default AppMui;
