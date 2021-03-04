import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import DevCard from './DevCard';


function MeetDevs(props){

    const [devs, setDevs] = useState([])
 
  
    let one = `https://api.github.com/users/Chantz-J`
    let two = `https://api.github.com/users/Plofland`
    let three = `https://api.github.com/users/paulstgermain`
    let four = `https://api.github.com/users/AustinGreer`
    let five = `https://api.github.com/users/oscfig`

    const requestOne = axios.get(one)
    const requestTwo = axios.get(two)
    const requestThree = axios.get(three)
    const requestFour = axios.get(four)
    const requestFive =  axios.get(five)

    useEffect(() => {
        axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive])
        .then(
            axios.spread((...res) => {
                let promiseArray = []
                const responseOne = res[0]
                const responseTwo = res[1]
                const responseThree = res[2]
                const responseFour = res[3]
                const responseFive = res[4]

                promiseArray.push(responseOne, responseTwo, responseThree, responseFour, responseFive)
                setDevs(promiseArray)
            })
        )
        .catch(err => {
            console.log(err)
        })
    }
    ,[])

    
    const { title } = props
    return(
        <div>
            <h1>Meet the Developers</h1>
            {
                devs.map(dev => {
                    return (
                        <DevCard key={dev.data.id} info={dev.data} />
                    )
                })
            }
        </div>
    )
}



export default connect(null, {})(MeetDevs);
