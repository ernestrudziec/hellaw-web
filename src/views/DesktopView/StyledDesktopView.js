import React from 'react';
import styled from 'styled-components';

const StyledDesktopView = styled.section`

min-height: 100vh;
width: 100vw;
font-size: 2em;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
padding-top: 40px;

nav{
display: flex;
justify-content: space-between;
padding: 0 1em;
width: 100%;
align-items: center;
box-shadow: 0 10px 20px rgba(0,0,0,0.12),  rgba(0,0,0,0.01);
}

`;

export default StyledDesktopView;