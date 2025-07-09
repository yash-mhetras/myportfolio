"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
};


const text = "Passionate about building modern full-stack websites using MERN stack and Next.js. Skilled in building scalable, user-centric web applications, crafting responsive designs and optimizing application performance.";

export default function Herosection() {
  const words = text.split(" ");
  return (
    <>
    
      <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.03 }}
      className='h-full flex flex-col  items-center justify-center gap-10  md:mt-8 md:gap-7 pt-[27%] py-12  md:py-12 md:pt-0 md:h-screen dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.07)_0%,_transparent_50%)] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05)_0%,_transparent_60%)]' id='Head'
     
    >

        <motion.h1 
        transition={transition}
              variants={variants}
  
  className='font-bold text-5xl md:text-7xl text-center   text-transparent bg-clip-text leading-tight bg-gradient-to-r from-white via-cyan-300 to-pink-400 ' ><span className='dark:text-transparent dark:bg-clip-text dark:leading-tight dark:bg-gradient-to-r dark:from-white dark:via-cyan-300 dark:to-pink-400 text-transparent bg-clip-text leading-tight bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-900 '>Hi, I'm Yash Mhetras</span></motion.h1>
      <p className="dark:text-neutral-400 text-neutral-600 text-[15px] text-center md:w-[70%] md:text-2xl  ">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="text-xl md:text-[20px] inline-block roboto-slab-heading"
              transition={transition}
              variants={variants}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        ))}
      </p>
         <motion.div
          transition={transition}
              variants={variants}
         
          className="text-xl md:text-3xl font-bold dark:text-neutral-300 text-black tektur-type"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Problem Solver & Innovator",
              2000,
               "Transforming ideas into code",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
            <motion.div className='flex  itms-center justify-center h-[40px] w-[90%] mt-9 md:mt-15  gap-4 md:gap-6'
            transition={transition}
              variants={variants}>
      <a   href='https://www.linkedin.com/in/yash-mhetras-34b014318'
  target='_blank'
  rel='noopener noreferrer' className='flex flex-col items-center justify-center w-12 h-12 dark:bg-neutral-500 bg-neutral-300 rounded-full '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className='dark:md:text-neutral-900 dark:md:text-neutral-100  dark:text-white text-black  md:w-21 flex  itms-center justify-center w-15 size-5 md:size-6 cursor-pointer dark:md:hover:text-white md:hover:text-white '>
  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
</svg>
</a>
<a href="https://github.com/yash-mhetras"
  target="_blank"
  rel="noopener noreferrer" className='flex flex-col items-center justify-center w-12 h-12 dark:bg-neutral-500 bg-neutral-300 rounded-full '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className='dark:md:text-neutral-900 dark:md:text-neutral-100  dark:text-white text-black  md:w-21 flex  itms-center justify-center w-15 size-5 md:size-6 cursor-pointer dark:md:hover:text-white md:hover:text-white'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
</a>
<a  href="https://twitter.com/yashxmhetras"
                      target="_blank"
                      rel="noopener noreferrer" className='flex flex-col items-center justify-center dark:bg-neutral-500 bg-neutral-300 rounded-full w-12 h-12  '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className='dark:md:text-neutral-900 dark:md:text-neutral-100  dark:text-white text-black  md:w-21 flex  itms-center justify-center w-15 size-5 md:size-6 cursor-pointer dark:md:hover:text-white md:hover:text-white'><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
</a>
    </motion.div>

 
      
    </motion.div>




 
    </>
  )
}
