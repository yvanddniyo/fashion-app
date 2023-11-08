import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search' />
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
 height: 60px;
 ${mobile({ height: "50px" })};

`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 flex: 1;
 align-items: cente ;

`
const Left = styled.div`
display: flex;
align-items: center;
flex: 1;

`
const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
 ${mobile({ display: "none" })};

`
const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex ;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
 cursor: pointer;
 ${mobile({ marginLeft: "2px" })};

`
const Input = styled.input`
border: none;
outline: none;
${mobile({ width: "50px" })};

`
const Logo = styled.h1`
 font-weight: bold;
 ${mobile({ fontSize: "24px" })};

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
${mobile({ flex: '2', justifyContent: "center" })};

`
const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: '10px ' })};

`