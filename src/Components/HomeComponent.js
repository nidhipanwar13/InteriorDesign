import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HomeCardimages from './HomeCardimages';
import { ButtonToggle } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {firebase,dataref,BookingConsultationRef,newBookingConsultationRef} from "../Config/firebase";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            fullname: '',
            phonenum: '',
            email: '',
            touched: {
                fullname: false,
                phonenum: false,
                email: false
            },


        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);


    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            time: new Date(Date.now())
        });
    }

    handleSubmit(event) {
        const errors = this.validate(this.state.fullname, this.state.phonenum, this.state.email);
        var canSubmit = true;


        if (errors.fullname !== '' || this.state.fullname === '')
            canSubmit = false;

        else if (errors.phonenum !== '' || this.state.phonenum === '')
            canSubmit = false;

        else if (errors.email !== '' || this.state.email === '')
            canSubmit = false;

        if (canSubmit) {
           newBookingConsultationRef .set({
                    Fullname: this.state.fullname,
                    Phonenum: this.state.phonenum,
                    Email: this.state.email
              });

              BookingConsultationRef.push.set({
                Fullname: this.state.fullname,
                Phonenum: this.state.phonenum,
                Email: this.state.email
          });
            
            this.props.SendConsultationBooking(this.state.fullname, this.state.phonenum, this.state.email);
            
            alert('Full name: ' + this.state.fullname +
                '\nPhone No.:  ' + this.state.phonenum +
                '\nE-mail:      ' + this.state.email +
                '\nYour information has been submitted');
        }
        else {
            alert("Please fill all the inputs");
        }

        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(fullname, phonenum, email) {
        const errors = {
            fullname: '',
            phonenum: '',
            email: ''

        };

        if (this.state.touched.fullname && fullname.length < 3)
            errors.fullname = 'Full Name should be more than 3 characters';


        else if (this.state.touched.fullname && fullname.length > 20)
            errors.fullname = 'Name should not be more than 20  characters';

        const reg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (this.state.touched.phonenum && !reg.test(phonenum))
            errors.phonenum = 'Phone Number should contain 10 digits number';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Please provide a valid email address';

        return errors;

    }


    handleReset = () => {
        this.setState({
            fullname: '',
            phonenum: '',
            email: '',
            touched: {
                fullname: false,
                phonenum: false,
                email: false
            }

        });
    };


    render() {
        const errors = this.validate(this.state.fullname, this.state.phonenum, this.state.email);

        return (
            <div className="Container-fluid">

                <Carousel>
                    <Carousel.Item interval={5000} style={{ 'height': "700px" }} >
                        <img style={{ 'height': "700px" }}
                            className="d-block w-100"
                            src={'./Images/bedroom.jpg'} />
                        <Carousel.Caption>
                            <h3>Bedroom </h3>
                            <ButtonToggle onClick={this.toggleModal} color="danger" size="lg">Book a design Consultation</ButtonToggle>{' '}
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "700px" }} >
                        <img style={{ 'height': "700px" }}
                            className="d-block w-100"
                            src={'./Images/Living.jpg'} />
                        <Carousel.Caption>
                            <h3>Living room </h3>
                            <ButtonToggle onClick={this.toggleModal} color="danger" size="lg">Book a design Consultation</ButtonToggle>{' '}
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "700px" }} >
                        <img style={{ 'height': "700px" }}
                            className="d-block w-100"
                            src={'./Images/Dining.jpg'} />
                        <Carousel.Caption>
                            <h3>Dining room </h3>
                            <ButtonToggle onClick={this.toggleModal} color="danger" size="lg">Book a design Consultation</ButtonToggle>{' '}
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "700px" }} >
                        <img style={{ 'height': "700px" }}
                            className="d-block w-100"
                            src={'./Images/Workspace.jpg'} />
                        <Carousel.Caption>
                            <h3>Workspace </h3>
                            <ButtonToggle onClick={this.toggleModal} color="danger" size="lg" >Book a design Consultation</ButtonToggle>{' '}
                        </Carousel.Caption>
                    </Carousel.Item  >
                </Carousel>
                
                <HomeCardimages />
                
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader className="fontstyle2" toggle={this.toggleModal}>Provide your valid information</ModalHeader>
                        <ModalBody className="modalbody">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <label htmlFor="fullname" className="col-sm-2 modaltext "> Fullname </label>
                                    <Input type="text"
                                        id="fullname"
                                        name="fullname"
                                        value={this.state.fullname}
                                        valid={(errors.fullname === '') && (this.state.touched.fullname)}
                                        invalid={errors.fullname !== ''}
                                        onBlur={this.handleBlur('fullname')}
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        placeholder="Your full name" />
                                    <p>{errors.fullname}</p>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="phonenum" className="col-sm-4 modaltext"> Phone No. </label>
                                    <Input type="text"
                                        id="phonenum"
                                        name="phonenum"
                                        value={this.state.phonenum}
                                        className="form-control"
                                        valid={(errors.phonenum === '') && (this.state.touched.phonenum)}
                                        invalid={errors.phonenum !== ''}
                                        onBlur={this.handleBlur('phonenum')}
                                        onChange={this.handleInputChange}
                                        placeholder="Your Contact Number" />
                                    <p>{errors.phonenum}</p>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="email" className="col-sm-2 modaltext"> Email </label>
                                    <Input type="text"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        className="form-control"
                                        valid={(errors.email === '') && (this.state.touched.email)}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange}
                                        placeholder="Your email" />
                                    <p>{errors.email}</p>
                                </FormGroup>
                                <Button name="submit" type="submit" value="submit" outline color="primary" style={{ backgroundColor: "#182d54", color: "whitesmoke" }}> Submit </Button>&emsp;
                                <Button outline color="primary" style={{ backgroundColor: "#182d54", color: "whitesmoke" }} onClick={this.handleReset} > &nbsp;Reset &nbsp;</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>

            </div>

        );
    }
}

export default Home;