import {
    StyledHeroMain,

} from "./Hero/components/StyledHeroMain";
import Navigation from "../../components/Navigation/Navigation";
import React from "react";
import StyledButton
    from "../../components/StyledComponents/StyledButton/StyledButton";
import StyledSection
    from "./StyledComponents/StyledSection";
import AboutSection from "./AboutSection/AboutSection";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
width: 85%;
max-width: 1000px;
height: 20%;
padding: 0;
display: flex;
align-items: center;
justify-content: space-between;

`;

const GuestView = () => {




    return (
<>
        <StyledHeroMain>

            <StyledNavigation>

                <Logo white/>
                <Link to='/login'>
                    <StyledButton login>
                        Zaloguj się <span className="fas fa-sign-in-alt"/>
                    </StyledButton>
                </Link>

            </StyledNavigation>

           <StyledSection>

               <h1>Setki radców prawnych gotowych udzielić Ci szybkiej odpowiedzi.</h1>

               <Link to='/signup'>
                   <StyledButton yellow>
                    Załóż konto za darmo!
                   </StyledButton>
               </Link>

               <h3>Jesteś radcą prawnym? <b>Dowiedz się więcej tutaj.</b></h3>
               <h2>Zweryfikowani  prawnicy, ranking najlepszych adwokatów, dostęp
                   do dziesiątek artykułów prawnych oraz prywatne konsultacje.</h2>
           </StyledSection>
        </StyledHeroMain>

    <AboutSection/>

    </>
    );

};

export default GuestView;