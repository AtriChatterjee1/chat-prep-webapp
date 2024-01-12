import type { NextPage } from "next";

type LoginButton ={
    text: String
    onClick?: () => void;
}

const LoginButton: NextPage<LoginButton> = ({text, onClick}) => {
    return (
        <div className="h-[8vh] w-[20vw] bg-darkslategray font-bold text-goldenrod text-2xl flex justify-center items-center border-goldenrod border rounded-xl">
            {text}
      </div>
    );
  };
  
  export default LoginButton;