
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const emailSignUp= (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password )
    }
    const emailSignIn = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password )
    }
    const googleSignIn = ()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const updateProfileManager =(name,imgUrl)=>{
        setUser(user)
        return updateProfile(auth.currentUser,{
            displayName: name ,photoURL:imgUrl
        });
    }
    const allSignOut = ()=>{
        
       return signOut(auth)
       
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            
                setUser(currentUser);
            
        return ()=>{
            unsubscribe();
        }
        })
    },[])



    const authInfo ={
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