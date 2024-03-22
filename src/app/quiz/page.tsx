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
    const [size,useSize] = useState("200px")

   
    return (
        <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">
            <CorrectWrong/>
            <div className="relative bg-gray w-[55vw] rounded-3xl px-[10%] pt-16 pb-[3%] flex flex-col items-center text-white">
                <Timer/>
                <div className="font-bold text-2xl">
                    Question #1
                </div>

                <div className="text-center font-normal my-[6%] text-lg">
                    Which of the following Indian States / Union Territories does not have a land boundary with any foreign countries?
                </div>
<<<<<<< HEAD
                {/* <div className="flex-wrap flex-row flex font-extralight align-center justify-center gap-[2vw]">
=======
                <div className="flex-wrap flex-row flex font-extralight align-center justify-center gap-[2vw] ">
>>>>>>> 673f9b8b64cd022cf9b025f80a56b7023f3c9182
                    
                    
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

<<<<<<< HEAD
                <div className="flex-wrap flex-row font-extralight-[20px] w-[40vw]">
                    <Button
                        option="A. Coal"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="B. Natural Gas"
                        
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="C."
                       
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                    <Button
                        option="D.m"
                      
                        optionHeight="8vh"
                        optionFontWeight="400"
                    />
                </div>
=======
                
>>>>>>> 673f9b8b64cd022cf9b025f80a56b7023f3c9182
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