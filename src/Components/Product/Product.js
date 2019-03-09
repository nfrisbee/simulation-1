import React from 'react';

export default function Product(props) {
    const {removeProduct, product} = props;

return (
    <div>
        <button onClick={() => removeProduct(product.id)}>Delete Product</button>
    </div>
    )
};
