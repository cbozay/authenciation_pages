import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import { getStorage } from "firebase/storage";

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
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const productsRef = collection(db, "products");

export const useProductsListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data, createdAt: data.createdAt?.toDate() };
      });
      dispatch(setProducts(docs));
    });
  }, [dispatch]);
};
