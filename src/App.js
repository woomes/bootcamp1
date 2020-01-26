import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Container, Button } from 'rbx';
import ProductList from './component/productlist';
import Sidebar from "react-sidebar";
import Cart from './component/carts/carts';
import db from "./component/db";
import firebase from "firebase/app";
import 'firebase/auth';
import Authenticate from "./component/authenticate";


 const useCartProducts = () => {
   const [cartProducts, setCartProducts] = useState({});
   const addCartProduct = (p, size) => {
     const id = p.sku + size;
     if (cartProducts[id]) {
       const oldCartProduct = cartProducts[id];
       const newCartProduct = {
         ...oldCartProduct, quantity: oldCartProduct.quantity + 1
       };
       setCartProducts({...cartProducts, [id]: newCartProduct}); //overrides
     } else{
       const newCartProduct = {product: p, size: size, quanity: 1};
       setCartProducts({...cartProducts, [id]: newCartProduct});
     }
   };
   const removeCartProduct = cartProductId => {
     setCartProducts(
       Object.keys(cartProducts).filter(id => id !== cartProductId).reduce((total, id) => 
       ({...total, [id]: cartProducts[id]}), {}
       )
     );
   };
    
   const emptyCart = () => {
     setCartProducts({});
   };
  return [cartProducts, addCartProduct, removeCartProduct, emptyCart];
  };

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, addCartProduct, removeCartProduct, emptyCart] = useCartProducts();
  const openCart = x => setCartOpen(x);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
      setProductsLoaded(true);
    };
    fetchProducts();
  }, []);

  const [inventory, setInventory] = useState({});
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [inventoryLoaded, setInventoryLoaded] = useState(false);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
       setInventory(snap.val());
       setInventoryLoaded(true);
     }
   };
   db.on("value", handleData, error => alert(error));
   return () => {
     db.off("value", handleData);
    };
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

   
    return productsLoaded && inventoryLoaded ? (
       <Sidebar
          sidebar = {
            <Container>
              <Cart
                openCart = {openCart}
                cartProducts = {cartProducts}
                removeCartProduct = {removeCartProduct}
                emptyCart = {emptyCart}
                />
            </Container>
          }
          open = {cartOpen}
          onSetOpen = {setCartOpen}
          pullRight
          >
            <Container>
            <Authenticate user={user} />
              <Button onClick = {() => setCartOpen(true)}> Cart </Button>
              <ProductList
                inventory = {inventory}
                products={products}
                addCartProduct={addCartProduct}
                openCart={openCart}
                cartProducts={cartProducts} />
            </Container>
          </Sidebar>
     ) : (
       <h1>not ready</h1>
     );
 };

export default App;