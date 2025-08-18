import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] w-[400px] bg-white mx-auto rounded-2xl mt-12'>
        <div className='flex justify-center '>
            <div className='flex flex-row justify-center text-2xl text-black font-thin list-none gap-6 mt-4 ml-4 cursor-pointer'>
                <li>Home</li>
                <li>Projects</li>
                <li>Education</li>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
