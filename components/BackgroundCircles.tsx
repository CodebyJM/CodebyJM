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
   <div className="absolute border border-dark-mode-light rounded-full h-[150px] w-[150px] animate-ping dark:border-[#333333]"></div>
<div className="absolute border border-dark-mode-light rounded-full h-[250px] w-[250px] dark:border-[#333333]"></div>
<div className="absolute border border-dark-mode-light rounded-full h-[400px] w-[400px] dark:border-[#333333]"></div>
<div className="rounded-full border border-[#0077b6] opacity-20 h-[550px] w-[550px] absolute animate-pulse dark:border-[#00ffd5]"></div>
<div className="rounded-full border border-dark-mode-light h-[750px] w-[750px] absolute dark:border-[#333333]"></div>

    </motion.div>
  )
}