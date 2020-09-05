import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-&-signup/signin-&-signup';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
