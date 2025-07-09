"use client"

import Projects from "./components/Projects";
import Herosection from "./components/Head";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkmode,setisDarkmode]=useState(true);
  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setisDarkmode(true);
    }else{
      setisDarkmode(false)
    }
  },[])
  useEffect(()=>{
    if(isDarkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark'
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme=''

    }
  },[isDarkmode])
  return (
<>
<div>
   <div className='dark:bg-neutral-950 bg-neutral-100 w-[100%] min-h-screen flex justify-center items-center'>
            <div className='w-[90%]  min-h-screen flex flex-col gap-15 scroll-smooth '>
            
              <Navbar isDarkmode={isDarkmode} setisDarkmode={setisDarkmode}/>          
              <Herosection/>
              <Projects/>
              <Skills/>
              <Contact/>
              <Footer/>
              
    
    
            </div>
        </div>
  
  
</div>
</>
  );
}
