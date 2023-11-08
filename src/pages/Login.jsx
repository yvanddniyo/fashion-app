import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url('https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600') center no-repeat;
 background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`
const Wrapper = styled.div`
 width: 25%;
 padding: 20px;
 background-color: white;
 ${mobile({ width: "75%" })};

`
const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;
`
const Form = styled.form`
 display: flex;
 flex-direction: column;
`
const Input = styled.input`
 flex: 1;
 mini-width: 40%;
 margin: 20px 10px 0px 0px;
 padding: 10px;
`
const Button = styled.button`
 width: 40%;
 border: none;
 padding: 15px 20px;
 margin: 13px 0px;
 background-color: teal;
 color: white;
 cursor: pointer;
`
const Link = styled.a`
 margin: 5px 0px;
 font-size: 12px;
 cursor: pointer; 
`

