import React from 'react';
import styled from 'styled-components';

export const StyledLawyerResponse = styled.article`

display: flex;
justify-content: center;

flex-direction: column;
font-size: 1.6rem;
width: 90vw;
max-width: 600px;
border-radius: 10px;

padding: 1em;
margin-bottom: 2em;
box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.01);



`;

export const StyledLawyerInfo= styled.div`

display: flex;
justify-content: space-between;
position: relative;
color: white;
margin: 1em 0;
border-radius: 10px;



:after{
content: '';
position: absolute;
left: 0;
right: 7em;
bottom: 0;
top: 0;
background: ${({bg}) => `url(${bg})`} center no-repeat;
background-size: cover;


z-index: -2;
border-radius: 10px;

    
}

:before{
content: '';
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
background: linear-gradient(90deg, rgba(13,13,13,0.8) 0%, rgba(0,0,0,1) 100%);
z-index: -1;
border-radius: 10px;

    
}

`;

export const StyledLawyerName = styled.div`
font-family: Oxanium, sans-serif;
display: flex;
justify-content: center;
align-items: center;
margin-left: 1em;
width: calc(100% - 7em);
font-size: 1.6em;
`;

export const StyledLawyerAvatar = styled.img`
object-fit: cover;
width: 7em;
border-radius:  0px 10px 10px 0px;
height: 7em;

`;

export const StyledResponseContent = styled.p`
width: 100%;
padding: 1em;


`;

export const StyledResponseDate = styled.data`
margin: 0 1em;
opacity: 0.5;
align-self: flex-end;
`;

export const StyledBestResponse = styled.div`


font-size: 1.4em;
background: gold;
color: #131313;

border-radius: 5px;
padding: 0.5em 1em;

i{
margin-left: 0.2em;
}
`;
