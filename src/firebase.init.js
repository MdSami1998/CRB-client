// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_f3YdNa6-LmmlgPVeQwtdb2DxGHP2Ms0",
  authDomain: "cumilla-raging-bulls.firebaseapp.com",
  projectId: "cumilla-raging-bulls",
  storageBucket: "cumilla-raging-bulls.appspot.com",
  messagingSenderId: "963634294003",
  appId: "1:963634294003:web:87943db3794fc7f5315b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;