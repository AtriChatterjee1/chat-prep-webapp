import QuizProgress from "../../components/QuizProgress";
import type { NextPage } from "next";
import Button from "../../components/Button";
import Trophy from "../../assets/Frame.png";
import Image from 'next/legacy/image';
import PlayButton from "@/components/PlayButton";
import LoginButton from "@/components/LoginButton";

const Score: NextPage = () => {

    return(
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <QuizProgress/>

            <div className="relative bg-gray w-[55vw] sm:w-[75vw] rounded-3xl px-[2%] pt-[8%] pb-[8%] flex flex-row justify-between items-center  text-white ">
                <div className=" float-left w-[21vw] h-[20vw] mb =[3%] ">
                <Image  
                        src={Trophy} 
                        alt="trophy"                       
                    />

                </div>
                
                <div className="  w-[60vw] text-white border-[5px] border-yellow-300 ">
                    <div className= "flex-col items-start gap-14">
                        <div className=" items-center justify-center gap-6 sm:gap-[5vw] flex flex-row">
                            <div className="flex-col items-center ps-5 text-center">
                                <div className=" whitespace-nowrap flex-col mb-[15%]">
                                    <p className="font-metropolis text-2xl">
                                        <span className=" text-white text-6xl sm:text-4xl font-semibold ">50</span>
                                        <span className=" text-white text-2xl sm:text-xl font-normal">/ 100</span>
                                    
                                    </p>
                                </div>

                                <div className="flex-col font-metropolis text-base text-white leading-[1.6rem] pt-[10%] font-light px-4">Your Score</div>
                            </div>
                            {/* line */}
                            <div className="flex-col items-center gap-6 ps-5 text-center">
                                <div className=" text-white text-6xl sm:text-4xl font-semibold flex-col  mb-[15%]">#12</div>
                                <div className=" flex-col  font-metropolis text-base text-white leading-[1.6rem] pt-[10%] font-light px-4">Leaderboard</div>
                            </div>
                        </div>
                        <div className=" flex-col text-center font-metropolis text-goldenrod pt-[10%] ps-6 text-base sm:text-sm underline underline-offset-2 cursor-pointer">View Today’s Leaderboard</div>
                        <div className="w-[55vw] flex-col font-left font-metropolis text-base sm:text-sm text-white leading-[1.6rem] text-wrap pt-[15%] font-light ps-6">
                            Congratulations! You have successfully completed today’s quiz. Come back to this space tomorrow for next questions.
                        </div>
                        <div className=" items-start gap-7"></div>
                    </div>
                    <div className="mt-[6%] flex flex-row gap-[4%]">
                        <PlayButton 
                            option ="Share" 
                            optionBG="goldenrod"
                        />
                        <LoginButton text ="Answers" />
                    </div>
                </div>

             

                

                            


            

                
                    
            </div>



        </div>

    );

}

export default Score ;