// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL7yu3mY_DyQEL8VVO8Co-Bpanq8V4BIY",
  authDomain: "auth-contextapi-react-9.firebaseapp.com",
  projectId: "auth-contextapi-react-9",
  storageBucket: "auth-contextapi-react-9.appspot.com",
  messagingSenderId: "79918050174",
  appId: "1:79918050174:web:8e335826aec5c95df0a12f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;