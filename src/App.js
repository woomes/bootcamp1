import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Container, Column } from 'rbx';
import ProductList from './component/productlist';


const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
 console.log(products);
 useEffect(() => {
   const fetchProducts = async () => {
     const response = await fetch('./data/products.json');
     const json = await response.json();
     setData(json);
   };
   fetchProducts();
  }, []);

  return (
    <Container>
    <ProductList products ={products} />
    </Container>
  );
};

export default App;