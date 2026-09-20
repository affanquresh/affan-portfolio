'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';

 const Earth = () => {

    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    const [rotation, setRotation] = useState([0.4, -2, 0]);

    const [scale, setScale] = useState(2.8);
    const [deviceSize, setDeviceSize] = useState(window.innerWidth);

    useEffect (()=>{
        console.log(deviceSize);
        const newSize = window.innerWidth;
        setDeviceSize(newSize);
        if (newSize < 600) {
          setScale(2.5);
        } else {
          setScale(2.8); // or any other default value for larger sizes
        }
  
    //    console.log( deviceSize ?: true )
    },[])

    /* Used for smooth rotation if you're not using Lenis Scroll */
    // const smoothRotation = useSpring(scrollYProgress, {
    // damping: 20
    // });

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/images/color.webp',
        '/images/normal.webp',
        '/images/occlusion.jpg',
    ])

    return (
        <>
            <Canvas ref={scene}>
                <ambientLight intensity={0.1} />
                <directionalLight intensity={3.5} position={[1, 0, -0.15]} />
                <motion.mesh scale={scale} rotation-y={scrollYProgress} rotation={rotation}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
                </motion.mesh>
            </Canvas>
        </>
    )
}

export default Earth;