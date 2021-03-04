import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import { fetchTech } from '../actions';


function TechList(props){

    const { fetchTech, techList } = props;

    useEffect(() => {
        fetchTech();
    }, [])

    return(
        <div>
            <h1>Available Rentals </h1>
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
        techList: state.techList
    }
}

export default connect(mapStateToProps, { fetchTech })(TechList);