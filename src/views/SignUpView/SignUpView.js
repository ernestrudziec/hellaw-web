import React, {useEffect, useState} from 'react';


import SignUpForm from "./components/SignUpForm";
import StyledSignUpView
    from "./StyledComponents/StyledSignUpView";
import Logo from "../../components/Logo/Logo";


const SignUpView = () => {


    return (
      <StyledSignUpView>

          <Logo dark/>
          <h3><b>Lus est ars boni et aequi.</b>
              Prawo jest sztuką tego, co dobre i sprawiedliwe.</h3>

          <h1> Dołącz do nas już dziś! ;) </h1>


        <SignUpForm/>

      </StyledSignUpView>
    );


};

export default SignUpView;