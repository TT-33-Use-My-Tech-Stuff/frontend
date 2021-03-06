import React from 'react'
import styled from 'styled-components'

export default function DevCard(props){

    const {info} = props
    console.log(info)
    return (
            <StyledCard>
                        <h1>{info.name}</h1>
                        <StyledDiv>
                            <img src={info.avatar_url} />
                            <h4><a href={info.html_url} target="_blank">Github</a></h4>

                        </StyledDiv>
                        
                    
            </StyledCard>
    )
}



const StyledCard = styled.section`
    width: 45%;
    border: 2px solid white;
    margin: 5% auto;
    border-radius: 1.6rem;

    h1 {
        text-align: center;
        font-size: 2.3rem;
        margin-top: 5%;
        }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 60%;
        border-radius: 40%;
        margin-bottom: 5%;

    }
`
