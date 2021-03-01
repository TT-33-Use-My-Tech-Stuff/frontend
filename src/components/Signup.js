import React, {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { submitSignup } from '../actions';


function Signup(props){

    //Empty form shape
    const initialForm = {
        name: '',
        password: '',
        email: ''
    }

    /*State slices: #1 Form State
                    #2  */
    const [form, setForm] = useState(initialForm)

    const onChange = (inputName, inpuitValue) => {
        setForm({
            ...form,
            [inputName]: inpuitValue
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        props.submitSignup(/* YOUR FORM DATA HERE */);
    }

    return(
        <div>
            <h1>Signup Form Here!</h1>
            <form>

            </form>
        </div>
    )
}

export default connect(null, { submitSignup })(Signup);