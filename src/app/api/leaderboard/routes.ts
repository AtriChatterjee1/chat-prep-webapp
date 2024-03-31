import { connectToDB } from "@/utils";
import prisma from "../../../../prisma/index";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    try {
        await connectToDB();
        console.log("jell")
        const {username} = await req.json();
    
        
        const scores = await prisma.score.findMany({
            where:{
                username: username
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
