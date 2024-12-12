// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjl5trPCQA8vE7fOAczrForM1O01ydq54",
  authDomain: "efficient-animation.firebaseapp.com",
  projectId: "efficient-animation",
  storageBucket: "efficient-animation.firebasestorage.app",
  messagingSenderId: "707610389797",
  appId: "1:707610389797:web:e47a5b6e184b2b98c3becc",
  measurementId: "G-YSN8PG8KHD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);