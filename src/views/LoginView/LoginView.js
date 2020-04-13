import React from 'react';
import StyledLoginView from "./components/StyledLoginView";
import Logo from "../../components/Logo/Logo";
import LoginForm from "./components/LoginForm";
import { connect } from 'react-redux';
import {Redirect} from "react-router";

const LoginView = ({ userID, error }) => {

    if(userID){
        return(
            <Redirect to='/logged'/>
        );
    }

    else {

        return (
            <StyledLoginView>

                <Logo white/>
                <h3><b>Lus est ars boni et aequi.</b>
                    Prawo jest sztuką tego, co dobre i
                    sprawiedliwe.</h3>

                <h1> Witamy ponownie! ;) </h1>
                <h1> {userID ? 'Zalogowano!' : null}</h1>


                <LoginForm error={error}/>


            </StyledLoginView>
        );
    }

}

    const mapStateToProps = ({userID = null, error = null}) => ({userID, error});

export default connect(mapStateToProps)(LoginView);

