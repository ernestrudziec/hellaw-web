import React from 'react';
import styled, {css} from 'styled-components';

const LoginPanel = styled.form`


margin: 0;

display: flex;
width: 90%;
height: 200px;
justify-content: center;
align-items: center;
flex-direction: column;
transition: 0.5s ease;
opacity: 1;



h1{
font-family: 'Oxanium', sans-serif;
font-size: 2em;
padding: 0;
margin: 0;
}

 ${({isCollapsed}) => isCollapsed &&
    css`
    
     width: 0;
     height: 0;
     overflow: hidden;

     `}


`

export default LoginPanel;