import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }
  return userRef;
}

  // export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  //   const collectionRef = firestore.collection(collectionKey);

  //   const batch = firestore.batch();

  //   objectsToAdd.forEach(obj => {
  //     const newDocRef = collectionRef.doc();
  //     batch.set(newDocRef, obj);
  //   });

  //   return await batch.commit();
  // };

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce( (acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



