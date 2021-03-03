import React from 'react'
import styled from 'styled-components'

export default function LoginForm (props) {
    const {disabled, updateInput, onSubmit, formErr, values} = props

    const onChange = (event) => {
        const {name, value} = event.target
        updateInput(name, value)
    }

    return (
        
        <StyledLogin>
            <form onSubmit={onSubmit}>
                <StyledParagraph>{formErr.email}</StyledParagraph>
                <StyledParagraph>{formErr.password}</StyledParagraph>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={onChange}
                    value={values.email}
                />

                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    value={values.password}
                />

                <StyledBtn disabled={disabled}>Login</StyledBtn>
            </form>
        </StyledLogin>
    )
}

const StyledLogin = styled.section`
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        

        input {
            margin-bottom: 5%;
            
        }
    }
`

const StyledBtn = styled.button`
    margin: 0 auto;
    width: 50%;
`

const StyledParagraph = styled.p`
    text-align: center;
    color: red;
    font-size: 1.4rem;
`