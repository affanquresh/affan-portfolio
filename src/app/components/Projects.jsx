"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";

const projects = [
    {
        title: "XAUUSD Terminal",
        subtitle: "AI Trading Assistant",
        description: "A multi-agent AI-powered XAUUSD analysis terminal that combines real-time market data, technical analysis, market context, and risk management into a unified workflow. The system uses specialized AI agents for technical analysis, market context, and risk assessment, with an orchestration layer that synthesizes their outputs into structured trading insights based on predefined strategies.",
        image: "/images/project-xauusd.png",
        liveUrl: "https://multi-agent-xauusd-trading-assistan.vercel.app/",
        githubUrl: "https://github.com/affanquresh",
        tags: ["Next.js", "AI Agents", "Python", "LangChain"],
    },
];

const ProjectSlide = ({ project }) => {
    return (
        <div className="project-slide">
            <div className="project-slide-inner">
                {/* Left - Info */}
                <div className="w-full md:w-[40%] project-info">
                    <motion.h2
                        className="project-title"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {project.title}
                    </motion.h2>

                    <motion.p
                        className="project-subtitle"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {project.subtitle}
                    </motion.p>

                    <motion.p
                        className="project-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        className="project-tags"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {project.tags.map((tag, j) => (
                            <span key={j} className="project-tag">{tag}</span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="project-links"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            <span>Live Site</span>
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </motion.div>
                </div>

                {/* Right - MacBook Mockup */}
                <div className="w-full md:w-[60%] flex justify-center">
                    <div className="macbook-wrapper">
                        <img src="/images/macbook.png" alt="MacBook" className="macbook-frame" />
                        <div className="macbook-screen-content">
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = projects.length + 1;

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const slideWidth = container.offsetWidth;
            const index = Math.round(scrollLeft / slideWidth);
            setActiveIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSlide = (index) => {
        const container = scrollRef.current;
        if (!container) return;
        container.scrollTo({
            left: index * container.offsetWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="project-section h-full flex flex-col">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-10 pt-20 md:pt-24 pb-2 md:pb-4 flex-shrink-0">
                <motion.p
                    className="text-xs md:text-sm tracking-[3px] md:tracking-[4px] text-[#b5b5b5]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    FEATURED PROJECTS
                </motion.p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex-1 overflow-hidden relative">
                <div ref={scrollRef} className="project-scroll-container">
                    {projects.map((project, i) => (
                        <ProjectSlide key={i} project={project} />
                    ))}

                    {/* Coming Soon Slide */}
                    <div className="project-slide">
                        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
                            <div className="project-coming-soon-loader">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="text-[#b5b5b5] text-lg tracking-wide">More projects coming soon</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                {activeIndex > 0 && (
                    <button
                        className="project-nav-arrow project-nav-prev"
                        onClick={() => scrollToSlide(activeIndex - 1)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"/>
                        </svg>
                    </button>
                )}
                {activeIndex < totalSlides - 1 && (
                    <button
                        className="project-nav-arrow project-nav-next"
                        onClick={() => scrollToSlide(activeIndex + 1)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                )}

                {/* Navigation Dots */}
                <div className="project-nav-dots">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            className={`project-nav-dot ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => scrollToSlide(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
