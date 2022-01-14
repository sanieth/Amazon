// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBpU1UuSpxGAbKgqpYhnXaodxBnHB7bpJc",
    authDomain: "fir-46c76.firebaseapp.com",
    projectId: "fir-46c76",
    storageBucket: "fir-46c76.appspot.com",
    messagingSenderId: "595144923028",
    appId: "1:595144923028:web:e60fd568ef6b06334da181",
    measurementId: "G-FFBMPR7WT4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };