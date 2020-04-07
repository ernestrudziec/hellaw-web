import React from 'react';
import styled from 'styled-components';

export const StyledMain = styled.main`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 80vh;
color: white;
position: relative;



::before{

position: absolute;
background: 
 url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80")
 top
 no-repeat;
background-size: cover;
content: '';
left: 0;
right: 0;
bottom: 0;
top: 0;
z-index: -2;
}

::after{
position: absolute;
z-index: -1;
content: '';
left: 0;
right: 0;
bottom: 0;
top: 0;
background: linear-gradient(15deg, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.5) 100%);}

`;


export const StyledHeading = styled.header`

text-align: center;
margin-bottom: 5em;


h1{
  font-size: 2em;
  margin: 0;
  font-family: Oxanium, sans-serif;
  font-weight: 600;
}

h2{

  font-size: 1.5em;
  font-weight: 300;
  margin: 0;
}


`



