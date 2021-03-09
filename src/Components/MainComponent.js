import React, { Component } from 'react';
import Bedroom from "./BedroomComponent";
import Home from './HomeComponent';
import { Element } from 'react-scroll';
import Header from "./HeaderComponent";
import Dining from './DiningComponent';
import Living from './LivingComponent';
import Workplace from './WorkplaceComponent';
// import Accessories from './AccessoriesComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchUserdata } from '../redux/ActionCreator';
import { SendConsultationBooking } from '../redux/ActionCreator';
import firebase from "../Config/firebase";


 const mapStateToProps = state => {
   return {
        userdata: state.userdata
    
        
    }
 }

 const mapDispatchToProps = dispatch => ({
    fetchUserdata: () => {dispatch(fetchUserdata())},
    SendConsultationBooking : (fullname, phonenum, email) => {dispatch(SendConsultationBooking(fullname,phonenum,email))}
 });

class Main extends Component {

    componentDidMount() {
        this.props.fetchUserdata();

    };

    render() {

        const Homepage = () => {
            return(
                <Home SendConsultationBooking = {this.props.SendConsultationBooking}/>
            );
        }

        return (
            <div>
                <Router>
                    <Header />

                    <TransitionGroup>
                        <CSSTransition classNames="page" timeout={300}>
                            <Switch location={this.props.location}>
                                <Route exact path="/Home" component={Homepage} />
                                <Route exact path="/Bedroom" component={Bedroom} />
                                <Route exact path="/Dining" component={Dining} />
                                <Route exact path="/Living" component={Living} />
                                <Route exact path="/Workplace" component={Workplace} />
                                <Route exact path="/Contact" component={Contact} />
                                <Redirect to="/Home" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </Router>
                <Footer />

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);