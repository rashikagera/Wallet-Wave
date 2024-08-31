// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,doc,setDoc }from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVSC11od9CWqF6iTrwDwLT9GXDWD4_uBs",
  authDomain: "wallet-wave-c328b.firebaseapp.com",
  projectId: "wallet-wave-c328b",
  storageBucket: "wallet-wave-c328b.appspot.com",
  messagingSenderId: "621921966241",
  appId: "1:621921966241:web:d92ac85bd36a3b1262f8e0",
  measurementId: "G-25PSCMD1JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };