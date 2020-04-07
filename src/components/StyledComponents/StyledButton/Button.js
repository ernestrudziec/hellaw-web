import React from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`

  width: ${({width}) => width || "200px"};
  height: ${({height}) => height || "50px"};
  color: white;
  background: #131313;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s ease-in-out;
  border: solid 3px #1E1E1E;
  box-sizing: border-box;
  font-family: Oxanium, sans-serif;
  outline: none;
 
 :hover{
 transform: scale(1.05);
 }

 
 ${({white}) => white &&
    css`
      background: white;
      color: #131313;
      
      
      
     `}
 
  ${({isDisabled}) => isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
  
     `}
 
`;







export default Button;
