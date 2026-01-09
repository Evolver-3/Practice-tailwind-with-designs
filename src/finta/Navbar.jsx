import Container  from './Container'
import React, { useState } from 'react'

const Navbar = () => {
  const navItems=[{title:"Founders",href:"/Founders"},
    {title:"Guide",href:"/Guide"},
    {title:"Pricing",href:"/Pricing"},
    {title:"Log In",href:"/log in"}
  ]

  const [open,setOpen]=useState(false)
  return (<>
    
      <div className='fixed w-full bg-neutral-100 opacity-80 z-20'>
      <div className='flex justify-around  items-center py-4 text-md relative'>
        <div className='flex justify-between '>
          <img src='/finta-icon-light.svg' className='w-5'></img>
          <h2 className='text-[20px] font-semibold ml-1'>Finta</h2>

        </div>
        <div className=' gap-5 items-center hidden md:flex'>
          
          {navItems.map((item)=>(
            <a href={item.href} key={item.title} className='hover:text-neutral-500'>{item.title}</a>
          ))}

          <button className='bg-blue-600 rounded-md px-2 py-1 text-white hover:bg-blue-800 cursor-pointer'>Get started</button>

          
        </div>

        <button className='md:hidden cursor-pointer' onClick={()=>setOpen(!open)}>
          <i className='bx bx-menu'></i>
        </button>
        
      </div>
      {open && (
        <div className='fixed flex flex-col justify-between px-10 md:px-50 items-center py-4  text-md bg-white md:hidden rounded-md mx-3 w-[95%] top-2 shadow-strong'>

        <div className='flex justify-between gap-3 '>
          <img src='/finta-icon-light.svg' className='w-5'></img>
          <h2 className='text-[20px] font-semibold ml-1'>Finta</h2>

        </div>
        <div className=' gap-3 items-center flex flex-col py-4'>
          
          {navItems.map((item)=>(
            <a href={item.href} key={item.title} className='hover:text-neutral-500'>{item.title}</a>
          ))}

          <button className=' bg-blue-600 rounded-md px-2 py-1 text-white hover:bg-blue-800 cursor-pointer'>Get started</button>

          
        </div>

        <button className='md:hidden absolute top-3 right-2 cursor-pointer' onClick={()=>setOpen(false)} >
          <i className='bx bx-x bx-sm text-neutral-600 hover:text-neutral-400'></i>
        </button>
        
      </div>
        

      )}
      </div>
      </>
 
    
  )
}

export default Navbar