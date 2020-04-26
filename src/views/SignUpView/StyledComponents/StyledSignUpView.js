import React from 'react';
import styled from 'styled-components';

const StyledSignUpView = styled.section`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position:relative;

::before{
position:absolute;
content: "";
left: 0;
right: 0;
top: 0;
bottom: 0;
background: url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") no-repeat;
background-size: cover;
background-position: center;


z-index: -2;
}

::after{
position:absolute;
content: "";
left: 0;
right: 0;
top: 0;
bottom: 0;
background: linear-gradient(120deg, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0));
z-index: -1;
}




img{
height: 100px;
width: 250px;
}



h1{
font-family: Oxanium, sans-serif;
}

h3{
margin-top: -20px;
margin-bottom: 20px;
line-height: 1.2;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-weight: 100;

b{
font-size: 2em;
}
}

`;

export default StyledSignUpView;