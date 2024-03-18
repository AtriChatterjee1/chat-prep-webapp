import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type OptionButton = {
  option: string;

  /** Style props */
  optionBorder?: CSSProperties["border"];
  optionWidth?: CSSProperties["width"];
  optionHeight?: CSSProperties["height"];
  optionCursor?: CSSProperties["cursor"];
  optionFontWeight?: CSSProperties["fontWeight"];
  optionBG?:CSSProperties["backgroundColor"];
  optionfontColor?:CSSProperties["color"];
  optionBorderColor ?: CSSProperties["borderColor"];

  /** Action props */
  onOptionsContainerClick?: () => void;
};

const Property1ShortOption: NextPage<OptionButton> = ({
  option,
  optionBorder,
 
  optionHeight,
  optionCursor,
  optionFontWeight,
  optionBG,
  optionfontColor,
  optionBorderColor,
  onOptionsContainerClick,
}) => {
  const outerStyle: CSSProperties = {
      border: optionBorder,
      cursor: optionCursor,
     
      height: optionHeight,
      backgroundColor: optionBG,
      borderColor : optionBorderColor
    };

  const optionStyle: CSSProperties = {
      fontWeight: optionFontWeight,
      color: optionfontColor
    };

  return (
    <div
      className=" box-border flex px-[25px] py-[25px] items-center justify-center text-center border-[1px] border-solid rounded-full"
      style={outerStyle}
      onClick={onOptionsContainerClick}
    >
      {option}
      {/* <div
        className="text-white text-base"
        style={optionStyle}
      >
        
     / </div> */}
    </div>
  );
};

export default Property1ShortOption;