import { connectToDB } from "@/utils";
import prisma from "../../../../prisma/index";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {
    try {
        await connectToDB();
        console.log("jell")
        const body =  req.body;
        const username = body;
        
        const scores = await prisma.score.findMany({
            where:{
                username:`${username}`
            }
        });
        console.log(username);
        
        console.log("hell");
        return NextResponse.json({ scores }, { status: 200 });


    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request) => {
    try {
        const { score, username, quizDay, time, category } = await req.json();
        if (!username && !score && !quizDay && !time && !category) {
            return NextResponse.json({ error: "Invalid Data" }, { status: 422 });
        }
        await connectToDB();
        const ScoreSaved = await prisma.score.create({
            data: {
                score, username, quizDay
            },
        })
        return NextResponse.json({ ScoreSaved }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
}
