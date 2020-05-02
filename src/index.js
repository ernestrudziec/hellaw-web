import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './fonts.css';
import {Provider} from "react-redux";
import store from "./store";
import {
    Router, Link, Redirect, Route,
    Switch
} from "react-router-dom";
import GlobalStyles from "./globalStyles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/mainTheme";
import LoginView from "./views/LoginView/LoginView";
import ReduxView from "./reduxTraining/reduxView";
import SignUpView from "./views/SignUpView/SignUpView";
import PageNotFoundView
    from "./views/PageNotFoundView/PageNotFoundView";
import GuestView from "./views/GuestView/GuestView";
import {checkTokenAction, logoutAction} from "./actions";
import DesktopView from "./views/DesktopView/DesktopView";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { GuestRoute } from "./components/GuestRoute/GuestRoute";
import Cookie from "js-cookie";
import history from "./history";
import LogoutView from "./views/LogoutView/LogoutView";
import BeforeUserAuthSpinner from './components/LoadingSpinners/BeforeUserAuthSpinner/BeforeUserAuthSpinner';
import SignUpSuccessView
    from "./views/SignUpView/components/SignUpSuccessView";
import InquiryView from "./views/InquiryView/InquiryView";

// console.log('index: ');
// console.log(localStorage);
console.log(Cookie.get());
//
// const access = localStorage.getItem('access');
// if (access) {
//
//     store.dispatch(checkTokenAction(localStorage.getItem('access')));
// }


ReactDOM.render(
  <React.StrictMode>

      <Provider store={store}>

          <Router history={history}>
              <GlobalStyles/>

              <ThemeProvider theme={theme}>

                  <Switch>
                      <PrivateRoute path="/logged/inquiry" component={InquiryView}/>
                      <GuestRoute path='/signup/success' component={SignUpSuccessView} />
                      <GuestRoute path='/logout' component={LogoutView} />
                      <GuestRoute exact path='/' component={GuestView} />
                      <PrivateRoute path="/logged" component={DesktopView}/>
                      <GuestRoute path='/login' component={LoginView}/>
                      <Route path='/redux' component={ReduxView}/>
                      <GuestRoute path='/signup' component={SignUpView}/>
                      <Route path='/404' component={PageNotFoundView} />
                      <Redirect from='*' to='/404' />
                  </Switch>

              </ThemeProvider>

      </Router>
      </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

