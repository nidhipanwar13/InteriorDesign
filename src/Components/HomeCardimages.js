import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardBody, CardTitle, CardImg, CardText, CardDeck, CardGroup, CardColumns } from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import { CardImgOverlay } from 'reactstrap';



class HomeCardimages extends Component {

    render() {

        return (
            <div className="Container-fluid" >
                <div className="style"
                    style={{
                        backgroundImage: 'url("/Images/components_images/home/div1.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        color: 'black'
                    }} ><br />
                    <Fade>
                        <h1 className="fontstyle">Our Specialization</h1><br />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm col-md-12">
                                    <p className="text-justify ">We are specialized in interior design to fit your space. We provide the most stylish and modern furnishings solutions for all your needs.Your home reflects your personality and something that you and your family love to spend time together.You don't need to look further to find anything because our services are always reliable and professional. Our team of designers is always looking for new trends and innovative solutions to make your home look and feel more elegant. </p>
                                </div>

                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="style"
                    style={{
                        backgroundImage: 'url("/Images/components_images/home/div2.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',

                        color: 'black'
                    }} ><br />
                    <div className="container">
                        <div className="row">
                            <Slide left>
                                <div className="col-sm col-md-4 offset-md-1" ><br /><br />
                                    <h1 className="fontstyle">Interior Design<br /> A Point of Focus</h1>
                                    <p className="text-justify">At Miluz Studio, we believe that interior design is a great way to showcase your own personality, and help make your home a place where you can relax and unwind. We aim to make you home interior design a great way to show off how your personality shines through. Interior design gives the most complete picture of your living space.</p>
                                </div >
                            </Slide>
                            <div className="col-sm col-md-5 offset-md-1">
                                <Card>
                                    <CardImg style={{ height: "600px" }}
                                        src="Images/components_images/interior.jpg" />
                                </Card>
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/Card_bedroom(1).jpg" />
                                            <Card.Body className="cardtext">
                                                <Card.Title >Bedroom Space</Card.Title>
                                                <Card.Text>
                                                    Place of Comfort
                                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/Card_bedroom(2).jpg" />
                                            <Card.Body className="cardtext">
                                                <Card.Title >Bedroom Space</Card.Title>
                                                <Card.Text>
                                                    Place of Comfort
                 </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </BackSide>
                                </Flippy >
                            </div>
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/Card_workspace(1).jpg" />
                                            <Card.Body className="cardtext" >
                                                <Card.Title>Workspace Area</Card.Title>
                                                <Card.Text>
                                                    Explore and Share Ideas
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle ">
                                            <Card.Img variant="top" height="400px" src="Images/Card_workspace(2).jpg" />
                                            <Card.Body className="cardtext" >
                                                <Card.Title>Workspace Area</Card.Title>
                                                <Card.Text>
                                                    Explore and Share Ideas
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle " >
                                            <Card.Img variant="top" height="400px" src="Images/Card_living(1).jpg" />
                                            <Card.Body className="cardtext">
                                                <Card.Title>Living Room</Card.Title>
                                                <Card.Text>
                                                    Space to Hang Out
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle ">
                                            <Card.Img variant="top" height="400px" src="Images/Card_living(2).jpg" />
                                            <Card.Body className="cardtext">
                                                <Card.Title>Living Room</Card.Title>
                                                <Card.Text>
                                                    Space to Hang Out
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
                <div className="style"
                    style={{
                        backgroundImage: 'url("/Images/components_images/home/div3.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',

                        color: 'black'
                    }}><br />
                    <div className="container">
                        <h1 className="fontstyle col-sm col-md-10 offset-md-1">Furniture gives You a New Perspective</h1><br /><br />
                        <div className="row">
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/Card_chair(1).jpg" />
                                            {/* <Card.Body className="cardtext">
                                                <Card.Title >Comfortable Chair</Card.Title>
                                                <Card.Text>
                                                    Have a Seat
                                                    </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/Card_chair(2).jpg" />
                                            {/* <Card.Body className="cardtext">
                                                <Card.Title >Comfortable Chair</Card.Title>
                                                <Card.Text>
                                                    Have a Seat
                                                    </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/table(1).jpg" />
                                            {/* <Card.Body className="cardtext" >
                                                <Card.Title>Planning Table</Card.Title>
                                                <Card.Text>
                                                    Gossips and Work Together
                                                    </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/table(2).jpg" />
                                            {/* <Card.Body className="cardtext" >
                                                <Card.Title>Planning Table</Card.Title>
                                                <Card.Text>
                                                    Gossips and Work Together
                                                    </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <Slide right>
                                <div className="col-sm col-md-4 "><br />
                                    <p className="fontstyle text-justify">Furniture gives a new meaning to elegance, comfort and style. The most important thing to consider when choosing your furniture is the comfort that you will find while sitting at your sofa, dining table, chair or bed. The design of furniture makes  a noticeable difference in the appearance of  the room.</p>
                                </div>
                            </Slide>
                        </div>
                        <div className="row">
                            <Slide left>
                                <div className="col-sm col-md-4 "><br />
                                    <p className="fontstyle text-justify"> The quality and functionality of a furniture design will define the overall impression of the space and the way people feel about it.Furniture should be made as comfortable as possible, and  this can be done without sacrificing any of the other qualities of a great piece of furniture. The quality of materials should be considered at every step.</p>
                                </div>
                            </Slide>
                            <div className="col-sm col-md-4 ">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle">
                                            <Card.Img variant="top" height="400px" src="Images/bed(1).jpg" />
                                            {/* <Card.Body className="cardtext">
                                                <Card.Title>Sleepy Bed</Card.Title>
                                                <Card.Text>
                                                    Dream More than Sleep
                                                </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/bed(2).jpg" />
                                            {/* <Card.Body className="cardtext">
                                                <Card.Title>Sleepy Bed</Card.Title>
                                                <Card.Text>
                                                    Dream More than Sleep
                                                </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle" >
                                            <Card.Img variant="top" height="400px" src="Images/sofa(1).jpg" />
                                            {/* <Card.Body className="cardtext">
                                                <Card.Title>Rocking Sofa</Card.Title>
                                                <Card.Text>
                                                    Drama in Nutshell
                                                    </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle">
                                            <Card.Img variant="top" height="400px" src="Images/sofa(2).jpg" />
                                            {/* <Card.Body className="cardtext">
                                                <Card.Title>Rocking Sofa</Card.Title>
                                                <Card.Text>
                                                    Drama in Nutshell
                                                    </Card.Text>
                                            </Card.Body> */}
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="style"
                    style={{
                        backgroundImage: 'url("/Images/components_images/home/div4.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',

                        color: 'black'
                    }}
                ><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm col-md-4 offset-md-4">
                                <CardGroup>
                                    <Flippy flipOnHover={true}>
                                        <FrontSide>
                                            <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/ceiling_light(1).jpg" />

                                        </FrontSide>
                                        <BackSide>
                                            <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/ceiling_light(2).jpg" />
                                        </BackSide>
                                    </Flippy>
                                </CardGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/lamps(1).jpg" />
                                    </FrontSide>
                                    <BackSide>
                                        <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/lamps(2).jpg" />
                                    </BackSide>
                                </Flippy>
                            </div>
                            <div className="col-sm col-md-4"><br /><br />
                                <h1 className="fontstyle"> The beauty of <br />light visible in <br />the darkness<br /> and gives a<br /> better picture<br /> of the night. </h1>
                            </div>
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide >
                                        <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/light_bulb(1).jpg" />
                                    </FrontSide>
                                    <BackSide >
                                        <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/light_bulb(2).jpg" />
                                    </BackSide>
                                </Flippy>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md-4 offset-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/chandelier(1).jpg" />
                                    </FrontSide>
                                    <BackSide>
                                        <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/chandelier(2).jpg" />
                                    </BackSide>
                                </Flippy>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="style"
                    style={{
                        backgroundImage: 'url("/Images/components_images/home/div5.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        color: 'black'
                    }}
                ><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle3"  >
                                            <Card.Img height="400px" src="Images/frames(1).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Limit Frames</h1>
                                                <h3>Pictures better Speak</h3>
                                            </CardImgOverlay>

                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle">
                                            <Card.Img height="400px" src="Images/frames(2).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Limit Frames</h1>
                                                <h3> Pictures better Speak </h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </BackSide>
                                </Flippy>
                                <Flippy flipOnHover={true}>
                                    <FrontSide>
                                        <Card className="fontstyle" >
                                            <Card.Img height="400px" src="Images/flowers(1).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Flowers</h1>
                                                <h3>  Fragrance of Interior</h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle" >
                                            <Card.Img height="400px" src="Images/flowers(2).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Flowers</h1>
                                                <h3>Fragrance of Interior </h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <Fade top>
                                <div className="col-sm col-md-4"><br /><br />
                                    <h1 className="fontstyle">Beautify your interior</h1>
                                    <p className="fontstyle text-justify"> Let’s start with the living room. For this space my family wanted a sectional so everyone can hang out. I picked out this forest green Pebble Chaise Sectional. It’s got good depth and pretty comfy with a nice medium firmness. It’s also modular so you can customize it to fit your space. I also dig the curved backs and arms. Once we picked out the sectional, I needed something to play off of the green. I found this vintage Moroccan rug that had all my favorite colors and it had some really geometric floral designs on it. It was a winner.</p>
                                </div>
                            </Fade>
                            <div className="col-sm col-md-4">
                                <Flippy flipOnHover={true}>
                                    <FrontSide >
                                        <Card className="fontstyle" >
                                            <Card.Img height="400px" src="Images/wall_hanging(2).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Wall Hanging</h1>
                                                <h3> Hang your Ideas</h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </FrontSide>
                                    <BackSide >
                                        <Card className="fontstyle">
                                            <Card.Img height="400px" src="Images/wall_hanging(1).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Wall Hanging</h1>
                                                <h3> Hang your Ideas</h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </BackSide>
                                </Flippy>
                                <Flippy flipOnHover={true}>
                                    <FrontSide >
                                        <Card className="fontstyle" >
                                            <Card.Img height="400px" src="Images/plant_pots(2).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Plants Pot</h1>
                                                <h3>deep into Nature</h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </FrontSide>
                                    <BackSide>
                                        <Card className="fontstyle" >
                                            <Card.Img height="400px" src="Images/plant_pots(1).jpg" />
                                            <CardImgOverlay><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <h1 className="fontstyle3">Plants Pot</h1>
                                                <h3>deep into Nature</h3>
                                            </CardImgOverlay>
                                        </Card>
                                    </BackSide>
                                </Flippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCardimages;      