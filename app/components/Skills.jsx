
"use client";
import React from "react";
import  {motion}  from 'framer-motion'

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {  transform: "translateY(20%)", opacity: 0 },
  visible: {  transform: "translateY(0%)", opacity: 1 },
};
const tech=[
    {
        img:"/logos/js.svg",
        name:"Javascript"
    },
    {
        img:"/logos/bootstrap.svg",
        name:"Bootstrap"

    },
        {
        img:"/logos/tailwind.svg",
        name:"Tailwind"

    },
        {
        img:"/logos/react.svg",
        name:"React"

    },
        {
        img:"/logos/redux.svg",
        name:"Redux"

    },
        {
        img:"/logos/framer.svg",
        name:"Framer"

    },
        {
        img:"/logos/materialui.svg",
        name:"MaterialUI"

    },
        {
        img:"/logos/node.svg",
        name:"Node.js"

    },
        {
        img:"/logos/express.svg",
        name:"Express.js"

    },
        {
        img:"/logos/mongodb.svg",
        name:"Mongodb"

    },
        {
        img:"/logos/postgre.svg",
        name:"Postgresql"

    },
        {
        img:"/logos/nextjsnew.svg",
        name:"Next.js"

    },
        {
        img:"/logos/typescript.svg",
        name:"Typescript"

    },
        {
        img:"/logos/github.svg",
        name:"Github"

    },
        {
        img:"/logos/awsfinal.svg",
        name:"AWS"

    },
        {
        img:"/logos/docker.svg",
        name:"Docker"

    },
        {
        img:"/logos/linux.svg",
        name:"Linux"

    }
]


export default function Skills() {
  return (
    <section
      id="Skills"
      className="mt-5 md:mt-0 h-full py-16 md:py-0 md:h-screen w-full flex flex-col justify-center items-center py-12 gap-7"
    >
        <motion.h1 className="text-3xl md:text-4xl font-bold dark:text-white text-black" whileHover={{scale: 1.04 }} >Technology Tooklit</motion.h1>
        <p className=" text-[16px] md:text-[18px] dark:text-neutral-400 text-center text-neutral-600">My tech stack that helps me build web apps that are modern, responsive, and easy to maintain.</p>
      <div className="w-[95%] h-[850px] md:w-[80%] md:h-[300px] border-animated-wrapper p-2">
     
        <motion.div initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
       className="dark:bg-neutral-950 bg-neutral-200 h-full w-full rounded-[25px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.07)_0%,_transparent_50%)] flex flex-wrap gap-8 md:p-7 p-4 justify-center">
      {tech.map((technology, index) => {
  return (
    <motion.div
     transition={transition}
              variants={variants} 
      key={index}
      className="inline-block whitespace-nowrap h-[50px] md:h-[60px] px-3 py-5 rounded-[20px] bg-white dark:bg-zinc-800 flex md:justify-center items-center gap-2"
    >
      <img src={technology.img} className="h-5 w-5 md:h-8 md:w-8" alt={technology.name} />
      <h1 className="md:text-xl font-semibold text-[15px] dark:text-white text-black">{technology.name}</h1>
    </motion.div>
  );
})}

         
             
            
            
         
        
      </motion.div>
      </div>
    </section>
  );
}
