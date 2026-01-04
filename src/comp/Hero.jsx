import React from 'react'

const Hero = () => {
  return (
    <div className='py-[50px] '>
      <div className='text-[14px] max-w-[300px] rounded-lg bg-neutral-100 px-2 py-1 mx-auto border border-neutral-200 hover:bg-neutral-300 flex items-center justify-center '>
        <span>
        What are form 1999 filing requirements?
        </span>

        <span className='flex text-center'>
          <i className='bx bx-arrow-right text-gray-600'></i> 
        </span>
        
      </div>

      <h1 className='text-[40px] font-bold text-center tracking-[.1rem] leading-tight mt-5'>Magically simplify accounting and taxes</h1>
      
      <p className='text-[20px] text-neutral-700 text-center max-w-[500px] mx-auto my-[10px]'>Automated bookeeping, effortless tax filing, real-time insights. Set up in 10 mins. Back to building by 4:28pm.</p>

      <div className='flex justify-center mt-5 gap-3'>
        <button className='text-[18px] px-3 py-1 bg-blue-600 rounded-lg text-white text-shadow-[0px_.5px_1px_rgba(0,0,0,0.25)] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] cursor-pointer'>Start free trial</button>

        <button className='text-[18px] px-3 py-1 bg-transparent text-black cursor-pointer flex items-center hover:bg-neutral-200 rounded-lg'>
          <span>Pricing</span>
          <i className='bx bx-arrow-right '></i>
          </button>
      </div>
    </div>
  )
}

export default Hero