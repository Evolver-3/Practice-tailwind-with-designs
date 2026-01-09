import Container from './Container'
import React from 'react'

const Testimonial = () => {
  return (
     <Container>
      <div className=' flex flex-col gap-10 items-center justify-center text-center bg-white py-10'>

        <h2 className='text-[35px] font-semibold '>Built for <span className='text-blue-500'>ambitious founders</span></h2>

        <p className='text-sm max-w-md'>Finta is for founders and operators. It's powerful accounting software with simplified expert tax services we wish we'd had ourselves.</p>

        <div className='relative flex items-center gap-2 rounded-xl bg-neutral-300 px-4 py-0 text-sm'>

          <i className='bx bx-star text-indigo-800 '></i>

          <span>4.8</span>
          <span> from 1,000+ founders</span>
        </div>
        

      </div>
     </Container>
  )
}

export default Testimonial