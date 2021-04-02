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

            <Navbar className="header" dark expand="sm">
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
            // <div class="d-block d-sm-none">
            //         <Navbar collapseOnSelect expand='md' variant="dark" style={{ backgroundColor: 'rgba(0,0,0,1)', zIndex: 10, width: '100%' }}>
            //             <div className='container'>
            //                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //                 <Navbar.Collapse className='ml-auto' id="responsive-navbar-nav">
            //                     <Navbar.Brand href="#home" color='light'>
            //                         <img
            //                             alt=""
            //                             src="/Images/arktanelogow.png"
            //                             width="200"
            //                             height="40"
            //                             className="d-inline-block align-top"
            //                             style={{ opacity: '80%' }}
            //                         />{' '}
            //                     </Navbar.Brand>
            //                     <Nav className="ml-auto">
            //                         <Link style={{ color: 'floralwhite' }} activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500}  >About us</Link>
            //                         <Nav.Link href="#whatwedo" style={{ color: 'floralwhite' }}><Link style={{ color: 'floralwhite' }} activeClass="active" className="whatwedo" to="whatwedo" spy={true} smooth={true} duration={500} >What we do</Link></Nav.Link>
            //                         <Nav.Link href="#contactus" style={{ color: 'floralwhite' }}><Link style={{ color: 'floralwhite' }} activeClass="active" className="contactus" to="contactus" spy={true} smooth={true} duration={500} >Contact us</Link></Nav.Link>
            //                         <Link style={{ color: 'floralwhite' }} activeClass="active" className="test1" to="none" spy={true} smooth={true} duration={500} onClick={this.toggleLoginModal} >Login</Link>

            //                     </Nav>
            //                 </Navbar.Collapse>
            //             </div>

                    

        );
    }
}

export default Header;