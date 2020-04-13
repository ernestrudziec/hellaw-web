import React, {useState} from 'react';
import StyledLoginForm from "./StyledLoginForm";
import {Link} from "react-router-dom";
import {authenticateAction} from "../../../actions";
import {connect} from "react-redux";
import StyledFormError
    from "../../../components/StyledFormError/StyledFormError";

const LoginForm = ({authenticate, error}) => {

    let [inputs, setInputs] = useState({email: '', password: ''});
    let [errors, setErrors] = useState('');

    let authUser = (e) => {
        e.preventDefault();

        setInputs({email: e.target[0].value,
            password: e.target[1].value});

        authenticate(inputs.email, inputs.password);


    };


    return(
        <>
        <StyledLoginForm onSubmit={authUser}>

            <div>
                <input  placeholder="jan.kowalski@przykład.pl" id="email" type="text" inputMode="email" autoComplete="email" name="email" />
                <label htmlFor="email">E-mail:</label>
            </div>

            <div>
                <input  placeholder="Twoje hasło (min. 8 znaków)" id="password" type="password" autoComplete="current-password" name="password"/>
                <label htmlFor="password">Hasło:</label>
            </div>

            <div>
            <StyledFormError filled error={error}>
                <span>Niestety, podany email i hasło są nieprawidłowe. Spróbuj ponownie lub skorzystaj z opcji <b>zresetowania hasła.</b></span>
            </StyledFormError>
            <button type="submit">Zaloguj się</button>
            <h4>Nie masz konta w HELLaw? <Link to='/signup'><b>Załóż je tutaj.</b></Link></h4>

            </div>

        </StyledLoginForm>

        </>
    );

};



const mapDispatchToProps = dispatch => ({
    authenticate: (email, password) => dispatch(authenticateAction(email, password)),
});
export default connect(null, mapDispatchToProps)(LoginForm);