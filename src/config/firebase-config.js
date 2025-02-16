// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcevrtok7QlXUh9jtuIegtbLBitjNjF20",
    authDomain: "org-test-f1510.firebaseapp.com",
    projectId: "org-test-f1510",
    storageBucket: "org-test-f1510.firebasestorage.app",
    messagingSenderId: "845265718288",
    appId: "1:845265718288:web:d47bd43e5f80e5511ace95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);