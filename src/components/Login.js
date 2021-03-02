import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions';
import LoginForm from './LoginForm'
import styled from 'styled-components'

/*
Login component:
- State that has initial values of login
- State that has error values
- State for disabled button

*/

const initialFormValues = {
    email: '',
    password: '',
}

const initialFormErrors = {
    email: '',
    password: '',
}

const initialDisabledBtn = true;

function Login (props) {
    // State: initial form values, initial form errors, disabled login button
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErr, setFormErr] = useState(initialFormErrors)
    const [disabledbtn, setDisabledBtn] = useState(initialDisabledBtn)


    const updateInput = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = e => {
        e.preventDefault();
        props.submitLogin(/* YOUR FORM STATE HERE */)
    }

    return(
        <div>
            <StyledHeader>Login Here!</StyledHeader>
            <LoginForm 
                updateInput={updateInput}
                disabled={disabledbtn}
                onSubmit={onSubmit}
            />
        </div>
    )
}

const StyledHeader = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
`


export default connect(null, { submitLogin })(Login);