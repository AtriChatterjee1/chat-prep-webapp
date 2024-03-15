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

  /** Action props */
  onOptionsContainerClick?: () => void;
};

const Property1ShortOption: NextPage<OptionButton> = ({
  option,
  optionBorder,
  optionWidth,
  optionHeight,
  optionCursor,
  optionFontWeight,
  optionBG,
  optionfontColor,
  onOptionsContainerClick,
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
    <div
      className=" box-border flex items-center justify-center text-center border-[1px] border-solid rounded-full"
      style={outerStyle}
      onClick={onOptionsContainerClick}
    >
      <div
        className="text-white text-base"
        style={optionStyle}
      >
        {option}
      </div>
    </div>
  );
};

export default Property1ShortOption;