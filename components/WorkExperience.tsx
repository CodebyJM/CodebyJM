import React from 'react'
import ExperienceCard from './ExperienceCard'
import Heading from './Heading'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className="relative overflow-hidden  text-left flex-col md:flex-row max-w-screen-2xl px-10 py-20 justify-evenly mx-auto items-center">
      <Heading title="Work Experience" />
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3> */}
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 dark:scrollbar-thumb-[#00ffd5]/80  scrollbar-thumb-[#0077b6]/80'>
        <ExperienceCard />
      </div>
    </div>
  )
}