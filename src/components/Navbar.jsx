import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Toha</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`


`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 flex: 1;
 align-items: cente r;
`
const Left = styled.div`
display: flex;
align-items: center;
flex: 1;
`
const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
`
const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex ;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
 cursor: pointer;
`
const Input = styled.input`
border: none;
outline: none;
`
const Logo = styled.h1`
 font-weight: bold;
`
const Center = styled.div`
flex: 1;
text-align: center;   
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;

flex: 1;
`
const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
`