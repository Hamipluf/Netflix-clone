import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;