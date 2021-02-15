import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon } from "react-social-icons";
import jackieCodesLogo from "../jackieCodesLogo.png";

export default function NavBar() {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto flex justify-between h-15">
                <nav className="flex">

                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-800 text-4xl font-bold cursive tracking widest">
                        <img className="h-16"
                        src ={jackieCodesLogo} />
                    </NavLink>

                    <NavLink to ="/post" 
                    activeClassName="text-red-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold cursive tracking-wider hover:text-white">
                        design projects
                    </NavLink>

                    <NavLink to="/project" 
                    activeClassName="text-red-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold cursive tracking-wider leading-none hover:text-white">
                        programming projects
                    </NavLink>

                    <NavLink to="about" 
                    activeClassName="text-red-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold cursive tracking-wider leading-none hover:text-white">
                        who is jackie?
                    </NavLink>

                    <NavLink to="contact" 
                    activeClassName="text-red-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold cursive tracking-wider leading-none hover:text-red-300">
                        contact jackie
                    </NavLink>

                    {/* <NavLink to="hi" 
                    activeClassName="text-red-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold cursive tracking-wider leading-none hover:text-red-300">
                        test
                    </NavLink> */}


                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url= "https://www.linkedin.com/in/jaclynkapodaca" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/jackieiscoding" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://www.instagram.com/jackiecodes/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}