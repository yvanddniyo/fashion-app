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

const Container = styled.div`
 flex: 1;
 margin: 5px;
 min-width: 280px;
 height: 350px;

`
const Circle = styled.div`
`
const Image = styled.img`
 height: 55%;
`
const Info = styled.div`
`
const Icon = styled.div`
`