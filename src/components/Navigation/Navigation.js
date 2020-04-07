import React from 'react';
import StyledNavigation
    from "./StyledComponents/StyledNavigation";
import Logo from "../Logo/Logo";
import hamburger from '../../assets/icons/menu_icon.svg';
import StyledHamburger from "./StyledComponents/StyledHamburger";
import Hamburger from "./components/Hamburger";
import StyledButton
    from "../StyledComponents/StyledButton/StyledButton";

const Navigation = () => {
    return (
        <StyledNavigation>

            <Logo white/>
            <StyledButton login>
                Zaloguj się
            </StyledButton>

        </StyledNavigation>
    );
};

export default Navigation;