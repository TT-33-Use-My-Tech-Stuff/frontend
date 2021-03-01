import React from 'react'
import styled from 'styled-components'

export default function SignUpForm(props){

    const {values, update, submit, errors, disabled} = props

    const change = e => {
        const {name, value, type, checked} = e.target
        //Just in case a checkbox is used
        const valueToUse = type === 'checkbox' ?  checked : value
        update(name, valueToUse)
    }
 
    return (
        <FormSection>
            <div className='error-modal' style={{color: 'red'}}>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.confirmPassword}</p>
            </div>
            <form onSubmit={submit}>
                <label>
                    <input 
                    name='name' 
                    type='text' 
                    placeholder='Name'
                    values={values.name}
                    onChange={change}
                    />
                </label>
                <label>
                    <input 
                    name='email'
                    type='text' 
                    placeholder='Email' 
                    values={values.email}
                    onChange={change}
                    />
                </label>
                <label>
                    <input 
                    name='password' 
                    type='text' 
                    placeholder='Password'
                    values={values.password}
                    onChange={change}
                    />
                </label>
                <button disabled={disabled}>Sign Up!</button>
            </form>
        </FormSection>
    )
}

//Styles
const FormSection = styled.section`
    form {
        font-size: 6rem;
    }
`