import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardHeader } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Image from 'react-bootstrap/Image'


class Dining extends Component {

  render() {
    return (
      <div className="Container-fluid">
        <div>
        <Image
            className="d-block w-100"
            src="./Images/components_images/dining/cover.jpg"
            alt="diningimage" />
          {/* <img
            style={{ height: "700px" }}
            className="d-block w-100"
            src="./Images/components_images/dining/cover.jpg"
            alt="bedroomimage" /> */}
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
                <img style={{ borderRadius: 175 }} height="300px" width="300px" src="Images/components_images/dining/traditional (1).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Traditional style</h1>
                  <p className="text-justify">The traditional designs are mainly used in homes and create a more intimate setting with features such as a small table. This style contains either light or dark color wood and the lines tend to be softer or curved to create a casual atmosphere. This style also comprises mix and match types of accessories for decoration.</p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="300px" width="300px" src="Images/components_images/dining/traditional (2).jpg" />
              </div>
            </div>
            <div className="row">
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">These styles give you a multipurpose space to eat delicious food, entertain and celebrate. this style is designed for the family purpose where family members eat together and enjoy a precious time together.The dining table can either be inside the kitchen or outside.</p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="300px" width="300px" src="Images/components_images/dining/traditional (3).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">The accessories of this style are arranged according to traditionally from generation to generation and use chandelier as the central element. This style can be built either inside or outside of the home according to one’s requirement.</p>
                </div>
              </Fade>
            </div><br />
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
                      src="Images/components_images/dining/contemporary (1).jpg" />
                  </Card><br />
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4">
                  <h1 className="fontstyle">Contemporary style</h1>
                  <p className="text-justify">The contemporary style reflects the updated ideas used to make your dining space modern and stylish. This style uses unexpected designs and features elements and décor items. This style is used for casual purposes or such as in-home according to the customer requirements. Contemporary designs use clever elements to provide additional comfort.</p>
                </div>
              </Slide> <br />
              <div className="row">
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/dining/contemporary (2).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/dining/contemporary (3).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/dining/contemporary (4).jpg" />
                </div>
              </div>
            </div>
          </div><br />
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
                  <h1 className="fontstyle"> Formal style</h1>
                  <p className="text-justify"> The formal design style has elegant furniture that typically is an all matching set. It usually includes different shapes of tables such as a rectangular, oval, or circular table. They often are more elaborate in design with curves and inlays and use warmer-colored woods. Accessories like sconces or a crystal chandelier are also used in this style.</p>
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4 ">
                  <Card>
                    <CardImg style={{ height: "400px" }}
                      src="Images/components_images/dining/formal.jpg" />
                  </Card>
                </div>
              </Slide>
            </div>
          </div><br />
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
              <Fade top>
                <div className="col-sm col-md-5 offset-md-1">
                  <Card>
                    <CardImg style={{ height: "600px" }}
                      src="Images/components_images/dining/rustic (1).jpg" />
                  </Card><br /><br />
                  <p className=" text-justify"> Accessories used in this style such as artwork, photographs, and light fixtures with a woodsy theme.  With all these creations one can improve his mood and feel relax. The items used in this styles are sometimes arranged in a way that all are user friendly and give feel light and amazing.</p>
                </div>
              </Fade>
              <Fade top>
                <div className="col-sm col-md-5 offset-md-1"><br />
                  <h1 className="fontstyle"> Rustic style</h1>
                  <p className=" text-justify">This style is used to invoke the feeling of being close to nature. The wood used in this style is rough-hewn with prominent wood grain and furniture is made from heavier wood with a masculine feel to it. </p>
                  <br />
                  <Card>
                    <CardImg style={{ height: "600px" }}
                      src="Images/components_images/dining/rustic (2).jpg" />
                  </Card>
                </div>
              </Fade>
            </div><br /><br />
          </div>
        </div>
      </div>

    );
  }
}

export default Dining;