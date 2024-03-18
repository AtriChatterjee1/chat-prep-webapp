import { NextPage } from "next";
import Dashboard from "@/components/Dashboard";



const dashboard : NextPage = () => {
    return (
        <div>
            <Dashboard text1="Today's score - 50" ></Dashboard>
        </div>
    );
}

export default dashboard;