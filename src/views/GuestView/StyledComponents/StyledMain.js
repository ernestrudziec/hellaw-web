import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`

width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: ${({height}) => height || "30vh"};
color: white;
position: relative;
background: white;

`;

export default StyledMain;