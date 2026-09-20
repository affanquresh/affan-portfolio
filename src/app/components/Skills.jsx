"use client";
import React from "react";

const data = [
    {
        image: "/images/html.svg",
        className: "html",
        Name: "HTML5"
    },
    {
        image: "/images/css.svg",
        className: "css",
        Name: "CSS3"
    },
    {
        image: "/images/javascript.svg",
        className: "javaScript",
        Name: "JavaScript"
    },
    {
        image: "/images/typescript.svg",
        className: "typeScript",
        Name: "TypeScript"
    },
    {
        image: "/images/react.svg",
        className: "react",
        Name: "React"
    },
    {
        image: "/images/tailwind.svg",
        className: "tailwind",
        Name: "Tailwind"
    },
    {
        image: "/images/python.svg",
        className: "python",
        Name: "Python"
    },
    {
        image: "/images/fastapi.svg",
        className: "fastapi",
        Name: "FastAPI"
    },
    {
        image: "/images/node.svg",
        className: "node",
        Name: "Node"
    },
    {
        image: "/images/shopify.svg",
        className: "shopify",
        Name: "Shopify"
    },
    {
        image: "/images/figma.svg",
        className: "figma",
        Name: "Figma"
    },
    {
        image: "/images/langchain.svg",
        className: "langchain",
        Name: "LangChain"
    },

    {
        image: "/images/chromadb.svg",
        className: "chromadb",
        Name: "ChromaDB"
    },
    {
        image: "/images/llm.svg",
        className: "llm",
        Name: "LLM"
    },
    {
        image: "/images/rag.svg",
        className: "rag",
        Name: "RAG"
    },
    {
        image: "/images/ai-agents.svg",
        className: "aiAgents",
        Name: "Agentic AI"
    },
    {
        image: "/images/cicd.svg",
        className: "cicd",
        Name: "CI/CD"
    },
]

const Skills = () => {

    return (
        <div className="container mx-auto py-3 h-full skills-section" id="skills">
            <div className="flex items-center flex-col justify-center h-full">
                <div className="w-full md:w-3/5 text-center top-text">
                    {/* <p className="text-[#b5b5b5]">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p> */}
                    <h2 className="my-3">Skills & Experience</h2>
                    <p className="md:text-[17px]">Building modern web applications with React, TypeScript, Tailwind CSS, and Python, with experience developing AI-powered applications using LLMs, RAG pipelines, LangChain, and AI Agents. Experienced in building scalable web products, integrating APIs and AI workflows, and developing Shopify-based Ecommerce experiences.
                    </p>

                    <p className="my-2">Visit my <a className="text-[#9c27b0]" href="https://www.linkedin.com/in/affan-qureshi-586814249" target="_blank" rel="noopener noreferrer">Linkedin</a>  for more details.</p>
                </div>
                <div className="skills_brands flex flex-wrap items-center justify-center m-auto">
                    {
                        data.map((skill, i) => {
                            return (
                                <div className="skill" key={i} >
                                    <img className={skill.className} src={skill.image} alt={skill.className} />
                                    <p>{skill.Name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;