import React from 'react';
import styled from 'styled-components';

const Styled404Error = styled.section`

a{
text-decoration: none;
color: #131313;
}

::before{
content: "";
position:absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2353&q=80");
background-size: contain;
z-index: -2;


}

::after{
content: "";
position:absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: linear-gradient(25deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6));
z-index: -1;


}

position: relative;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;

h1{
font-size: 15vw;
margin: -20px 0;

padding: 0;
font-family: Oxanium, sans-serif;

@media screen and (max-width: 600px){

font-size: 30vw;
}

@media screen and (min-width: 1300px){
margin-bottom: -60px;
}

}

h2{
margin: 0;
padding: 0;
font-family: 'Roboto Slab';
font-weight: 100;

}

h3{

font-weight: 100;
font-size: 2em;
background: lightgray;
padding: 0.5em;
border-radius: 5px;
cursor: pointer;
transition: 0.3s;

:hover{
background: gray;
}
}

img{
@media screen and (max-width: 600px){
width: 60vw !important;
height: 100px;
}

height: 100px;

width: 300px;

}

`;

export default Styled404Error;