import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_USER = "FETCH_USER";
export const EDIT_USER = "EDIT_USER";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const FETCH_TECH = "FETCH_TECH";
export const ADD_TECH = "ADD_TECH";

// / / / / / Action Creator for User Registration / / / / / //

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

// / / / / / Action Creator for User Login / / / / / //

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

// / / / / / Action Creator for User Logout / / / / / //

export const logout = () => {
    return { type: LOGOUT, payload: false };
}

// / / / / / Action Creator for Fetching Single User Data | Setting that user to State / / / / / //

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

// / / / / / Action Creator for Editing User Info / / / / / //

export const editUser = (id, userData) => dispatch => {
    axiosWithAuth().put(`https://tt-33-use-my-tech.herokuapp.com/api/users/${id}`, userData)
        .then(res => {
            console.log(res.data);
            dispatch({type: EDIT_USER, payload: res.data})
        })
        .catch(err => {
            console.log(err);
        })
}

// / / / / / Action Creator for Fetching Tech List / / / / / //

export const fetchTech = () => dispatch => {
    console.log('fetchTech got run!');

    axiosWithAuth().get('https://tt-33-use-my-tech.herokuapp.com/api/tech')
        .then(res => {
            console.log(res.data);
            dispatch({type: FETCH_TECH, payload: res.data});
        })
        .catch(err => {
            console.log(err);
        })
}

// / / / / / Action Creator for Adding New Tech / / / / / //

export const addTech = (newTech) => dispatch => {
    console.log('addTech got run!');

    axiosWithAuth().post('https://tt-33-use-my-tech.herokuapp.com/api/tech', newTech)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}



//  PETER BASE URL: 'https://tt-33-use-my-tech.herokuapp.com/api/users/register'
//  OSCAR BASE URL: 'https://buildweek-usemytech.herokuapp.com/user'

