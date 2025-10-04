// Import the functions you need from the SDKs 
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx6djY_02ErBPclKp8wNCRwj6wu7GfkYk",
  authDomain: "opphora.firebaseapp.com",
  projectId: "opphora",
  storageBucket: "opphora.firebasestorage.app",
  messagingSenderId: "947750596381",
  appId: "1:947750596381:web:5832263141ba32fca8fbf4",
  measurementId: "G-ZSZHFM92SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);        // For Authentication
export const db = getFirestore(app);     // For Firestore database
export const storage = getStorage(app);  // For file storage (images)