import { NextPage } from "next";
import Image from 'next/legacy/image';  
import Quiz from "@/assets/Quiz.svg";
import Landinglogo from "@/assets/Landinglogo.png";

type Dashboard ={
    text1: String
    onClick?: () => void;
}


const Dashboard : NextPage<Dashboard> = ({text1, onClick}) => {
    return (
        <div className="w-full h-[81vh] flex flex-col items-center my-[4vh]">
            <Image 
                src={Landinglogo}
                alt = "Quiz"
                width={200}
                height={200}
            />
            <div className="flex flex-col justify-center items-center text-white my-[4vh]">
                <div className="mb-2 font-bold text-3xl">Welcome Vrishank</div>            
            </div>
            <div className="flex flex-row justify-between gap-6 items-center ">
                <div className="relative bg-gray w-[25vw] h-[20vw] sm:w-[35vw] sm:h-[30vw] text-center flex flex-col justify-center items-center rounded-3xl text-white ">
                    <div className="border-solid border-2 border-indigo-600 h-24 w-24"></div>
                    {text1}

                </div>
                <div className="relative bg-gray w-[25vw] h-[20vw] sm:w-[35vw] sm:h-[30vw] rounded-3xl flex flex-col text-center justify-center items-center text-white ">
                    <div className="border-solid border-2 border-indigo-600 h-24 w-24"></div>
                    View Leaderboard

                </div>
            </div>

            


            
            

            
            
        </div>
    );
}

export default Dashboard;