"use client"; 
import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

const data = [

    {
        title: "3D",
        description: "I can produce anything that my 16” laptop can render",
        speed: 0.8
    },
    {
        title: "Visual",
        description: "I search the internet for visual references and then combine them to create my own work.",
        speed: 0.5
    },
    {
        title: "Motion",
        description: "I use fancy motion that makes my design more interesting that it actually is",
        speed: 0.5
    },
    {
        title: "Product",
        description: "I utilize common design best practices, test, and re-iterate until it works (hopefully).",
        speed: 0.67
    },
]


const Titles = ({ setSelectedProject}) => {

    // const crop = (string, maxLength) => {

    //     return string.substring(0, maxLength);

    // }
  return (
    <div className="titles-page mt-[20px]">
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

export default  Titles;

function Title({data, setSelectedProject}) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${8 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    
    return (
        <div ref={container} className="title ">
            <div 
                className="wrapper container mx-auto"
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}}>
                    {title}
                </motion.p>
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}