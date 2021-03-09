import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm col-md-4"><br />
                            <h5><b>Explore here</b></h5><br />
                            <a className="unstyled" href="/Home">Home </a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="unstyled" href="/Bedroom">Bedroom </a><br />&nbsp;
                        <a className="unstyled" href="//Dining">Dining </a><br />
                            <a className="unstyled" href="/Living">Living </a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="unstyled" href="/Workspace">Workspace </a><br />&nbsp;&nbsp;&nbsp;
                        <a className="unstyled" href="/Contact">Contact </a><br />
                        </div>
                        <div className="col-sm col-md-4"><br />
                            <h5><b>Connect with us</b></h5><br />
                            <SocialIcon url="http://linkedin.com/in/jaketrent" style={{ height: 35, width: 35 }} bgColor="#0077B5" fgColor="#FFFFFF" />&emsp;
                    <SocialIcon url="http://youtube.com/in/jaketrent" style={{ height: 35, width: 35 }} bgColor="#BB001B" fgColor="#FFFFFF" />&emsp;
                    <SocialIcon url="http://twitter.com/in/jaketrent" style={{ height: 35, width: 35 }} bgColor="#0077B5" fgColor="#FFFFFF" />
                        </div>
                        <div className="col-sm col-md-4"><br />
                            <h5><b>Write us on</b></h5><br />
                            <SocialIcon url="http://email.com" style={{ height: 35, width: 35 }} bgColor="#BB001B" fgColor="#FFFFFF" />
                        </div>
                    </div>
                    <p className="copyright justify-content-md-left"> <b>© Copyright 2021 Miluz_studio</b></p><br/>
                </div>
            </div>
        );
    }
}

export default Footer;