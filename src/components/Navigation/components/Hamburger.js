import React from 'react';
import StyledHamburger from "../StyledComponents/StyledHamburger";
import blackHamburger from '../../../assets/icons/menu_icon.svg';

const Hamburger = ({dark}) => {

    if (dark) {
        return (
            <StyledHamburger />
        );
    }
    else{
        return (
            <StyledHamburger src={blackHamburger}/>
        );

    }
};
export default Hamburger;