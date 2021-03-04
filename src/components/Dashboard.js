import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchUser, editUser } from '../actions';
import axios from 'axios';

import EditUser from './EditUser';

const initEditData = {
    username: '',
    email: '',
    role_id: ''
}

function Dashboard(props){
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState(initEditData)
    const { currentUser } = props;


    useEffect(() => {
        props.fetchUser(currentUser.user_id);
    }, [])

    //* action will need to take in user id AND new data as arguments

    function edit(e){
        e.preventDefault();
        props.editUser(currentUser.user_id, editData);
    }

    const onChange = e => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <StyledDash>
            <div>
                <div className='imgPlaceholder'>Profile Image Here</div>

                <div className='profileInfo'>
                    <div className='details'>
                        {currentUser && <p>Username: {currentUser.username}</p>}
                        {currentUser && <p>Email: {currentUser.email}</p>}
                        {currentUser && <p>Role: {currentUser.role}</p>}
                    </div>
                    <div className='btns'>
                        <button onClick={() => setEditing(!editing)}>Edit Profile</button>
                        <button>Tech List</button>
                    </div>
                </div>
            </div>

            {editing && <EditUser editData={editData} setEditData={setEditData} onChange={onChange} edit={edit} />}
        </StyledDash>
    )
}

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps, { fetchUser, editUser })(Dashboard);

const StyledDash = styled.section`
    width: 100%;
    height: 83vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        border: 1px solid white;
        height: 90%;
        width: 90%;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #9F9F9F;

        .imgPlaceholder{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            text-align: center;
            margin: 2rem 0;
        }

        .profileInfo{
            width: 100%;
            height: 50%;
            border-radius: 0 0 25px 25px;
            border: none;

            .btns, .details{
                border: none;

            }

            .details{
                width: 100%;
                height: 65%;
                justify-content: center;
                border-top: 1px solid white;
                border-radius: 0 0 25px 25px;

                p{
                    margin: 0;
                }
            }

            .btns{
                width: 100%;
                height: 35%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

        }
    }
`