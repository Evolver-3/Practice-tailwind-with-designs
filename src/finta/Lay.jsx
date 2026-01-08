import Container from './Container'
import React from 'react'
import Navbar from './Navbar'
import Body from './Body'

const Lay = () => {

  const changeClickTheme=()=>{
    const currentTheme=document.documentElement.classList.contains("dark")?"light":"dark";

    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme",currentTheme)
  }
  return (

    <div className='relative'>
      <Container>
        <Navbar/>
        <Body/>
      </Container>

      <button className='absolute bg-neutral-800 px-2 py-1 rounded-md top-0' onClick={changeClickTheme}>Change Theme</button>
    </div>
  )
}

export default Lay