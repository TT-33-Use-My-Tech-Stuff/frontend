import React from 'react'
import styled from 'styled-components'

export default function SignUpForm(props){

    const {values, update, submit} = props

    const change = e => {
        const {name, value, type, checked} = e.target
        //Just in case a checkbox is used
        const valueToUse = type === 'checkbox' ?  checked : value
        update(name, valueToUse)
    }
 
    return (
        <FormSection>
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
                name='password'
                type='text' 
                placeholder='Password' 
                values={values.password}
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
            <button>Sign Up!</button>
        </form>
    </FormSection>
    )
}

//Styles
const FormSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        button{
            width: 50%;
            margin: 0 auto;
        }
    }
`