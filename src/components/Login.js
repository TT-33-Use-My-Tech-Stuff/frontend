import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions';
import LoginForm from './LoginForm'
import styled from 'styled-components'
import loginSchema from './validation/loginSchema'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';


const initialFormValues = {
    username: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

const initialDisabledBtn = true;

function Login (props) {
    // State: initial form values, initial form errors, disabled login button
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErr, setFormErr] = useState(initialFormErrors);
    const [disabledbtn, setDisabledBtn] = useState(initialDisabledBtn);

    const history = useHistory();


    const updateInput = (name, value) => {
        //yup validation
        yup.reach(loginSchema, name)
            .validate(value)
            .then(() => {
                setFormErr({...formErr, [name]: ''})
            })
            .catch((err) => {
                setFormErr({...formErr, [name]: err.errors[0]})
            })
        
        
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = e => {
        e.preventDefault();
        props.submitLogin(formValues);
        history.push('/');
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
                values={formValues}
            />
        </div>
    )
}

export default connect(null, { submitLogin })(Login);


const StyledHeader = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
`