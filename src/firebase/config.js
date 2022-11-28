import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBqCMTzculG-qJbuxcurLagIISkNWMjpp4",
  authDomain: "sammag-mart.firebaseapp.com",
  projectId: "sammag-mart",
  storageBucket: "sammag-mart.appspot.com",
  messagingSenderId: "820013031864",
  appId: "1:820013031864:web:8fa4b7372eb1e4c8512f4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
