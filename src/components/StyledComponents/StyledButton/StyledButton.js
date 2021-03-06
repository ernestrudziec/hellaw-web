import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`

  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "50px"};
  padding: 0 0.5em;
  color: white;
  background: #131313;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border: none;
  box-sizing: border-box; 
  outline: none;
  font-size: ${({ fontsize }) => fontsize || "2rem"};
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.3s ease-in-out;
  
  :hover{
  transform: scale(0.98);
  opacity: 0.9;

  }
 
 ${({ yellow }) =>
   yellow &&
   css`
     background: #dbff00;
     color: #131313;
     border: none;
   `}
 
  ${({ login }) =>
    login &&
    css`
      background: white;
      color: #131313;
      width: 130px;
      height: 30px;
      border-radius: 5px;
      font-size: 1.4rem;
    `}
 
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `}
  
  ${({ logout }) =>
    logout &&
    css`
      background: #131313;
      color: white;
      width: 130px;
      height: 30px;
      border-radius: 5px;
      font-size: 1.4rem;
    `}
 
`;

export default StyledButton;
