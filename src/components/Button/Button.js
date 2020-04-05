import React from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`

  font-size: 2em;
  font-family: Oxanium, sans-serif;
  font-weight: 900;
  background: transparent;
  border: solid 3px black;
  padding: 1em 5em;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
 
 :hover{
 background: black;
 color: white;
 }
 
 ${({secondary}) => secondary &&
    css`
      background: black;
      color: white;


`}
 
`;







export default Button;
