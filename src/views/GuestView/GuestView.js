import React, {useEffect, useState} from 'react';
import { StyledMain, StyledHeading } from "./components/GuestViewWrapper";
import Logo from "../../components/Logo/Logo";
import {AuthUserWrapper} from "./components/AuthUserWrapper";
import Button from "../../components/StyledComponents/StyledButton/Button";
import { AuthButtons } from "./components/AuthUserWrapper";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import RegisterPanel
    from "./components/RegisterPanel/RegisterPanel";
import StyledInput
    from "../../components/StyledComponents/StyledInput/StyledInput";


const GuestView = () => {

    function toggleLoginPanelCollapse(){
        setLoginPanelCollapse(!isLoginPanelCollapsed);
    }

    function toggleRegisterPanelCollapse(){
        setRegisterPanelCollapse(!isRegisterPanelCollapsed);
    }


    let [isLoginPanelCollapsed, setLoginPanelCollapse] = useState(true);
    let [isRegisterPanelCollapsed, setRegisterPanelCollapse] = useState(true);


    return (

        <StyledMain>

            <Logo white/>
            <StyledHeading>

                <h1>Lus est ars boni et aequi.</h1>
                <h2>Prawo jest sztuką tego, co dobre i
                    sprawiedliwe</h2>

            </StyledHeading>


            <AuthUserWrapper
                isRegisterPanelCollapsed={isRegisterPanelCollapsed}
                isLoginPanelCollapsed={isLoginPanelCollapsed}
            >


                <LoginPanel isCollapsed={isLoginPanelCollapsed}>
                    <h1>Witamy ponownie.</h1>
                    <StyledInput placeholder="e-mail"/>
                    <StyledInput type="password" placeholder="hasło"/>
                </LoginPanel>

                <RegisterPanel isCollapsed={isRegisterPanelCollapsed}>
                    <h1>Zarejestruj się.</h1>
                    <StyledInput placeholder="e-mail"/>
                    <StyledInput type="password" placeholder="hasło"/>
                    <StyledInput type="password" placeholder="potwierdź hasło"/>
                </RegisterPanel>

                <AuthButtons>

                <Button isDisabled={!isRegisterPanelCollapsed}
                        onClick={toggleLoginPanelCollapse}
                        width="45%">
                    Zaloguj się
                </Button>
                <Button
                    isDisabled={!isLoginPanelCollapsed}
                    onClick={toggleRegisterPanelCollapse}
                    white
                    width="45%">
                    Dołącz do HELLaw
                </Button>

                </AuthButtons>

            </AuthUserWrapper>

        </StyledMain>
    );

};

export default GuestView;