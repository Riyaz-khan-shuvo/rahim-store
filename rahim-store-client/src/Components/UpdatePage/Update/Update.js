import React, { useEffect, useState } from 'react';
import spin from '../../../img/spin.gif'
import Navbar from '../../Shared/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import UpdateForm from '../UpdateForm/UpdateForm';
const Update = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
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
                                <th scope="col text-center"> Edit </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                product.map(info => <tr className="text-center" key={info._id}>
                                    <td>{info.name}</td>
                                    <td>$  {info.price}</td>
                                    <td>{info.expiry}</td>
                                    <td>
                                        <button className="bg-none" style={{ color: "green", border: "none", background: "none", fontSize: "25px" }} onClick={openModal} > <FontAwesomeIcon icon={faUserEdit} />  </button>

                                    </td>
                                </tr>
                                )
                            }
                            {
                                product.map(product => <UpdateForm modalIsOpen={modalIsOpen} closeModal={closeModal} product={product} />)
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

export default Update;