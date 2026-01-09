import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto max-w-3xl h-[100%]'>
      {children}
    </div>
  )
}

export default Container