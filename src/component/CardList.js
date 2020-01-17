import React from 'react';

const CardList = ({products}) =>{
    return(
        <ul>
            {products.map(product => 
                <li key={product.sku}>{product.title}</li>)}
                        </ul>
    );
}

export default CardList;