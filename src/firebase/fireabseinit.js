// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEc12GyTMrQ4aXHn3FceuzmgdcmcfrUz8",
  authDomain: "simple-firebase-50336.firebaseapp.com",
  projectId: "simple-firebase-50336",
  storageBucket: "simple-firebase-50336.appspot.com",
  messagingSenderId: "405076057275",
  appId: "1:405076057275:web:2216cc788eba9fe1c65d9e",
  measurementId: "G-2NXZ0K81FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

