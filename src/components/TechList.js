import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import { fetchTech } from '../actions';

import AddItemForm from './AddItemForm';


function TechList(props){

    const { fetchTech, techList, currentUser } = props;

    useEffect(() => {
        fetchTech();
    }, [])


    //* ADD BUTTON TO RENDER ADDITEM FORM
    return(
        <StyledTechList>
            <h1>Available Rentals </h1>
            {currentUser.role === "Owner" && <button>Add New Tech</button>}
            {techList && techList.map(i => {
                return (<div className='techCard' key={i.tech_id}>
                <div className='techText'>
                    <p>{i.name}</p>
                    <p>{i.description}</p>
                </div>
                <div className='techImg'><p>Item Image Here</p></div>
                </div>)
            })}
        </StyledTechList>
    )
}

const mapStateToProps = state => {
    return {
        techList: state.techList,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { fetchTech })(TechList);

const StyledTechList = styled.div`
    text-align: center;

    .techCard{
        width: 90%;
        height: 15rem;
        border: 1px solid white;
        display: flex;
        justify-content: space-between;
        margin: 2.5rem auto;

        .techText{
            width: 74%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .techImg{
            width: 25%;
            height: 100%;
            border: 1px solid white;
            background: #9F9F9F;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .techCard:nth-child(even){
        flex-direction: row-reverse;
    }
`