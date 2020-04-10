import React from 'react';
import GlobalStyles from "../globalStyles/GlobalStyle";
import GuestView from "./GuestView/GuestView";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import PageNotFoundView
    from "./PageNotFoundView/PageNotFoundView";
import SignUpView from "./SignUpView/SignUpView";



const RootView = () => (

       <Router>
             <GlobalStyles/>
             <ThemeProvider theme={theme}>

                 <Switch>
                     <Route exact path='/'>
                         <GuestView/>
                     </Route>



                     <Route path='/signup' component={SignUpView}/>
                     <Route path='/404' component={PageNotFoundView} />
                     <Redirect from='*' to='/404' />
                 </Switch>

             </ThemeProvider>
       </Router>


);

export default RootView;
