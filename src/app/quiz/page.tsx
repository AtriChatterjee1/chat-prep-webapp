import QuizProgress from "../../components/QuizProgress";
import Timer from "../../components/Timer";
import type { NextPage } from "next";
import Button from "../../components/Button";
import CorrectWrong from "@/components/CorrectWrong";

const Quiz: NextPage = () => {
    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <CorrectWrong/>
            <div className="relative bg-gray w-[55vw] rounded-3xl px-[10%] pt-16 pb-[3%] flex flex-col items-center text-white">
                <Timer/>
                <div className="font-bold text-2xl">
                    Question #1
                </div>

                <div className="text-center font-normal my-[6%] text-lg">
                    Which of the following Indian States / Union Territories does not have a land boundary with any foreign countries?
                </div>
                {/* <div className="flex-wrap flex-row flex font-extralight align-center justify-center gap-[2vw]">
                    
                    
                    <Button
                        option="A. "
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                     <Button
                        option="A. Cokj"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                     <Button
                        option="A. Caj"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                     <Button
                        option="A. ;jkll"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                </div> */}

                <div className="flex-wrap flex-row font-extralight-[20px] w-[40vw]">
                    <Button
                        option="A. Coal"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="B. Natural Gas"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="C."
                       
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="D.m"
                      
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Quiz;