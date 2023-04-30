import React from 'react'
const { motion } = require("framer-motion");

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1,2,2,3,1],
      opacity: [0.1,0.2,0.4,0.8,0.1,1],
      borderRadius: ["20%","20%","50%","80%", "20%"]
    }}
    transition={{
      duration: 2.5,
    }}
    className='relative flex justify-center items-center '>
      <div className=' absolute border border-[#333333] rounded-full h-[150px] w-[150px] animate-ping'></div>
      <div className=' absolute border  border-[#333333] rounded-full h-[250px] w-[250px] '></div>
      <div className=' absolute border  border-[#333333] rounded-full h-[400px] w-[400px] '></div>
      <div className='rounded-full border border-[#00ffd5] opacity-20 h-[550px] w-[550px] absolute  animate-pulse'></div>
      <div className='rounded-full border border-[#333333] h-[750px] w-[750px] absolute '></div>
    </motion.div>
  )
}