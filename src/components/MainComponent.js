import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Flavors from './FlavorComponent';
import Footer from './FooterComponent';
import { FLAVORS } from '../shared/flavors.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flavors: FLAVORS
        };
    }

    render() {

        const HomePage = () => {
            return (
                
                <Home />
    
            );
        };


        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/flavors' render={() => <Flavors flavors={this.state.flavors} />} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;