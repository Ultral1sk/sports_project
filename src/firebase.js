  import firebase from 'firebase/app';
  import 'firebase/app'
  import 'firebase/database'
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCSl374q0SCGeHoxSno69wst6RRXL0C78g",
    authDomain: "sport-1b2e0.firebaseapp.com",
    databaseURL: "https://sport-1b2e0.firebaseio.com",
    projectId: "sport-1b2e0",
    storageBucket: "sport-1b2e0.appspot.com",
    messagingSenderId: "122816401681",
    appId: "1:122816401681:web:54b71df33cfa5b44efbcb0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  firebaseDB.ref('matches').once('value').then((snapshot) => {
      console.log(snapshot.val());
      
  })