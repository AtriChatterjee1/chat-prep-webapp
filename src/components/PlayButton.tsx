import type { NextPage } from "next";

type ButtonOnClick ={
    onClick?: () => void;
}

const PlayButton: NextPage<ButtonOnClick> = ({onClick}) => {
    return (
      <div className="h-[8vh] w-[15vw] bg-goldenrod text-black font-bold text-2xl flex justify-center items-center rounded-xl my-[2vh]">
        Play Now!
      </div>
    );
  };
  
  export default PlayButton;