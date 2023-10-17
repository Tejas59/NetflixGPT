// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE7ctFKn2y6CTQ7CueenS0YvVeJ5PK-d8",
  authDomain: "netflixgpt-30164.firebaseapp.com",
  projectId: "netflixgpt-30164",
  storageBucket: "netflixgpt-30164.appspot.com",
  messagingSenderId: "219628130164",
  appId: "1:219628130164:web:43e71dce0dfc9384c96621",
  measurementId: "G-37JT8LGK6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();