import QuizProgress from "../../components/QuizProgress";
import type { NextPage } from "next";
import Button from "../../components/Button";
import Trophy from "../../assets/Frame.png";
import Image from 'next/legacy/image';

const Score: NextPage = () => {

    return(
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <QuizProgress/>

            <div className="relative bg-gray w-[55vw] rounded-3xl px-[2%] pt-[8%] pb-[8%] flex flex-row justify-between items-center  text-white ">
                <div className=" float-left w-[21vw] h-[20vw] mb =[3%] ">
                <Image  
                        src={Trophy} 
                        alt="trophy"                       
                    />

                </div>
                
                <div className="  w-[30vw] text-white ">
                    <div className= "w-min h-min flex-col items-start gap-14">
                        <div className="w-min h-min items-center justify-center gap-6 flex flex-row">
                            <div className="w-min h-min flex-col items-center gap-6 ps-5 text-center">
                                <div className=" w-min h-min whitespace-nowrap flex-col mb-[15%]">
                                    <p className="font-metropolis text-2xl flex-shrink">
                                        <span className=" text-white text-7xl font-semibold ">50</span>
                                        <span className=" text-white text-2xl font-normal">/ 100</span>
                                    
                                    </p>
                                </div>

                                <div className="w-min h-min flex-col whitespace-nowrap font-metropolis text-base text-white leading-[1.6rem] pt-[10%] font-light px-4">Your Score</div>
                            </div>
                            {/* line */}
                            <div className="w-min h-min flex-col items-center gap-6 ps-5 text-center">
                                <div className=" text-white text-7xl font-semibold w-min h-min whitespace-nowrap flex-col  mb-[15%]">#12</div>
                                <div className="w-min h-min flex-col whitespace-nowrap font-metropolis text-base text-white leading-[1.6rem] pt-[10%] font-light px-4">Leaderboard</div>
                            </div>
                        </div>
                        <div className="w-min h-min flex-col whitespace-nowrap font-metropolis text-goldenrod pt-[10%] ps-6 text-base">View Today’s Leaderboard</div>
                        <div className="h-min w-96 flex-col font-left font-metropolis text-base text-white leading-[1.6rem] text-wrap pt-[15%] font-light ps-6">
                            Congratulations! You have successfully completed today’s quiz. Come back to this space tomorrow for next questions.
                        </div>
                        <div className="w-min h-min items-start gap-7"></div>
                    </div>
                    <div className="mt-[6%] flex flex-row">
                        <Button
                            option="Share" 
                            optionWidth={250}
                            optionHeight={50}
                            // optionbg="#F5CB5C"
                            optionFontWeight={1000}
                            // optionFontfamily="Metropolis"
                    
                        />
                        <Button 
                            option="Answers"
                            optionWidth={250}
                            optionHeight={50}
                            
                            
                        />
                    </div>
                </div>

                

                            


            

                
                    
            </div>



        </div>

    );

}

export default Score ;