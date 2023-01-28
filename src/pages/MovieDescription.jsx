import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

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
    margin-top: 50px;
`
const Wrapper=styled.div`
    display: flex;
    height:100vh
`
const Image=styled.img`
height:80vh;
width:70vh
`

export const MovieDescription = () => {
    const location=useLocation();

  return (
    <div>
        <Navbar />
        <Wrapper>
        <Left>
        <Image src={location.state.message[0]} />
        </Left>
        
        <Right>
        <h1>{location.state.message[1]}</h1>
        <p style={{marginTop:30}}>{`${location.state.message[3]}  | ${location.state.message[4]}`}</p>
        <p>{`cast : ${location.state.message[5]}`}</p>
        <p style={{textAlign:'left',marginTop:50}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </p>
        </Right>
        </Wrapper>
    </div>
  )
}
