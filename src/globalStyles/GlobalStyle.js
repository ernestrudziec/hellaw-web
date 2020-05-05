

import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

 

body, html{

font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
-webkit-font-smoothing: antialiased !important;
color: black;
padding: 0;
margin: 0;
line-height: 1.7;

}

html{
font-size: 62.5%;

}

*, *::before, *::after{
-webkit-font-smoothing: antialiased !important;
box-sizing: border-box;


}

a{
text-decoration: none;
color: inherit;
}


input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #131313 inset !important;
        -webkit-text-fill-color: white !important;
        -webkit-transition: 0.5s;

}

`;



export default GlobalStyles;