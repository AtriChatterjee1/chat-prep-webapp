import QuizProgress from "./QuizProgress";
import Timer from "./Timer";
import type { NextPage } from "next";
import Button from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/legacy/image";
import { Decimal } from "@prisma/client/runtime/library";

type CorrectMarkProps = {
    iconPath: string | StaticImport; // Path to the icon
    backgroundColor: string; // Background color class
    correct: number ; // 1 for correct , 0 for wrong
};
const Quiz: NextPage<CorrectMarkProps> = ({ iconPath, backgroundColor , correct}) => {
    const text = correct == 1 ? "Yep that's correct" : "Ah! That's incorrect ";
    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <QuizProgress/>
            <div className="relative bg-gray w-[65vw] h-[35vw] rounded-3xl px-[10%] pt-16 pb-[3%] flex flex-col items-center text-white">
                <div className="font-bold text-2xl">
                    <Image 
                        src={iconPath}
                        alt=""
                        width={30}
                        height={30}
                        layout="fixed"
                    />
                    {text}


                </div>
                
                <div className="font-bold text-2xl">
                    Question #1
                </div>

                <div className="text-center font-normal my-[6%] px-24 text-lg">
                    Which of the following Indian States / Union Territories does not have a land boundary with any foreign countries?
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-extralight">
                    
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