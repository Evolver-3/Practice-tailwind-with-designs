import React from 'react'

const Hero = () => {
  return (
    <div className='my-40 w-full flex flex-col items-center '>
      <h1 className='text-5xl tracking-tight font-semibold max-w-xl text-center leading-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-600'>Unleash the power of intuitive finance</h1>

      <p className='mx-auto mt-10 max-w-sm text-center text-sm text-neutral-300 selection:bg-neutral-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ratione<span className='text-secondary'> non animi rerum sapiente culpa tempora maiores</span> tempore deserunt commodi.</p>

      <div className='flex justify-center mt-8 w-full max-w-sm'>

        <input type='text' className='border border-neutral-500 flex-1 px-4 rounded-xl mr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200' 
        placeholder="Enter Your Email"/>
        
        <button className='relative px-4 py-2 rounded-xl cursor-pointer border border-neutral-700 text-white'>

          <div className='absolute -bottom-px inset-x-0 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent'></div>
          
          Join Waitlist</button>
      </div>
    </div>
  )
}

export default Hero