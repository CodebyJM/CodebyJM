import React from 'react';
import Heading from '../components/Heading';
const { motion } = require("framer-motion");
import Link from 'next/link'

type Props = {}

export default function About({}: Props) {
  const skills = [
    'React',
    'Javascript ES6+',
    'PHP',
    'MySQL',
    'CSS',
    'HTML',
    'SCSS',
    'SASS',
    'GitHub',
    'Markup',
    'UI / UX',
    'Google Analytics',
    'Google Tag Manager',
    'Tailwinds',
    'Bootstrap',
    'Wordpress',
    'Figma',
    'SEO',
  ]

  const renderHighlight = () => {
    return skills.map((skill) => (
        <span className="text-[#00ffd5] bg-[rgb(36,36,36)] text-base font-medium mr-2 inline-block px-4 py-2 mt-8 rounded">{skill}</span>
    ))
  }
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-top py-16 max-w-7xl' >
    <motion.div
    
     initial={{ opacity: 0}}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5}}
     className='flex-1 max-w-7xl'>
      <motion.img
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{      
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
      src="https://joaom16.sg-host.com/wp-content/uploads/2023/02/IMG_2893.jpg"
      className="mb-20 md:mb-0 flex-shrink-0 w-56 h-26  m-auto rounded-full object-cover md:rounded-lg  md:w-[500px] md:h-[600px]"
      />

    </motion.div>
    <div className='space-y-10 px-10 md:px-10 flex-1 '>
        <h1 className="uppercase tracking-[2px] text-white text-6xl">
          <div className="underline decoration-[#00ffd5]">About</div>
        </h1>
      <p className=' content m-auto md:ml-0 text-white max-w-md leading-[3rem]'>
      During my journey, I have had the privilege of collaborating with incredible engineers, designers, business analysts, and product owners. I understand the significance of reusability and scalability in enterprise-level applications, and I place great emphasis on delivering an exceptional user experience. In my free time, I enjoy practicing Brazilian Jiu-Jitsu, gaming, and hanging out with my wife.</p>
          <div className='content m-auto md:ml-0 text-white max-w-md'><span className="font-bold">TL;DR </span> I love my family, coding, coffee, fitness, and tech.</div>
      <h4 className='text-white pt-5 text-2xl'>My Skills</h4>
      {renderHighlight()}
      
    </div>
    </div>
    
  )
}