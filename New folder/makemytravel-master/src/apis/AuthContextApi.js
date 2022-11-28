import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../apis/firebase";
import { signOut } from "@firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [authUser, setAuthUser] = useState(null);
  let [isLoading, isSetLoading] = useState(false);

  let Logout = async () => {
    await signOut(auth);
    window.sessionStorage.removeItem("token");
    window.location.assign("/login");
  };
  useEffect(() => {
    return onAuthStateChanged(auth, userInfo => {
      if (
        (userInfo.emailVerified === true && userInfo.isAnonymous === false) ||
        userInfo.getIdTokenResult
      ) {
        console.log(userInfo);
        isSetLoading(true);
        setAuthUser(userInfo);
        let token = userInfo.accessToken;
        window.sessionStorage.setItem("token", token);
      } else {
        setAuthUser(null);
        window.sessionStorage.removeItem("token");
      }
      isSetLoading(false);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, isLoading, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
