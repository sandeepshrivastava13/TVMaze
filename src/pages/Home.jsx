import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import golmaal_poster from '../res/Images/golmaal-indian-poster-md.jpg'
import kahani from '../res/Images/Kahaani_poster.jpg'
import dhoom from '../res/Images/dhoom.jpg'
import msdhoni from '../res/Images/ms_dhoni.jpg'
import kabirSingh from '../res/Images/Kabir_Singh.jpg'
import sultan from '../res/Images/sultan.jpg'
import pathaan from '../res/Images/pathaan.jpg'
import chakeDeIndia from '../res/Images/chak_de_india.jpg'



const Container=styled.div`
    flex:1;
`
const Description=styled.p`
    font-size: 15px;
    margin-top: 20px;
`
const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color:lightgray;
height:250px;
width:250px;
margin:20px 10px;
padding:5px;
cursor: pointer;
`
const Title=styled.h1`
    font-size: 20;
    text-align:center;
`
const MovieWrapper=styled.div`
    display: flex;
    width:100%;
    
`
const Image=styled.img`
    height:100px;
    width:100px;
    border-radius: 50%;
`



const Home = () => {
    /* const [movieData,setMovieData]=React.useState('')
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=girls")
          .then((response) => response.json())
          .then((data) => 
            setMovieData(data[0].show.name)  
          );
      }, []); */


    const navigate=useNavigate()
    const navigateToDescription=(poster,title,desc,year,length,cast)=>{
        const content=[poster,title,desc,year,length,cast]
        
        navigate('/description',{state:{message:content}})
    }
  
    const movieArray=[
    {
        categories:'thriller',
        title:'Kahani',
        desc:'Suspense crime thriller',
        year:2017,
        length:'2h30m',
        cast:'Vidya Balan',
        poster:kahani,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'Golmaal',
        desc:'Comedy',
        year:2017,
        length:'2h30m',
        cast:"Ajay D Arshad V Tushar K Kareena K",
        poster:golmaal_poster,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'MS Dhoni',
        desc:'Biopic',
        poster:msdhoni,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'Kabir Singh',
        desc:'Romantic',
        poster:kabirSingh,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'Sultan',
        desc:'Sportz',
        poster:sultan,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'Chak de india',
        desc:'Patriotic',
        poster:chakeDeIndia,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'Pathaan',
        desc:'Spy based movie',
        poster:pathaan,
        rate:8.9
    },
    {
        categories:'thriller',
        title:'Dhoom',
        desc:'Crime',
        poster:dhoom,
        rate:8.9
    },
    

]
  return (
    <Container>
    <Navbar />

   <MovieWrapper>
    
    {movieArray.map((item)=>{
       
       return (
       <Wrapper onClick={()=>navigateToDescription(item.poster,item.title,item.desc,item.year,item.length,item.cast)}>
            <Title>{item.title}</Title>
            <Image src={item.poster} />
            <Description>{item.desc}</Description>
        </Wrapper>
       )
    })}
    </MovieWrapper>
    <MovieWrapper >
   
    {movieArray.map((item)=>{
       
       return (
       <Wrapper onClick={()=>navigateToDescription(item.poster,item.title,item.desc,item.year,item.length,item.cast)}>
       
            <Title>{item.title}</Title>
            <Image src={item.poster} />
            <Description>{item.desc}</Description>
        </Wrapper>
   
       
       )
    })}
    </MovieWrapper>
   
    
    </Container>
  )
}

export default Home