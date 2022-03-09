import React, { Component } from 'react';
import { Button, Jumbotron, Modal, ModalHeader, ModalBody, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar-design">
                    <div className="container">
                        <NavbarBrand href="/"><img className="heartIcon" src="/images/logo-heart.png" alt="Yellow Heart"></img></NavbarBrand>
                        <Nav>
                            <NavItem>
                                <NavLink className="nav-link mx-2" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mx-2" to="/flavors">
                                    Flavors
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mx-2" to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mx-2" to="/contact">
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mx-2" to="/events">
                                    Events
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mx-2" to="/merch">
                                    Merch 
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>

                <Jumbotron fluid className="mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img src="/images/logo.png" alt="Milky Milk Logo"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Button onClick={this.toggleModal} className="btn-blue">Pre-Order Now!</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h5>PRE-ORDERS ARE OPEN!</h5>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-form">
                            <div className="form-group">
                                <label for="customerName"><strong>Your Name</strong></label>
                                <input className="form-control pl-2" id="customerName" placeholder="Full Name"></input>
                            </div>
                            <div className="form-group">
                                <label for="customerEmail"><strong>Email</strong></label>
                                <input className="form-control pl-2" type="email" id="customerEmail" placeholder="Email Address"></input>
                            </div>
                            <div className="form-group">
                                <label for="orderAmount"><strong># of Pints</strong></label>
                                <select className="form-control" id="orderAmount">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label><strong>Select your flavors</strong></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                    <label className="form-check-label" for="inlineCheckbox1">Ube Bae</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                    <label className="form-check-label" for="inlineCheckbox2">Lemon Blueberry</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                    <label className="form-check-label" for="inlineCheckbox2">Strawberry Basil</label>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </ModalBody>  
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header