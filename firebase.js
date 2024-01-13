// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc-rsLdMqcvc3Arnn-XX1AjYiwcJR327o",
  authDomain: "ktu-gpa-calculator-57e35.firebaseapp.com",
  projectId: "ktu-gpa-calculator-57e35",
  storageBucket: "ktu-gpa-calculator-57e35.appspot.com",
  messagingSenderId: "1069604307166",
  appId: "1:1069604307166:web:adf7866ae0f69265dfc24f",
  measurementId: "G-8GCEL0C37S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);