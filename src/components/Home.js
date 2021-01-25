import React from "react";
import image from "../productivityDesk.jpg";

export default function Home() {
    return (
        <main className="container max-h-screen">
            <img  src={image} alt="lightbulb" className="absolute object-cover w-full max-h-screen"/>
            <p className=" relative flex justify-center text-2xl lg:pt-36 pl-12 text-black font-bold cursive leading-none lg:leading-snug home-name">got websites to build?</p>
            <p className=" relative flex justify-center text-2xl text-black font-bold cursive leading-none">jackie's got the skill to get the job done!</p>
            <p className=" relative flex justify-center text-2xl text-black font-bold cursive leading-none">click a link to get started</p>
     
                 {/* <section className="relative flex justify
                 -center min-h-screen lg:pt-40 pl-12">
                <h1 className="text-blue-500 font-bold cursive leading-none lg:leading-snug home-name">got websites to build? </h1>
            </section>
                 <p className="flex justify-center text-blue-800 font-bold">jackie's got the skill to get the job done!</p> */}



        </main>
    )
}