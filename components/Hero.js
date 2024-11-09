import React from 'react'
import BackgroundCircles from './BackgroundCircles'

function Hero() {
  return (
    <div className="h-[90vh] items-center max-w-7xl  px-10  md:px-20 justify-center flex container mx-auto overflow-hidden ">
      <div className="z-20 flex-2 md:flex-1">
        <h1 className="h1  text-black dark:text-white my-3 font-semibold scroll-px-10">
          Yo, I'm Joao.{' '}
          <div className="h4 text-[#8F9094] base-font">
            <span className=" text-black dark:text-white">Software Engineer.</span><br></br> Self-taught with an interest in Web Development.
          </div>
          
        </h1>
      </div>
      

      <div className="flex-1">
        <BackgroundCircles />
      </div>
    </div>
  )
}

export default Hero
