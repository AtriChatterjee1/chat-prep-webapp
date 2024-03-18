import type { NextPage } from "next";
import Image from "next/legacy/image";
import QuestionMark from "./QuestionMark";
import QuestionMarkIcon from "../assets/QuestionMarkIcon.svg"
import Correct from "../assets/Correct.svg"
import Wrong from "../assets/Wrong.svg"
import Dash from "./Dash";

const QuizProgress: NextPage = () => {
    return (
      <div className="h-14 rounded-full bg-gray w-[35vw] px-2 py-2 flex justify-around items-center mb-20 text-white text-lg font-medium">
         <div className="flex items-center gap-[1vw]">
        <QuestionMark iconPath={Correct} backgroundColor="bg-correctGreen"/>1/10</div>
        <div className="flex items-center gap-[1vw]">
        <QuestionMark iconPath={Wrong} backgroundColor="bg-wrongRed"/>1/10</div>  
        <div className="flex items-center gap-[1vw]">
        <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>9/10 </div>
      </div>
    );
  };
  
export default QuizProgress;