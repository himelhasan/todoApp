import React from "react";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const googleAuthProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // signup with email
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update the user display name and photoURL
  const modifyProfile = (userInfo) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, userInfo);

    // return updateProfile(auth.currentUser, {
    //   displayName: user.displayName,
    //   photoURL: user.photoURL,
    // });
  };

  // sign in with email
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout from account
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  Gmail Login
  const gmailLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  //  Login with github

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuthProvider);
  };

  // user management
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser == null || currentUser) {
  //       setUser(currentUser);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerWithEmail,
    emailLogin,
    gmailLogin,
    githubLogin,
    loading,
    modifyProfile,
    logout,
    user,
    setUser,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
