import React from 'react';
import StyledNavigation
    from "./StyledComponents/StyledNavigation";
import Logo from "../Logo/Logo";
import hamburger from '../../assets/icons/menu_icon.svg';
import StyledHamburger from "./StyledComponents/StyledHamburger";
import Hamburger from "./components/Hamburger";
import StyledButton
    from "../StyledComponents/StyledButton/StyledButton";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <StyledNavigation>

            <Logo white/>
            <Link to='/login'>
            <StyledButton login>
                Zaloguj się <span className="fas fa-sign-in-alt"/>
            </StyledButton>
            </Link>

        </StyledNavigation>
    );
};

export default Navigation;