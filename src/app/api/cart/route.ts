import { NextRequest, NextResponse } from "next/server"
import { db, cartTable } from "@/lib/drizzle"
import {v4} from "uuid"
import { cookies } from "next/headers"
import { eq } from "drizzle-orm"


export const GET = async(request: Request) =>{
    alert("id")
    const req = request.url
    const uid = 1 //req.searchParams.get("user_id") as string

    try{
        if(!uid){
        const res= await db.select().from(cartTable).where(eq(cartTable.user_id,uid));
        return NextResponse.json({res})
        }
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message: "Something went wrong"})
    }
}

export const POST = async(request: Request)=>{

    
    const req= await request.json();

    const uid =v4();
    const setCookies = cookies();

    const user_id=cookies().get("user_id")?.value;

    if(!user_id){
        setCookies.set("user_id", uid);
    }

    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity:req.quantity,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})
    }
    catch(error){

    }
}