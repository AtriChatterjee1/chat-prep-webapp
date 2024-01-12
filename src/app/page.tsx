import type { NextPage } from "next"; 
import Button from "../components/Button";
import Image from 'next/legacy/image';
import DarkBG from '../assets/DarkBG.svg'
import QuizProgress from "../components/QuizProgress";
import Quiz from "../assets/Quiz.svg"
import PlayButton from "../components/PlayButton";
import LoginButton from "@/components/LoginButton";

const Home: NextPage = () => {
  return (
    <div className="w-full h-[81vh] flex flex-col items-center my-[4vh]">
      <Image 
        src={Quiz}
        alt = "Quiz"
        width={200}
        height={200}
      />
      <div className="flex flex-col justify-center items-center text-white my-[2vh]">
        <div className="mb-2 font-bold text-3xl">ChatPrep</div>
        <div className="font-light text-xl">Ace the Current Affairs: Daily Curated Quizzes</div>
      </div>
      <PlayButton/>
      <div className="text-goldenrod font-light text-xl mt-[10vh] mb-[2vh]">
        Save your progress with a free account
      </div>
      <LoginButton text="Login / Register" />
    </div>
  );
};

export default Home;

