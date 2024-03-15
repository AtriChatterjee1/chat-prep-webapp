import QuizProgress from "../../components/QuizProgress";
import Timer from "../../components/Timer";
import type { NextPage } from "next";
import Button from "../../components/Button";
import Correct from "@/components/correct";
import Frame43 from "../../assets/Frame43.png";
import PlayButton from "@/components/PlayButton";


const Quiz: NextPage = () => {
    return (
        <div>
            <Correct 
                iconPath={Frame43}
            />
                
            

        </div>
         
    );
}

export default Quiz;