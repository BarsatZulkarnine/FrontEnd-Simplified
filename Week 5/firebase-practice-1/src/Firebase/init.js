// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2mL_u-5ka1xGkIyxoxyIMCRfHnej_gCc",
  authDomain: "fir-practice-first.firebaseapp.com",
  projectId: "fir-practice-first",
  storageBucket: "fir-practice-first.appspot.com",
  messagingSenderId: "830057323361",
  appId: "1:830057323361:web:070655db8b5cd4b5330320",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
