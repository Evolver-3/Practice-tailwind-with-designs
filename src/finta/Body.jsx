import React from 'react'

const Body = () => {
  return (
    <div className='flex flex-col items-center mx-auto justify-center gap-10'>

      <div className='flex items-center rounded-xl my-15 bg-neutral-400 hover:text-neutral-300 px-4 py-0 text-sm cursor-pointer hover:bg-neutral-500 dark:hover:text-neutral-700'>
        We're hiring Founding Ruby Engineers 
        <i className='bx bx-arrow-right'></i>
      </div>

      <div className='text-center flex items-center flex-col justify-center gap-5'>

        <h1 className='text-[44px] leading-tight font-bold max-w-md '>Magically simplify accounting and taxes</h1>

        <p className='text-sm text-center max-w-sm'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 12:06am.</p>

      </div>

      <div className='flex '>
        <button className='bg-blue-600 rounded-md px-2 py-1 text-white hover:bg-blue-800 cursor-pointer'>Get started</button>
        <button></button>
      </div>
      
    </div>
  )
}

export default Body