import React from 'react';
import Heading from '../components/Heading';
const { motion } = require("framer-motion");
import Link from 'next/link'

type Props = {}

export default function About({}: Props) {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'PHP',
    'Wordpress',
    'Gutenberg',
    'React',
    'Rest API',
    'Graph QL',
    'MySQL',
    'Mongo DB',
    'SCSS / SASS',
    'Git / GitHub',
    'UI / UX',
    'Tailwinds',
    'SEO',
    'GA4 & Tag Manager',
  ]

  const renderHighlight = () => {
    return skills.map((skill) => (
        <span className="dark:text-[#00ffd5] text-[#0077b6] 
        bg-[rgb(36,36,36)] dark:bg-[rgb(36,36,36)] bg-gray-200 
        text-base font-medium mr-2 inline-block px-4 py-2 mt-8 rounded transition-colors duration-300"
      >{skill}</span>
    ))
  }
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-top py-16 max-w-7xl'>
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
      src="https://media.licdn.com/dms/image/v2/D4E03AQFAgn3bIg72eQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698342651877?e=1736380800&v=beta&t=FX8_ch1tYmjw0FcX5HoL5x3SSPEsXAFjzm8n6xy01A0"
      className="mb-20 md:mb-0 flex-shrink-0 w-56 h-26  m-auto rounded-full object-cover md:rounded-lg  md:w-[500px] md:h-[600px]"
      />

    </motion.div>
    <div className='space-y-10 md:px-10 flex-1 '>
        <h1 className="uppercase tracking-[2px]text-black dark:text-white text-6xl">
          <div className="underline dark:decoration-[#00ffd5] decoration-[#0077b6]">About</div>
        </h1>
      <p className=' content m-auto md:ml-0 text-black dark:text-white max-w-md leading-[3rem]'>Throughout my career, I’ve had the privilege of collaborating with engineers, designers, business analysts, and product owners, each contributing unique insights that have enriched my approach to building impactful solutions. My expertise lies in creating and managing websites for service-based businesses, designed to generate high volumes of organic traffic while driving lead generation. I specialize in serving as a digital partner crafting marketing-driven solutions that are optimized for SEO and strategically designed to drive measurable results.

Beyond work, I’m passionate about Brazilian Jiu-Jitsu and treasure quality time with my wife & family.</p>
          
      <h4 className='text-black dark:text-white pt-5 text-2xl'>My Skills</h4>
      {renderHighlight()}
      
    </div>
    </div>
    
  )
}