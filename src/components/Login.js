import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions';

function Login(){

    const onSubmit = e => {
        e.preventDefault();
        submitLogin(/* YOUR FORM STATE HERE */)
    }

    return(
        <h1>Login Form Here!</h1>
    )
}

export default connect(null, { submitLogin })(Login);