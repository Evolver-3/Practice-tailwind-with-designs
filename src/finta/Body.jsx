import Container from './Container'
import React from 'react'

const Body = () => {

  const scrollItems=[{id:1,title:"Resend"},
    {id:2,title:"Magic Patterns"},{id:3,title:"outline"},{id:4,title:"rye"},{id:5,title:"relay.app"},{id:6,title:"unthread"},
    {id:7,title:"instant"},{id:8,title:"Circleback"},

  ]

  return (
    <Container>
    <div className='flex flex-col items-center mx-auto justify-center gap-5 '>

      <div className='flex items-center rounded-xl mt-20 mb-10 bg-neutral-300 hover:text-neutral-300 px-4 py-0 text-sm cursor-pointer hover:bg-neutral-400 dark:text-black'>
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
        <img src='/hero.webp' className='object-cover rounded-md mask-b-from-50% to-100% mx-auto'></img>
      </div>

      <h2 className='text-sm mt-5'>Trusted by fast-growing startups</h2>



      <div className='mask-r-from-80% mask-l-from-90%  overflow-hidden'>
      <div className='flex gap-10 text-[30px] font-semibold to-0% animate-slide max-w-xl'>
        {scrollItems.map((scroll)=>(
          <h2 key={scroll.index} className=' hover:text-neutral-600 leading-tight'>{scroll.title}</h2>
        ))}
      </div>
      </div>
      
    </div>
    </Container>
  )
}

export default Body