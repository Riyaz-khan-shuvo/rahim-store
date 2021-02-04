import React from 'react';

const ProductDetail = (props) => {

    const { name, price, expiry } = props.product;

    return (
        <>
            <td> {name} </td>
            <td> {price} </td>
            <td> {expiry} </td>
        </>

    );
};

export default ProductDetail;