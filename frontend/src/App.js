import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './WebComponents/Header/Header';
import AboutUs from './WebComponents/AboutUs/AboutUs';
import Login from './WebComponents/Login/Login';
import SignUp from './WebComponents/Signup/Signup';
import BookDetails from './WebComponents/BookDetails/BookDetails';
import Home from './WebComponents/Home/Home';
import UserProfile from './WebComponents/UserProfile/UserProfile';
<<<<<<< HEAD
import ChangePass from './WebComponents/ChangePass/changePass';
=======
import Checkout from './WebComponents/Checkout/Checkout';
>>>>>>> 20e3299225ecd9a46fe234546ff4978f135c02fa

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/about_us' component={AboutUs} />
              <Route exact path='/bookdetails' component={BookDetails}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/BookDetails' component={BookDetails}/>
              <Route exact path='/UserProfile' component={UserProfile}/>
<<<<<<< HEAD
              <Route exact path='/ChangePass' component={ChangePass}/>
=======
              <Route exact path='/checkout' component={Checkout}/>
>>>>>>> 20e3299225ecd9a46fe234546ff4978f135c02fa
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
