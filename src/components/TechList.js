import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import { fetchTech, addTech, deleteTech, editUser } from '../actions';

import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';

const initAddItemData = {
    name: '',
    description: '',
    user_id: 0
}

const initEditItemData = {
    name: '',
    description: '',
    tech_img: '',
    user_id: 0
}


function TechList(props){
    const [adding, setAdding] = useState(false);
    const [addItemData, setAddItemData] = useState(initAddItemData);

    const [editing, setEditing] = useState(false);
    const [editItemData, setEditItemData] = useState(initEditItemData);

    const { fetchTech, techList, currentUser, addTech, deleteTech } = props;

    // / / / / / Fetches Tech List on Render / / / / / //
    useEffect(() => {
        fetchTech();

        setAddItemData({
            ...addItemData,
            user_id: currentUser.user_id
        });

    }, [])

    // / / / / / Handles Form for Adding Tech / / / / / //

    const handleAddChange = e => {
        setAddItemData({
            ...addItemData,
            [e.target.name]: e.target.value
        })
    }

    // / / / / / Handles Form Submission for Adding Tech / / / / / //

    const handleAddSubmit = e => {
        e.preventDefault();

        props.addTech(addItemData);
    }

    // / / / / / Handles Form for Editing Tech / / / / / //

    const handleEditChange = e => {
        setEditItemData({
            ...editItemData,
            [e.target.name]: e.target.value,
            user_id: currentUser.user_id
        })
    }

    // / / / / / Handles Form Submission for Editing Tech / / / / / //

    const handleEditSubmit = e => {
        e.preventDefault();

    }


    return(
        <StyledTechList>
            <h1>Available Rentals </h1>

            {/** Render AddItemForm IF adding === true **/}

            {adding && <AddItemForm addItemData={addItemData} change={handleAddChange} submit={handleAddSubmit} />}

            {/** Render Add New Tech button IF User === Owner **/}

            {currentUser.role === "Owner" && <button onClick={() => setAdding(!adding)}>Add New Tech</button>}

            {/** Map over the list of tech received from our action's API call / Renders them to Page **/}

            {techList && techList.map(i => {
                return (<div className='techCard' key={i.tech_id}>
                
                <div className='techText'>
                    <p>{i.name}</p>
                    <p>{i.description}</p>
                    <button onClick={() => deleteTech(i.tech_id, i.user_id)}>Remove this Tech</button>
                    <button onClick={() => setEditing(!editing)}>Edit this Tech</button>
                    {editing && <EditItemForm itemData={i} editItemData={editItemData} setEditItemData={setEditItemData} change={handleEditChange} submit={handleEditSubmit} />}
                </div>
                

                <div className='techImg' style={{background: `#9f9f9f url(${i.tech_img})`, backgroundSize: '90%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                
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

export default connect(mapStateToProps, { fetchTech, addTech, deleteTech })(TechList);

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
            /* background: #9F9F9F; */
            /* background-position: bottom; */
            /* background-size: 25%; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .techCard:nth-child(even){
        flex-direction: row-reverse;
    }
`