import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "../../components/StyledComponents/StyledButton/StyledButton";
import Logo from "../../components/Logo/Logo";
const StyledLogoutView = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  h1 {
    font-family: Oxanium, sans-serif;
    font-weight: 300;
  }

  img {
    width: 200px;
  }

  div {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;
    span {
      font-size: 2em;
      margin: 0.3em;
    }
  }
`;

const LogoutView = () => {
  return (
    <StyledLogoutView>
      <Logo dark />
      <div>
        <span className="fas fa-sign-in-alt" />
        <h1>Wylogowano pomyślnie!</h1>
      </div>
      <Link to="/">
        <StyledButton fontsize="1.6em" width="220px" height="40px">
          {" "}
          Wróć do strony głównej
        </StyledButton>
      </Link>
    </StyledLogoutView>
  );
};

export default LogoutView;
