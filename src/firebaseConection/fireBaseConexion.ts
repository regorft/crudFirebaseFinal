// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEt_2gz3EgDd-RFSrVVIR0YW4x-3qmnKo",
  authDomain: "crudproyectofinal-ac1ad.firebaseapp.com",
  projectId: "crudproyectofinal-ac1ad",
  storageBucket: "crudproyectofinal-ac1ad.appspot.com",
  messagingSenderId: "274568554749",
  appId: "1:274568554749:web:338efcbae3ad2503733694",
  measurementId: "G-773FY0EF3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//*Voy a exportar la base de datos y estoy llamando al metdos gerFirestore

const db = getFirestore(app);
export default db;