import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css';
// Page Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import LoginPage from './pages/loginpage/login.component';
// View Components
import Header from './components/header/header.component';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // open session listener with Firebase
    // set to unsubscribeFromAuth property to be
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      // set our currentUser property to that of the user in firebase database
      this.setState({ currentUser: user})

      console.log(user);
    })
  }

  componentWillUnmount() {
    // call this method to close the `subscription` listening session with firebase auth
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
