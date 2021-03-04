import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';
import styled from 'styled-components';

function Nav(props){
    const history = useHistory();

    const { loggedin } = props;

    const log_out = () => {
        localStorage.removeItem('token');
        history.push('/');
        props.logout();
    }

    return(
        <StyledNav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>Meet the Team</Link>
                {loggedin ? null : <Link to='/signup'>Sign Up</Link>}
                {loggedin ? 
                <span onClick={log_out}>Logout</span> :
                <Link to='/login'>Login</Link>}
                {loggedin && <Link to='/dash'>Profile</Link>}
                {loggedin && <Link to='/rentals'>Rent</Link>}
            </ul>
        </StyledNav>
    )
}

const mapStateToProps = state => {
    return{
        loggedin: state.loggedin
    }
}

export default connect(mapStateToProps, { logout })(Nav);

const StyledNav = styled.nav`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 0;
    }

    span{
        cursor: pointer;
        border-bottom: 1px dotted white;
    }
`