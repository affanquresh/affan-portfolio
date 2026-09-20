"use client";
import React from "react";
import { useState } from 'react';
import Titles from './Titles';
import Descriptions from './Descriptions';

const data = [

    {
        title: "3D",
        description: "I can produce anything that my 15” laptop can render.",
        speed: 0.8
    },

    {
        title: "Visual",
        description: "I search the internet for visual references and then combine them to create my own work.",
        speed: 0.5
    },

    {
        title: "Motion",
        description: "I use fancy motion that makes my websites more interesting than it actually is.",
        speed: 0.5
    },

    {
        title: "Product",
        description: "I utilize common design, best practices, test, and re-iterate until it works (hopefully).",
        speed: 0.67
    },

]

const WhatIDo = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="wid-container flex flex-col items-start justify-center">
            {/* <div className="container"> */}
                <p className="pl-[10%] container pt-[20px] text-sm tracking-[4px]">WHAT I DO</p>
            {/* </div> */}
            <Titles data={data} setSelectedProject={setSelectedProject} />
            <Descriptions data={data} selectedProject={selectedProject} />
        </div>
    )
}

export default WhatIDo;