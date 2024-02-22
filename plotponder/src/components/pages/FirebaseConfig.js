import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgoX0zdENhec-cHreZGIVOIutnVIIxMX4",
  authDomain: "goodreadit.firebaseapp.com",
  projectId: "goodreadit",
  storageBucket: "goodreadit.appspot.com",
  messagingSenderId: "82730091106",
  appId: "1:82730091106:web:fcaf1b563e8b44200c873b",
};

const app = initializeApp(firebaseConfig);
export const userDatabase = getAuth(app);
