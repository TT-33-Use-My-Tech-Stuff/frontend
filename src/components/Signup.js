import React, { useState }from 'react';
import { connect } from 'react-redux';
import { submitSignup } from '../actions';
import SignUpForm from './SignUpForm'

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
        <div>
            <h1>Signup Form Here!</h1>
            <SignUpForm 
            values={form}
            update={onChange} 
            submit={onSubmit} 
            />
        </div>
    )
}

export default connect(null, { submitSignup })(Signup);

