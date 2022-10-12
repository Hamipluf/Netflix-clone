// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANnpaCNliHOCLAY6HMuXdKs0jE6yzxMi4",
  authDomain: "netflix-clone-rg.firebaseapp.com",
  projectId: "netflix-clone-rg",
  storageBucket: "netflix-clone-rg.appspot.com",
  messagingSenderId: "469147343861",
  appId: "1:469147343861:web:75abdbde05ec953469debc",
  measurementId: "G-JRC13TRZPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);