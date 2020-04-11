import React from 'react';
import { useState } from "react";


 const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({email: '', password: '', password2: ''});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useSignUpForm;