import React from 'react'
import Box from './Box';

const Ara = () => {

  const switchTheme=()=>{
    const Theme=document.documentElement.classList.contains("dark")?"light":"dark";

    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme",Theme)
  }

  return (
    <div className=' max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-screen gap-2 py-2 px-2 [background-color:orange]'>

      <Box className="" heading={"Helelelddddjodjjdj"} text={"djdoodod"} showSpan={true} spanText={"djdjjd"}/>

      <Box className="" heading={"Helelelddddjodjjdj"} text={"djdoodod"} showSpan={true} spanText={"djdjjd"} spanColor='indigo' />

      <Box className="lg:col-span-2" heading={"Helelelddddjodjjdj"} text={"djdoodod"} showSpan={true} spanText={"djdjjd"} spanColor=""/>

    

   


      <button className='absolute top-0 right-10 bg-neutral-600 px-3 py-2 rounded-md text-white text-sm ' onClick={switchTheme}>Switch theme</button>

    </div>
  )
}

export default Ara