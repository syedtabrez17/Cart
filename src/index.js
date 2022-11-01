import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp0st4S4Ji_hSCxUEu2IBxBCa0G0u28lc",
  authDomain: "cart-2818f.firebaseapp.com",
  projectId: "cart-2818f",
  storageBucket: "cart-2818f.appspot.com",
  messagingSenderId: "240021396271",
  appId: "1:240021396271:web:93afafbc561a36970b1fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
