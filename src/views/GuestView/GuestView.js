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


const GuestView = () => {




    return (
<>
        <StyledHeroMain>
            <Navigation/>
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