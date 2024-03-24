import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD9Tre-BCUdpdYyIC5rByXSRvs4yYLjems",
  authDomain: "comercecp-zero.firebaseapp.com",
  projectId: "comercecp-zero",
  storageBucket: "comercecp-zero.appspot.com",
  messagingSenderId: "297630139804",
  appId: "1:297630139804:web:e344a61915863a4b9b3459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )
