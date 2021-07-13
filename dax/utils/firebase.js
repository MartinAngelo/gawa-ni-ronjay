import firebase from "firebase";
// import * as firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

// const firebaseApp = firebase.initializeApp({
var firebaseConfig = {
    apiKey: "AIzaSyBFQpmE1fnQMNBbIjIV1_ieF9dIpfamXf0",
    authDomain: "bsit3d-bc27d.firebaseapp.com",
    projectId: "bsit3d-bc27d",
    storageBucket: "bsit3d-bc27d.appspot.com",
    messagingSenderId: "681844982575",
    appId: "1:681844982575:web:753ce616c48175804f97da",
    measurementId: "G-WQV76QWB39"
  };
// })

// const db = firebaseApp.firestore()

// const auth = firebase.auth()

// export { db, auth }

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// export default db;

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };