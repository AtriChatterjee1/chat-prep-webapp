import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from 'next/legacy/image';
import settings from '../assets/Settings.svg'
import leaderboard from '../assets/Leaderboard.svg'
import myscore from '../assets/MyScore.svg'
import logout from '../assets/Logout.svg'

// const settings: String = "/Settings.svg"
// const leaderboard: String = "/Leaderboard.svg"
// const myscore: String = "/MyScore.svg"
// const logout: String = "/Logout.svg"


const NavBar: NextPage = () => {
    return (
        <div className="h-[9vh] bg-black w-screen flex px-[5vw] py-[2.25vh] justify-between items-center">
            <div className="text-white font-bold text-lg ">
                ChatPrep
            </div>
            <div className="flex">
                <div className="xl:text-fontgray  flex mx-2 ">
                    <Image 
                        src = {settings}
                        alt="Settings"
                    />
                    {/* <div className="text-white">
                        Settings
                    </div> */}
                </div>
                <div className="xl:text-fontgray mx-2  flex">
                    <Image 
                        src={leaderboard}
                        alt="Leaderboard"
                    />
                    {/* <div className=" sm-ml-0 text-white">
                        Leaderboard
                    </div> */}
                </div>
                <div className="xl:text-fontgray mx-2 flex">
                    <Image 
                        src={myscore}
                        alt="My score"
                    />
                    {/* <div className=" border-rose-500 text-white border-[5px]">
                        My Scores
                    </div> */}
                </div>
                <div className="xl:text-fontgray mx-2 flex">
                    <Image 
                        src={logout}
                        alt="Logout"
                    />
                    {/* <div className="text-white">
                        Logout
                    </div> */}
                </div>
                
            </div>
            
        </div>
    );
};

export default NavBar;