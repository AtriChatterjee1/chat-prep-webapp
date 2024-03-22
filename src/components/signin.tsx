import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useState } from "react";
import { Auth } from "firebase/auth";
// import {app} from "src/utils/firebase.ts";
import React from "react";
import NextAuth from "next-auth/next";
import {app} from "../utils/firebase";


const provider = new GoogleAuthProvider();


const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/',
    // This must be true.
    handleCodeInApp: true,
  };

export const Signin =() => {
    
    const [email, setEmail] = useState("");
    const auth = getAuth(app);

    //Sign IN using email link

     async function onSignin() {
    
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if(!credential){
                    return;
                }
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }
    
    return <div>
        {/* <input type="text" placeholder="email" onChange={(e) => {
            setEmail(e.target.value);
        }} ></input> */}
        <button onClick={()=>{
            onSignin();
        }}>
            Login With Google
        </button>
    </div>
}