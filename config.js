import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBpd7JtpKqS_kteMfPZeTHa03bXYBmH6p8",
    authDomain: "story-hub-b8238.firebaseapp.com",
    projectId: "story-hub-b8238",
    storageBucket: "story-hub-b8238.appspot.com",
    messagingSenderId: "569278174614",
    appId: "1:569278174614:web:245e9d7ffe4c887574f9b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase.firestore();