// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvo_MzWEhLRYZHdVHCHL9Jp0s7mUwabTw",
    authDomain: "working-vue.firebaseapp.com",
    projectId: "working-vue",
    storageBucket: "working-vue.appspot.com",
    messagingSenderId: "342733841788",
    appId: "1:342733841788:web:b6d43ee4660283182ef0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);