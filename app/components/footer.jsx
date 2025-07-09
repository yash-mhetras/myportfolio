"use client"
import React from 'react'
import { motion, scale } from 'framer-motion';
export default function Footer() {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-[100px] gap-3 mt-8 mb-5 '>
        <motion.a href='#Head' className='md:text-[22px] text-[20px] dark:text-white text-black comic-relief-regular comic-relief-bold' whileHover={{scale:1.04}}>YASH MHETRAS</motion.a>
        <div className='flex w-full items-center justify-center gap-2'>
        <p className='md:text-[18px] text-[16px] dark:text-white text-black'>Made with passion © 2025 Yash </p>
        
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className='md:size-6 size-5 text-red-700'><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
        </div>


    </div>
    </>
  )
}
