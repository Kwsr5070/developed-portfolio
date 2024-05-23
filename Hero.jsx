import React from 'react';
import { HERO_CONTENT } from '../constants';
import { TiTick } from "react-icons/ti";
import imgProfile from '../assets/imgProfile.png'; 
import { IoLogoJavascript } from "react-icons/io5";

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { motion } from "framer-motion"
const container =(delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{x:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay}}
})


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 variants={container(0)}
            initial="hidden"
            animate="visible"
            
            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Md Kawser</motion.h1>
            <motion.span variants={container(0)}
            initial="hidden"
            animate="visible" className='bg-gradient-to-r from-amber-200 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Front End Developer</motion.span>
            <motion.p  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  variants={container(0.5)}
            initial="hidden"
            animate="visible"
  drag="x"
  dragConstraints={{ left: -100, right: 100 }} className='py-6 max-w-xl font-light tracking-tighter my-2'>{HERO_CONTENT}</motion.p>
            <motion.div  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }} variants={container(1)}
  initial="hidden"
  animate="visible" className='grid grid-cols-3 px-4 lg:grid-cols-5 gap-3'>
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Javascript</p>
            </div>
            
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>React</p>
            </div>
            
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Node js.</p>
            </div>
            
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Express</p>
            </div>
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>MongoDB</p>
            </div>
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Tailwind CSS</p>
            </div>
            
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Daisy UI</p>
            </div>
            
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Framer Motion</p>
            </div>
            
            <div className='flex items-center gap-2 py-2'>
              <span className='border bg-green-700'><TiTick/> </span><p>Github</p>
            </div>
            </motion.div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img  animate={{ x: 0, opacity:1 }} initial={{x:100, opacity:0}} transition={{duration:1, delay:1.5}}
            
             className='rounded-full border-spacing-72 border-b-4' src={imgProfile} alt="Md Kawser" /> 
            
          </div>
          <div className='flex items-center justify-center  gap-8'>
          <div className='text-6xl mb-20'>
          <span><IoLogoJavascript /></span>
        </div>
          <div className='text-6xl'>
          <span><IoLogoHtml5 /></span>
        </div>
          <div className='text-6xl'>
          <span><IoLogoCss3 /></span>
        </div>
          <div className='text-6xl mb-20'>
          <span><FaReact /></span>
        </div>
          </div>

         
        </div>
        
      </div>
    </div>
  )
}

export default Hero;
