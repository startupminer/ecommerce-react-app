import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import './App.css';
// Page Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import LoginPage from './pages/loginpage/login.component';
// View Components
import Header from './components/header/header.component';
// Redux
import { setCurrentUser } from './redux/user/user.actions';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // open session listener with Firebase
    // set to unsubscribeFromAuth property to be
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // set our currentUser property to that of the user in firebase database
      // this.setState({ currentUser: user})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      //set user to null if logged out
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // call this method to close the `subscription` listening session with firebase auth
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
