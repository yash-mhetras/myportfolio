"use client"

import React from 'react'
import  {motion}  from 'framer-motion'

const transition = { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {  transform: "translateY(20%)", opacity: 0 },
  visible: {  transform: "translateY(0%)", opacity: 1 },
};

export default function Projects() {
  return (
    <>
    <motion.section  initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
       id='Projects' className='h-full w-full items-center mt-8 py-12 flex flex-col gap-10 md:gap-12 ' >
        <motion.h1 className='text-4xl font-bold mt-6 dark:text-white text-black ' 
      whileHover={{scale: 1.04 }} 
     
        
        >Recent Work</motion.h1>
 
        <motion.div       transition={transition}
              variants={variants} className='h-[600px] w-[98%] md:h-[320px] md:w-[60%] dark:bg-neutral-900 bg-white  shadow-md dark:shadow-neutral-100/40 shadow-neutral-800/40 rounded-md md:flex-row flex flex-col border dark:border-neutral-400 border-silver-300'>
        <div className='md:h-[100%] p-3 md:w-[40%] w-[100%] h-[45%] flex justify-center items-center'><img className=" md:h-[80%] w-[80%] h-[100%] object-cover rounded-md" src="/images/profconnect.png"  alt="" /></div>
        <div className='flex flex-col p-3 h-[100%] md:w-[60%] md:gap-4 w-[100%] gap-5 md:justify-center'>
          <h1 className='text-xl comic-relief-regular comic-relief-bold dark:text-white text-black'>ProfConnect</h1>
          <p className='text-[13px] dark:text-white text-black'>ProfConnect is a full-stack professional networking platform.It features user authentication, post creation, resume download, real-time connection requests (send/accept/pending), profile updates, and a discover section to find top and second-degree profiles.</p>
          <div className='flex flex-wrap gap-2'>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Next.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>React</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Redux Toolkit</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Node.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Express.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>MongoDB</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Cloudinary</div>
        
          </div>
        <div className='flex'>
        <a href="https://github.com/yash-mhetras/ProfConnect.git" className='w-full flex gap-1 text-[15px] dark:text-white text-black hover:underline'>
       <svg xmlns="http://www.w3.org/2000/svg" height="10" width="9.6875" viewBox="0 0 496 512" fill="currentColor" className=' size-5 dark:text-white text-black'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>Github
       
       
 
        </a>
        </div>


        </div>


        </motion.div>
               <motion.div       transition={transition}
              variants={variants} className='h-[610px] w-[98%] md:h-[320px] md:w-[60%] dark:bg-neutral-900 bg-white  shadow-md dark:shadow-neutral-100/40 shadow-neutral-800/40 rounded-md md:flex-row flex flex-col border border-neutral-400' >
        <div className='md:h-[100%] p-3 md:w-[40%] w-[100%] h-[50%] flex justify-center items-center'><img className=" h-[100%] md:h-[80%] w-[80%]  object-cover rounded-md" src="/images/video.png"  alt="" /></div>
        <div className='flex flex-col p-3 h-[100%] md:w-[60%] md:justify-center w-[100%] gap-5 md:gap-3'>
          <h1 className='text-xl comic-relief-regular comic-relief-bold dark:text-white text-black'>VidStack</h1>
          <p className='text-[13px] dark:text-white text-black'>VidStack is a full-featured video conferencing web app built with React, Socket.IO, and WebRTC, supporting real-time audio/video communication, screen sharing, and live chat.Includes dynamic user media control (mic/cam toggle).Securely handles peer connections with STUN servers for low-latency, high-quality calls.</p>
          <div className='flex flex-wrap gap-2'>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>React</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Material UI</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Node.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Express.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>MongoDB</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>Socket.io</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full  bg-black'>webRTC</div>
        
          </div>
        <div className='flex'>
        <a href="https://github.com/yash-mhetras/VidStack.git" className='w-full flex gap-1 text-[15px] hover:underline dark:text-white text-black'>
       <svg xmlns="http://www.w3.org/2000/svg" height="10" width="9.6875" viewBox="0 0 496 512" fill="currentColor" className=' size-5  dark:text-white text-black'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>Github
       
       
 
        </a>
        </div>


        </div>


        </motion.div>
               <motion.div       transition={transition}
              variants={variants} className='h-[590px] w-[98%] md:h-[320px] md:w-[60%] dark:bg-neutral-900 bg-white  shadow-md dark:shadow-neutral-100/40 shadow-neutral-800/40 rounded-md md:flex-row flex flex-col border border-neutral-400' >
        <div className='md:h-[100%] p-3 md:w-[40%] w-[100%] h-[45%] flex justify-center items-center'><img className="h-[100%] md:h-[80%] w-[80%] object-cover rounded-md" src="/images/hotel.png"  alt="" /></div>
        <div className='flex flex-col p-3 h-[100%] md:w-[60%] md:gap-4 w-[100%] gap-3 md:justify-center'>
          <h1 className='text-xl comic-relief-regular comic-relief-bold dark:text-white text-black'>NestAway</h1>
          <p className='text-[13px] dark:text-white text-black'>NestAway is a full-fledged Airbnb clone that enables users to discover, list, vacation rentals across the globe.It features authentication, role-based access for Admin and users, and secure route protection. Admin can (create, delete, edit) listings with image uploads ,add location-based details, set pricing, and manage availability.</p>
          <div className='flex flex-wrap gap-2'>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 md:px-3 rounded-full  bg-black'>Bootstrap</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full md:px-3 bg-black'>Node.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full md:px-3  bg-black'>Express.js</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full md:px-3 bg-black'>MongoDB</div>
            <div className='inline-block whitespace-nowrap text-[13px] px-2 py-1 rounded-full md:px-3  bg-black'>EJS</div>
           
        
          </div>
        <div className='flex'>
        <p className='w-full flex gap-1 text-[15px] hover:underline dark:text-white text-black cursor-pointer'>
       <svg xmlns="http://www.w3.org/2000/svg" height="10" width="9.6875" viewBox="0 0 496 512" fill="currentColor" className=' size-5 dark:text-white text-black'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>Github
       
       
 
        </p>
        </div>


        </div>


        </motion.div>
     
    </motion.section>
    </>
  )
}
