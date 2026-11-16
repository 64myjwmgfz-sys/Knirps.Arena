// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy2g_uHstamhwGAuIGu7k-N8ZVLt0pHLw",
  authDomain: "knirps-arena.firebaseapp.com",
  projectId: "knirps-arena",
  storageBucket: "knirps-arena.firebasestorage.app",
  messagingSenderId: "788149835492",
  appId: "1:788149835492:web:59a51377924644de107ef1",
  measurementId: "G-SHL79X6P4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
