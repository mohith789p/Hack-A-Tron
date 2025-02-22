// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZSqCTFKAlrypyEtjzwh1k4j9VJu356gU",
  authDomain: "fishmate-4d3da.firebaseapp.com",
  projectId: "fishmate-4d3da",
  storageBucket: "fishmate-4d3da.appspot.com", // Correct format for storage bucket
  messagingSenderId: "57869954479",
  appId: "1:57869954479:web:7a5174bb0cf4066dab135a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // For Authentication
const db = getFirestore(app); // For Firestore
const storage = getStorage(app); // For Storage

export { auth, db, storage };
