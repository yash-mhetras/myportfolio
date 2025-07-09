"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#Head' },

  { label: 'Projects', href: '#Projects' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Contact', href: '#Contact' },
];
export default function Navbar({isDarkmode,setisDarkmode}) {
    const [hover, sethover] = useState(null);
    const [navopen,setnavopen]=useState(false);

 
  return (
   
    <nav className='w-full h-15 p-3 dark:bg-black bg-white opacity-95 rounded-[10px] fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center border dark:border-neutral-800 border-silver-200 max-w-[90%] md:w-[90%]'>
        <h1 className='libertinus-mono-regular text-bold text-[21px] md:text-3xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 text-neutral-900 cursor-pointer'><a href='#Head'>{`<Yash/>`}</a></h1>
        <div className='flex items-center gap-6 md:gap-9'>
         <ul className="hidden md:flex gap-6">
      {navLinks.map((link, index) => (
        <li 
          key={index}
          onMouseEnter={() => sethover(index)}
          onMouseLeave={() => sethover(null)}
          className="relative px-1 py-2 w-[76px] flex items-center justify-center dark:text-neutral-100 text-neutral-900"
        >
            {hover===index &&(
                <motion.span layoutId='hovered-span' className='absolute h-full w-full inset-0 rounded-md dark:bg-neutral-900 bg-neutral-100'/>

               
            )}
          <a className='relative z-10 dark:text-white text-black funnel-display-navfont' href={link.href}>{link.label}</a>
        </li>
      ))}

    </ul>
{navopen && (
  <div className="absolute top-full mt-2 left-0 w-full z-40 bg-black/80 backdrop-blur-md md:hidden rounded-b-xl border dark:border-neutral-800 rounded-xl border-silver-200">
    <div className="w-[100%] max-w-sm dark:bg-black bg-white z-20 border dark:border-neutral-800 border-silver-200 rounded-xl p-6 shadow-xl md:hidden">
      <ul className="flex flex-col items-start gap-6">
        {navLinks.map((link, index) => (
          <li key={index} className="w-full">
            <a
              className="dark:text-white text-black text-xl w-full block"
              onClick={() => setnavopen(prev => !prev)}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}







{isDarkmode?  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6 text-yellow-500 cursor-pointer"  whileHover={{ scale: 1.1 }} onClick={()=>setisDarkmode(prev=>!prev)}
  whileTap={{ scale: 0.95 }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</motion.svg>:<motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6 text-blue-700 cursor-pointer"  whileHover={{ scale: 1.1 }} onClick={()=>setisDarkmode(prev=>!prev)}
  whileTap={{ scale: 0.95 }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</motion.svg>}






{navopen===true?    <svg
      onClick={() => setnavopen(prev => !prev)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 md:hidden dark:text-white text-black"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>:
<svg onClick={()=>{setnavopen(prev=>(!prev))}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:hidden dark:text-white text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
}


        
</div>



    </nav>
   
 

  )
}
