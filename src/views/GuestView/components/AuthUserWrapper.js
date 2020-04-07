import React from 'react';
import styled, {css} from 'styled-components';

export const AuthUserWrapper = styled.section`
display: flex;
justify-content: flex-end;
align-items: center;
border-radius: 15px;
background: white;
color: #131313;
font-size: 1rem;
width: 90vw;
height: 70px;
overflow: hidden;
position: relative;
transition: 0.5s ease-in-out;
flex-direction: column;
padding-top: 10px;




 ${({isLoginPanelCollapsed, isRegisterPanelCollapsed}) => {
     
    if (!isLoginPanelCollapsed){
        return(
            css`
    height: 250px;
    
   

     `);
    }
    
    if(!isRegisterPanelCollapsed){
        return(
            css`
    height: 330px;
   
   
     `

        );
    }
}
}
 
 

Button{
font-size: 1.5rem;
}

`;

export const AuthButtons = styled.div`



display: flex;
justify-content: space-evenly;
align-items: center;
transition: 1s;
margin-top: 10px;
padding-bottom: 10px;
width: 100%;






`;
