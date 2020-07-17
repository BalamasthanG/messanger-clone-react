import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrszwyvgkwgz_gsVJDOvtsApMnYDHarkQ",
  authDomain: "messanger-clone-fe353.firebaseapp.com",
  databaseURL: "https://messanger-clone-fe353.firebaseio.com",
  projectId: "messanger-clone-fe353",
  storageBucket: "messanger-clone-fe353.appspot.com",
  messagingSenderId: "1038671310972",
  appId: "1:1038671310972:web:3a0a4ff9b23f3df63619f9",
  measurementId: "G-35T5Q6FCXR",
});

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
