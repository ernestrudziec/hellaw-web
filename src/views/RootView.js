import React from 'react';
import GlobalStyles from "../globalStyles/GlobalStyle";
import GuestView from "./GuestView/GuestView";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";


const RootView = () => (

       <>
             <GlobalStyles/>
             <ThemeProvider theme={theme}>
                 <>

             <GuestView/>

                 </>

             </ThemeProvider>
       </>


);

export default RootView;
