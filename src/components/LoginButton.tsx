import type { NextPage } from "next";

type LoginButton ={
    text: String
    onClick?: () => void;
}

const LoginButton: NextPage<LoginButton> = ({text, onClick}) => {
    return (
        <div className="h-[7vh] w-[25vw]  bg-darkslategray font-bold text-goldenrod text-xl sm:text-base md:text-base sm:text-center sm:w-[30vw]  flex justify-center items-center border-goldenrod border rounded-xl" onClick={onClick}>

            {text}
      </div>
    );
  };
  
  export default LoginButton;