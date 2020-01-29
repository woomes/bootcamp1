import "rbx/index.css";
import {Card, Button, Image, Title, Container} from 'rbx';
import React, { useState } from 'react';
import { getAvailableStock } from "./utils";





const Product = ({productInventory, product, addCartProduct, openCart, cartProducts, user}) => {
    const [chosenSize, setChosenSize] = useState("");

    const renderOutOfStock = () => {
        const stock = getAvailableStock(cartProducts, productInventory, product);
        if (
        Object.values(stock).every(stockleft => stockleft === 0)
        ) {return "Out of Stock" };
    return null;
    };

    const renderSizeButton = size => {
        const stock = getAvailableStock(cartProducts, productInventory, product);
        if (stock[size]>0) {
            return(
                <Button color={chosenSize === size ? "info" : null}
                onClick={() => chosenSize === size ? setChosenSize("") : setChosenSize(size)}>
                    {size}
                </Button>
            );
        }
        return null;
    };

    const renderAddToCart = () => {
        const stock = getAvailableStock(cartProducts, productInventory, product);
        if (
        Object.values(stock).every(stockleft => stockleft === 0)
        ) {return null};
        return (
            <Container>
                <Button onClick= {() => chosenSize ? addToCart(product, chosenSize) : alert("Choose size!")}>
                    Add to Cart
                </Button>
            </Container>
        )
    };

    const addToCart = (product, chosenSize) => {
        setChosenSize("");
        addCartProduct(product, chosenSize);
        openCart(true);
      };

    return (
        <Card>
            <Card.Image>
                <Image.Container>
                <Image src={`data/products/${product.sku}_1.jpg`}></Image>
                </Image.Container>
            </Card.Image>
            <Card.Content>
                <Title> {product.title} </Title>
                <Title size = {4}> {product.description}</Title>
                <Title size = {4}> {product.currencyFormat}{product.price}</Title>
                {renderSizeButton("S")}
                {renderSizeButton("M")}
                {renderSizeButton("L")}
                {renderSizeButton("XL")}
                {renderOutOfStock()}
                {renderAddToCart()}
            </Card.Content>
        </Card>
    );
};

export default Product;