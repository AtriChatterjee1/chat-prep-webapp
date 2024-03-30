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
            <div className="flex xl:text-sm">
                <div className="xl:text-fontgray mr-[1.6vw]md:mr-0 sm:mr-0 md:px-0 sm:px-0 flex">
                    <Image 
                        src = {settings}
                        alt="Settings"
                    />
                    <div className="xl:ml-1 sm-ml-0">
                        Settings
                    </div>
                </div>
                <div className="xl:text-fontgray mr-[1.6vw]md:mr-0 sm:mr-0  flex">
                    <Image 
                        src={leaderboard}
                        alt="Leaderboard"
                    />
                    <div className="xl:ml-1 sm-ml-0 ">
                        Leaderboard
                    </div>
                </div>
                <div className="xl:text-fontgray mr-[1.6vw] md:mr-0 sm:mr-0  flex">
                    <Image 
                        src={myscore}
                        alt="My score"
                    />
                    <div className="xl:ml-1">
                        My Scores
                    </div>
                </div>
                <div className="xl:text-fontgray xl:mr-[1.6vw] md:mr-0 sm:mr-0  flex">
                    <Image 
                        src={logout}
                        alt="Logout"
                    />
                    <div className="xl:ml-1">
                        Logout
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default NavBar;