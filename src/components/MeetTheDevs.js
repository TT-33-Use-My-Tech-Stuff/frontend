import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


const devs = ['AustinGreer', 'Chantz-J', 'OscFig', 'paulstgermain', 'Ploftland' ]

function MeetTheDevs (props) {
    const [techDevs, setTechDevs] = useState([])
    
    useEffect(() => {
        axios.get('https://api.github.com/users/AustinGreer')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <h1>Hello from Meet the Devs!</h1>
        </div>
    )
}

export default connect(null, {})(MeetTheDevs);