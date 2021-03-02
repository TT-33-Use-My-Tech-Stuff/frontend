import React from 'react'
import styled from 'styled-components'

export default function LoginForm (props) {
    const {disabled} = props
    
    return (
        <StyledLogin>
            <form>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                />

                <input
                    name='password'
                    type='password'
                    placeholder='Password'
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