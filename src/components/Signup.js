import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';
import { submitSignup } from '../actions';
import SignUpForm from './SignUpForm'

import * as yup from 'yup'
import signSchema from './validation/signupSchema'

//THIS FILE HOLDS ALL STATE AND RENDERS THE FORM AS CHILD COMPONENT
//PASSING STATE AND FUNCTIONS AS PROPS TO THE CHILD
function Signup(props){

    //Empty form shape
    const initialForm = {
        name: '',
        email: '',
        password: '',
    }
    //Empty form error shape
    const intialFormErrors = {
        name: '',
        email: '',
        password: '',
    }
    //Button disabled until form matches schema

    const initalDisabled = true

    /*State slices: #1 Form State
                    #2 Error State against validation*/
    const [form, setForm] = useState(initialForm)
    const [formErrors, setFormErrors] = useState(intialFormErrors)
    const [disabled, setDisabled] = useState(initalDisabled)

    const onChange = (inputName, inputValue) => { 
        //Schema Validate
        yup.reach(signSchema, inputName)
        .validate(inputValue)
        .then(() => {
            setFormErrors({...formErrors, [inputName]: ''})
        })
        .catch(err => {
            setFormErrors({...formErrors, [inputName]: err.errors[0]})
        })
        setForm({
            ...form,
            [inputName]: inputValue
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        props.submitSignup(form);
    }

    //Handles submission button's disabled prop
    useEffect(() => {
        signSchema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return(
        <div>
            <h1>Signup Form Here!</h1>
            <SignUpForm 
            values={form}
            update={onChange} 
            submit={onSubmit}
            errors={formErrors} 
            disabled={disabled}
            />
        </div>
    )
}

export default connect(null, { submitSignup })(Signup);

