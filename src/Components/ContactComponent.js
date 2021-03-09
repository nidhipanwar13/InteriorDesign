import React, { Component } from 'react';
import { Form, Label, Row, Col, Button, Input } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { ButtonToggle } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {firebase,dataref,ContactDetailsRef} from "../Config/firebase";



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component {

    constructor(props) {
        super(props);
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

       
    }

    handleSubmit(values) {
        ContactDetailsRef .set ({
            Fullname: values.Fullname,
            Email: values.email,
            Phonenum: values.phonenum,
            Message: values.m2essage

        });

        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' +'\n'  + JSON.stringify(values ));
        
    }

    handleReset(values) {
        console.log('Current State is: ' + JSON.stringify(values));        

    }

    render() {
        return (

            <div class="bg-image"
                style={{
                    backgroundImage: 'url("/Images/bg.jpg")',
                    backgroundSize: "cover",
                    backgroundAttachment: 'fixed',

                    color: 'black'
                }} ><br />

                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <div className="container">
                        <div className="container"><br />
                            <h1 className="headertext2">Always happy to hear from you</h1><br />
                            {/* <i className="fa fa-phone"></i><a href="mailto:info@Miluzstudio.com"> info@Miluzstudio.com</a>&nbsp;&nbsp; */}
                            <i className="fa fa-envelope"></i><a href="mailto:info@Miluzstudio.com"> info@Miluzstudio.com</a><br /><br />
                        </div>
                        <div className="row">
                            <div className="col-sm col-md-8">
                                <h2 className="aligntext">Drop your message here</h2><br />
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <label htmlFor="fullname" class="col-sm-2"> Fullname </label>
                                        <Col md={6}>
                                        <Control.text model=".Fullname"  id="fullname" name="fullname"
                                        placeholder="Full Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3)
                                        }}
                                         />
                                          <Errors
                                        className="text-danger"
                                        model=".Fullname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            
                                        }}
                                     />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <label for="email" class="col-sm col-md-2" > E-mail &emsp;</label>
                                        <Col md={6} >
                                        <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                        }}/>
                                        <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                        </Col >
                                    </Row>

                                    <Row className="form-group">
                                        <label for="phonenum" class="col-sm col-md-2" > Phone &emsp;</label>
                                        <Col md={6} >
                                        <Control.text model=".phonenum" id="phonenum" name="phonenum"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(10), isNumber
                                        }}
                                         />
                                          <Errors
                                        className="text-danger"
                                        model=".phonenum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be a 10 digit number',
                                            
                                        }}
                                     />
                                        </Col >
                                    </Row>

                                    <Row className="form-group">
                                        <label for="message" class="col-sm col-md-2 "> Message</label>
                                        <Col md={6}>
                                        <Control.text model=".message" id="message" name="message"
                                        placeholder="Message"
                                        className="form-control"
                                        validators={{ required, minLength: minLength(7)
                                        }}
                                         />
                                          <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 7 characters',
                                            
                                        }}
                                     />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={{ size: '10', offset: 0 }}>
                                            <Button type="submit" value="submit" >Submit</Button>
                                            &nbsp;
                                    <Button onClick={(values) => this.handleReset(values)} > &nbsp;Reset &nbsp;</Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        
                        
                            
                                <div className="col-sm col-md-4">
                                    <h2 className="aligntext">Our Location</h2><br />
                                    <Card body>
                                        <CardTitle >add your company address here</CardTitle>
                                        <CardText>add address here<br />add address here<br />add address here<br />add address here<br />add address here<br /> </CardText>
                                    </Card>
                                
                            </div>
                        </div><br/>
                    </div>
                </FadeTransform><br/>
                {/* <Map google={this.props.google} zoom={5}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map> */}
                {/* <Map
          google={this.props.google}
          style={{width:"50%",height:"50%"}}
        
          initialCenter={{
            lat: 28.6280,
            lng: 77.3649
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
        </Map> */}
            </div>


        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyBDmZIOaZ0Psg0069wC_Jui7NhiVGerInk")
})(Contact)
