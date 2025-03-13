// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCcf9XYXhvM0g8SUKb8qZeqEycx-jNCCc",
  authDomain: "cryptohub-eh.firebaseapp.com",
  databaseURL: "https://cryptohub-eh-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cryptohub-eh",
  storageBucket: "cryptohub-eh.firebasestorage.app",
  messagingSenderId: "150967492197",
  appId: "1:150967492197:web:67b1bd1678fca2d295708c",
  measurementId: "G-P58EZLKP7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
