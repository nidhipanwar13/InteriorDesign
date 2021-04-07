import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Row, Col} from 'reactstrap';
import { ButtonToggle } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
            
        };

        
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

  

    handleLogin(values) {
        
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + '\n' + JSON.stringify(values));

    }

    handleReset(values) {
        
        console.log('Current State is: ' + values);

    }

    toggleLoginModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {


        return (
        <div>
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
                            </NavItem>&nbsp;
                            <NavItem>
                            

                                <ButtonToggle onClick={this.toggleLoginModal} color="danger" size="sm" font-weight="bold" >Login</ButtonToggle>{' '}

                                <span className="paddingheadertext" ></span>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleLoginModal}>
                        <ModalHeader className="loginmodal" toggle={this.toggleLoginModal}>Login </ModalHeader>
                        <ModalBody className="modalbody">
                        <LocalForm onSubmit={(values) => this.handleLogin(values)}
                                            onClick={(values) => this.handleReset(values)}>
                                                 <Row className="form-group">
                                        <label htmlFor="username" className="col-sm-2 loginmodal1"> username </label>
                                        <Col md={6}>
                                            <Control.text model=".username" id="username" name="username"
                                                placeholder="Your username"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".username"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',

                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label htmlFor="password" className="col-sm-2 loginmodal1"> password </label>
                                        <Col md={6}>
                                            <Control.text model=".password" id="password" name="password"
                                                placeholder="Your password"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',

                                                }}
                                            />
                                        </Col>
                                    </Row>
                                
                                <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup><br/>
                                <Button name="login" type="login" value="login" outline color="light" style={{ backgroundColor: "#05A9A8", color: "whitesmoke" }}> Login </Button>&emsp;
                                <Button type="reset" value="reset" outline color="light" style={{ backgroundColor: "#05A9A8", color: "whitesmoke" }} > &nbsp;Reset &nbsp;</Button>
                                </LocalForm>
                        </ModalBody>
                    </Modal>
                    </div>
</div>
            
     
                    

        );
    }
}

export default Header;