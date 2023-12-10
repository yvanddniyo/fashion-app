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
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products?category")
        setProducts(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, [cat]);

  useEffect(() => {
    cat && setFiltedProducts(
      products.filter(item =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        ))
    );
  }, [products, cat, filter])

  return (
    <Container>
      {
        filteredProduct.map((item) => (
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