import React from 'react'

const Ara = () => {

  const switchTheme=()=>{
    const Theme=document.documentElement.classList.contains("dark")?"light":"dark";

    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme",Theme)
  }

  return (
    <div className='relative grid grid-cols-2 dark:grid-cols-3 justify-center items-center h-screen bg-background'>

      <div className='w-60 h-90 rounded-xl shadow-strong outline-1 outline-neutral-400 bg-white dark:bg-neutral-600 dark:outline-white flex flex-col items-center pt-10 gap-10 '>
        <h3 className='text-lg font-semibold tracking-tighter dark:text-black underline  '>Cards with dark mode</h3>

        <p className='text-center text-sm mx-5 text-neutral-900 dark:text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores officiis temporibus ratione, at facilis nisi veritatis praesentium architecto. Aut, excepturi!</p>


      </div>

       <div className='w-60 h-90 rounded-xl shadow-strong outline-1 outline-neutral-400 bg-white dark:bg-neutral-600 dark:outline-white flex flex-col items-center pt-10 gap-10 '>
        <h3 className='text-lg font-semibold tracking-tighter dark:text-black underline  '>Cards with dark mode</h3>

        <p className='text-center text-sm mx-5 text-neutral-900 dark:text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores officiis temporibus ratione, at facilis nisi veritatis praesentium architecto. Aut, excepturi!</p>


      </div>

       <div className='w-60 h-90 rounded-xl shadow-strong outline-1 outline-neutral-400 bg-white dark:bg-neutral-600 dark:outline-white flex flex-col items-center pt-10 gap-10 '>
        <h3 className='text-lg font-semibold tracking-tighter dark:text-black underline  '>Cards with dark mode</h3>

        <p className='text-center text-sm mx-5 text-neutral-900 dark:text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores officiis temporibus ratione, at facilis nisi veritatis praesentium architecto. Aut, excepturi!</p>


      </div>


      <button className='absolute top-0 bg-neutral-600 px-3 py-2 rounded-md text-white text-sm ' onClick={switchTheme}>Switch theme</button>

    </div>
  )
}

export default Ara