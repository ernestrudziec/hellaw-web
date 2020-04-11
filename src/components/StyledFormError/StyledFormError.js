import React from 'react';
import styled from 'styled-components';

const StyledFormError = styled.span`


display: ${({error}) => error ? 'block' : 'none' };
align-self: flex-start;
padding-left: 1em;
font-size: 1.2em;
color: red;


`;

export default StyledFormError;