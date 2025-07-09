
"use client"
import React, { useState } from 'react'
import  {motion}  from 'framer-motion'
const transition = { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {  transform: "translateY(15%)", opacity: 0 },
  visible: {  transform: "translateY(0%)", opacity: 1 },
};
export default function Contact() {
      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8b9222c-e9dc-495a-a0f2-3b0125edb26e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    
    <>
    <section id='Contact' className=' h-full md:h-screen w-full flex  flex-col justify-center items-center gap-7 md:gap-5 md:py-0 py-14 mt-7 md:mt-0'>
        <motion.h1 className='text-3xl md:text-4xl font-bold dark:text-white text-black' whileHover={{scale: 1.04 }} >Contact Details</motion.h1>
        <p className='text-[18px] dark:text-neutral-400 text-neutral-600 text-center'>Feel free to contact me</p>
        <motion.div className='w-[90%] h-[60%] flex flex-col md:flex-row md:gap-10 items-center justify-center gap-8  md:py-0 md:mt-3 ' initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.3 }}
      >
            <motion.div  transition={transition}
              variants={variants} className='w-[100%] md:w-[40%] h-[100%] dark:bg-neutral-950 bg-neutral-100 flex flex-col gap-5 md:gap-7 justify-center items-center pl-3 md:pl-0'>
                <div className='w-[100%] h-[30px] flex md:gap-8 gap-5 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className='dark:text-white text-black size-6 md:size-9 '><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
 <a
  href="mailto:yashrm2005@gmail.com"
  className="dark:text-white text-black hover:underline text-[18px] md:text-xl"
>
  yashrm2005@gmail.com
</a>



                </div>
                  <div className='w-[100%] h-[30px] flex md:gap-8 gap-5 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className='dark:text-white text-black size-6 md:size-9 '><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                  <a
                      href='https://www.linkedin.com/in/yash-mhetras-34b014318'
                      target='_blank'
                      rel='noopener noreferrer'
                    className="dark:text-white text-black hover:underline text-[18px] md:text-xl"
                  >
                    Linkedin
                  </a>



                </div>
                <div className='w-[100%] h-[30px] flex md:gap-8 gap-5 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className='dark:text-white text-black size-6 md:size-9 '><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                  <a
                      href="https://twitter.com/yashxmhetras"
                      target="_blank"
                      rel="noopener noreferrer"
                    className="dark:text-white text-black hover:underline text-[18px] md:text-xl"
                  >
                    Twitter
                  </a>



                </div>




                            <div className='w-[100%] h-[30px] flex md:gap-8 gap-5 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className='dark:text-white text-black size-6 md:size-9'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
 <a
  href="https://www.google.com/maps/place/Dhayari,+Pune,+Maharashtra/@18.4439639,73.7887824,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc2951a8a2d6d43:0x49d870c8e2fa28a3!8m2!3d18.4471444!4d73.8101999!16s%2Fg%2F12hmjt4c4?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
  rel="noopener noreferrer"
  className="text-blue-700 hover:underline text-[18px] md:text-xl"
>
  Pune,Maharashtra
</a>



                </div>


            </motion.div>
     <motion.form onSubmit={onSubmit}
  className=" w-[100%] md:w-[30%] h-full dark:bg-black bg-zinc-300 rounded-[15px] p-7 flex flex-col items-center gap-1"
   transition={transition}
              variants={variants}

>
  <div className="w-full h-[25%]">
    <label htmlFor="name" className="dark:text-white text-black">Name</label>
    <input
      id="name"
      type="text"
      required
      className="w-full h-[45px] dark:bg-zinc-800 bg-white rounded-md p-2 text-white"
      name='name'
    />
  </div>

  <div className="w-full h-[25%]">
    <label htmlFor="email" className="dark:text-white text-black">Email</label>
    <input
      id="email"
      type="email"
      required
      className="w-full h-[45px] dark:bg-zinc-800 bg-white rounded-md p-2 text-white"
      name='email'
      
    />
  </div>

  <div className="w-full h-[30%]">
    <label htmlFor="message" className="dark:text-white text-black">Message</label>
    <textarea
      id="message"
      required
      className="w-full h-[100px] dark:bg-zinc-800 bg-white rounded-md p-2 text-white"
      name='message'
    ></textarea>
  </div><br />

  <motion.button
    type="submit"
    className="w-full dark:bg-white bg-black h-[45px] mt-4 cursor-pointer flex justify-center items-center text-xl dark:text-black text-white rounded-[18px] font-semibold"
    whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.95 }}
  >
    Submit
  </motion.button>
  <p>{result}</p>
</motion.form>


        </motion.div>
     
    </section>


    </>
  )
}
