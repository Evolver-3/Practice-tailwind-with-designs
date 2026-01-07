import React, { useEffect, useState } from 'react'

const Ok = () => {
 

  const setTheme=()=>{
    const changeTheme=document.documentElement.classList.contains("dark")?"light":"dark"

    document.documentElement.classList.toggle("dark")

    localStorage.setItem("theme",changeTheme)

  }



  return (
    <div>

      <button onClick={setTheme} className='px-3 py-2 rounded-md bg-gray-800'>
        hola
      </button>
    </div>
  )
}

export default Ok