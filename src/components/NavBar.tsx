import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from 'next/image';
import settings from '../assets/Settings.svg'
import leaderboard from '../assets/Leaderboard.svg'
import myscore from '../assets/MyScore.svg'
import logout from '../assets/Logout.svg'


const NavBar: NextPage = () => {
    return (
        <div className="h-[9vh] bg-black w-screen flex px-[5vw] py-[2.25vh] justify-between items-center">
            <div className="text-white font-bold text-lg ">
                ChatPrep
            </div>
            <div className="flex text-sm">
                <div className="text-fontgray mr-[1.6vw] flex">
                    <Image 
                        src={settings}
                        alt="Settings"
                    />
                    <div className="ml-1">
                        Settings
                    </div>
                </div>
                <div className="text-fontgray mr-[1.6vw] flex">
                    <Image 
                        src={leaderboard}
                        alt="Settings"
                    />
                    <div className="ml-1">
                        Leaderboard
                    </div>
                </div>
                <div className="text-fontgray mr-[1.6vw] flex">
                    <Image 
                        src={myscore}
                        alt="Settings"
                    />
                    <div className="ml-1">
                        My Scores
                    </div>
                </div>
                <div className="text-fontgray mr-[1.6vw] flex">
                    <Image 
                        src={logout}
                        alt="Settings"
                    />
                    <div className="ml-1">
                        Logout
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default NavBar;