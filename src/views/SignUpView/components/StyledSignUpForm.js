import React from "react";
import styled from "styled-components";

const StyledSignUpForm = styled.form`

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 90%;
max-width: 350px;

div{
position: relative;
 width: 100%;
margin: 10px 0;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

input {
width: 100%;
height: 60px;
font-size: 1.5em;
border: none;
 -webkit-appearance: none;
border-radius: 3px;
outline: none;
padding: 0 1em;
padding-top: 1em;
font-weight: 600;
box-shadow: 0 19px 38px rgba(0,0,0,0.1), 0 15px 12px rgba(0,0,0,0.05);

}

label{

font-size: 1.5em;
position: absolute;
left: 1em;


}

label, input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 0) scale(1);
  color: #131313;
  
}

input{
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}


input:not(placeholder-shown) + label,
input:focus + label {
 transform-origin: left bottom;
  transform: translate(0, -1em) scale(0.9);
  cursor: pointer;
  color: #505050;
}



}


h4{
font-size: 1.6em;
font-weight: 100;

}


b{
transition: 0.3s;
cursor: pointer;

:hover{
text-decoration: underline;
}
}
}


`;

export default StyledSignUpForm;
