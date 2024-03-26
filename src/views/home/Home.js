import React from 'react'
import Slider from '../../components/carousel/Slider';
import CategoryCard from '../../components/category-card/CategoryCard';
import Product from '../../components/product/Product';

const Home = () => {
  return (
    <>
    <Slider />
    <CategoryCard />
    <Product />
    </>
  )
}

export default Home