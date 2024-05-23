import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxvefYcQEkuYj6h5ZA4BEvzzWkN9LhxqM",
  authDomain: "diplom-rn.firebaseapp.com",
  projectId: "diplom-rn",
  storageBucket: "diplom-rn.appspot.com",
  messagingSenderId: "354292124531",
  appId: "1:354292124531:web:70289638d006fc8a00d306"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);