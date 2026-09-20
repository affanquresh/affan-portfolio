"use client";
import React from "react";
import Image from 'next/image'
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

const sliderVariant = {
    initial:{
        x:0,
    },
    animate:{
        x:"-65%",
        
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration: 25,
            delay: 1,
        },
    }
}

const Hero = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset : ["start start", "end start"]
    });

    // const yText = useTransform(scrollYProgress, [0,1], ["0%","300%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%","500%"]);

    return (
        <div className="big-text pt-2 mx-auto h-full relative overflow-hidden z-20" ref={ref}>
            <motion.div className="hero-bg" style={{x:yBg}}></motion.div>
            <motion.h1 className="hero-bg-inifinit-text"  variants={sliderVariant} initial="initial" animate="animate">Software Engineer</motion.h1>
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden z-20">
                <Image width={500} height={300}  className="z-10 w-full md:w-3/5" src="/images/my_avatar3.png" alt="avatar"/>
            </div>

            {/* <div class="hero-home-overlay"></div> */}
            {/* <h2 className="name">It's Affan</h2> */}
            {/* <div className="hero-home-overlay"></div> */}
        </div>
    )
};

export default Hero;