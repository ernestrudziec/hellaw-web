
import Cookie from 'js-cookie';
import axios from 'axios';
import history from "../history";
import { apiurl } from '../hostadress';

let headers = {
    "Content-Type" : "application/json"
};

const hellaw = axios.create({
    baseURL: apiurl,
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
            // console.log(Cookie.get());
        });

};


export const checkTokenAction = (access) => dispatch => {

    dispatch({type: 'CHECK_TOKEN_REQUEST'});

    return hellaw
        .post('auth/jwt/verify/', {"token": access})
        .then(payload => {
            dispatch({type: 'TOKEN_VALID', payload});
            // console.log(payload);
            // console.log(localStorage);
            // console.log(Cookie.get());
        })
        .catch(err => {
            console.log(err);
        });
};

export const getUserInfoAction = (access) => dispatch => {



    dispatch({type: 'USER_INFO_REQUEST'});

    return hellaw
        .get('/auth/users/me/', {headers: {
                'Authorization': `Bearer ${access}`
            }})
        .then(payload => {
            dispatch({type: 'USER_INFO_SUCCESS', payload});
            // console.log(payload);
            // console.log(localStorage);
            // console.log(Cookie.get());
        })
        .catch(err => {
            console.log(err);
            dispatch({type: 'USER_INFO_FAILURE'});
        });
};

export const getInquiriesAction = (access) => dispatch => {



    dispatch({type: 'GET_ALL_INQUIRIES_REQUEST'});

    return hellaw
        .get('/api/inquiries/', {headers: {
                'Authorization': `Bearer ${access}`
            }})
        .then(payload => {
            dispatch({type: 'GET_ALL_INQUIRIES_SUCCESS', payload});
        })
        .catch(err => {
            console.log(err);
        });
};

export const signUpAction = (email, password, isLawyer) => dispatch => {

    console.log('sign up!');

    dispatch({type: 'SIGN_UP_REQUEST'});

    return hellaw
        .post('/auth/users/', {
            email: email,
            password: password,
            is_lawyer: isLawyer
        })
        .then(payload => {
            dispatch({type: 'SIGN_UP_SUCCESS', payload});
            // console.log(payload);
            // console.log(localStorage);
            // console.log(Cookie.get());
        })
        .catch(err => {
            dispatch({type: 'SIGN_UP_FAILURE'});
            console.log(err);
        });
};

export const getInquiryByIdAction = (access, id) => dispatch => {



    dispatch({type: 'GET_INQUIRY_BY_ID_REQUEST'});

    return hellaw
        .get(`/api/inquiries/${id}`, {headers: {
                'Authorization': `Bearer ${access}`
            }})
        .then(payload => {

            dispatch({type: 'GET_INQUIRY_BY_ID_SUCCESS', payload});
            console.log(payload.data[0]);


        })
        .catch(err => {
            console.log(err);
        });
};
