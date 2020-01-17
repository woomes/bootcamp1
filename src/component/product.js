import React from 'react';

import "rbx/index.css";
import { Card, Button, Image, Title } from 'rbx';

const Product = ({ product }) => (
    <Card>
        <Card.Image>
            <Image.Container size="4by3">
                <Image src={`data/products/${product.sku}_2.jpg`} />
            </Image.Container>
        </Card.Image>
        <Card.Content>
            <Title size={4}>
                 {product.title}
            </Title>
            <Title>{product.description}</Title>
            <Title>{product.currencyFormat} {product.price}</Title>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
            <Button>Add to cart</Button>
        </Card.Content>
    </Card>
);

export default Product; 