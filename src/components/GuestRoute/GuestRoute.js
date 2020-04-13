import {Redirect, Route} from "react-router";
import {useEffect, useState} from "react";
import React from "react";
import axios from "axios";

let headers = {
    "Content-Type" : "application/json"
};

const hellaw = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: headers

});

export const GuestRoute = ({ component: Component, ...rest }) => {

    const [auth, setAuth] = useState(false);
    const [isTokenValidated, setIsTokenValidated] = useState(false);

    useEffect(() => {
        // send jwt to API to see if it's valid
        let token = localStorage.getItem("access");
        if (token) {
            hellaw
                .post('auth/jwt/verify', {"token": localStorage.getItem('access')})
                .then(payload => {

                    console.log(payload);
                    console.log(localStorage);
                    setAuth(true);
                    setIsTokenValidated(true);
                })
                .catch(err => {
                    console.log(err);

                    hellaw.post('auth/jwt/refresh', {"refresh" : localStorage.getItem('refresh')})
                        .then( res => {
                                console.log(res);
                                localStorage.setItem('access', res.data.access)
                                setAuth(true);
                            }
                        )
                        .catch(
                            err => {
                                console.log(err);
                                setAuth(false);
                                localStorage.removeItem("access");
                                localStorage.removeItem("refresh");
                            }
                        )
                        .then(() => setIsTokenValidated(true));
                })

        } else {
            setIsTokenValidated(true); // in case there is no token
        }

    }, []);

    if (!isTokenValidated) return <div> AUTHENTICATING ... </div>; // or
    // some kind of loading animation

    return (<Route {...rest}
                   render={(props) => {
                       return auth ? <Redirect to="/logged" /> : <Component {...props} />
                   }} />)
}
