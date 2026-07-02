import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBx_OXRa2TUussw5FRi5zp8Ttofvmh17A",
  authDomain: "bubblerewards.firebaseapp.com",
  projectId: "bubblerewards",
  storageBucket: "bubblerewards.firebasestorage.app",
  messagingSenderId: "641168553021",
  appId: "1:641168553021:web:d6f3533da37718277b2654"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
