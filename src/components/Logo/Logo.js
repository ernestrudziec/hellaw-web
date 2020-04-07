import React from 'react';
import whiteLogo from '../../assets/logo/hellaw_logo_white.svg';
import StyledLogo from "./StyledLogo/StyledLogo";

const Logo = ({dark}) => {

    if (dark) {
        return (
            <StyledLogo />
        );
    }
    else{
        return (
            <StyledLogo src={whiteLogo}/>
        );

    }
};




export default Logo;