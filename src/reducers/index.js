import { SUBMIT_SIGNUP, SUBMIT_LOGIN, SIGNUP_SUCCESS, LOGIN_SUCCESS } from '../actions';

const initialState = {
    title: 'Hello from the reducer!',
    signup: {
        username: '',
        email: '',
        password: ''
    },
    login: {
        username: '',
        password: ''
    },
    loggedin: false,

    currentUser: {
        user_id: 0,
        username: '',
        email: ''
    }
}

function reducer(state = initialState, action) {
    console.log(`action type: ${action.type}, action payload: ` + action.payload)
    switch(action.type){
        case SUBMIT_SIGNUP:
            return {
                ...state,
                signup: action.payload
            };

        case SUBMIT_LOGIN:
            return {
                ...state,
                login: action.payload
            };

            case SIGNUP_SUCCESS:
                console.log('action.payload: ' + action.payload)
                return {
                    ...state,
                    currentUser: {
                        user_id: action.payload.user_id,
                        username: action.payload.username,
                        email: action.payload.email
                    }
                };

            case LOGIN_SUCCESS:
                return {
                    ...state,
                    loggedin: action.payload
                };
        default:
            return state;
    }
}

export default reducer;