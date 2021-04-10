
//adding auth to website with firebase

import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNKLAAcCTlFbpwyI7Id5b76rD7uSc8QbA",
    authDomain: "mindfulmed-ef1e4.firebaseapp.com",
    projectId: "mindfulmed-ef1e4",
    storageBucket: "mindfulmed-ef1e4.appspot.com",
    messagingSenderId: "207116693441",
    appId: "1:207116693441:web:68abe80ab0c8df878e8940"
  };

  //initialize firebase app 

  firebase.initializeApp(firebaseConfig);

  //set up provider

  const provider = new firebase.auth.GoogleAuthProvider();

  //config firebase provider 

  const auth = firebase.auth();

  //set up actions & create pop up for login 

  function login(){
      auth.signInWithPopup(provider)
  }

  function logout(){
      auth.signOut()
  }

  //export the actions 

  export{
      auth,
      login,
      logout
  }