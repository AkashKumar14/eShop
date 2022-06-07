import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBH6zA6_voFX7D6za_sBVLDnqpNQgO7YDs",
    authDomain: "eshop-5bd9b.firebaseapp.com",
    projectId: "eshop-5bd9b",
    storageBucket: "eshop-5bd9b.appspot.com",
    messagingSenderId: "536951853872",
    appId: "1:536951853872:web:ceab53309dddb0d02aaef5",
    measurementId: "G-MLCY92MP2E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  
  export { db, auth };