import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav(){

    return(
        <StyledNav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>Meet the Team</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </ul>
        </StyledNav>
    )
}

export default Nav;

const StyledNav = styled.nav`
    width: 100%;
    height: 7.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
    }
`