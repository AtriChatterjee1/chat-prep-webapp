import { NextPage } from "next";
import Dashboard from "@/components/Dashboard";



const dashboard : NextPage = () => {
    return (
        <div>
            <Dashboard text1="Play Today's Quiz" ></Dashboard>
        </div>
    );
}

export default dashboard;