import React from "react";
import styled from "styled-components";
import StyledSignUpForm from "../../SignUpView/components/StyledSignUpForm";

const StyledLoginForm = styled(StyledSignUpForm)`
  div {
    input {
      background: #202020;
    }

    label,
    input {
      color: white;
    }

    input:placeholder-shown + label {
      color: white;
    }

    input:not(placeholder-shown) + label,
    input:focus + label {
      color: white;
    }
  }
  button {
    width: 100%;
    height: 40px;
    background: white;
    color: #131313;
    font-size: 2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }
`;

export default StyledLoginForm;
