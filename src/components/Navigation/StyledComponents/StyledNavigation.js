import React from 'react';
import styled, {css} from 'styled-components';

export const StyledNavigation = styled.nav`


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
background: white;
position: fixed;
font-size: 1.6em;
z-index: 99;
min-height: 30px;
box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.01);
transition: all 0.2s;
img{
align-self: flex-start;


}

`;

export const StyledUl = styled.ul`
transition: all 0.5s ease-in;
list-style: none;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
cursor: pointer;
width: 100%;

text-transform: uppercase;
font-weight: 600;
letter-spacing: 1px;
font-size: 1.3em;
text-align: right;
padding-right: 1em;
overflow: hidden;
max-height:  ${({visible}) => visible ? '90vh' : '0px'};
margin: 0;

a{
width: 100%;
transition: all 0.2s;
border-radius: 3px;
margin: 0.2em 1em;
padding: 0.5em 0.5em;

}


`;


export const StyledLi = styled.li`
transition: all 0.2s;
border-radius: 3px;




width: 100%;

i{

margin-left: 0.3em;

}


`;

export const StyledTopNav = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5em 1em;
width: 100%;
font-size: 2em;
`;

export const StyledHamburger = styled.button`
font-size: 1em;
border: none;
background: transparent;
cursor: pointer;
outline: none;


`;

export const StyledBlurryBackground = styled.div`
position: fixed;
content: "";
top: 0;
left: 0;
bottom: 0;
right: 0;
background: black;
transition: all 0.5s;
z-index: 98;
 opacity: 0;
 visibility: hidden;
 
 
  ${({visible}) => visible &&
    css`
        visibility: initial;
        transition-delay: visibility 0.5s;
        opacity: 0.6;
        
     `}

`;
