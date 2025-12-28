// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIAibIEdZGf9H6LENYGIr5Jhom3eQ1M9o",
  authDomain: "react-project-ff836.firebaseapp.com",
  projectId: "react-project-ff836",
  storageBucket: "react-project-ff836.firebasestorage.app",
  messagingSenderId: "713536313398",
  appId: "1:713536313398:web:f5204886f9807fe4f52097",
  measurementId: "G-K12H1NWEGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);