// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH6Q80BzLc01rRjxirH5QbxxsDglVKuUI",
    authDomain: "prepwise-13ed3.firebaseapp.com",
    projectId: "prepwise-13ed3",
    storageBucket: "prepwise-13ed3.firebasestorage.app",
    messagingSenderId: "115123703367",
    appId: "1:115123703367:web:49d20d9c4be38f2737eb62",
    measurementId: "G-ZYFR8ZE866"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);