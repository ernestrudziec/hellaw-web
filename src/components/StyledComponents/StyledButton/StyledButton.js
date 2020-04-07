import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`

  width: ${({width}) => width || "200px"};
  height: ${({height}) => height || "50px"};
  color: white;
  background: #131313;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border: none;
  box-sizing: border-box;
  font-family: Oxanium, sans-serif;
  outline: none;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
 


 
 ${({yellow}) => yellow &&
    css`
      background: #DBFF00;
      color: #131313;
      border: none;
      
      
      
     `}
 
  ${({login}) => login &&
    css`
      background: white;
      color: #131313;
      width:  120px;
      height: 30px;
      border-radius: 5px;
      font-size: 1.6rem;
 
      
      
      
     `}
 
  ${({isDisabled}) => isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
  
     `}
 
`;







export default StyledButton;
