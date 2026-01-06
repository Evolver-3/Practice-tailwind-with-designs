import React, { useState } from 'react'

const Glass = () => {
  const navLinks=[{name:"Home",href:"/home"},{name:"Contact",href:"/contact"},{
    name:"Footer", href:"/footer"},{
      name:"Testimonials",href:"/testimonials"
    }]

  const [open,setOpen]=useState(false);
  return (
    <div className='relative'>
    <div className='relative mt-4 max-w-4xl mx-auto p-4 shadow-strong rounded-4xl bg-white flex justify-between'>
      <i className='bx bx-home bx-xs'></i>

      <div className='hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10 ' >
        {navLinks.map((link,index)=>(
          <a href={link.href} key={index} className='hover:text-neutral-800'>{link.name}</a>
        ))}

      </div>

      <button className='md:hidden' onClick={()=>setOpen(!open)}>
      <i className='bx bx-menu'></i>
    </button>
    
     {open && <div className='absolute inset-x-0 bg-white rounded-md shadow-strong top-15 max-w-[95%] mx-auto'>

    <div className='flex flex-col items-center gap-4 text-sm text-neutral-500 md:hidden ' >
        {navLinks.map((link,index)=>(
          <a href={link.href} key={index} className='hover:text-neutral-800'>{link.name}</a>
        ))}

      </div>

    </div>}

    </div>
    </div>
  )
}

export default Glass