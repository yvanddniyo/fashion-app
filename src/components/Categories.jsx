import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Categories = () => {
  return (
    <Container>
      {
        categories.map((item => (
          <CategoryItem item={item} key={item.id} />
        )))
      }
    </Container>
  )
}

export default Categories

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 60px;
 ${mobile({ padding: "0px", flexDirection: 'column' })};

`