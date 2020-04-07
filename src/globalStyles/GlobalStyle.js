

import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

 

body, html{

font-family: 'Baloo 2', sans-serif;
color: black;
padding: 0;
margin: 0;

}

html{

font-size: 62.5%;

}

*, *::before, *::after{

box-sizing: border-box;

}


`;

export default GlobalStyles;