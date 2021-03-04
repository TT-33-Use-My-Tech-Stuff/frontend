import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import { fetchTech, addTech } from '../actions';

import AddItemForm from './AddItemForm';

const initAddItemData = {
    name: '',
    description: '',
    user_id: 0
}


function TechList(props){
    const [adding, setAdding] = useState(false);
    const [addItemData, setAddItemData] = useState(initAddItemData);

    const { fetchTech, techList, currentUser, addTech } = props;

    useEffect(() => {
        fetchTech();

        setAddItemData({
            ...addItemData,
            user_id: currentUser.user_id
        });

    }, [])

    //* Add means to add posting user_id to the added item's values

    const handleChange = e => {
        setAddItemData({
            ...addItemData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        // e.preventDefault();

        props.addTech(addItemData);
    }

    return(
        <StyledTechList>
            <h1>Available Rentals </h1>

            {/** Render AddItemForm IF adding === true **/}

            {adding && <AddItemForm addItemData={addItemData} change={handleChange} submit={onSubmit} />}

            {/** Render Add New Tech button IF User === Owner **/}

            {currentUser.role === "Owner" && <button onClick={() => setAdding(!adding)}>Add New Tech</button>}

            {/** Map over the list of tech received from our action's API call / Renders them to Page **/}

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

export default connect(mapStateToProps, { fetchTech, addTech })(TechList);

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