// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_TX6FTlVI4aq34M6j2iPNCEGaljCNvyc",
    authDomain: "apascoa-site.firebaseapp.com",
    databaseURL: "https://apascoa-site-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "apascoa-site",
    storageBucket: "apascoa-site.appspot.com",
    messagingSenderId: "498904583654",
    appId: "1:498904583654:web:e5dd27dfb5c83fc36f1a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

*/