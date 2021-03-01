import { SUBMIT_SIGNUP, SUBMIT_LOGIN } from '../actions';

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
    }
}

function reducer(state = initialState, action) {
    console.log(`action type: ${action.type}, action payload: ${action.payload}`)
    switch(action.type){
        case SUBMIT_SIGNUP:
            return {
                ...state,
                signup: action.payload
            }

        case SUBMIT_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }
}

export default reducer;