import QuizProgress from "./QuizProgress";
import Timer from "./Timer";
import type { NextPage } from "next";
import Button from "./Button";
import PlayButton from "@/components/PlayButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type AnsweredProps = {
    iconPath: string | StaticImport; // Path to the icon
};

const Correct: NextPage<AnsweredProps> = ({iconPath}) => {
    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <QuizProgress/>
            <div className="relative bg-gray w-[55vw] rounded-3xl px-[10%] pt-5  flex flex-col items-center text-white">
                <Image 
                    src={iconPath}
                    alt="icon"
                    width={200}
                    height={170}
                    layout="fixed"
                />

                <div className="font-bold text-2xl mt-9">
                    Question #1
                </div>

                <div className="text-center font-normal my-[6%] text-lg">
                    Which of the following Indian States / Union Territories does not have a land boundary with any foreign countries?
                </div>
                <div>
                    <div className="text-center font-normal my-[4%] text-lg">
                        Correct Answer : 
                    
                    </div>
                    <div className="flex flex-row gap-[2%]">
                        <Button 
                            option="A. COAL"
                            optionBG= "#299641"
                            optionHeight= "8vh"
                            optionWidth= "35vh"
                            optionFontWeight= "bold"
                            optionBorderColor="transparent"
                        />
                        <Button 
                            option="A. COAL"
                            optionBG= "#962929"
                            optionHeight= "8vh"
                            optionWidth= "35vh"
                            optionFontWeight= "bold"
                            optionBorderColor="transparent"
                        />

                    </div>
                    
                    

                </div>

                <div className="items-center font-extralight mb-7 mt-5">
                    <PlayButton option="Next" optionBG="goldenrod"/>
                </div>
            </div>
            
        </div>
    );
}

export default Correct;