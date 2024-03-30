import type { NextPage } from "next";
import Image from "next/legacy/image";
import QuestionMark from "../components/QuestionMark";
import QuestionMarkIcon from "../assets/QuestionMarkIcon.svg"
import Correct from "../assets/Correct.svg"
import Wrong from "../assets/Wrong.svg"
import Dash from "./Dash";

const QuizProgress: NextPage = () => {
    return (
      <div className="h-14 sm:w-[65vw] rounded-full bg-gray px-2 py-2 flex justify-center items-center mb-20">
        <QuestionMark iconPath={Correct} backgroundColor="bg-correctGreen"/>
        <Dash/>
        <QuestionMark iconPath={Wrong} backgroundColor="bg-wrongRed"/>
        <Dash/>
        <QuestionMark iconPath={Wrong} backgroundColor="bg-wrongRed"/>
        <Dash/>
        <QuestionMark iconPath={Correct} backgroundColor="bg-correctGreen"/>
        <Dash/>
        <QuestionMark iconPath={Correct} backgroundColor="bg-correctGreen"/>
        <Dash/>
        <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>
        <Dash/>
        <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>
        <Dash/>
        <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>
        <Dash/>
        <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>
        <Dash/>
        <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>
      </div>
    );
  };
  
export default QuizProgress;