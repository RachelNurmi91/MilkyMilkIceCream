import React, { Component } from 'react';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        );
    }
}

export default App;