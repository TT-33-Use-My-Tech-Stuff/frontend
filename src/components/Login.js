import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions';
import LoginForm from './LoginForm'
import styled from 'styled-components'
import loginSchema from './validation/loginSchema'
import * as yup from 'yup'

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

    //useEffect to enable button when validation is clear
    useEffect(() => {
        loginSchema.isValid(formValues)
            .then(valid => setDisabledBtn(!valid))
    }, [formValues])

    return(
        <div>
            <StyledHeader>Login Here!</StyledHeader>
            <LoginForm 
                updateInput={updateInput}
                disabled={disabledbtn}
                onSubmit={onSubmit}
                formErr={formErr}
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