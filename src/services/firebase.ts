import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"



const firebaseConfig = {
  apiKey: "AIzaSyA9nvszIfxWAzlaTg45SyYszhP3ToH5_JE",
  authDomain: "insta-images.firebaseapp.com",
  projectId: "insta-images",
  storageBucket: "insta-images.appspot.com",
  messagingSenderId: "494281502088",
  appId: "1:494281502088:web:d2a76fd1cf0d45adfede3d",
  measurementId: "G-BPS6JEFW6M"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth = firebase.auth()
// export const db = firebase.firestore()
// export const storage = firebase.storage()