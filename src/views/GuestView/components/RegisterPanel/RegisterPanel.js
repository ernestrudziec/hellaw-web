import React from 'react';
import styled, {css} from 'styled-components';

const RegisterPanel = styled.form`


margin: 0;

display: flex;
width: 90%;
height: 250px;
justify-content: center;
align-items: center;
flex-direction: column;
transition: 0.5s ease-in-out;

overflow: hidden;




h1{
font-family: 'Oxanium', sans-serif;
font-size: 2em;
margin: 0;
padding: 0;
}


 ${({isCollapsed}) => isCollapsed &&
    css`
   
      
      height: 0;
      overflow: hidden;
    
  
     `}
`

export default RegisterPanel;