import React, {useEffect, useState} from 'react';
import StyledSignUpForm from "./StyledSignUpForm";
import {isEmptyArray, setIn} from "formik";
import StyledFormError
    from "../../../components/StyledFormError/StyledFormError";



const SignUpForm = ({callback}) => {

    let [inputs, setInputs] = useState({email: '', password: '', password2: ''});
    let [errors, setErrors] = useState('');

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



    return (
        <StyledSignUpForm error={errors} onChange={handleChange} onSubmit={callback} >


            <div>
                <input formNoValidate placeholder="jan.kowalski@przykład.pl" id="email" type="text" inputMode="email" name="email" />
                <label htmlFor="email">E-mail:</label>
            </div>
            <StyledFormError
                error={!validateEmail(inputs.email)}
            >
                Nieprawidłowy e-mail
            </StyledFormError>
            <div>
                <input formNoValidate placeholder="Twoje hasło (min. 6 znaków)" id="password" type="password" name="password"/>
                <label htmlFor="password">Hasło:</label>
            </div>

            <StyledFormError
                error={!validatePassword(inputs.password)}
            >
                Hasło musi zawierać min. 8 znaków, wielkie litery,
                małe litery, cyfry oraz znaki specjalne (np. !@#$%^*).
            </StyledFormError>

            <div>

                <input formNoValidate placeholder="Twoje hasło (min. 6 znaków)" id="password2" type="password" name="password2" />
                <label htmlFor="password2">Potwierdź hasło:</label>
            </div>
            <StyledFormError
                error={!arePasswordsMatching(inputs.password, inputs.password2)}
            >
                Hasła nie są takie same, sprawdź poprawność.</StyledFormError>

            <button type="submit">Zarejestruj się</button>
            <h4>Masz już konto? <b>Zaloguj się tutaj.</b></h4>

          </StyledSignUpForm>
    );
};

export default SignUpForm;