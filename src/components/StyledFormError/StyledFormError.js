import React from 'react';
import styled, {css} from 'styled-components';

const StyledFormError = styled.span`


display: ${({error}) => error ? 'block' : 'none' };
align-self: flex-start;
padding-left: 1em;
font-size: 1.3em;
color: red;

 ${({filled, error}) => filled && error &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: #CC0101;
      color: white;
      border: none;
        height: 50px;
        box-shadow: 0 19px 38px rgba(0,0,0,0.1), 0 15px 12px rgba(0,0,0,0.05);
     
      
     `}


`;

export default StyledFormError;