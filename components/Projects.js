import React from 'react'
const { motion } = require('framer-motion')
import ProjectCard from './ProjectCard'
import Heading from '../components/Heading';


function Projects({ }) {

  const projects = [
    {'name': 'Container Transport'},
    {'name': 'Container Transport'},
    {'name': 'Container Transport'},
  ]



  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative px-10 mx-auto py-16 space-y-10"
    >
    <Heading title="Projects" />
    


      <div className="w-full absolute top-[30%] bg-[#00ffd5]/10 left-0 h-[300px] -skew-y-12"></div>

      
      <div>
        <h3>CT</h3>
        <p></p>
        <button>read more</button>
      </div>
      
    </motion.div>
  )
}



export default Projects
