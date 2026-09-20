"use client"; 
import React from 'react'

const Descriptions = ({data, selectedProject}) => {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    
    return (
        <div className="descriptions-section flex flex-col items-start justify-center mt-[27px] ">
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className="description"
                        style={{clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <div className='container mx-auto pl-[10%] flex items-center justify-between'>
                        <p>{crop(title, 9)}</p>
                        <p>{description}</p></div>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Descriptions;