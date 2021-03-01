import React, { useState }from 'react';
import { connect } from 'react-redux';
import { submitSignup } from '../actions';
import SignUpForm from './SignUpForm';
import styled from 'styled-components';

//THIS FILE HOLDS ALL STATE AND RENDERS THE FORM AS CHILD COMPONENT
//PASSING STATE AND FUNCTIONS AS PROPS TO THE CHILD
function Signup(props){

    //Empty form shape
    const initialForm = {
        name: '',
        password: '',
        email: ''
    }


    /*State slices: #1 Form State
                   */
    const [form, setForm] = useState(initialForm)

    const onChange = (inputName, inputValue) => { 
        setForm({
            ...form,
            [inputName]: inputValue
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        props.submitSignup(form);
    }

    return(
        <StyledSignup>
            <h1>Sign Up Here!</h1>
            <SignUpForm 
            values={form}
            update={onChange} 
            submit={onSubmit} 
            />
        </StyledSignup>
    )
}

export default connect(null, { submitSignup })(Signup);

const StyledSignup = styled.div`
    h1{
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 0;
    }
`