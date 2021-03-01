import React from 'react';
import { connect } from 'react-redux';
import { submitSignup } from '../actions';


function Signup(props){

    const onSubmit = e => {
        e.preventDefault();
        props.submitSignup(/* YOUR FORM DATA HERE */);
    }

    return(
        <div>
            <h1>Signup Form Here!</h1>

        </div>
    )
}

export default connect(null, { submitSignup })(Signup);