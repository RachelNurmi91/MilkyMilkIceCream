import React, { Component } from 'react';
import { Button, Jumbotron, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
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
                                <Button className="btn-blue">Order Now!</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header