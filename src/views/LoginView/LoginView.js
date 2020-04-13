import React from 'react';
import StyledLoginView from "./components/StyledLoginView";
import Logo from "../../components/Logo/Logo";
import LoginForm from "./components/LoginForm";
import { connect } from 'react-redux';
import {Redirect} from "react-router";

import Cookie from 'js-cookie';

const LoginView = ({ error }) => {


            return (
            <StyledLoginView>

            <Logo white/>
            <h3><b>Lus est ars boni et aequi.</b>
            Prawo jest sztuką tego, co dobre i
            sprawiedliwe.</h3>

            <h1> Witamy ponownie! ;) </h1>
            <h1> {Cookie.get('access') ? 'Zalogowano!' : null}</h1>


            <LoginForm error={error}/>


            </StyledLoginView>
            );


}

    const mapStateToProps = ({error = null}) => ({error});

export default connect(mapStateToProps)(LoginView);

