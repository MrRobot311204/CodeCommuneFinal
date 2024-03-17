// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUPiOf7Xwasqr0WSUANKxl6rQmIUTPNag",
  authDomain: "codecommune-new.firebaseapp.com",
  projectId: "codecommune-new",
  storageBucket: "codecommune-new.appspot.com",
  messagingSenderId: "532260080426",
  appId: "1:532260080426:web:f75aa3cdbb84f3e06fac53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);