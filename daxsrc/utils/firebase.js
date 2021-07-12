import firebase from "firebase";
// import * as firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyC2NAyCJlT4LMhTMSCRvQrN1dnGVtXa5-Y",
    authDomain: "bsit-3c-martinangelo.firebaseapp.com",
    projectId: "bsit-3c-martinangelo",
    storageBucket: "bsit-3c-martinangelo.appspot.com",
    messagingSenderId: "937609379656",
    appId: "1:937609379656:web:8af8d1c731d52300647d7d",
    measurementId: "G-EGXZCG2JLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };