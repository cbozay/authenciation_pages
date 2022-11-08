import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbqtm77nr7YRp8eZumMicmdbdWFDorYhw",
  authDomain: "signup-signin-bec21.firebaseapp.com",
  projectId: "signup-signin-bec21",
  storageBucket: "signup-signin-bec21.appspot.com",
  messagingSenderId: "720941954302",
  appId: "1:720941954302:web:efbc12fb7869787cb1a1af",
  measurementId: "G-7Q3Y9L0HPL",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};
