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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


