import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzVARj9k-EWbBHJm73JjhJN13qTix8Eo4",
  authDomain: "wellnest-5f879.firebaseapp.com",
  projectId: "wellnest-5f879",
  storageBucket: "wellnest-5f879.appspot.com",
  messagingSenderId: "167329957573",
  appId: "1:167329957573:web:4a844f006802f70e3412ac",
  measurementId: "G-GNEJYKVB67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);