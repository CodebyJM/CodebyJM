import React from 'react'
const { motion } = require('framer-motion')
import ProjectCard from './ProjectCard'
import Heading from '../components/Heading';

function Projects({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[800px]	 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h1 className="absolute top-24 uppercase tracking-[2px] text-white text-6xl underline decoration-[#00ffd5]">Projects</h1>
      <p className='tracking-[2px] text-white text-2xl'>Coming Soon....</p>
      {/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {projects.map((project, i) => {
          return (
                  <ProjectCard key={project.uri} post={project}></ProjectCard>
          )
        })}
        </div> */}
        


      <div className="w-full absolute top-[30%] bg-[#00ffd5]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  )
}



export default Projects
