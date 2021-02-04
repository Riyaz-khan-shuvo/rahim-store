import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar'


const AddProduct = () => {
    const [selected, setSelected] = useState({
        date: new Date()
    })

    const handleDate = () => {
        const newInfo = { ...selected };
        const date = document.getElementById('date').value;
        newInfo.date = date;
        setSelected(newInfo);
        console.log(date)
    }


    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const price = document.getElementById('p-price').value;
        const name = document.getElementById('p-name').value;
        const expiry = document.getElementById('date').value;
        const product = { name, price, expiry }

        console.log(product)

        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("One Product Added!!!")
            })
    }

    return (
        <div>
            <Navbar />

            <div class="container justify-content-center">

                <form class="well form-horizontal" onSubmit={handleRegisterSubmit} action=" " method="post" id="contact_form">
                    <fieldset>
                        <legend><center><h2><b>Product Entry Form</b></h2></center></legend><br />


                        <div class="form-group">
                            <label class="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12 control-label">Product Name</label>
                            <div class="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12 inputGroupContainer">
                                <div class="input-group">
                                    <input name="p-name" id="p-name" placeholder="Product Name" class="form-control" type="text" required />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12 control-label" >Product Price</label>
                            <div class="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12 inputGroupContainer">
                                <div class="input-group">
                                    <input name="p-price" id="p-price" placeholder="Product Price" class="form-control" type="text" required />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12 control-label" >Product Expiry Date.</label>
                            <div class="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12 inputGroupContainer">
                                <div class="input-group">
                                    <input name="p-expiry" placeholder="Product Expiry Date" class="form-control" type="date" id="date" required onBlur={handleDate} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12">
                            <button type="submit" className="btn btn-primary" onClick={() => window.location.reload()} >Send</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;