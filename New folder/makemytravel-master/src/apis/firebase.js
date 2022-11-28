// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth";
//firebase database
import { getFirestore } from "firebase/firestore";
//firebase storage
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_0L4AlQq_tMy0_f1z5rs_hG207gZHYgM",
  authDomain: "makemytravel-4e371.firebaseapp.com",
  projectId: "makemytravel-4e371",
  storageBucket: "makemytravel-4e371.appspot.com",
  messagingSenderId: "443090654418",
  appId: "1:443090654418:web:e6652102e4c9904ffcc90b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;
