import React from 'react';
import styled, {css} from 'styled-components';

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
font-size: 2.6em;

@media (max-width: 330px){
font-size: 1.6em;
}

}

h2{

font-size: 16px;
font-weight: 300;

}

button{

span{
margin-right: 5px;
}

:hover{
text-decoration: underline;
}

}
h3{
margin-top: 1em;
margin-left: 5px;
font-size: 1.4em;
font-weight: 300;
color: gray;

b{
display: initial;
margin-left: 5px;
@media screen and (max-width: 500px){
margin: 0;
display: block;
}
color: white;
cursor: pointer;

:hover{
text-decoration: underline;
}
}

}


 ${({aboutsection}) => aboutsection &&
    css`
     
  
   margin: 5em 0;
   
   padding: 0;
   background: white;
   text-align: center;
   align-items: center;
   color: #131313;
   
   
   h1{
   margin: 1em 0;
   max-width: 800px;
   font-weight: 600;
   
   strong{
   background: #DBFF00;
   padding: 0.2em 0.4em;
   font-size: 1em;
   display: inline-block;
  font-weight: 800;
   border-radius: 5px;
   }
   }
   h2{
   max-width: 1200px;
   }
      
      
      
     `}
 
`;



export default StyledSection;