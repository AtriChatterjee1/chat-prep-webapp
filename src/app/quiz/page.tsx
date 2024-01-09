import QuizProgress from "@/components/QuizProgress";
import Timer from "@/components/Timer";
import type { NextPage } from "next";

const Quiz: NextPage = () => {
    return (
        <div className=" flex flex-col items-center px-[13vw] py-[10vh]">
            <QuizProgress/>
            <div className="relative bg-gray w-[65vw] h-[60vh] rounded-3xl px-[15%]">
                <Timer/>
                <div>
                    
                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
            
        </div>
    );
}

export default Quiz;