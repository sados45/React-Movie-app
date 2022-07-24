// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv9YeHYiM1exU8FJVdWQeOrfGyVDfkGlk",
  authDomain: "digi-movie-1dde3.firebaseapp.com",
  projectId: "digi-movie-1dde3",
  storageBucket: "digi-movie-1dde3.appspot.com",
  messagingSenderId: "353820353970",
  appId: "1:353820353970:web:1219945676b247864870ab",
  measurementId: "G-PQTRT79H33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)