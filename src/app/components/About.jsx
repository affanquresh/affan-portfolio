"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import AnimationImg from "./AnimationImg";
import Link from "next/link";

const About = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset : ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0,1], ["0%","-2500%"]);

    const hi = "Hi, I'm Affan"
    const text = "AI Engineer";

    return (
        <div className="container hero-section mx-auto py-3 pt-0 relative overflow-hidden">
            <img className="dots-img" src="/images/hero-dots.png" alt="dots" />
            <div className="flex flex-col-reverse md:flex-row h-full justify-center items-center">
                <div className="flex-1">
                    <h2>
                    <div className="inline">
                                {
                                    hi.split("").map((char, index) =>
                                        <span key={index} className="bounce bounce-text">{char}
                                         {index < char.length - 1 && ' '}
                                        </span>                  
                                    )
                                }   
                            </div>
                        <div className="inline-block">
                                {
                                    text.split("").map((char, index) =>
                                        <span key={index} className="bounce bounce-text">{char}
                                         {index < char.length - 1 && ' '}
                                        </span>                  
                                    )
                                }   
                            </div>
                    </h2>

                    <p className="w-4/5 mt-3">
                    I build and ship real agentic AI products, not just notebooks — from live multi-agent
                    systems and Retrieval-Augmented Generation (RAG) assistants to fine-tuned open-source LLMs,
                    backed by a strong full-stack Python foundation across the entire GenAI stack.
                    </p>

                    <p className=" mt-3">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>


                    <Link href="#skills" className="text-[#9c27b0] font-semibold flex items-center mt-4 md:mt-5 about-me">Skills
                        <svg className="rotate-[270deg] angle-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0"></path></svg>
                    </Link>

                    <motion.div className="h-[50px] w-[50px] fixed bottom-10 z-50"
                     animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 360],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                      }}
                    >
                        <Link href="https://github.com/affanquresh" target="_blank">
                        <img className="" src="/images/github-img.svg" alt="github" />
                        </Link>
                    </motion.div>
                </div>

                <motion.img className="purple-square hidden md:block" width="1" height="1" src="/images/purple_square.png" alt="square image"
                    drag
                    dragConstraints={{
                        top: -400,
                        left: -400,
                        right: 500,
                        bottom: 50,
                    }}
                />
                <img className="purple-square block md:hidden" width="1" height="1" src="/images/purple_square.png" alt="square image"/>

                <div className="flex-1  relative md:block flex items-center justify-center mt-[85px]">
                <AnimationImg yBg={yBg}/>
                    <img className="laptop-img" width="1" height="1" src="/images/laptop_img1.svg" alt="laptop" />
                </div>
            </div>

        </div>
    )
}

export default About;