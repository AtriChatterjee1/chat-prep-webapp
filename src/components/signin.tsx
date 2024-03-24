import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useState } from "react";
import { Auth } from "firebase/auth";
// import {app} from "src/utils/firebase.ts";
import React from "react";
import NextAuth from "next-auth/next";
import {app} from "../utils/firebase";
import { NextPage } from "next";
import Image from 'next/legacy/image';  
import Quiz from "@/assets/Quiz.svg";
import Button from "@/components/Button";
import LoginButton from "@/components/LoginButton";
import google from "../assets/google.png"

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

    const onSignin = async() => {
    
        await signInWithPopup(auth, provider)
            .then((result:any) => {
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
            }).catch((error:any) => {
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
        <div className="w-full h-[81vh] flex flex-col items-center my-[4vh]">
                <Image 
                    src={Quiz}
                    alt = "Quiz"
                    width={200}
                    height={200}
                />
                <div className="flex flex-col justify-center items-center text-white my-[4vh]">
                    <div className="mb-2 font-bold text-3xl">Login</div>            
                </div>
    
                <div className="text-white">
                    <Button
                        onOptionsContainerClick={onSignin}
                        
                        option="Sign in with Google"
                        optionBorderColor="goldenrod"
                        optionWidth={350}
                        optionHeight={50}
                        optionfontColor="white"
                    
                    />
                </div>
                <div className="my-[2vh]"/>
                <div className="text-white">
                    <Button 
                        option="Sign in with Facebook"
                        optionBorderColor="goldenrod"
                        optionWidth={350}
                        optionHeight={50}
                        optionfontColor="white"
                    />
                </div>
                
                <div className="text-goldenrod font-light text-xl mt-[10vh] mb-[2vh]">
                    Play without an ac ?
                </div>
                <LoginButton text="Play as Guest" />
            </div>
        {/* <button onClick={()=>{
            onSignin();
        }}>
            Login With Google
        </button> */}
    </div>
}