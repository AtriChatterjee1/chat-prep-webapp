import type { NextPage } from "next";
import { useMemo, type CSSProperties  } from "react";

type ButtonOnClick ={

  option:string;

  /** Style props */
  optionBorder?: CSSProperties["border"];
  optionWidth?: CSSProperties["width"];
  optionHeight?: CSSProperties["height"];
  optionCursor?: CSSProperties["cursor"];
  optionFontWeight?: CSSProperties["fontWeight"];
  optionBG?:CSSProperties["backgroundColor"];
  optionfontColor?:CSSProperties["color"];
  
  onClick?: () => void;
}

const PlayButton: NextPage<ButtonOnClick> = ({
  onClick,
  option,
  optionBorder,
  optionWidth,
  optionHeight,
  optionCursor,
  optionFontWeight,
  optionBG,
  optionfontColor,
  
}) => {
   
  const outerStyle: CSSProperties = {
      border: optionBorder,
      cursor: optionCursor,
      width: optionWidth,
      height: optionHeight,
      backgroundColor: optionBG
    };

  const optionStyle: CSSProperties = {
      fontWeight: optionFontWeight,
      color: optionfontColor
    }; 
    return (
      <div className="h-[7vh] w-[13vw] flex justify-center items-center rounded-xl "
        style= {outerStyle}
        onClick={onClick}
      >
        <div
        className="text-black font-bold text-xl"
        style={optionStyle}
        >
          {option}
        </div>
      </div>
    );
  };
  
  export default PlayButton;