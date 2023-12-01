import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { mobile } from '../responsive'

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=600' />
                <Details>
                  <ProductName> <b>Product:</b> Jeans</ProductName>
                  <ProductId> <b>Id:</b> 21234567</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size: </b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://images.pexels.com/photos/6046198/pexels-photo-6046198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <Details>
                  <ProductName> <b>Product:</b> Shirt</ProductName>
                  <ProductId> <b>Id:</b> 21234567</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size: </b> 17.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
`
const TopButton = styled.button`
 padding: 10px;  
 font-weight: 600;
 cursor: pointer;
 border: ${props => props.type === "filled" && "none"};
 background-color: ${props => props.type === "filled" ? "black" : "transparent"};
 color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({ display: "none" })}
 
  `
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
 
`
const Info = styled.div`
flex: 3;
`
const Hr = styled.div`
 background-color: #e0e9e9;
 border: none;
 height: 2px;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0px;
${mobile({ flexDirection: "column" })}

`
const ProductDetail = styled.div`
 flex: 2;
 display: flex;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`
const ProductAmount = styled.div`
 font-size: 24px;
 margin: 5px;
 ${mobile({ margin: "10px 15px" })}

`
const ProductPrice = styled.div`
 font-size: 30px;
 font-weight: 200;
 ${mobile({ marginBottom: "10px" })}

`
const Image = styled.img`
 width: 200px;
`
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color}
`
const ProductSize = styled.span`
`
const PriceDetail = styled.span`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const Summary = styled.div`
 flex: 1;
 border: 0.5px solid lightgray;
 border-radius: 10px;
 padding: 20px;
 height: 40vh;  
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 25px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && " 500"};
font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const SummaryButton = styled.button`
 width: 100p%;
 padding: 10px;
 background-color: black;
 color: white;
 font-weight: 600;
`



