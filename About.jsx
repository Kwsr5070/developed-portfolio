import React from 'react'
import imgProfile from '../assets/imgProfile.png';
import { RxDividerVertical } from 'react-icons/rx';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"

const container =(delay) =>({
    hidden:{x:-100, opacity:0},
    visible:{x:0,
      opacity:1,
      transition:{duration: 0.5, delay:delay}}
  })
  

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>


        <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg: p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img  animate={{ x: 0, opacity:1 }} initial={{x:100, opacity:0}} transition={{duration:1, delay:1}} className='rounded-full border-spacing-72 border-b-8' src={imgProfile} alt="img profile" />

                </div>
                
                </div>
                <div className='w-full lg:w-1/2'>
                <motion.h2 variants={container(0)}
            initial="hidden"
            animate="visible" className='text-2xl lg:text-4xl bg-gradient-to-r from-red-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Frontened|Javascript|React</motion.h2>
                    <div className='flex justify-center lg:justify-start '>
                      
                        <motion.p animate={{ x: 0, opacity:1 }} initial={{x:100, opacity:0}} transition={{duration:1, delay:1}}  className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</motion.p>

                    </div>

            </div>

        </div>
      
    </div>
  )
}

export default About
