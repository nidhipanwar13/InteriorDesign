import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, CardDeck, CardGroup, CardColumns, CardHeader } from 'reactstrap';
import { Button, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';



class Bedroom extends Component {

  render() {

    return (
      <div className="Container-fluid">
        <div>
          <img
            style={{ height: "700px" }}
            className="d-block w-100"
            src="./Images/components_images/bedroom/cover (2).jpg"
            alt="bedroomimage" />
        </div>

        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/workspace/div5.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <Slide left>
                <div className="col-sm col-md-4 offset-md-2"><br />
                  <h1 className="fontstyle">Contemporary style</h1>
                  <p className=" text-justify">Contemporary design includes styles from the end of the 20th century, where design veered a little from modern design and into a more natural and soft look. Some of the key elements of contemporary designs are giant windows, glass walls, floor to ceiling windows, vibrant colors, soft textures, and warm wood.</p>
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4 ">
                  <Card>
                    <CardImg style={{ height: "400px" }}
                      src="Images/components_images/bedroom/contemporary.jpg" />
                  </Card>
                </div>
              </Slide>
            </div>
          </div><br />
        </div>
        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/workspace/div3.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/bedroom/cottage (1).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Cottage style</h1>
                  <p className="text-justify">The cottage interior design is drenched in brightness, lightness, and openness which uses a color palette a neutral base, bright white. Softer primary colors are frequently used as accents and pairing colors with the white, or everything can be white for an easy clean look. These styles are unique by nature and by look.</p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/bedroom/cottage (2).jpg" />
              </div>
            </div>
            <div className="row">
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">Cottage bedrooms design uses recycled materials that are recyclable and energy-efficient. These are the most durable and affordable materials to build a home with and can easily be recycled as well.The cottage style bedroom décor uses white furniture and a neutral color palette that gives the room a fresh feel.</p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/bedroom/cottage (3).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">This style uses the dark color of ceilings and walls made from wood that is used for the furniture in the bedroom. The shape of the roof is also very interesting, with the shape of a triangle instead of a flat roof.This style shows a unique and beautiful look. </p>
                </div>
              </Fade>
            </div><br />
          </div>
        </div>
        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/workspace/div2.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <div className="col-sm col-md-5 offset-md-1">
                <Card>
                  <CardImg style={{ height: "600px" }}
                    src="Images/components_images/bedroom/traditional (1).jpg" />
                </Card><br /><br />
                <Fade top>
                  <p className="fontstyle text-justify">Softer primary colors are frequently used as accents and pairing colors with the white, or everything can be white for an easy clean look. These styles are unique by nature and by look.The material used to make the floor of this style is a natural wood of light color.The decor items are generally made from the bamboo tree such as baskets, grass laundry baskets, and carpets to beautify the accessories present in the room.  </p>
                </Fade>
              </div>
              <div className="col-sm col-md-5 offset-md-1"><br />
                <Fade top>
                  <h1 className="fontstyle"> Traditional style</h1>
                  <p className="fontstyle text-justify">The traditional design style never changes and is rooted in the past but the design can be embraced to create a beautiful look that fits a bedroom today. Some key factors are everything comes in pairs such as matching ends tables and lamps and the bed in the center of the wall farthest from the door. This style uses dark woods and rich tones.</p>
                </Fade>
                <br />
                <Card>
                  <CardImg style={{ height: "600px" }}
                    src="Images/components_images/bedroom/traditional (2).jpg" />
                </Card>
              </div>
            </div><br /><br />
          </div>
        </div>

        <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/workspace/div4.jpg")',
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
                      src="Images/components_images/bedroom/modern (1).jpg" />
                  </Card><br />
                </div>
              </Slide>
              <Slide right >
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Modern style</h1>
                  <p className="text-justify">The modern interior uses architectural elements such as concrete accent walls, wood floors, clean straight lines, and shapes. These styles consist of natural lights, bright colors, and wood as decoration. This interior mainly focuses on colors and simple and well decorative materials.The modern style uses stylish and bold color palettes that give the room a trendy, modern feel and perfect beautiful look.</p>
                </div>
              </Slide>
              <br />
              <div className="row">
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/bedroom/modern (2).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/bedroom/modern (3).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/bedroom/modern (4).jpg" />
                </div>
              </div>
            </div>
          </div><br />
        </div>
      </div>

    );
  }
}

export default Bedroom;