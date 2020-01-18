import React from 'react';
import "rbx/index.css";
import { Column } from 'rbx';
import Product from './product';

const ProductList = ({ products, addCartProduct }) => (
     <Column.Group vcentered multiline>
         {products.map(product =>
            <Column key={product.sku} size="one-quarter">
                <Product
                    product={product}
                    addCartProduct={addCartProduct} />
            </Column>
         )}
     </Column.Group>
 );

export default ProductList;