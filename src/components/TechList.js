import React, { useState, useEffect } from 'react';
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
        <div>
            <h1>Available Rentals </h1>
            {currentUser.role === "Owner" && <button>Add New Tech</button>}
            {techList && techList.map(i => {
                return (<div key={i.tech_id}>
                    <p>{i.name}</p>
                    <p>{i.description}</p>
                </div>)
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        techList: state.techList,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { fetchTech })(TechList);