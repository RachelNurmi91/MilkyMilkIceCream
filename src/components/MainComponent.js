import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Flavors from './FlavorComponent';
import FlavorInfo from './FlavorInfoComponent';
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

        const FlavorId = ({match}) => {
            return (
              <FlavorInfo 
                flavor={this.state.flavors.filter(flavor => flavor.id === +match.params.flavorId)[0]}
                />
            );
          }


        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/flavors' render={() => <Flavors flavors={this.state.flavors} />} />
                    <Route path='/flavors/:flavorId' component={FlavorId} />
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