import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBVHQw0gqOdM3hBqgz2i2QNW25USWkl47k",
  authDomain: "cart-jpn056.firebaseapp.com",
  databaseURL: "https://cart-jpn056.firebaseio.com",
  projectId: "cart-jpn056",
  storageBucket: "cart-jpn056.appspot.com",
  messagingSenderId: "252095978393",
  appId: "1:252095978393:web:2cdd3af98b21a840d6d108",
  measurementId: "G-F5FYN9D5CF"
};

 firebase.initializeApp(firebaseConfig);
 const db = firebase.database().ref();

export default db;