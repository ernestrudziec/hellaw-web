import { StyledMain } from "./components/GuestViewWrapper";
import Navigation from "../../components/Navigation/Navigation";
import React from "react";
import StyledSection
    from "./StyledComponents/StyledSection";
import StyledButton
    from "../../components/StyledComponents/StyledButton/StyledButton";


const GuestView = () => {




    return (

        <StyledMain>
            <Navigation/>

           <StyledSection>
               <h1>Setki radców prawnych gotowych udzielić Ci szybkiej odpowiedzi.</h1>

               <StyledButton width="300px" white>
                   Dołącz już teraz za darmo!
               </StyledButton>
               <h3>Jesteś radcą prawnym? <b>Dowiedz się więcej tutaj.</b></h3>

               <h2>Zweryfikowani  prawnicy, ranking najlepszych adwokatów, dostęp
                   do dziesiątek artykułów prawnych oraz prywatne konsultacje.</h2>



           </StyledSection>




        </StyledMain>
    );

};

export default GuestView;