import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({ item }) => {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartIcon />
          </Icon>
          <Icon>
            < SearchIcon />
          </Icon>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>
        </Info>
      </Circle>
    </Container>
  )
}

export default Product

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 99;
display: flex;
align-items: center;
justify-content: center;
transition: all 1s ease;
cursor: pointer;
`

const Container = styled.div`
 flex: 1;
 margin: 5px;
 min-width: 280px;
 height: 350px;
 display: flex;
 align-items: center;
 justify-content: center;
 background: #f5fbfd;
 position: relative;

 &:hover ${Info}{
  opacity: 1;
 }

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;

`
const Image = styled.img`
 height: 75%;
 width: 75%;
`

const Icon = styled.div`
width: 40px;
height: 40px;
background-color: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`