import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Hero from './Hero'

const Layout = () => {
  return (
    <div className='h-[100%] relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]'>
  
        <div className='max-w-4xl mx-auto absolute inset-0 h-full w-full'>

          <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-500 to-neutral-400 opacity-[.3]'/>

          <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-500 to-neutral-400 opacity-[.3]'/>
        </div>
        
         <Container>
        <Navbar/>
        <Hero/>
        </Container>

        <div className='relative max-w-8xl pb-20'>
          <div className='h-[1px] w-[100%] bg-gradient-to-b from-neutral-200 to-neutral-200 absolute -top-[10px]  opacity-[.9]'/>

          <img src="/hero.webp" className='w-[900px] h-[500px] mx-auto rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.25)] object-cover object-top-left border-neutral-500 mask-b-from-0% to-100%'></img>
        </div>
        
      
    </div>
  )
}

export default Layout