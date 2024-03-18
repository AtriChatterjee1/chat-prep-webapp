import type { NextPage } from "next";
import PlayButton from "@/components/PlayButton";

const Quiz: NextPage = () => {
    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <div className="relative bg-gray w-[35vw] rounded-3xl  pt-16 pb-[3%] flex flex-col text-white">
                <div className="w-[32vw]">
                    <div className="flex items-start justify-start px-[6%] font-semibold text-lg">
                        How to Play?
                    </div>
                    <div className="py-5 mx-12">
                        <ul className= "list-disc text-sm leading-7" >
                            <li>There would be 10 questions with 4 options. One out of the 4 options is the correct answer. </li>
                            <li>You would be having 10 seconds to answer each question. Once an option is selected, the correct answer would be displayed.</li>
                            <li>Each question has 10 points, and the quicker you select the option, higher your position would be on the leaderboard.</li>
                            <li> Play everyday to improve your quiz skills and your position on the leaderboard.</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <PlayButton option="Play Now!" optionBG="goldenrod"/>

                    </div>

                    </div>
                
                
            </div>
            
        </div>
    );
}

export default Quiz;