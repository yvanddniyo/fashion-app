import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Toha</Logo>
        <Desc>
          There are many variations of passages of fashion and design available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <LisItem>Home</LisItem>
          <LisItem>Cart</LisItem>
          <LisItem>Man Fashion</LisItem>
          <LisItem>Women Fashion</LisItem>
          <LisItem>Accessories</LisItem>
          <LisItem>My Account</LisItem>
          <LisItem>Wishlists</LisItem>
          <LisItem>Terms</LisItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: '10px' }} />KG 234, Kigali Rwanda
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: '10px' }} />+250780076942
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />contact@nyvan80076@gmail.com
        </ContactItem>
        <Payment src='https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png' />
      </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div`
 display: flex;
 margin-bottom: 2rem;
 ${mobile({ flexDirection: "column" })};
 
 
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column; 
padding: 20px;
`
const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`
const Desc = styled.div`
 margin: 20px 0px;
`
const SocialContainer = styled.div`
 display: flex;
`
const SocialIcon = styled.div`
 width: 40px;
 height: 40px; 
 border-radius: 50%;
 color: white;
 background-color: #${props => props.color};
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 10px;
 cursor: pointer;
`
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })};

`
const Title = styled.h3`
   margin-bottom: 20px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap; 
`
const LisItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })};

`
const ContactItem = styled.div`
margin-bottom: 20px; 
display: flex;
align-items: center; 
cursor: pointer; 
`
const Payment = styled.img`
 width: 50%;
`
