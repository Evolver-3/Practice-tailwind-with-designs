import React from 'react'

const Dark = () => {

  const icons=[
    {
      title:"Google",
      size:"size-10",
      circle:"circle-5",
      icon:'🐐' 
    },
     {
      title:"Amazon",
      size:"size-16",
      circle:"circle-5",
      icon:'🐐' 
    },
     {
      title:"Mercedes",
      size:"size-12",
      circle:"circle-5",
      icon:'🐐' 
    },
     {
      title:"SpaceX",
      size:"size-10",
      circle:"circle-5",
      icon:'🐐' 
    },
    
  ]

   const onHandleChange=()=>{
      const currentTheme=document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme",currentTheme
      )
    };

  return (

   
    <div className='relative h-full w-full flex items-center justify-center-safe'>
    
      <div className='relative z-10 w-60 h-80 bg-white rounded-xl shadow-soft overflow-hidden dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-800'>

        <div className='relative'>
          <Pattern/>
        

        <div className='flex items-center gap-1 justify-center h-40 mask-r-from-50% mask-l-from-50% animate-marquee '>
          
          {icons.map((item,index)=>(
            <div key={item.title} className='{ rounded-full bg-neutral-500 flex items-center justify-center size-10'>{item.icon}</div>
          ))}
        </div>
        <div className='p-4 flex items-center flex-col justify-center mx-auto'>
        <h2 className='font-bold text-neutral-600  mb-2 text-first'>Lorem ipsum dolor sit amet, consectetur adipisici</h2>
        <p className='text-neutral-400 text-first'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum veritatis laudantium similique in provident cumque</p>

      


        </div>

       
        </div>
          <button className=' px-4 py-2 rounded-lg bg-neutral-400 text-black text-[10px] mt-4' onClick={onHandleChange}>Switch Me</button>
      </div>
       
    </div>
  )
}

export default Dark

const Pattern =()=>{
  return(

    <div className='absolute inset-0 z-0 rounded-lg m-auto bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed'
      style={{ '--pattern-fg':'rgba(255,255,255,0.08)'}}>

      </div>

  )
}