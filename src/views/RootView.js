import React from 'react';
import Button from "../components/StyledComponents/StyledButton/Button";
import GlobalStyles from "../styles/GlobalStyle";
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
