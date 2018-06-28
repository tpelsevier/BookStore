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
      console.log(response)
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  handleLogout(redirectTo="home", notificationType="success", description="You're successfully logged out.") {
    console.log("LOGGIN OUT")
    localStorage.removeItem(localStorage.ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    //this.props.history.push(redirectTo);
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
            <Header currentUser={this.state.currentUser}
            onLogout={this.handleLogout}/>
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
              <Route path='/user'
                render={(props) => <UserProfile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
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
