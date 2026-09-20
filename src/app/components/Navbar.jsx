// import { motion } from "framer-motion";
"use client";

import React from "react";

// const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i) => {
//         const delay = 1 + i * 0.5;
//         return {
//             pathLength: 1,
//             opacity: 1,
//             transition: {
//                 pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//                 opacity: { delay, duration: 1 }
//             }
//         };
//     }
// };


const Navbar = () => {
    return (
        <nav className="py-5 fixed top-0 container">
            <div className="flex items-center logo-container">
                {/* <div className=""> */}
                <div className="logo">
                    <svg width="40" height="22" viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="10" width="35" height="52" fill="#000" />
                        <path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="#9c27b0" />
                        <rect className="blink" x="45" y="44" width="29" height="8" fill="#fff"></rect>
                    </svg>
                </div>
                {/* <motion.svg className="" width="27" height="27" viewBox="0 0 57 56" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.line x1="3" y1="1.5" x2="53" y2="1.5" stroke="#9c27b0" strokeWidth="5"  variants={draw}/>
                <motion.line x1="3" y1="53.5" x2="53" y2="53.5" stroke="#9c27b0" strokeWidth="5"  variants={draw}/>
                <motion.line x1="54.5" x2="54.5" y2="55" stroke="#9c27b0" strokeWidth="5"  variants={draw}/>
                <motion.path d="M3 52.9888L54.0045 3" stroke="#9c27b0" strokeWidth="5"  variants={draw}/>
                <motion.line x1="54" y1="31.5" x2="25" y2="31.5" stroke="#9c27b0" strokeWidth="5"  variants={draw}/>
                <motion.path d="M2.00005 0.999997L25.5962 32.0701" stroke="#9c27b0" strokeWidth="5"  variants={draw}/>
            </motion.svg> */}
                <h1 className="typewriter">DVLPR</h1>

            </div>
        </nav>
    )
};

export default Navbar;

