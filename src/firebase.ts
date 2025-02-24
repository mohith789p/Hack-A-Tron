import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZSqCTFKAlrypyEtjzwh1k4j9VJu356gU",
  authDomain: "fishmate-4d3da.firebaseapp.com",
  projectId: "fishmate-4d3da",
  storageBucket: "fishmate-4d3da.appspot.com",
  messagingSenderId: "57869954479",
  appId: "1:57869954479:web:7a5174bb0cf4066dab135a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, RecaptchaVerifier, signInWithPhoneNumber };
