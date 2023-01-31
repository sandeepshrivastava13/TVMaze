import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {mobile} from '../responsive.js'


const Container=styled.div`
    flex:1;
    
`
const MovieWrapper=styled.div`
    display: flex;
    width:100%;
    flex-wrap: wrap;
    ${mobile({
        flexDirection:'column'
    })}
`
const Image=styled.img`
    height:250px;
    width:250px;
    border-radius: 10px;
    margin-top: 25px;
    margin-left: 45px;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Home = () => {
    
    const [movieData,setMovieData]=React.useState([])
    const [genreData,setGenreData]=React.useState([])
    const [search,setSearch]=React.useState(null)
    const [copyMovieData,setCopyMovieData]=React.useState([])
 
    useEffect(() => {
      let gData=[]
        fetch("http://api.tvmaze.com/shows")
          .then((response) => response.json())
          .then((data) => 
            {
            setCopyMovieData(data)
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
      }, [search]);
   
    const navigate=useNavigate()
    const navigateToDescription=(poster,title,desc,year,length,rating)=>{
        const content=[poster,title,desc,year,length,rating]
        navigate('/description',{state:{message:content}})
    }

    const updateSearchText=(text)=>{
        setSearch(text)
    }


    const getSearchData=(text)=>{
        if(text.length<=0)
        {
            setMovieData(copyMovieData)
        }
        else{
        let gData=[]
        const result=text.map(item=>{
           return copyMovieData.filter(element=>{
                return element.id===item.show.id
            })
        })
         result.forEach(element => {
            element.length>0 && element.map(item=>{
                item.genres.forEach(genre=>{
                        if(!gData.includes(genre))
                        {
                            gData.push(genre)
                        }
                      setGenreData(gData)
                      
                    })
            })
        })
        const res=gData.map(item=>{
            const filterData= result.flat(1).filter(element=>{
                return element.genres[0]===item
             })
             return {['']:filterData}
         })
        
            setMovieData(res)
        
        }           
}  

  return (
 
    <Container>
    <Navbar searchTextFromHome={(text)=>updateSearchText(text)} searchDataFromHome={(text)=>getSearchData(text)} />
    <MovieWrapper>
       {movieData.map((movie)=>{
                 for (const [key, value] of Object.entries(movie)) {
                    return value.length>0 &&(<div key={key}>
                        <h2 style={{marginLeft:45,marginTop:20}} >{key}</h2>
                        {
                            value.map(item=>{
                                const srcMedium=item?.image.medium
                                const srcOriginal=item?.image.original
                                const rating=item?.rating.average
                               return <Image src={srcMedium} onClick={()=>navigateToDescription(srcOriginal,item?.name,item?.summary,item?.premiered,item?.averageRuntime,rating)} />
                            })
                        }
                        </div>)
                  }
            })
        }
    </MovieWrapper>
   
    </Container>
  )
}

export default Home