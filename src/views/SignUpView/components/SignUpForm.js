import React from 'react';
import StyledSignUpForm from "./StyledSignUpForm";
import useSignUpForm from "../../../Hooks/useSignUpForm";


const SignUpForm = () => {

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

    return (
        <StyledSignUpForm>


            <div>
                <input placeholder="jan.kowalski@przykład.pl" id="email" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                <label htmlFor="email">E-mail:</label>
            </div>
            <div>
                <input placeholder="Twoje hasło (min. 6 znaków)" id="password" type="password" name="password" onChange={handleInputChange} value={inputs.password1}/>
                <label htmlFor="password">Hasło:</label>
            </div>
            <div>

                <input placeholder="Twoje hasło (min. 6 znaków)" id="password2" type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
                <label htmlFor="password2">Potwierdź hasło:</label>
            </div>
            <button type="submit">Zarejestruj się</button>
            <h4>Masz już konto? <b>Zaloguj się tutaj.</b></h4>

          </StyledSignUpForm>
    );
};

export default SignUpForm;