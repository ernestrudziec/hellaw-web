

import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Baloo+2:400,500,600,700,800|Lato:300,400,700,900|Oxanium:300,400,500,600,700|Roboto+Slab:400,700,800,900&display=swap&subset=latin-ext');
 

body, html{

font-family: 'Lato', sans-serif;
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