import React from 'react'
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
    color:white
`
const SearchContainer=styled.div`
    border:0.0px solid lightgrey;
    display: flex;
    align-items: center;
    padding:5spx
`

const Input=styled.input`
    border:none
`

const Navbar = ({searchText}) => {
    const [search,setSearchText]=React.useState('')
    
    const onUpdateText=(evt)=>{
        const val=evt?.target?.value;
        setSearchText(val)
        searchText(val)

    }
  return (
    <Container>

        <Link to='/' style={{textDecorationLine:'none'}}>
        <Title>TV Maze</Title>
        </Link>
        <SearchContainer>
        <SearchIcon style={{color:'white',marginRight:10}}/>
        <Input placeholder='Search' value={search} onChange={evt=>onUpdateText(evt)} type='text'/>
        </SearchContainer>

    </Container>
  )
}

export default Navbar