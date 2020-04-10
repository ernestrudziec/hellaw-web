import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`



display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 60%;


label{
font-size: 1.4em;
font-family: Oxanium, sans-serif;
padding-left: 10px;
}

input{
width: 100%;
height: 50px;
background: transparent;
font-family: Oxanium, sans-serif;
border: none;
padding: 0 0.6em;
border: solid 2px #131313;
margin: 0.3em 0;
font-size: 1.6em;



::placeholder{
color: #131313;
font-size: 1.6rem;

font-family: Oxanium, sans-serif;
}

:focus{

outline: none;

}

}




`;

export default StyledInput;