import type { NextPage } from "next";
import Image from "next/legacy/image";
import QuestionMarkIcon from "./QuestionMarkIcon.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";


type QuestionMarkProps = {
    iconPath: string | StaticImport; // Path to the icon
    backgroundColor: string; // Background color class
};

const QuestionMark: NextPage<QuestionMarkProps> = ({ iconPath, backgroundColor }) => {
    const size = backgroundColor !== "bg-questionMarkGray" ? 30 : 20;
    return (
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${backgroundColor}`}>
            <Image 
                src={iconPath}
                alt="question mark"
                width=  {size}
                height={size}
                layout="fixed"
            />
        </div>
    );
};
  
  export default QuestionMark;