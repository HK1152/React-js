// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWAJoD1H4q56Qhimldosp4-T1mgEJ4GKo",
  authDomain: "product-management-app-1152.firebaseapp.com",
  projectId: "product-management-app-1152",
  storageBucket: "product-management-app-1152.firebasestorage.app",
  messagingSenderId: "875170101748",
  appId: "1:875170101748:web:ab947966dfcabab3dce1a1",
  measurementId: "G-QRSB78DE2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Export auth