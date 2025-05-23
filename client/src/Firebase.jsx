// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // For saving user data

import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyA-wjtyhjCfU_4meqoOH5F2E42d_yoG8oI",
    authDomain: "nanosemic.firebaseapp.com",
    projectId: "nanosemic",
    storageBucket: "nanosemic.firebasestorage.app",
    messagingSenderId: "556253008950",
    appId: "1:556253008950:web:b0baccca3b2d31a5147497",
    measurementId: "G-28FZW74X0B"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
