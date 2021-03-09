import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {

        return (

            <Navbar className="header" dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto"><img src="/Images/.png" className="logo" alt="MiluzStudio" /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar ><span className="paddingheader"></span>

                            <NavItem>
                                <NavLink className="headertext" to="/Home"> Home </NavLink>
                                <span className="paddingheadertext"></span>
                            </NavItem>
                            <NavItem>
                                <NavLink className="headertext" to="/Bedroom"> Bedroom </NavLink>
                                <span className="paddingheadertext" ></span>
                            </NavItem>
                            <NavItem>
                                <NavLink className="headertext" to="/Dining"> Dining </NavLink>
                                <span className="paddingheadertext" ></span>
                            </NavItem>
                            <NavItem>
                                <NavLink className="headertext" to="/Living"> Living </NavLink>
                                <span className="paddingheadertext" ></span>
                            </NavItem>
                            <NavItem>
                                <NavLink className="headertext" to="/Workplace"> Workplace </NavLink>
                                <span className="paddingheadertext" ></span>
                            </NavItem>
                            <NavItem>
                                <NavLink className="headertext" to="/Contact"> Contact </NavLink>
                                <span className="paddingheadertext" ></span>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        );
    }
}

export default Header;