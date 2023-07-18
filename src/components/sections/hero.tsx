import React from "react";
import { Badge } from "@/components/ui/badge"
import heroImage from "/public/header.webp"
import Image from "next/image"
import { Button } from "@/components/ui/button"
const Hero =() =>{
    return(
        <section className="flex flex-col lg:flex-row gap-y-10 py-6">
                {/* Left div */}
                <div className="flex-1  justify-evenly">
                    <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200" >Badge</Badge>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                    An Industrial Take on Streetwear
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Once upon a time, in a far-off land, there was a very lazy king who
                        spent all day lounging on his throne. One day, his advisors came to him
                        with a problem: the kingdom was running out of money.
                    </p>
                    <Button className="bg-black h-12 px-8 mt-4" >Start Shopping</Button> 
                </div>
                {/* right Div */}
                <div className="flex-1 h-100 w-100 rounded-full bg-pink-200 flex justify-center items-center">
                    <Image src={heroImage} alt ='hero'/>
                </div>
        </section>

    )
}

export default Hero