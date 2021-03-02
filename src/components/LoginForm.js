import React from 'react'
import styled from 'styled-components'

export default function LoginForm (props) {
    const {disabled, updateInput, onSubmit} = props
    

    const onChange = (event) => {
        const {name, value} = event.target
        updateInput(name, value)
    }

    return (
        <StyledLogin>
            <form onSubmit={onSubmit}>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={onChange}
                />

                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
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