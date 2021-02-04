import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import spin from '../../../img/spin.gif'


const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    })

    return (
        <div>
            <div className="container">
                <div className='mt-5'>
                    <table className="table">
                        <thead className="thead-light">
                            <tr className="text-center">
                                <th scope="col text-center">Name</th>
                                <th scope="col text-center"> Price </th>
                                <th scope="col text-center">Expiry date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map(info => <tr className="text-center" key={info._id}>
                                    <td>{info.name}</td>
                                    <td>$  {info.price}</td>
                                    <td>{info.expiry}</td>


                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="d-flex justify-content-center align-items-center text-center">
                {
                    product.length === 0 && <img src={spin} alt="" />
                }
            </div>
        </div>
    );
};

export default Product;