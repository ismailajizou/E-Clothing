import React, {lazy, Suspense, useEffect, useState} from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Spinner from './components/spinner/spinner';
import useCartReducer from './utils/reducers/cartReducer';
import CartCtx from './utils/contextFiles/cart.context';
import UserCtx from './utils/contextFiles/user.context';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const SigninAndSignup = lazy(() => import('./pages/signin-&-signup/signin-&-signup'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));
const AboutPage = lazy(() => import('./pages/about/about'));

const App = () => {
  const [ {hidden, totalPrice, count, cartItems}, dispatch ] = useCartReducer();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
          });
        });
    }
      setCurrentUser(userAuth);
    });
    return unsubscribeFromAuth;
  }, [])
  
  return (
    <UserCtx.Provider value={{currentUser, setCurrentUser}}>
      <CartCtx.Provider value={[{hidden, totalPrice, count, cartItems}, dispatch]}>
        <Header/>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin'
              render={() => currentUser ? <Redirect to='/'/> : <SigninAndSignup/> }
            />
          </Suspense>
        </Switch>
      </CartCtx.Provider>
    </UserCtx.Provider>
  );
}

export default App ;
