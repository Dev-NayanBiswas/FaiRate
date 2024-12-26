import {useEffect, useState } from "react";
import auth from "../../firebaseConfig.js"
import {
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  } from "firebase/auth";
import { AuthContext } from "../Context/AllContext.jsx";
import toastAlert from "../Utilities/toastAlert.js";




function AuthProvider({children}){
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    //!Login with Google 
    function googleLogin(){
      setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //! Sign Up with Email
    function registrationWithEmail(email,password){
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //!Sign In with Email 
    function signingWithEmail(email,password){
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    //! Update UserProfile
    function updateUserProfile(displayName, photoURL){
      return updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: photoURL
      })
    }


    //! SignOut 
    function signOutUser(){
      setLoading(true)
      signOut(auth)
      .then(()=>{
        setUserData(null)
        toastAlert("info","You Signed Out")
      })
    }

    //! Observer 
    useEffect(()=>{
      const subscriber = onAuthStateChanged(auth,(currentUser)=>{
          setUserData(currentUser)
          setLoading(false)
        return ()=>{
          subscriber()
        }
      }) 
    },[])

    

    const authObject = {
      loading,
      userData,
      googleLogin,
      signOutUser,
      signingWithEmail,
      updateUserProfile,
      registrationWithEmail
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider
