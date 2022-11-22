import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

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

export const productsRef = collection(db, "products");
export const useProductsListener = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data, createdAt: data.createdAt?.toDate() };
        })
      );
    });
  }, []);
  return products;
};

export const deleteProduct = (id) => {
  deleteDoc(doc(db, "products", id));
};

export const addProduct = (id) => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  addDoc(productsRef, {
    name: "iphone",
    description: "Lorem Ipsum",
    price: "22000",
    uid,
  });
};
