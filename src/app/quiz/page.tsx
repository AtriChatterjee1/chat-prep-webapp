"use client"

import QuizProgress from "../../components/QuizProgress";


import Timer from "../../components/Timer";
import type { NextPage } from "next";
import Button from "../../components/Button";
import CorrectWrong from "@/components/CorrectWrong";
import React, { useEffect, useState } from 'react';


const Quiz: NextPage = () => {
    const [text1, settext1] = useState("optionA")
    const [text2, settext2] = useState("optionB")
    const [text3, settext3] = useState("optionC")
    const [text4, settext4] = useState("optionD")
    const [size, useSize] = useState("200px")
    const [colour, setColour] = useState(false);
    const [colour4, setColour4] = useState(false);
    const [colour2, setColour2] = useState(false);
    const [colour3, setColour3] = useState(false);
    const [correct, setcorrect] = useState("a");

    const handleClick = () => {
        setColour(true)
        if (colour2) {
            setColour2(false)
        } if (colour3) {
            setColour3(false)
        } if (colour4) {
            setColour4(false)
        }
     
    }
    const handleClick2 = () => {
        setColour2(true)
        if (colour) {
            setColour(false)
        }else if (colour3) {
            setColour3(false)
        }else if (colour4) {
            setColour4(false)
        }
    
    }
    const handleClick3 = () => {
        setColour3(true)
        if (colour2) {
            setColour2(false)
        }else if (colour) {
            setColour(false)
        }else if (colour4) {
            setColour4(false)
        }
      
    }
    const handleClick4 = () => {
        setColour4(true)
        if (colour2) {
            setColour2(false)
        }else if (colour3) {
            setColour3(false)
        }else if (colour) {
            setColour(false)
        }
       
    }



    


    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <CorrectWrong />
            <div className="relative bg-gray w-[55vw] rounded-3xl px-[10%] pt-16 pb-[3%] flex flex-col items-center text-white">
                <Timer />
                <div className="font-bold text-2xl">
                    Question #1
                </div>

                <div className="text-center font-normal my-[6%] text-lg">
                    Which of the following Indian States / Union Territories does not have a land boundary with any foreign countries?
                </div>
                {/* <div className="flex-wrap flex-row flex font-extralight align-center justify-center gap-[2vw]">
                    
                    
                    <Button
                        option={text1}
                        optionMinWidth="200px"
                        optionHeight="8vh"
                        optionFontWeight="400"
                        optionBG="darkslategray"
                    />
                     <Button
                        option={text2}
                        optionMinWidth="200px"
                        optionBG="darkslategray"
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                     <Button
                        option={text3}
                        optionMinWidth="200px"
                        optionBG="darkslategray"
                          optionHeight="8vh"
                        optionFontWeight="400"
                    />
                     <Button
                        option={text4}
                        optionMinWidth="200px"
                        optionBG="darkslategray"
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                </div> */}

                <div className="flex-wrap flex-row font-extralight-[20px] w-[40vw] "  >
                    <Button
                        onOptionsContainerClick={handleClick}
                        option="A. Coal"

                        optionBG={colour ? "green" : "gray"}
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="B. Natural Gas"
                        onOptionsContainerClick={handleClick2}
                        optionHeight="8vh"
                        optionFontWeight="400"
                        optionBG={colour2 ? "green" : "gray"}
                    />
                    <Button
                        option="C."
                        onOptionsContainerClick={handleClick3}
                        optionHeight="8vh"
                        optionFontWeight="400"
                        optionBG={colour3 ? "green" : "gray"}
                    />
                    <Button
                        option="D.m"
                        onOptionsContainerClick={handleClick4}
                        optionHeight="8vh"
                        optionFontWeight="400"
                        optionBG={colour4 ? "green" : "gray"}
                    />
                </div>
            </div>

        </div>
    );
}

export default Quiz;


{/* <div className=" xl:grid xl:grid-cols-2  font-extralight border-red-400 border-[20px] w-[40vw]">
                    <Button
                         option={text1}
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option={text2}
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option={text3}
                       
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option={text4}
                      
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                </div> */}