import React, {useEffect, useState} from 'react';
import StyledSignUpForm from "./StyledSignUpForm";

import StyledFormError
    from "../../../components/StyledFormError/StyledFormError";
import { connect } from 'react-redux';


import {
    authenticateAction,
    signUpAction
} from '../../../actions/index';
import {Link, Redirect} from "react-router-dom";


import styled from 'styled-components';
import {
    StyledCheckmark,
    StyledSwitch
} from "../StyledComponents/StyledSwitch";
import {render} from "react-dom";
import Cookie from 'js-cookie';

const SignUpButton = styled.button`

width: 100%;
height: 40px;
background: #131313;
color: white;
font-size: 2em;
border-radius: 5px;
border: none;
font-family: Oxanium, sans-serif;
cursor: pointer;
pointer-events: ${({disabled}) => disabled ? 'none' : 'initial'};
opacity: ${({disabled}) => disabled ? '0.3' : '1'};


`;



const SignUpForm = ({ signUp }) => {

    let [inputs, setInputs] = useState({email: '', password: '', password2: ''});
    let [errors, setErrors] = useState('');
    let [isButtonDisabled, setIsButtonDisabled] = useState(true);
    let [typeOfUser, setTypeOfUser] = useState(false);
    let [isFormSubmitted, setIsFormSubmitted] = useState(false);

    let handleChange = (e) => {


        setInputs({
            email: e.currentTarget[0].value,
            password: e.currentTarget[1].value,
            password2: e.currentTarget[2].value})
    };

    let validatePassword = (password) => {

        let passwordRegEx = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/;
        let isValid = passwordRegEx.test(String(password));


        if(password === ''){
            return true;
        } else {
            return isValid;
        }

    }

    let validateEmail = (email) => {

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = re.test(String(email).toLowerCase());

        if (email === ''){
            return true;
        }
        else return isValid;

    };

    let arePasswordsMatching = (p1, p2) => {

        if (p2 === ''){
            return true;
        }
        else
        {
            return p1 === p2;
        }


    };

    let registerUser = (e) => {
        e.preventDefault();
      console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);

        setInputs({email: e.target[0].value,
            password: e.target[1].value});

        Cookie.set('email', inputs.email);
        Cookie.set('lawyer', typeOfUser);

        signUp(inputs.email, inputs.password, typeOfUser);
        setIsFormSubmitted(true);

    };

    let isFormValid = () => {

        if(!validateEmail(inputs.email)
            || !validatePassword(inputs.password)
            || !arePasswordsMatching(inputs.password, inputs.password2)
            || inputs.email === ''
            || inputs.password === ''
            || inputs.password2 === ''){
            setIsButtonDisabled(true);
        }
        else setIsButtonDisabled(false);
    };




    useEffect(() => {

        isFormValid();

    });

    if(isFormSubmitted){
        return (
            <Redirect to={'/signup/success'}/>
        )
    }
    else {


        return (
            <StyledSignUpForm error={errors}
                              onChange={handleChange}
                              onSubmit={registerUser}>


                <StyledSwitch>
                    <div><h3>Klient</h3><StyledCheckmark
                        checked={!typeOfUser}
                        onClick={() => setTypeOfUser(false)}/>
                    </div>

                    <div><h3>Prawnik</h3><StyledCheckmark
                        checked={typeOfUser}
                        onClick={() => setTypeOfUser(true)}/>
                    </div>
                </StyledSwitch>

                <div>
                    <input
                        placeholder="jan.kowalski@przykład.pl"
                        id="email" type="text"
                        autoComplete="new-email"
                        name="email"/>
                    <label htmlFor="email">E-mail:</label>
                </div>
                <StyledFormError
                    error={!validateEmail(inputs.email)}
                >
                    Nieprawidłowy e-mail
                </StyledFormError>
                <div>
                    <input
                        placeholder="Twoje hasło (min. 8 znaków)"
                        id="password" type="password"
                        autoComplete="new-password"
                        name="password"/>
                    <label htmlFor="password">Hasło:</label>
                </div>

                <StyledFormError
                    error={!validatePassword(inputs.password)}
                >
                    Hasło musi zawierać min. 8 znaków,
                    wielkie litery,
                    małe litery, cyfry oraz znaki specjalne
                    (np. !@#$%^*).
                </StyledFormError>

                <div>

                    <input
                        placeholder="Twoje hasło (min. 8 znaków)"
                        id="password2" type="password"
                        autoComplete="new-password"
                        name="password2"/>
                    <label htmlFor="password2">Potwierdź
                        hasło:</label>
                </div>
                <StyledFormError
                    error={!arePasswordsMatching(inputs.password, inputs.password2)}
                >
                    Hasła nie są takie same, sprawdź
                    poprawność.</StyledFormError>

                <div>
                    <SignUpButton
                        disabled={isButtonDisabled}
                        type="submit">Zarejestruj
                        się</SignUpButton>
                    <h4>Masz już konto? <Link
                        to='/login'><b>Zaloguj się
                        tutaj.</b></Link></h4>
                </div>

            </StyledSignUpForm>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    signUp: (email, password, isLawyer) => dispatch(signUpAction(email, password, isLawyer)),
});
export default connect(null, mapDispatchToProps)(SignUpForm);