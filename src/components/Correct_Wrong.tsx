import type { NextPage } from "next";
import Image from "next/legacy/image";
import QuestionMark from "./QuestionMark";
import QuestionMarkIcon from "../assets/QuestionMarkIcon.svg"
import Correct from "../assets/Correct.svg"
import Wrong from "../assets/Wrong.svg"
import Dash from "./Dash";

const Correct_Wrong: NextPage = () => {
    return(
        <div className="h-14 rounded-full bg-gray px-2 py-2 flex justify-center items-center mb-20">
            <div className="pe-24 ps-10 flex flex-row ">
                <QuestionMark iconPath={Correct} backgroundColor="bg-correctGreen"/>
                <div className="text-white text-xl font-semibold pl-4 pt-2 font-metropolis">
                    1/10
                    
                </div>
            </div>
            <div className=" ps-6 pe-24 flex flex-row text-white">
                <QuestionMark iconPath={Wrong} backgroundColor="bg-wrongRed"/>
                <div className="text-white text-xl font-semibold pl-4 pt-2 font-metropolis">
                    0/10
                    
                </div>
            </div>
            <div className=" ps-3 pe-24 flex flex-row text-white">
                <QuestionMark iconPath={QuestionMarkIcon} backgroundColor="bg-questionMarkGray"/>
                <div className="text-white text-xl font-semibold pl-4 pt-2 font-metropolis">
                    9/10
                    
                </div>
            </div>
            
            
            
        </div>

    );

}

export default Correct_Wrong;