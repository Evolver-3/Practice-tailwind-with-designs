import React from 'react'

const Navbar = () => {

  const links=[{title:'Guide',href:"#"},{title:'Pricing',href:"#"},{title:'Login',href:"#"}]

  return (
    <div className='flex justify-between items-center py-3 px-0 '>

      <div className='text-[18px]'>Fintech</div>
      <div className='flex gap-5 items-center'>
        {links.map((link,index)=>(
          <a href={link.href} className='text-[18px] text-neutral-600 hover:text-black hover:transition-all' key={link} >{link.title}</a>
        ))}

        <button className='text-[18px] px-3 py-1 bg-blue-600 rounded-lg text-white text-shadow-[0px_.5px_1px_rgba(0,0,0,0.25)] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] cursor-pointer'>Start free trial</button>

        <i className='bxr bx-menu md:block'></i> 
      </div>
    </div>
  )
}

export default Navbar