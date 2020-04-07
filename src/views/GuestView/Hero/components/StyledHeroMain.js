import React from 'react';
import styled from 'styled-components';

export const StyledHeroMain = styled.main`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 90vh;
color: white;
position: relative;



::before{

position: fixed;
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
z-index: -5;
}

::after{
position: fixed;
z-index: -1;
content: '';
left: 0;
right: 0;
bottom: 0;
top: 0;
background: linear-gradient(15deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.3) 100%);}

`;






