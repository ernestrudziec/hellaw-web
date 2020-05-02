import store from "../store";
import Cookie from 'js-cookie';
import history from "../history";
import {getUserInfoAction} from "../actions";

const initialState = {

    userID: '',
    error: null,
    isTokenValid: null,
    isLawyer: null,
    userEmail: null,
    isUserInfoFetched: false,
    isUserSignUpPosted: true,
    allInquiries: null,

};

const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case ('AUTHENTICATE_SUCCESS'): {
            // localStorage.setItem('access', action.payload.data.access);
            // localStorage.setItem('refresh', action.payload.data.refresh);
            // localStorage.setItem('user', action.payload.data.id);
            Cookie.set('access', action.payload.data.access);
            Cookie.set('refresh', action.payload.data.refresh);
            Cookie.set('user', action.payload.data.id);
            // console.log(Cookie.get());
            // console.log(localStorage);
            // console.log(action.payload);

            return {
                ...state,
                userID: action.payload.data.id,
                error: null
            };
    }

        case ('AUTHENTICATE_FAILURE'):
            return {
                ...state,
                error: true,
            };


        case('TOKEN_VALID'):
            return {
                ...state,
                isTokenValid: true
            }

        case('LOGOUT_USER'): {
            // localStorage.removeItem('access')
            // localStorage.removeItem('refresh');
            // localStorage.removeItem('user');
            Cookie.remove('access');
            Cookie.remove('refresh');
            Cookie.remove('user');


            // console.log("Logout!");
            // console.log(localStorage);
            // console.log(Cookie.get());


            return {

                isTokenValid: false,
                userID: null,

            }
        }


        case('USER_INFO_REQUEST'):{

            return {
                ...state,
                isUserInfoFetched: false
            }
        }

        case('USER_INFO_SUCCESS'): {
            // console.log("SUCCESS");


            return {
                ...state,
                userID: action.payload.data.id,
                userEmail: action.payload.data.email,
                isLawyer: action.payload.data.is_lawyer,
                isUserInfoFetched: true
            }


        }

        case('USER_INFO_FAILURE'): {
            console.log("FAILURE");
        }

        break;


        case('GET_ALL_INQUIRIES_SUCCESS'): {

            // console.log("get!");
            // console.log(action.payload.data);

            return {
                ...state,
                allInquiries: action.payload.data,
            }

        }

        break;


        case('SIGN_UP_REQUEST'): {

            return {
                ...state,
                isUserSignUpPosted: false,
            }

        }

        break;

        case('SIGN_UP_SUCCESS'): {
            return {
                ...state,
                isUserSignUpPosted: true,
            }


        }


        case('GET_INQUIRY_BY_ID_REQUEST'): {
            return {
                ...state,
                isExactInquiryLoaded: false,
            }
        }

        case('GET_INQUIRY_BY_ID_SUCCESS'): {
            return {
                ...state,
                isExactInquiryLoaded: true,
                exactInquiry: action.payload.data[0]
            }

        }

        case('GET_INQUIRY_BY_ID_FAILURE'): {
            return {
                ...state
            }
        }


    }



    return state;
    // console.log(action);

};

export default rootReducer;