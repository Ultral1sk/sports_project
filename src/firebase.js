  import firebase from 'firebase/app';
  import 'firebase/database'
  import 'firebase/auth'



  
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
//we acces our database and we use the ref() method to reffer to the database matches folder
// and then we export what we get whenever we are gonna need it
const firebaseMatches = firebaseDB.ref('matches');
//accesing the promotions folder into the databbase
const firebasePromotions  = firebaseDB.ref('promotions');

  export {
      firebase,
      firebaseMatches,
      firebasePromotions
  }