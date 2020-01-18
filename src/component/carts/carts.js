import React from 'react';

 import "rbx/index.css";
 import { Card, Title, Button } from 'rbx';

 import CartProduct from './cartproduct';

 const Cart = ({ cartProducts, deleteCartProduct }) => {
     console.log(cartProducts);
     return (
         <Card>
             <Card.Header centered>
                 <Title align="centered">Cart</Title>
             </Card.Header>
             <Card.Content>
                 {cartProducts.map(product =>
                     <CartProduct
                         key={product.sku}
                         product={product}
                         deleteCartProduct={deleteCartProduct} />
                 )}
                 <p>Subtotal: {cartProducts.reduce((total, p) => total + p.price, 0)}</p>
                 <Button>Checkout</Button>
             </Card.Content>
         </Card>
     );
 }

 export default Cart;