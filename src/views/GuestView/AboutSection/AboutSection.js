import React from 'react';
import StyledSection from "../StyledComponents/StyledSection";
import {StyledHeroMain} from "../Hero/components/StyledHeroMain";
import StyledMain from "../StyledComponents/StyledMain";

const AboutSection = () => {
    return (
        <StyledMain >
      <StyledSection aboutsection>
          <h1>Potrzebujesz porady prawnej?</h1>
          <h2>Radcy prawni dostępni w naszej aplikacji Ci pomogą.</h2>
          <h1>Anonimowość? Skorzystaj z możliwości <strong>konta premium.</strong></h1>

          <h2>Masz krępujące pytanie? Wszedłeś w konflikt z prawem? Aby zadać pytanie, wystarczy, że podasz imię oraz e-mail. Prawnik, który udzieli Ci odpowiedzi, jest ponadto objęty bezwzględną tajemnicą powierzonych mu informacji – dzięki temu możesz być spokojny o poufność Waszej korespondencji.</h2>
          <h1>Prosty język, jasność przekazu - odpowiadamy prosto z mostu.</h1>

          <h2>Wydaje Ci się czasem, że prawnicy mówią obcym językiem? Nie u nas! W poradzie prawnej otrzymasz nie tylko cytaty z odpowiednich aktów prawnych, ale przede wszystkim ich jasną i zrozumiałą interpretację w odniesieniu do Twojej konkretnej sytuacji..</h2>

          <h1>Po prostu <strong>zadaj pytanie</strong> i czekaj na odpowiedzi.</h1>
          <h2>Porady prawne w naszym serwisie to przede wszystkim niezwykła wygoda – nie wychodzisz z domu, nie umawiasz się wcześniej z prawnikiem, a do tego masz stały dostęp do porady!</h2>

          <h1>Użytkownicy serwisu to znawcy prawa z całej Polski.</h1>
          <h2>Masz niecodzienne pytanie prawne? Nasz zespół tworzy sztab specjalistów: doświadczeni prawnicy, radcy prawni, doradcy podatkowi, rzeczoznawcy i agenci celni, którzy nie tylko udzielą Ci wyczerpującej porady, ale w razie potrzeby będą reprezentować Cię</h2>
      </StyledSection>
        </StyledMain>
    );
};

export default AboutSection;