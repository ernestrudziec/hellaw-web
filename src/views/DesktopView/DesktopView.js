import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import store from "../../store";
import {ThemeProvider} from "styled-components";
import {Redirect} from "react-router-dom";
import StyledDesktopView from "./StyledDesktopView";

import {
    authenticateAction,
    getUserInfoAction
} from "../../actions";
import {connect} from "react-redux";
import Cookie from 'js-cookie';
import UserInfo from "./components/UserInfo/UserInfo";
import Logo from "../../components/Logo/Logo";
import Navigation
    from "../../components/Navigation/Navigation";
import StyledButton
    from "../../components/StyledComponents/StyledButton/StyledButton";






const DesktopView = ({getUserInfo, userID, isLawyer, userEmail}) => {


    useEffect(() => {

        getUserInfo(Cookie.get('access'));

    }, []);


    return (
        <StyledDesktopView>

            <nav>
            <Logo dark/>
            <Link to='/logout'> <StyledButton logout onClick={() => { store.dispatch({type: 'LOGOUT_USER'});}}> Wyloguj się <span className="fas fa-sign-out-alt"/> </StyledButton></Link>
            </nav>

            <UserInfo userID={userID} isLawyer={isLawyer} userEmail={userEmail} />

        </StyledDesktopView>
    );




};

const mapDispatchToProps = dispatch => ({
    getUserInfo: (access) => dispatch(getUserInfoAction(access)),
});


const mapStateToProps = ({userID, userEmail, isLawyer}) => ({userID,  userEmail, isLawyer});



export default connect(mapStateToProps, mapDispatchToProps)(DesktopView);
