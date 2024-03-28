import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA5MC4LIBDiBktl0OQnyABQGbfcNr0l6Qg",
  authDomain: "realtor-clone-c2eb0.firebaseapp.com",
  projectId: "realtor-clone-c2eb0",
  storageBucket: "realtor-clone-c2eb0.appspot.com",
  messagingSenderId: "999009337334",
  appId: "1:999009337334:web:8d57266c14db45e3e111d7",
  measurementId: "G-KE3MDT9P0H"
};

initializeApp(firebaseConfig);
export const db = getFirestore()