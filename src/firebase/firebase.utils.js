import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDk5mkQVhhI5BhfAHKZD3CydnzeIytF9Mw",
    authDomain: "e-clothing-db-2e653.firebaseapp.com",
    databaseURL: "https://e-clothing-db-2e653.firebaseio.com",
    projectId: "e-clothing-db-2e653",
    storageBucket: "e-clothing-db-2e653.appspot.com",
    messagingSenderId: "23529814391",
    appId: "1:23529814391:web:881fcab1d0388213c4c972",
    measurementId: "G-MHFYBVCZ7Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



