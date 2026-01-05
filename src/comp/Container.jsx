import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-3xl mx-auto ox-4 md:py-8 relative '>
      {children}
    </div>
  )
}

export default Container