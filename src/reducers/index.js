import { SUBMIT_SIGNUP } from '../actions';

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
            console.log('submit signup payload: ' + action.payload)
            return {
                ...state,
                signup: action.payload
            }
        default:
            return state;
    }
}

export default reducer;