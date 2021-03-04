import { SUBMIT_SIGNUP, SUBMIT_LOGIN, SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT, FETCH_USER } from '../actions';

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
        email: '',
        role: '',
        role_id: 0
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
                console.log('signup action.payload: ' + action.payload)
                return {
                    ...state,
                    currentUser: {
                        ...state.currentUser,
                        user_id: action.payload.user_id,
                    }
                };

            case LOGIN_SUCCESS:
                return {
                    ...state,
                    loggedin: action.payload.loggedin,
                    currentUser: {
                        ...state.currentUser,
                        user_id: action.payload.id
                    }
                };

            case LOGOUT:
                console.log('Logout got run!')
                return {
                    ...state,
                    loggedin: action.payload
                }

            case FETCH_USER:
                return {
                    ...state,
                    currentUser: {
                        user_id: action.payload.user_id,
                        username: action.payload.username,
                        email: action.payload.email,
                        role: action.payload.role_id === 1 ? 'renter' : 'owner',
                        role_id: action.payload.role_id
                    }
                }
        default:
            return state;
    }
}

export default reducer;