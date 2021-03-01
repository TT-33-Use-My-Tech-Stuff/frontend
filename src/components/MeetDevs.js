import React from 'react';
import { connect } from 'react-redux';

function MeetDevs(props){
    const { title } = props;
    return(
        <div>
            <h1>Meet the Developers</h1>
            <h1>{title}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        title: state.title,
    }
}

export default connect(mapStateToProps, {})(MeetDevs);