"use client"
import { NextPage } from "next";
import Image from 'next/legacy/image';  
import Quiz from "../../assets/Quiz.svg";
import Button from "@/components/Button";
import LoginButton from "@/components/LoginButton";
import {app} from "@/utils/firebase";
import { Signin } from '@/components/signin';
import { getAuth , onAuthStateChanged} from 'firebase/auth';
import { useEffect } from 'react';
import { useSetRecoilState , useRecoilState, RecoilRoot} from 'recoil';
import { userAtom } from '@/store/atoms/user';
import { useState } from "react";
// import { Auth } from "firebase/auth";
// import {app} from "src/utils/firebase.ts";
import React from "react";

export const auth = getAuth(app);
function App() {
    return <RecoilRoot>
      <Login />
    </RecoilRoot>
    
  }


const Login: NextPage = () => {
    // const auth = getAuth(app);
    const [user, setUser] = useRecoilState(userAtom);
    useEffect(() => {
      onAuthStateChanged(auth, function(user) {
        if (user && user.email) {
          setUser({
            loading: false,
            user : {
              email :user.email
            }
  
          })
        } else {
          setUser({loading:false});
          // No user is signed in.
          console.log('There is no logged in user');
        }
      });
  
    },[]);
    //Sign IN using email link
    if (user.loading){
        return <div>loading...</div>
      }
      if(!user.user){
        return (
           <div><Signin/></div>
        );
        
    
      }
   }

export default App;