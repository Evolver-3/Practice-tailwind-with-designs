import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Hero from './Hero'

const Layout = () => {
  return (
    <div className=''>
      <Container>

        <div className='max-w-[600px] absolute mx-auto inset-0 h-[100%]'>
          <div className='h-[100%] w-[1px] bg-gradient-to-b from-neutral-200 to-neutral-200 absolute -left-[10px] opacity-[.9]'/>

          <div className='h-[100%] w-[1px] bg-gradient-to-b from-neutral-200 to-neutral-200 absolute -right-[10px] opacity-[.9]'/>
        </div>
        

        <Navbar/>
        <Hero/>

        <div className='relative w-[100%] pb-20'>
          <div className='h-[1px] w-[100vw] bg-gradient-to-b from-neutral-200 to-neutral-200 absolute -top-[10px] -left-70 opacity-[.9]'/>

          <img src="/hero.webp" className='mx-auto rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.25)] object-cover object-top-left'></img>
        </div>
        
      </Container>
    </div>
  )
}

export default Layout