
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const emailSignUp= (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password )
    }
    const emailSignIn = (email,password)=>{
        setLoading(true)

       return signInWithEmailAndPassword(auth,email,password )
    }
    const googleSignIn = ()=>{
        setLoading(true)

       return signInWithPopup(auth, googleProvider)
    }
    const updateProfileManager =(name,imgUrl)=>{
        setLoading(true)

        setUser(user)
        return updateProfile(auth.currentUser,{
            displayName: name ,photoURL:imgUrl
        });
    }
    const allSignOut = ()=>{
        setLoading(true)

        
       return signOut(auth)
       
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            
                setUser(currentUser);
                setLoading(false)
            
        return ()=>{
            unsubscribe();
        }
        })
    },[])



    const authInfo ={
        loading,
        emailSignUp,
        emailSignIn,
        updateProfileManager,
        googleSignIn,
        allSignOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;