import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoavgYMfkP9GoJfrLDmarGbG9v2owiYYE",
  authDomain: "new-93d7e.firebaseapp.com",
  databaseURL: "https://new-93d7e.firebaseio.com",
  projectId: "new-93d7e",
  storageBucket: "new-93d7e.appspot.com",
  messagingSenderId: "291694563003",
  appId: "1:291694563003:web:3edb2f30f6bd6d712c239e",
  measurementId: "G-2ZQM57RGXS"
};

 firebase.initializeApp(firebaseConfig);
 const db = firebase.database().ref();

 export default db;