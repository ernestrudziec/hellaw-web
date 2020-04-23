import React from 'react';
import styled from 'styled-components';



export const StyledUserInfo = styled.section`


:after{
position: absolute;
z-index: -2;
content: '';
left: 0;
right: 0;
top: 0;
bottom: 0;
background: url("https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=905&q=80") no-repeat center;
background-size: cover;
}


:before{
position: absolute;
z-index: -1;
content: '';
left: 0;
right: 0;
top: 0;
bottom: 0;
background: linear-gradient(15deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.3) 100%);
}



color: white;
position: relative;
padding: 1em;
border-radius: 5px;
margin: 1em 0;
display: flex;
width: 100%;
flex-direction: column;





div{
font-size: 0.8em;
}

`;

export const StyledUserID = styled.data`

margin: 0 1em;



`;

export const StyledUserEmail = styled.data`




`;

export const StyledUserType = styled.data`




`;

