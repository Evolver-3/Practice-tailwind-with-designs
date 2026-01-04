import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[600px] h-[100vh] mx-auto relative'>
      {children}
    </div>
  )
}

export default Container