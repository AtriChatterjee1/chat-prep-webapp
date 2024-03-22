import { NextPage } from "next";
import Image from 'next/legacy/image';  
import Quiz from "../../assets/Quiz.svg";
import Button from "@/components/Button";
import LoginButton from "@/components/LoginButton";
import { getAuth } from "firebase/auth";
import { app } from "@/utils/firebase";

export const auth = getAuth(app);

const Login : NextPage = () => {
    return (
        <div className="w-full h-[81vh] flex flex-col items-center my-[4vh]">
            <Image 
                src={Quiz}
                alt = "Quiz"
                width={200}
                height={200}
            />
            <div className="flex flex-col justify-center items-center text-white my-[4vh]">
                <div className="mb-2 font-bold text-3xl">Login</div>            
            </div>

            <Button 
                option="Sign in with Google"
                optionBorderColor="goldenrod"
                optionWidth={350}
                optionHeight={50}
            
            />
            <div className="my-[2vh]"/>
            <Button 
                option="Sign in with Facebook"
                optionBorderColor="goldenrod"
                optionWidth={350}
                optionHeight={50}
            />
            <div className="text-goldenrod font-light text-xl mt-[10vh] mb-[2vh]">
                Play without an account ?
            </div>
            <LoginButton text="Play as Guest" />
        </div>
    );
}



export default Login;