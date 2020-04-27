import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD-DpLu0wPwJMK8JXqYdwHuk6KxvQ5T8ws',
  authDomain: 'ecommerce-react-app-8646a.firebaseapp.com',
  databaseURL: 'https://ecommerce-react-app-8646a.firebaseio.com',
  projectId: 'ecommerce-react-app-8646a',
  storageBucket: 'ecommerce-react-app-8646a.appspot.com',
  messagingSenderId: '316990347007',
  appId: '1:316990347007:web:73bcf1b92237e40a265eca',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if not authenticated user, then return
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  console.log(userRef);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userRef;
    const createdAt = new Date();

    // create data if snapshot does not exist
    try {
      await userRef.set({
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
