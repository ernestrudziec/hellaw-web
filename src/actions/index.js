
import Cookie from 'js-cookie';
import axios from 'axios';
import history from "../history";

let headers = {
    "Content-Type" : "application/json"
};

const hellaw = axios.create({
    baseURL: 'https://hellaw.eu/',
    headers: headers

});

// hellaw.post('auth/users/',
//     {"email": "ernest@rudziec.com","password": "zx27xmqwxc", "is_lawyer" : false, }
// ).then(response => {
//     console.log(response);
// }).catch(console.log);

// hellaw.post('auth/jwt/create/',
//     {"email": "ernest@rudziec.com","password": "zx27xmqwxc" }
// ).then(response => {
//     console.log(response);
// }).catch(console.log);




export const authenticateAction = (email, password) => dispatch => {

    dispatch({type: 'AUTHENTICATE_REQUEST'});

    return hellaw
        .post('auth/jwt/create/',{"email": email, "password": password })
        .then(payload => {
            // console.log(payload);
            dispatch({type: 'AUTHENTICATE_SUCCESS', payload });
            history.push('/logged');

        })
        .catch(err => {
            console.log(err);
            dispatch({type: 'AUTHENTICATE_FAILURE'})
            // console.log(localStorage);
            console.log(Cookie.get());
        });

};


export const checkTokenAction = (access) => dispatch => {

    dispatch({type: 'CHECK_TOKEN_REQUEST'});

    return hellaw
        .post('auth/jwt/verify/', {"token": access})
        .then(payload => {
            dispatch({type: 'TOKEN_VALID', payload});
            console.log(payload);
            // console.log(localStorage);
            console.log(Cookie.get());
        })
        .catch(err => {
            console.log(err);
        });
};

export const getUserInfoAction = (access) => dispatch => {

 console.log('ACTION!');

    return hellaw
        .get('/auth/users/me/', {headers: {
                'Authorization': `Bearer ${access}`
            }})
        .then(payload => {
            dispatch({type: 'USER_INFO_SUCCESS', payload});
            console.log(payload);
            // console.log(localStorage);
            console.log(Cookie.get());
        })
        .catch(err => {
            console.log(err);
        });
};
