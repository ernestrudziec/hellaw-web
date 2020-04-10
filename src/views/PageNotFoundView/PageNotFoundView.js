import React from 'react';
import Styled404Error from "./Styled404Error/Styled404Error";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";

const PageNotFoundView = () => {
    return (
       <Styled404Error>
           <Logo dark />

        <h1>404.</h1>
           <h2>Niestety nie odnaleziono strony o wskazanym adresie.
           </h2>
           <Link to='/'><h3>Przejdź do strony głównej.</h3></Link>
       </Styled404Error>
    );
};

export default PageNotFoundView;