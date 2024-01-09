import type { NextPage } from "next";
import PrimaryButton from "../components/PrimaryButton";
import QuizButton from "../components/QuizButton";  
import Button from "../components/Button";
import Image from 'next/image';
import quiz from '../assets/Quiz.svg'
import DarkBG from '../assets/DarkBG.svg'
import QuizProgress from "@/components/QuizProgress";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* <Button
      option="A. Coal"
      optionWidth={"18%"}
      optionHeight={"7%"}
      /> */}
      <QuizProgress/>

    </div>
  );
};

export default Home;

