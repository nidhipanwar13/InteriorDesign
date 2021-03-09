import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, CardDeck, CardGroup, CardHeader } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class Living extends Component {

  render() {
    return (
      <div className="Container-fluid">
        <div>
          <img
            style={{ height: "700px" }}
            className="d-block w-100"
            src="./Images/components_images/living/cover (2).jpg"
            alt="bedroomimage" />
        </div>

        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/living/div4.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <Slide left>
                <div className="col-sm col-md-4 offset-md-2">
                  <Card>
                    <CardImg style={{ height: "400px" }}
                      src="Images/components_images/living/modern (1).jpg" />
                  </Card><br />
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Modern style</h1>
                  <p className="text-justify">The modern designs are still looking better and trendy nowadays. This design is uncluttered, simple, and pairs very well with a minimalist sensibility and color palette for these styles are white and bright which work as a base. This style uses clean design lines with minimal textures and has graphical and geometrical patterns on the wall for decoration purposes.</p>
                </div>
              </Slide><br />
              <div className="row">
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/living/modern (2).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/living/modern (3).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/living/modern (4).jpg" />
                </div>
              </div>
            </div>
          </div><br />
        </div>
        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/living/div5.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <Slide left>
                <div className="col-sm col-md-4 offset-md-2"><br />
                  <h1 className="fontstyle">Craftsman style</h1>
                  <p className="text-justify">The craftsman designs feature hand made work of high-quality natural wood. The colors are mainly used to build a cozy and warm environment. This style has numerous handcrafted pieces such as end tables, desk, and cabinets all of the high quality and beautifies the area.This style included a covered front porch with long carpets lying on the floor as entered inside.</p>
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4 ">
                  <Card>
                    <CardImg style={{ height: "400px" }}
                      src="Images/components_images/living/craftsman.jpg" />
                  </Card>
                </div>
              </Slide>
            </div>
          </div><br />
        </div>

        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/living/div2.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <div className="col-sm col-md-5 offset-md-1">
                <Card>
                  <CardImg style={{ height: "600px" }}
                    src="Images/components_images/living/contemporary (1).jpg" />
                </Card><br /><br />
                <Fade top>
                  <p className=" text-justify">From the pictures, you can see that this style uses innovative and stylish ideas which gives a beautiful and modern look to the living room. Sometimes for décor purposes is used hanging light ceiling pendant lamps and ceiling lights.The décor accessories are used such as beautiful paintings for the wall, indoor fountains, table decoration showpiece, and many more. </p>
                </Fade>
              </div>

              <div className="col-sm col-md-5 offset-md-1"><br />
                <Fade top>
                  <h1 className="fontstyle">Contemporary style</h1>
                  <p className="fontstyle text-justify">Contemporary designs are created presently according to the ongoing trends. This style embraces clean lines and shapes with softened curves. Built-in wall storage with extra-wide windows is also used in this style. In this, the space is quite big and clutter-free because of the wall installed storage cabinets. </p>
                </Fade>
                <br />
                <Card>
                  <CardImg style={{ height: "600px" }}
                    src="Images/components_images/living/contemporary (2).jpg" />
                </Card>
              </div>
            </div><br /><br />
          </div>
        </div>

        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/living/div3.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/living/traditional (1).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Traditional style</h1>
                  <p className="text-justify">The traditional design style uses paired furniture pieces and accents with cozy and welcoming textiles. The decoration accessories for this style are a warm color palette with traditional style decors and extra soft pillows on a sofa. Furnishings done should be finely crafted, and have an element of elaborate woodwork in this style.</p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/living/traditional (2).jpg" />
              </div>
            </div>

            <div className="row">
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">The pattern you will find in this style are a foyer inbuilt inside wall around the seating arrangement with a central table and has long curtains from the ceiling to floor and also have printed traditional carpets.</p>
                </div>
              </Fade>

              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/living/traditional (3).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">The decor items used in this style are handcrafted multicolor wooden cabinets, traditional wooden corner pillar showpiece, abstract wall painting, and table lamps.This style has no more space around the ling room and furniture placed in a small area.</p>
                </div>
              </Fade>
            </div><br />
          </div>
        </div>
      </div>
    );
  }
}

export default Living;