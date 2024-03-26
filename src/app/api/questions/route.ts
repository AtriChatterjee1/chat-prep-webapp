import { connectToDB } from "@/utils";
import prisma from "../../../../prisma/index";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        await connectToDB();
        const questions = await prisma.question.findMany();
        return NextResponse.json({ questions }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request) => {
    try {
        const { question, optionA, optionB, optionC, optionD, correctAnswer, time, category } = await req.json();
        if (!question && !optionA && !optionB && !optionC && !optionD && !correctAnswer && !time && !category) {
            return NextResponse.json({ error: "Invalid Data" }, { status: 422 });
        }
        await connectToDB();
        const questionSaved = await prisma.question.create({
            data: {
                question, optionA, optionB, optionC, optionD, correctAnswer, time, category
            },
        })
        return NextResponse.json({ questionSaved }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
}
