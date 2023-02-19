import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaBbGqTEGayrNTwxuhiVmqM7OE8Q5vswA",
  authDomain: "chatgpt-432a2.firebaseapp.com",
  projectId: "chatgpt-432a2",
  storageBucket: "chatgpt-432a2.appspot.com",
  messagingSenderId: "83956710082",
  appId: "1:83956710082:web:f72d38a01ee0440dda995b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
