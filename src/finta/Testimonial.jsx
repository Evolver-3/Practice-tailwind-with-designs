import Container from './Container'
import React from 'react'

const Testimonial = () => {

  const testDatas=[
    {
      "id": 1,
      "quote": "I’ve become a huge fan of Finta. The platform is super easy to use, intuitive, and requires zero effort. Customer support is second to none.",
      "name": "Avi Hercenberg",
      "role": "Founder",
      "company": "Sessionary",
      "rating": 5
    },
    {
      "id": 2,
      "quote": "Really easy onboarding and great team to work with!",
      "name": "Alex Fuster",
      "role": "Founder",
      "company": "Astro",
      "rating": 5
    },
    {
      "id": 3,
      "quote": "Really easy to use and get started. Helpful to keep on top of burn and accounting related issues.",
      "name": "Abhishey Ray",
      "role": "Founder",
      "company": "Octopipe",
      "rating": 5
    },
    {
      "id": 4,
      "quote": "Incredible onboarding and support by Andy! We love working with Finta.",
      "name": "Aidan Lee",
      "role": "Founder",
      "company": "Aftercare",
      "rating": 5
    },
    {
      "id": 5,
      "quote": "Finta is incredible — it took less than 10 minutes to do our bookkeeping for the entire year.",
      "name": "Bryant Lee",
      "role": "Founder",
      "company": "Vaero",
      "rating": 5
    },
    {
      "id": 6,
      "quote": "Super easy onboarding process, and takes away the pain of having to file business taxes.",
      "name": "Tejas Hosangadi",
      "role": "Founder",
      "company": "Preloop",
      "rating": 5
    },
        {
      "id": 7,
      "quote": "I’ve become a huge fan of Finta. The platform is super easy to use, intuitive, and requires zero effort. Customer support is second to none.",
      "name": "Avi Hercenberg",
      "role": "Founder",
      "company": "Sessionary",
      "rating": 5
    },
    {
      "id": 8,
      "quote": "Really easy onboarding and great team to work with!",
      "name": "Alex Fuster",
      "role": "Founder",
      "company": "Astro",
      "rating": 5
    },
    {
      "id": 9,
      "quote": "Really easy to use and get started. Helpful to keep on top of burn and accounting related issues.",
      "name": "Abhishey Ray",
      "role": "Founder",
      "company": "Octopipe",
      "rating": 5
    },
    {
      "id": 10,
      "quote": "Incredible onboarding and support by Andy! We love working with Finta.",
      "name": "Aidan Lee",
      "role": "Founder",
      "company": "Aftercare",
      "rating": 5
    },
    {
      "id": 11,
      "quote": "Finta is incredible — it took less than 10 minutes to do our bookkeeping for the entire year.",
      "name": "Bryant Lee",
      "role": "Founder",
      "company": "Vaero",
      "rating": 5
    },
    {
      "id": 12,
      "quote": "Super easy onboarding process, and takes away the pain of having to file business taxes.",
      "name": "Tejas Hosangadi",
      "role": "Founder",
      "company": "Preloop",
      "rating": 5
    }
  ]




  return (
     <Container>
      <div className=' flex flex-col gap-10 items-center justify-center text-center bg-white py-10'>

        <h2 className='text-[35px] font-semibold '>Built for <span className='text-blue-500'>ambitious founders</span></h2>

        <p className='text-sm max-w-md'>Finta is for founders and operators. It's powerful accounting software with simplified expert tax services we wish we'd had ourselves.</p>

        <div className=' flex items-center gap-2 rounded-xl bg-neutral-300 px-4 py-0 text-sm'>

          <i className='bx bx-star text-indigo-800 '></i>

          <span className='font-bold'>4.8</span>
          <span> from 1,000+ founders</span>
        </div>

        <div className='mask-t-from-95% mask-b-from-95%  overflow-hidden relative'>
        <div className='grid grid-cols-3 gap-2 mx-2  animate-downside'>
          {[...testDatas,...testDatas].map((test,index)=>(
            <div key={index} className='shadow-strong rounded-xl py-4 px-3 flex flex-col flex-nowrap text-left gap-4 '>
              <p className='text-sm'>{test.quote}</p>

              <h2>{test.name}</h2>
              <h3>{test.role}</h3>
            </div>
          ))}
        </div>
        </div>

        

      </div>
     </Container>
  )
}

export default Testimonial