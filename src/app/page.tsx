'use client'
import type { NextPage } from "next"; 
import Button from "../components/Button";
import Image from 'next/legacy/image';
import DarkBG from '../assets/DarkBG.svg'
import QuizProgress from "../components/QuizProgress";
import Quiz from "../assets/Quiz.svg"
import PlayButton from "../components/PlayButton";
import LoginButton from "@/components/LoginButton";
import brain from "../assets/brain.png";
import Landinglogo from "../assets/Landinglogo.png"
import Link from "next/link";
import {useRouter }from "next/navigation";
import router from "next/router";



export default function Page() {
  const router = useRouter();
  
  return (
    <div className="w-full h-[81vh] flex flex-col items-center my-[4vh]">
      <Image 
        src={Landinglogo}
        alt = "Landinglogo"
        width={200}
        height={200}
      />
      <div className="flex flex-col justify-center items-center  my-[2vh]">
        <div className="flex flex-row">
          <Image src={brain} alt = "brain" width={40} height={10} />          
          <div className="mb-2 font-bold text-3xl text-white ml-[2vh]">Chat</div>
          <div className="mb-2 font-bold text-3xl text-goldenrod">Prep</div>
        </div>
        
        <div className="font-light text-xl text-white my-[1vh]">Ace the Current Affairs: Daily Curated Quizzes</div>
      </div>
      <PlayButton onClick={() => router.push('./quiz')} option="Play Now" optionBG="goldenrod"/>
      <div className="text-goldenrod font-light text-xl mt-[10vh] mb-[2vh]">
        Save your progress with a free account
      </div>
      <LoginButton onClick={() => router.push('./login')} text="Login / Register" />
    </div>
  );
};



