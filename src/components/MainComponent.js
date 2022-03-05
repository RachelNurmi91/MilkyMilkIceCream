import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    };

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
                    <Redirect to='/home'/>
                </Switch>
            </div>
        );
    }
}

export default Main;