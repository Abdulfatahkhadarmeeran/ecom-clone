// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import  'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGzR1W8Z0fXhYZv6aU062F-9Bx2g1sBJM",
  authDomain: "poomphozhil-naturals.firebaseapp.com",
  projectId: "poomphozhil-naturals",
  storageBucket: "poomphozhil-naturals.appspot.com",
  messagingSenderId: "219449969703",
  appId: "1:219449969703:web:6355682a5d8487a53e5202",
  measurementId: "G-V5ZJNYJNPC"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};