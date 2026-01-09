import React from 'react'

const Body = () => {
  return (
    <div className='flex flex-col items-center mx-auto justify-center gap-5'>

      <div className='flex items-center rounded-xl mt-15 mb-10 bg-neutral-300 hover:text-neutral-300 px-4 py-0 text-sm cursor-pointer hover:bg-neutral-400 dark:text-black'>
        We're hiring Founding Ruby Engineers 
        <i className='bx bx-arrow-right'></i>
      </div>

      <div className='text-center flex items-center flex-col justify-center gap-5'>

        <h1 className='text-[50px] leading-tight font-bold max-w-md '>Magically simplify accounting and taxes</h1>

        <p className='text-lg text-center max-w-md'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 12:06am.</p>

      </div>

      <div className='flex items-center gap-5'>

        <button className='bg-blue-600 rounded-md px-2 py-1 text-white hover:bg-blue-800 cursor-pointer'>Get started</button>

        <button className='rounded-md px-2 py-1 hover:bg-neutral-300 flex items-center'>Pricing<i className='bx bx-arrow-right'></i></button>
      </div>

      <h3 className='text-[15px] text-neutral-400'>For US-based startups.</h3>

      <div>
        <img src='/hero.webp' className='rounded-md'></img>
      </div>
      
    </div>
  )
}

export default Body