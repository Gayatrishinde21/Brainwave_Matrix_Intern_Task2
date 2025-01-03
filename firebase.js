// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCilAwSkoVtQzLsfE05X-f-wzTPT0LplQY",

    authDomain: "mychatapp-e3573.firebaseapp.com",
  
    projectId: "mychatapp-e3573",
  
    storageBucket: "mychatapp-e3573.firebasestorage.app",
  
    messagingSenderId: "890277533976",
  
    appId: "1:890277533976:web:6f8a9f059efb78e163a66d",
  
    measurementId: "G-Y7TSF52NPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}