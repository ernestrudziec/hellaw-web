import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`

width: 80%;
height: 50px;
background: transparent;
font-family: Oxanium, sans-serif;
border: none;
padding: 0 0.6em;
border-bottom: solid 2px #131313;
margin: 0.3em 0;
font-size: 1.6em;



::placeholder{
color: #131313;
font-size: 1.6rem;

font-family: Oxanium, sans-serif;
}

:focus{
outline: solid 2px black;
}
`

export default StyledInput;