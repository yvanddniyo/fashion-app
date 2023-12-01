import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Products = ({ cat, filter, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProduct, setFiltedProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products?categories=coat")
        console.log(res)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, [cat]);

  return (
    <Container>
      {
        popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))
      }
    </Container>
  )
}

export default Products

const Container = styled.div`
 padding: 20px;
 display: flex;
 flex-wrap: wrap;
`