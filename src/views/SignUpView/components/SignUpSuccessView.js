import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { connect } from "react-redux";
import BeforeUserAuthSpinner from "../../../components/LoadingSpinners/BeforeUserAuthSpinner/BeforeUserAuthSpinner";

import styled from "styled-components";
import StyledButton from "../../../components/StyledComponents/StyledButton/StyledButton";
import Logo from "../../../components/Logo/Logo";
import { Link } from "react-router-dom";

const StyledSignUpSuccessView = styled.section`
  :after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    background: url("https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940")
      center no-repeat;
    background-size: cover;

    z-index: -2;
  }

  :before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.9) 50%,
      rgba(0, 0, 0, 1)
    );
    z-index: -1;
  }

  position: relative;

  color: white;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1em;
  height: 100vh;
  text-align: center;

  h1,
  h2,
  h3,
  h4 {
    max-width: 300px;
  }

  h1 {
    font-size: 2em;
    font-weight: 300;
  }

  h2 {
    font-size: 3em;
    margin-top: 0;
    font-weight: 600;
  }

  h3 {
    font-size: 2em;
    font-weight: 100;
    margin: 0;
    margin-top: 1em;
  }

  h4 {
    font-weight: 100;
    font-size: 1.6em;
    margin: 0;
    opacity: 0.8;
    margin-bottom: 2em;
    max-width: 1000px;
  }
`;

const SignUpSuccessView = ({ isUserSignUpPosted }) => {
  useEffect(() => {
    console.log(Cookie.get());
  });

  if (isUserSignUpPosted) {
    return (
      <StyledSignUpSuccessView>
        <Logo white />
        <h1>Pomyślnie utworzono konto, możesz się zalogować już teraz!</h1>
        <h3>Twój adres email:</h3>
        <h2>{Cookie.get("email")}</h2>
        <h4>
          To jednocześnie twój login, dzięki któremu możesz logować się do
          HELLaw.
        </h4>
        <Link to="/login">
          <StyledButton login> Zaloguj się teraz</StyledButton>
        </Link>
      </StyledSignUpSuccessView>
    );
  } else {
    return <BeforeUserAuthSpinner />;
  }
};

const mapStateToProps = ({ isUserSignUpPosted }) => ({ isUserSignUpPosted });

export default connect(mapStateToProps, null)(SignUpSuccessView);
