import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
height: 80%;

width: 85%;

h2, h3{
max-width: 650px;
}

h1{
max-width: 500px;
padding: 0;

margin-top: 0;
font-size: 2.5em;
font-family: Oxanium, sans-serif;
}

h2{

font-size: 1.5em;
font-weight: 300;
}

button{
:hover{
text-decoration: underline;
}

}
h3{
margin-top: 1em;
margin-left: 5px;
font-size: 1.5em;
font-weight: 300;
color: gray;

b{
color: white;
cursor: pointer;

:hover{
text-decoration: underline;
}
}

}
`;

export default StyledSection;