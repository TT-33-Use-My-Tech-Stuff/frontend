import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
export const SUBMIT_SIGNUP = "SUBMIT_SIGNUP";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";

export function submitSignup(signupData){

    console.log(signupData)

    return dispatch => {
        axios.post('https://tt-33-use-my-tech.herokuapp.com/api/users/register', signupData)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    // return { type: SUBMIT_SIGNUP, payload: signupData};
}

export function submitLogin(loginData){
    return{ type: SUBMIT_LOGIN, payload: loginData};
}