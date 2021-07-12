import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDu4cKDRnoKXPeAk2hYar_Tgv6VDwapg_Y",
    authDomain: "final-activity-e2516.firebaseapp.com",
    projectId: "final-activity-e2516",
    storageBucket: "final-activity-e2516.appspot.com",
    messagingSenderId: "541261729821",
    appId: "1:541261729821:web:6663d864b90ef5f8d376f4",
    measurementId: "G-JFGYJ3DLX1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;