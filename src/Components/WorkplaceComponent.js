import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardHeader } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



class Workplace extends Component {

  render() {

    return (
      <div className="Container-fluid">

        <div>
          <img
            style={{ height: "700px" }}
            className="d-block w-100"
            src="./Images/components_images/workspace/Background_workspace.jpg"
            alt="bedroomimage" />
        </div>
        {/* <div class="bg-image"
          style={{
            backgroundImage: 'url("/Images/components_images/workspace/div1.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
            color: 'black'
          }} ><br />
          <div className="container">
            <div className="row">
              <div className="col-sm col-md-12">
                <p className="text-justify">Right before the holidays, I was able to upgrade my mom, sister, and niece from a one bedroom apartment to a three bedroom house rental. It was especially tough for them to be all packed like sardines during lockdown so I had to help them out. My mom finally retired after being laid off last year so I’m excited for this new chapter. It’s been a long time coming and everyone deserves their own space.</p>
              </div>
            </div>
          </div>
        </div> */}
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
                    src="Images/components_images/workspace/formal_conference (1).jpg" />
                </Card><br /><br />
                <Fade top>
                  <p className="fontstyle text-justify"> The area captured by this design may be large or a small room depends upon the requirement of the organization. This style uses formal and fewer accessories with floor to ceiling transparent windows to give a professional look.This type of style is used in large organizations where every employee can participate well.</p>
                </Fade>
              </div>
              <div className="col-sm col-md-5 offset-md-1"><br />
                <Fade top>
                  <h1 className="fontstyle">Formal Conference style</h1>
                  <p className="fontstyle text-justify">This type of style aims to provide a formal environment where employees can easily discuss their specific agenda. The formal design style is mainly designed for meetings, monthly presentations, or executive strategy sessions.</p>
                </Fade>
                <br />
                <Card>
                  <CardImg style={{ height: "600px" }}
                    src="Images/components_images/workspace/formal_conference (2).jpg" />
                </Card>
              </div>
            </div><br /><br />
          </div>
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
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images//components_images/workspace/informal (1).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Informal style</h1>
                  <p className="text-justify">The informal workspace is used for multipurpose and collaborative activities such as conference sessions, presentations, discussions, and brainstorming. The informal workspace can be set up with minimal equipment and may require no additional effort from the participant. </p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images//components_images/workspace/informal (2).jpg" />
              </div>
            </div>
            <div className="row">
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">The accessories for this style include a casual sofa with cushions, with centered table, chairs, and have some decor items.If a single person wants to do his/her personal and professional work then this style can be a better option to achieve appropriate desires and targets with a healthy working environment.</p>
                </div>
              </Fade>
              <div className="col-sm col-md-4">
                <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images//components_images/workspace/informal (3).jpg" />
              </div>
              <Fade top>
                <div className="col-sm col-md-4"><br /><br />
                  <p className="text-justify">In this style, people feel relaxed and comfortable during meetings. This style contains chairs and sofas and accessories used are informal. This style is used for multipurpose such as for formal meetings, colleague collaboration, and casual meetings.</p>
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
                      src="Images/components_images/workspace/green (3).jpg" />
                  </Card><br />
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4"><br />
                  <h1 className="fontstyle">Green style </h1>
                  <p className="text-justify">This design style is generally used to take care of the earth as a priority in your organization. The designer keeps in mind the basic R’s principle such as Recycle, Reuse, and  Recover and designed the workspace area from sustainable material because of its eco-friendly property.  This style uses green plants and eco-friendly material to decor space.</p>
                </div></Slide><br />
              <div className="row">
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/workspace/green (1).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images/components_images/workspace/green (2).jpg" />
                </div>
                <div className="col-sm col-md-4">
                  <img style={{ borderRadius: 175 }} height="350px" width="350px" src="Images//components_images/workspace/green (4).jpg" />
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
                  <h1 className="fontstyle">Open space style</h1>
                  <p className="text-justify">The open space workplace provides open space for employees rather than closing off employees in cubicles or cellular offices. These styles are used to encourage employees to connect and get creative. This type of style makes office culture and services more transparent with flexible space. Open space offices are meant to encourage collaboration among staff.</p>
                </div>
              </Slide>
              <Slide right>
                <div className="col-sm col-md-4 ">
                  <Card>
                    <CardImg style={{ height: "400px" }}
                      src="Images/components_images/workspace/openspace.jpg" />
                  </Card>
                </div>
              </Slide>
            </div>
          </div><br />
        </div>
      </div>

    );
  }
}

export default Workplace;