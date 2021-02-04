import React, { useEffect, useState } from 'react';
import spin from '../../../img/spin.gif'
import Navbar from '../../Shared/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

const Delete = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const deleteProduct = (id) => {
        console.log(id)
        const deleteButton = document.getElementById('product-delete-button')
        // console.log(e.target)


        if (window.confirm("Are you Sure to delete product?")) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log("Deleted successfully!!!")
                    // alert("Product Delete Successfully!!!")
                    window.location.reload()

                })

        }
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className='mt-5'>
                    <table className="table">
                        <thead className="thead-light">
                            <tr className="text-center">
                                <th scope="col text-center">Name</th>
                                <th scope="col text-center"> Price </th>
                                <th scope="col text-center">Expiry date</th>
                                <th scope="col text-center"> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map(product => <tr className="text-center" key={product._id}>
                                    <td>{product.name}</td>
                                    <td>$  {product.price}</td>
                                    <td>{product.expiry}</td>
                                    <td> <button className="bg-none" id="product-delete-button" style={{ color: "red", border: "none", background: "none", fontSize: "25px" }} onClick={() => deleteProduct(`${product._id}`)} >  <FontAwesomeIcon icon={faTrashAlt} /> </button>  </td>
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

export default Delete;