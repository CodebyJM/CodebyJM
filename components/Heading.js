import React from 'react'

function Heading({ title }) {
  return (
    <div className="text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      
        <h1 className="uppercase tracking-[2px] text-black dark:text-white text-6xl ">
          <div className="underline dark:decoration-[#00ffd5] decoration-[#0077b6]">{title}</div>
        </h1>
   
    </div>
  )
}

export default Heading
