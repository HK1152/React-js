// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// Analytics is optional
import { getAnalytics } from "firebase/analytics";

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

// Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);

// Optional (only works on production/https)
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Firebase Analytics initialization failed:', error);
  }
}
export { analytics };
