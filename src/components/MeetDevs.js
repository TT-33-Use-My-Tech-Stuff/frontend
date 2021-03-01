import React from 'react';
import { connect } from 'react-redux';

function MeetDevs(props){
    const { title } = props;
    return(
        <div>
            <h1>Meet the Developers</h1>
        </div>
    )
}



export default connect(null, {})(MeetDevs);