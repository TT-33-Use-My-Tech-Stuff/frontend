import React from 'react'

export default function DevCard(props){

    const {info} = props
    return (
        <div>
            <h1>{info.name}</h1>
            <h4><a href={info.html_url} target="_blank">Github</a></h4>
        </div>
    )
}