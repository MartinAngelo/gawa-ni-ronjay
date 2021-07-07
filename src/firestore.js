import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAB859Iu5PUHvxwKQMeJ3KoicVXxByPaL4",
    authDomain: "pussycat-8b9f4.firebaseapp.com",
    projectId: "pussycat-8b9f4",
    storageBucket: "pussycat-8b9f4.appspot.com",
    messagingSenderId: "704265508474",
    appId: "1:704265508474:web:f128b6f90334ae81c58dc3",
    measurementId: "G-MRLMWBMN5F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;