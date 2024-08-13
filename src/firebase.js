import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBqc84FWcLtpxOIe_b9C2SE0wXYOUGu704",
  authDomain: "market-b4748.firebaseapp.com",
  projectId: "market-b4748",
  storageBucket: "market-b4748.appspot.com",
  messagingSenderId: "709265957209",
  appId: "1:709265957209:web:766cd0dd497434471a6c48"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)