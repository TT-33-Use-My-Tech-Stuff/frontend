import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const SUBMIT_SIGNUP = "SUBMIT_SIGNUP";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";

export const FETCH_USER = "FETCH_USER";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const submitSignup = (signupData) => dispatch => {

    console.log('signup data: ' + signupData)


        axios.post('https://tt-33-use-my-tech.herokuapp.com/api/users/register', signupData)
        .then(res => {
            console.log('signup response data: ' + res.data)
            dispatch({type: SIGNUP_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err.message)
        })

    //     return dispatch => {
    //         axiosWithAuth.post('https://buildweek-usemytech.herokuapp.com/users/user', signupData)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err.message)
    //         })
    // }

    // return { type: SUBMIT_SIGNUP, payload: signupData};
}

export function submitLogin(loginData){

    console.log(loginData);

    return dispatch => {
        axios.post('https://tt-33-use-my-tech.herokuapp.com/api/users/login', loginData)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);

            dispatch({type: LOGIN_SUCCESS, payload: {loggedin: true, id: res.data.user_id}});
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const logout = () => {
    return { type: LOGOUT, payload: false };
}

export const fetchUser = (id) => dispatch => {
    console.log('fetchUser got run! id: ' + id);

    axiosWithAuth().get(`https://tt-33-use-my-tech.herokuapp.com/api/users/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({type: FETCH_USER, payload: res.data});

        })
        .catch(err => {
            console.log(err);
        })
}



//  PETER BASE URL: 'https://tt-33-use-my-tech.herokuapp.com/api/users/register'
//  OSCAR BASE URL: 'https://buildweek-usemytech.herokuapp.com/user'

