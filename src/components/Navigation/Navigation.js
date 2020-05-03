import React, {useEffect} from 'react';
import { StyledNavigation,
    StyledUl,
    StyledLi,
    StyledTopNav,
    StyledHamburger,
    StyledBlurryBackground
} from "./StyledComponents/StyledNavigation";
import Logo from "../Logo/Logo";
import store from "../../store";
import { connect } from 'react-redux';
import {Link, NavLink} from "react-router-dom";
import StyledButton
    from "../StyledComponents/StyledButton/StyledButton";
import StyledDesktopView
    from "../../views/DesktopView/StyledDesktopView";
import history from "../../history";

const handleHamburgerClick = () => {

    console.log('toggle');
    console.log(store.getState().isNavExpanded);

    if(store.getState().isNavExpanded) store.dispatch({type: 'CLOSE_NAV'});
    else store.dispatch({type: 'EXPAND_NAV'});


};

const Navigation = ({isNavExpanded}) => {


    return (
        <>
            <StyledBlurryBackground visible={isNavExpanded}/>
        <StyledNavigation>
            <StyledTopNav>
            <Logo dark/>
            <StyledHamburger onClick={handleHamburgerClick} className="fas fa-bars"/>
            </StyledTopNav>
    <StyledUl visible={isNavExpanded}>
        <Link> <StyledLi>Sprawy</StyledLi></Link>
        <Link> <StyledLi>Ranking prawników</StyledLi></Link>
        <Link> <StyledLi>FAQ</StyledLi></Link>
        <Link> <StyledLi>Premium</StyledLi></Link>
         <Link><StyledLi>Twój profil</StyledLi></Link>
            <Link>
                <StyledLi onClick={() => { store.dispatch({type: 'LOGOUT_USER'});}}>
                     Wyloguj się
                    <i className="fas fa-sign-out-alt"/>
                </StyledLi>
            </Link>
    </StyledUl>
        </StyledNavigation>
            </>
    );
};

const mapStateToProps = ({isNavExpanded}) => ({isNavExpanded});

export default connect(mapStateToProps, null)(Navigation);