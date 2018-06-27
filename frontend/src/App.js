import React, { Component, notification } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {getUserProfile} from './utils/APIUtils';

import Header from './WebComponents/Header/Header';
import AboutUs from './WebComponents/AboutUs/AboutUs';
import Login from './WebComponents/Login/Login';
import SignUp from './WebComponents/Signup/Signup';
import BookDetails from './WebComponents/BookDetails/BookDetails';
import Home from './WebComponents/Home/Home';
import UserProfile from './WebComponents/UserProfile/UserProfile';
import ChangePass from './WebComponents/ChangePass/changePass';
import Checkout from './WebComponents/Checkout/Checkout';
import Profile from './WebComponents/Profile/Prolfile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getUserProfile()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
      console.log("hey");
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(localStorage.ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Polling App',
      description: description,
    });
  }

  handleLogin() {
    this.loadCurrentUser();
    // this.props.history.push("/home");
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
              <Route exact path='/home' component={Home} />
              <Route exact path='/about_us' component={AboutUs} />
              <Route exact path='/bookdetails' component={BookDetails}/>
              <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/BookDetails' component={BookDetails}/>
              <Route exact path='/UserProfile' component={UserProfile}/>
              <Route exact path='/ChangePass' component={ChangePass}/>
              <Route exact path='/checkout' component={Checkout}/>
              <Route path='/users/:username'
                render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
              >
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
