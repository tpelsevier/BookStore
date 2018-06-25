import React, { Component } from 'react';
import './App.css';
import { Button, Popover } from 'react-bootstrap';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './WebComponents/Header/Header';
import AboutUs from './WebComponents/AboutUs/AboutUs';
import Login from './WebComponents/Login/Login';
import SignUp from './WebComponents/Signup/Signup';

class App extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route exact path='/about_us' component={AboutUs} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp}/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
