import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-20%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "75%",
        textAlign: "center",
        height: "255px"
    }
};

Modal.setAppElement('#root')

const UpdateForm = ({ modalIsOpen, closeModal, product }) => {

    const onSubmit = data => {

        // data.id = product._id;
        // data.expiry = product.expiry;
        // data.name = product.name;
        // data.price = product.price;


        // console.log(data)



        // fetch('http://localhost:5000/appointmentData', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(success => {
        //         if (success) {
        //             closeModal()
        //             alert("Appointment Created Successfully!!!")
        //         }
        //     })

    }

    const { name , price , expiry} = product;

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="pt-5">Update Product Information</h2>
                <div className="text-right" style={{ marginTop: "-85px" }} >
                    <button onClick={closeModal} className="bg-none border-0 bg-primary text-light" > <FontAwesomeIcon icon={faTimes} /> </button>
                </div>
                <form >
                    <input type="text" className="w-100" name="" defaultValue={name} className="mt-5" id=""/>
                    <br/>
                    <input type="text" name="" defaultValue={`$ ${price}`} className="mt-5" id=""/><br/>
                    <input type="date" name="" defaultValue={`$ ${expiry}`} className="mt-5" id=""/><br/>
                    <h3> this {name} </h3>
                </form>
            </Modal>
        </div>
    );
};

export default UpdateForm;