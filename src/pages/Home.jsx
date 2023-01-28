import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/Navbar';


const Container=styled.div`
    flex:1;
    
`
const MovieWrapper=styled.div`
    display: flex;
    width:100%;
    flex-wrap: wrap;
    
`
const Image=styled.img`
    height:250px;
    width:250px;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 45px;
`

const Wrapper=styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
`

const Home = () => {
    
    const [movieData,setMovieData]=React.useState([])
    const [genreData,setGenreData]=React.useState([])
    const [search,setSearch]=React.useState('')
 
    useEffect(() => {
      let gData=[]
        fetch("http://api.tvmaze.com/shows?page=1")
          .then((response) => response.json())
          .then((data) => 
            {
           
            data.forEach(element => {
                
                element.genres.forEach(genre=>{
                    if(!gData.includes(genre))
                    {
                        gData.push(genre)
                    }
                  setGenreData(gData)
                  
                })
                const result=gData.map(item=>{
                    const filterData= data.filter(element=>{
                        return element.genres[0]===item
                     })
                     return {[item]:filterData}
                 })
                setMovieData(result)
               
            });
        }
          );
      }, []);
   
    const navigate=useNavigate()
    const navigateToDescription=(poster,title,desc,year,length,rating)=>{
        const content=[poster,title,desc,year,length,rating]
        navigate('/description',{state:{message:content}})
    }

    const updateSearchText=(text)=>{
        setSearch(text)
    }

    console.log(search,"searching...")
   
  return (
    <Container>
    <Navbar searchText={(text)=>updateSearchText(text)} />

 
    <MovieWrapper>
        
        {
            movieData.map(movie=>{
                return genreData.map(genre=>{
                    const data=movie[genre]
                   
                    return data?.map(d=>{
                        const srcMedium=d?.image.medium
                        const srcOriginal=d?.image.original
                        const rating=d?.rating.average
                        return(
                            <Wrapper>
                            <h1 style={{marginLeft:50,marginTop:20}}>{d?.genres[0]}</h1>
                            <Image src={srcMedium} onClick={()=>navigateToDescription(srcOriginal,d?.name,d?.summary,d?.premiered,d?.averageRuntime,rating)}/>
                            </Wrapper>
                        )
                    })
                })
            })
        }
    </MovieWrapper>
   
    
    </Container>
  )
}

export default Home