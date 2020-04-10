import React from 'react';
import whiteLogo from '../../assets/logo/hellaw_logo_white.svg';
import StyledLogo from "./StyledLogo/StyledLogo";
import darkLogo from "../../assets/logo/hellaw_logo_dark.svg";


const Logo = ({dark}) => {

    if (dark) {
        return (
            <StyledLogo src={darkLogo}/>
        );
    }
    else{
        return (
            <StyledLogo src={whiteLogo}/>
        );

    }
};




export default Logo;