import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
