import Container  from './Container'
import React from 'react'

const Navbar = () => {
  const navItems=[{title:"Founders",href:"/Founders"},
    {title:"Guide",href:"/Guide"},
    {title:"Pricing",href:"/Pricing"},
    {title:"Log In",href:"/log in"}
  ]
  return (
    
      
      <div className='flex justify-between px-10 md:px-50 items-center py-4 text-md bg-white '>
        <div className='flex justify-between '>
          <img src='/finta-icon-light.svg' className='w-5'></img>
          <h2 className='text-[20px] font-semibold ml-1'>Finta</h2>

        </div>
        <div className=' gap-5 items-center hidden md:flex'>
          
          {navItems.map((item)=>(
            <a href={item.href} key={item.title} className='hover:text-neutral-500'>{item.title}</a>
          ))}

          <button className='bg-blue-600 rounded-md px-2 py-1 text-white hover:bg-blue-800'>Get started</button>

          
        </div>

        <button className='md:hidden'>
          <i className='bx bx-menu'></i>
        </button>
        
      </div>

 
    
  )
}

export default Navbar