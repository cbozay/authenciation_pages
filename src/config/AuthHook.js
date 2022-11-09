import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // signOut(auth);
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      console.log(user);
    });
  }, []);
  return isLoggedIn;
};

export default AuthHook;
