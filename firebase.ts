import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpoe8LTMuimE2R0eZT4318IFyGx2y0aBA",
  authDomain: "chatgpt-clone-3830f.firebaseapp.com",
  projectId: "chatgpt-clone-3830f",
  storageBucket: "chatgpt-clone-3830f.appspot.com",
  messagingSenderId: "1090748880665",
  appId: "1:1090748880665:web:6243b36641e8d557141788",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
