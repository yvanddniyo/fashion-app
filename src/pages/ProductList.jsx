import { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'


const ProductList = () => {
  const location = useLocation();
  const cat = (location.pathname.split("/")[2]);
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  }
  console.log(filter);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' disable onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter><FilterText>sort Products:</FilterText>
          <Select name='sorts' onChange={(e) => setSort(e.target.value)}>
            <Option value="newest"> Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList

const Container = styled.div`
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between; 
padding: 0px 20px;
`
const Title = styled.h1`
margin: 20px;
`
const Filter = styled.div`
margin: 20px;
${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })};

`
const FilterText = styled.div`
 font-size: 20px;
 font-weight: 20px;
 margin-right: 20px; 
 ${mobile({ margin: '0px' })} 
`
const Select = styled.select` 
 padding: 10px;
 margin-right: 20px;
 ${mobile({ margin: '10px 0px' })} 

`
const Option = styled.option``