import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


// user manage:
useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log('user inside auth state changed', currentUser);
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }    
        setLoading(false);
    });

    return () =>{
        unsubscribe();
    }

} ,[])

// google login
const providerLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
}

// create/register user use with email and password:
const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

// Login/signin user 
const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

//Update user profile
const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUse, profile)
}

//Send Email verification
const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser);
}

// Log Out
const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}

   const authInfo = {user, loading, setLoading, providerLogin, logOut, createUser, updateUserProfile, verifyEmail, signIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;