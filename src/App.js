import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-&-signup/signin-&-signup';
import { auth, createUserProfoleDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null 

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfoleDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          )
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
  );
  }
  
  
}

export default App;
