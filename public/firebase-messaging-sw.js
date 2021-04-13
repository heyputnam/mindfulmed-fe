// this file ios needed in order to get accerss to token for messaging 

importScripts("https://www.gstatic.com/firebasejs/5.0.1/firebase.js")

const firebaseConfig = {
    apiKey: "AIzaSyBNKLAAcCTlFbpwyI7Id5b76rD7uSc8QbA",
    authDomain: "mindfulmed-ef1e4.firebaseapp.com",
    projectId: "mindfulmed-ef1e4",
    storageBucket: "mindfulmed-ef1e4.appspot.com",
    messagingSenderId: "207116693441",
    appId: "1:207116693441:web:68abe80ab0c8df878e8940"
  };
  

  firebase.initializeApp(firebaseConfig)

  const messageing = firebase.messaging();


  