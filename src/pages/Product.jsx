import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam enim eos cum sint animi at cupiditate, nisi repellat! Adipisci repellat consequuntur quod fuga minus obcaecati sed nulla error voluptatum?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: '10px', flexDirection: "column" })} 

`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 70vh;
object-fit: cover;
${mobile({ height: '40vh' })} 

`
const InfoContainer = styled.div`
 flex: 1;
 padding: 0px 50px;
 ${mobile({ padding: '10px' })} 

`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 35px;
`
const FilterContainer = styled.div`
 width: 50%;
 margin: 30px 0px;
 display: flex;
 justify-content: space-between;
 ${mobile({ width: '100%' })} 

`
const Filter = styled.div`
 display: flex;
 align-items: center;
`
const FilterTitle = styled.span`
 font-size: 20px;
 font-weight: 200;
`
const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color}; 
 margin: 0px 5px;
 cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
outline: none;
cursor: pointer;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
 width: 50%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({ width: '100%' })} 

`
const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 700;
 cursor: pointer;
`
const Amount = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 10px;
 border: 2px solid teal;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0px 12px;
`
const Button = styled.button`
 padding: 15px;
 border: 2px solid teal;
 background: white;
 cursor: pointer;
 font-weight: 600;

 &:hover{
  background-color: #f8f4f4;
 }
`