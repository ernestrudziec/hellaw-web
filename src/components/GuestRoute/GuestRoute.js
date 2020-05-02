import {Redirect, Route} from "react-router";
import {useEffect, useState} from "react";
import React from "react";
import axios from "axios";
import Cookie from 'js-cookie';
import BeforeUserAuthSpinner
    from "../LoadingSpinners/BeforeUserAuthSpinner/BeforeUserAuthSpinner";
import {apiurl} from "../../hostadress";

let headers = {
    "Content-Type" : "application/json"
};

const hellaw = axios.create({
    baseURL: apiurl,
    headers: headers

});

export const GuestRoute = ({ component: Component, ...rest }) => {

    const [auth, setAuth] = useState(false);
    const [isTokenValidated, setIsTokenValidated] = useState(false);

    useEffect(() => {
        // send jwt to API to see if it's valid
        let token = Cookie.get('access');
        if (token) {
            hellaw
                .post('auth/jwt/verify', {"token": Cookie.get('access')})
                .then(payload => {

                    console.log(payload);
                    console.log(Cookie.get());
                    setAuth(true);
                    setIsTokenValidated(true);
                })
                .catch(err => {
                    console.log(err);

                    hellaw.post('auth/jwt/refresh', {"refresh" : localStorage.getItem('refresh')})
                        .then( res => {
                                console.log(res);
                                Cookie.set('access', res.data.access)
                                setAuth(true);
                            }
                        )
                        .catch(
                            err => {
                                console.log(err);
                                setAuth(false);
                                Cookie.remove("access");
                                Cookie.remove("refresh");
                            }
                        )
                        .then(() => setIsTokenValidated(true));
                })

        } else {
            setIsTokenValidated(true); // in case there is no token
        }

    }, []);

    if (!isTokenValidated) return <BeforeUserAuthSpinner/>; // or
    // some kind of loading animation

    return (<Route {...rest}
                   render={(props) => {
                       return auth ? <Redirect to="/logged" /> : <Component {...props} />
                   }} />)
}
