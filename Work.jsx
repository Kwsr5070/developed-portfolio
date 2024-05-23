import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import img from '../assets/project-1.jpg';
import img1 from "../assets/projects/project-1.jpg";
import img2 from '../assets/project-3.jpg';
import img3 from '../assets/project-4.jpg';

const Work = () => {
  return (
    <div>
      <h2 className='text-6xl text-center px-4 py-4'>Projects</h2>
      <div className="carousel w-full">
        <motion.div 
          id="slide1" 
          className="carousel-item relative w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
        >
          <motion.div 
            className="shadow-lg group container rounded-md overflow-hidden flex justify-center items-center mx-auto content-div"
            whileHover={{ scale: 1.1 }} 
          >
            <img src={img} className="object-cover w-1/2 h-1/2" alt="Project 1" />
            <motion.div 
              className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center"
              whileHover={{ opacity: 1 }} 
            >
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <div className="flex space-x-4">
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Demo</a>
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Source</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </motion.div> 
        <motion.div 
          id="slide2" 
          className="carousel-item relative w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
        >
          <motion.div 
            className="shadow-lg group container rounded-md overflow-hidden flex justify-center items-center mx-auto content-div"
            whileHover={{ scale: 1.1 }} 
          >
            <img src={img1} className="object-cover w-1/2 h-1/2" alt="Project 1" />
            <motion.div 
              className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center"
              whileHover={{ opacity: 1 }} 
            >
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <div className="flex space-x-4">
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Demo</a>
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Source</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </motion.div> 
        <motion.div 
          id="slide3" 
          className="carousel-item relative w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
        >
          <motion.div 
            className="shadow-lg group container rounded-md overflow-hidden flex justify-center items-center mx-auto content-div"
            whileHover={{ scale: 1.1 }} 
          >
            <img src={img2} className="object-cover w-1/2 h-1/2" alt="Project 1" />
            <motion.div 
              className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center"
              whileHover={{ opacity: 1 }} 
            >
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <div className="flex space-x-4">
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Demo</a>
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Source</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </motion.div> 
        <motion.div 
          id="slide4" 
          className="carousel-item relative w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
        >
          <motion.div 
            className="shadow-lg group container rounded-md overflow-hidden flex justify-center items-center mx-auto content-div"
            whileHover={{ scale: 1.1 }} 
          >
            <img src={img3} className="object-cover w-1/2 h-1/2" alt="Project 1" />
            <motion.div 
              className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center"
              whileHover={{ opacity: 1 }} 
            >
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <div className="flex space-x-4">
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Demo</a>
                  <a href="/" className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">Source</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </motion.div> 
        
      </div>
    </div>
  );
}

export default Work;
