import store from "../store";


const initialState = {

    userID: '',
    error: null,
    isTokenValid: null

};

const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case ('AUTHENTICATE_SUCCESS'): {
            localStorage.setItem('access', action.payload.data.access);
            localStorage.setItem('refresh', action.payload.data.refresh);
            localStorage.setItem('user', action.payload.data.id);
            console.log(localStorage);
            console.log(action.payload);

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
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('user');

            console.log("Logout!");
            console.log(localStorage);


            return {
                ...state,
                isTokenValid: false,
                userID: null,

            }
        }
    }



    return state;
    // console.log(action);

};

export default rootReducer;