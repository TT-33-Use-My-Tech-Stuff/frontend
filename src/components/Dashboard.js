import React from 'react';
import styled from 'styled-components';

const dummyData = {
    username: 'Paul',
    email: 'test@test.com',
    role: 'Renter'
}

function Dashboard(){

    return(
        <StyledDash>
            <div>
                <div className='imgPlaceholder'>Profile Image Here</div>

                <div className='profileInfo'>
                    <div className='details'>
                        <p>Username: {dummyData.username}</p>
                        <p>Email: {dummyData.email}</p>
                        <p>Role: {dummyData.role}</p>
                    </div>
                    <div className='btns'>
                        <button>Edit Profile</button>
                        <button>Tech List</button>
                    </div>
                </div>
            </div>
        </StyledDash>
    )
}

export default Dashboard;

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