import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../../img/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
const Menu = () => {
    return (
        <div className="sticky-top" style={{ fontFamily: 'Ubuntu', }}>
            <Navbar bg="secondary" collapseOnSelect expand="lg" >

                <Navbar.Brand href="#home" className="ml-md-5">

                    <img style={{ width: '100px' }}
                        src={logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "black", background: "#fff" }} className="ml-auto" > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={{ textAlign: "center" }} className="ml-auto">

                        <Nav.Link
                            style={{ color: '#fff', fontWeight: '600' }}
                            className="nav-link pl-4 pr-4"
                        >
                            <Link to="/home" style={{ color: "#fff" }}>Home</Link>
                        </Nav.Link>


                        <Nav.Link to="/add-products" style={{ color: '#101010', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/add-products" style={{ color: "#fff" }}>Add Products</Link>
                        </Nav.Link>

                        <Nav.Link to="/events" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/update-products" style={{ color: "#fff" }}>Update Products</Link>
                        </Nav.Link>
                        <Nav.Link to="/admin" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/delete-products" style={{ color: "#fff" }}>Delete Products</Link>
                        </Nav.Link>
                        

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;