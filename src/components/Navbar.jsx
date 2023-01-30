import React, { useEffect,useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const Container=styled.div`
    height:60px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`
const Title=styled.h1`
    font-size: 40px;
    color:white,  
`
const SearchContainer=styled.form`
    border:0.0px solid lightgrey;
    display: flex;
    align-items: center;
    padding:5px
`

const Input=styled.input`
    border:none
`

const Navbar = ({searchTextFromHome,searchDataFromHome}) => {

   
    const [searchInput, setSearchInput] = React.useState('');
    const [searchData,setSearchData]=React.useState([])
    const didMount = useRef(false);

  //useDebounce
  useEffect(() => {
    if (didMount.current) {
      let debounceHandler = setTimeout(() => {
        fetchData(searchInput);
      }, 1000);
      return () => {
        clearTimeout(debounceHandler);
      };
    } else {
      didMount.current = true;
    }
  }, [searchInput]);


const fetchData=(input)=> {
    if (input !== '') {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(response=>response.json())
        .then(data=>{
            setSearchData(data)
            searchDataFromHome(data)
        })
    }
  }
   
  
  const handleInput=(event)=> {
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);
    searchTextFromHome(searchInput)
  }

  return (
    <Container>

        <Link to='/' style={{textDecorationLine:'none',color:'white'}}>
        <Title>TV Maze</Title>
        </Link>
        <SearchContainer>
        <SearchIcon style={{color:'white',marginRight:10}}/>
        <Input placeholder='Search Movies & Show' value={searchInput} onChange={evt=>handleInput(evt)} type='text'/>
        </SearchContainer>

    </Container>
  )
}

export default Navbar