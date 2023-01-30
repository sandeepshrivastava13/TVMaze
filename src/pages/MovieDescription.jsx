import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import {mobile} from '../responsive.js'


const Container=styled.div`
    
`
const Left=styled.div`
    flex: 0.5;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Right=styled.div`
    flex:0.5;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    padding:10px 30px;
    margin-top: 60px;
`
const Wrapper=styled.div`
    display: flex;
    height:100vh;
    ${mobile({
        flexDirection:'column'
    })}
`
const Image=styled.img`
height:80vh;
width:70vh;
border-radius: 10px;
${mobile({
    width:300,
    height:300,
    marginTop:30
})}
`
const Title=styled.h1`
    font-size: 30px;
`
const Description=styled.p`
    margin-top: 30px;
`
const Summary=styled.p`
    margin-top: 50px;
`

export const MovieDescription = () => {

    const location=useLocation();
    let html = location.state.message[2];
    let div = document.createElement("div");
    div.innerHTML = html;
    const summary=div.innerText
    const rating=!!location.state.message[5]?`(${location.state.message[5]})`:''

  return (
    <Container>
        <Navbar />
        <Wrapper>
        <Left>
        <Image src={location.state.message[0]} />
        </Left>
        
        <Right>
        <Title>{`${location.state.message[1]} ${rating}`}</Title>
        <Description style={{marginTop:30}}>{`${location.state.message[3]}  | ${location.state.message[4]} min`}</Description>
        <Summary style={{marginTop:50}}>{summary}</Summary>
        </Right>
        </Wrapper>
    </Container>
  )
}
