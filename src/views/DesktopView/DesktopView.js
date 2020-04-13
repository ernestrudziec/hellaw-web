import React from 'react';
import {Link} from "react-router-dom";
import LogoutButton from "../../components/logoutbutton";
import store from "../../store";
import {ThemeProvider} from "styled-components";
import {Redirect} from "react-router-dom";
import StyledDesktopView from "./StyledDesktopView";

const DesktopView = () => {
    return (
        <StyledDesktopView>
            YOU ARE LOGGED IN! :D
            <Link to='/'> <LogoutButton onClick={() => { store.dispatch({type: 'LOGOUT_USER'});}}> Wyloguj się </LogoutButton></Link>

        </StyledDesktopView>
    );
};

export default DesktopView;