import QuizProgress from "@/components/QuizProgress";
import Timer from "@/components/Timer";
import type { NextPage } from "next";
import Button from "@/components/Button";

const Quiz: NextPage = () => {
    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <QuizProgress/>
            <div className="relative bg-gray w-[55vw] rounded-3xl px-[10%] pt-16 pb-[3%] flex flex-col items-center text-white">
                <Timer/>
                <div className="font-bold text-2xl">
                    Question #1
                </div>

                <div className="text-center font-normal my-[6%] text-lg">
                    Which of the following Indian States / Union Territories does not have a land boundary with any foreign countries?
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-extralight">
                    <Button
                        option="A. Coal"
                        optionWidth="15vw"
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="B. Natural Gas"
                        optionWidth="15vw"
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="C. Nuclear Energy"
                        optionWidth="15vw"
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="D. Petroleum"
                        optionWidth="15vw"
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Quiz;