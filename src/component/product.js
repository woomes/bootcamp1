import "rbx/index.css";
import { Card, Button, Image, Title } from 'rbx';
import React, { useState } from 'react';

import SizeButton from './sizebutton';

 const Product = ({ product, addCartProduct }) => {
     const imageSrc = `data/products/${product.sku}_2.jpg`;

     const [size, setSize] = useState("");

     return (
         <Card>
             <Card.Image>
                 <Image.Container>
                     <Image src={imageSrc} />
                 </Image.Container>
             </Card.Image>
             <Card.Content>
                 <Title size={4}>
                     {product.title}
                 </Title>
                 <Title>{product.description}</Title>
                 <Title>{product.currencyFormat} {product.price}</Title>
                 <SizeButton setSize={setSize} chosenSize={size} size="S" />
                 <SizeButton setSize={setSize} chosenSize={size} size="M" />
                 <SizeButton setSize={setSize} chosenSize={size} size="L" />
                 <SizeButton setSize={setSize} chosenSize={size} size="XL" />
                 <Button onClick={() => size ? addCartProduct(product, size) : alert("Choose a size!")}>
                     Add to cart
                 </Button>
             </Card.Content>
         </Card>
     );
 };

export default Product; 