import React from 'react';
import "rbx/index.css";
import {Box,Card,Title,Button,Image,Media,Content,Container} from 'rbx';

const Cart = ({cartProducts, removeCartProduct, emptyCart, openCart}) => {
    return (
        <Card>
            <Card.Header>
            <Title> Cart </Title>
            <Container>
                <Title> Cart </Title>
                <Button onClick = {() => openCart(false)}> X </Button>
            </Container>
            </Card.Header>
            <Card.Content>
                <p>
                {Object.keys(cartProducts).length > 0
                ? Object.keys(cartProducts)
                 .reduce(
                   (total, id) =>
                     total +
                     cartProducts[id].product.price * cartProducts[id].quantity,
                   0
                 )
             : "Nothing in cart"}
                 </p>

            <Button>Checkout</Button>
            <Button onClick={() => emptyCart()}>Clear</Button>
            {Object.keys(cartProducts).map(id => {
                const { product, quantity, size } = cartProducts[id];
                return (
                    <CartProduct
                        key={id}
                        product={product}
                        size={size}
                        quantity={quantity}
                        removeCartProduct={removeCartProduct}
                    />
           );
         })}
       </Card.Content>
     </Card>
   );
 };


const CartProduct = ({product, size, quantity, removeCartProduct}) => {
    const {sku, title, price, currencyFormat} = product;
    const imgsrc = `data/products/${sku}_1.jpg`;
    return(
        <Box>
            <Media>
                <Media.Item>
                    <Image.Container>
                        <Image src = {imgsrc}></Image>
                    </Image.Container>
                </Media.Item>
                <Media.Item>
                    <Content>
                        <Button onClick={() => removeCartProduct(product)}> x </Button>
                        <p>
                            Title : {title}
                            <br />
                            Quantity: {quantity}
                            <br />
                            Size: {size}
                            <br />
                            Price: {currencyFormat}{price}
                        </p>
                    </Content>
                </Media.Item>
            </Media>
        </Box>
    );
};

export default Cart;