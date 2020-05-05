import React, { useEffect, useState } from "react";

import SignUpForm from "./components/SignUpForm";
import StyledSignUpView from "./StyledComponents/StyledSignUpView";
import Logo from "../../components/Logo/Logo";

const SignUpView = () => {
  // let [inputs, setInputs] = useState({email: '', password: '', password2: ''});

  //
  //     useEffect(() => {
  //         console.log(inputs);
  //
  //         console.log(validateFormRegister(inputs));
  //     });
  //
  //     let getInputs = (e) => {
  //
  //         e.preventDefault();
  //         setInputs({email: e.target[0].value,
  //             password: e.target[1].value,
  //             password2: e.target[2].value
  //         });
  //
  //     };
  //
  //     let validateFormRegister = (inputs) => {
  //
  //         if(inputs.password.length < 8)
  //             return 'too-short-password';
  // };

  return (
    <StyledSignUpView>
      <Logo dark />
      <h3>
        <b>Lus est ars boni et aequi.</b>
        Prawo jest sztuką tego, co dobre i sprawiedliwe.
      </h3>

      <h1> Dołącz do nas już dziś! ;) </h1>

      <SignUpForm />
    </StyledSignUpView>
  );
};

export default SignUpView;
