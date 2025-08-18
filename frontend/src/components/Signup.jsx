import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[100px]'>
      <form>
        <label className='font-bold text-2xl' >Email: </label>
        <input className='bg-white w-[300px] h-[80px] rounded-lg'  id='email' name='email' type="text" placeholder='ElonMusk@gmail.com'/>
      </form>
    </div>
  )
}

export default Signup
