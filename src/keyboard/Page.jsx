import React from 'react'

const Page = () => {



  return (
    <div className='container max-w-5xl h-70 bg-white rounded-md'>

      <div className='flex flex-col my-5 mx-4 gap-2'>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'> 
      
        <button className='shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>esc</button>

        <button  className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f1</span>
          <i className='bxr bx-volume-mute '></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f2</span>
          <i class='bxr bx-volume'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f3</span>
          <i class='bxr bx-volume-full'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f4</span>
          <i class='bxr bx-brightness-half'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f5</span>
          <i class='bxr bx-brightness'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f6</span>
          <i class='bxr bx-lock'></i> </button>

        <button className='relative shadow-strong rounded-lg px-4 py-3 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f7</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f8</span><i class='bxr  bx-laptop'></i>
          </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f9</span>
          <i class='bxr  bx-windows'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f10</span>
          <i class='bxr  bx-camera-slash'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f11</span>
          <i class='bxr  bx-screenshot'></i> </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span className='absolute text-first left-1 bottom-0'>f12</span>
          <i class='bxr  bx-italic'></i> </button>

        <button className='shadow-strong rounded-lg px-2 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>prt sc</button>

        <button className='relative shadow-strong rounded-lg px-2 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>delete
          <span className='absolute text-first left-1 bottom-0'>insert</span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-2.5 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>`</span>
          <span className='absolute text-first left-1 top-0'>~</span>
        </button>
          
        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>1</span>
          <span className='absolute text-first left-1 top-0'>!</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>2</span>
          <span className='absolute text-first left-1 top-0'>@</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>3</span>
          <span className='absolute text-first left-1 top-0'>#</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>4</span>
          <span className='absolute text-first left-1 top-0'>$</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>5</span>
          <span className='absolute text-first left-1 top-0'>%</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>6</span>
          <span className='absolute text-first left-1 top-0'>^</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>7</span>
          <span className='absolute text-first left-1 top-0'>&</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>8</span>
          <span className='absolute text-first left-1 top-0'>*</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>9</span>
          <span className='absolute text-first left-1 top-0'>{'('}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>0</span>
          <span className='absolute text-first left-1 top-0'>{')'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>-</span>
          <span className='absolute text-first left-1 top-0'>_</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>=</span>
          <span className='absolute text-first left-1 top-0'>+</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>backspace</span>
          <span className='absolute text-first left-5 -bottom-1'>
            <i className='bxr bx-arrow-left bx-xs'></i> 
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-3.5 py-2.5  hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span >tab</span>
          <span className='absolute text-first bottom-0 left-4'>
            <i class='bx  bx-arrow-left-right '></i> 
          </span>
        </button>
          
        <button className='shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>Q</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>W</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>E</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>R</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>T</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>Y</span>
         
        </button>

        <button className='shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>U</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>I</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>O</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>P</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{'['}</span>
          <span className='absolute text-first left-1 top-0'>{'{'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{']'}</span>
          <span className='absolute text-first left-1 top-0'>{'}'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-5.5 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>\</span>
          <span className='absolute text-first left-1 top-0'>
            |
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-2.5 py-2.5  hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span >caps lock</span>
          <span className='absolute text-first right-1'>
            .
          </span>
        </button>
          
        <button className='shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>A</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>S</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>D</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>F</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>G</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>H</span>
         
        </button>

        <button className='shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>J</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>K</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>L</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{';'}</span>
          <span className='absolute text-first left-1 top-0'>{':'}</span>
        </button>


        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{"'"}</span>
          <span className='absolute text-first left-1 top-0'>{'"'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-8 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>enter</span>
          <span className='absolute text-first right-1'>
            |
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-10 py-4.5  hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span  className='absolute left-1 top-2.5'>shift</span>
          <span className='absolute text-first left-6 top-3.5'>
            <i className='bx  bx-arrow-big-up text-first'></i> 
          </span>
        </button>
          
        <button className='shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>Z</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>X</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>C</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>V</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>B</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>N</span>
         
        </button>

        <button className='shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>M</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{','}</span>
          <span className='absolute text-first left-1 top-0'>{'<'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{'.'}</span>
          <span className='absolute text-first left-1 top-0'>{'>'}</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>{'/'}</span>
          <span className='absolute text-first left-1 top-0'>{'?'}</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-14 py-4.5 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer  hover:shadow-glow'>
          <span className='absolute right-3 top-2.5'>shift</span>
          <span className='absolute text-first right-1 top-3.5'>

            <i class='bx bx-arrow-big-up'></i> 
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-4.5 py-5  hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span  className='absolute left-1 top-2.5'>ctrl</span>
          
        </button>
          
        <button className='relative shadow-strong rounded-lg px-4 py-3 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>fn</span>
          <span className='absolute text-first top-0 left-2.5'>fn+esc</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-3 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>X</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-3 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>alt</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-30 py-5.25 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
         
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-3.75 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>alt</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-3.75 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>ctrl</span>
         <span className='absolute'></span>
        </button>


        <div className='flex items-end gap-3'>

           <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>home</span>
         <span className='absolute'></span>
        </button>
        
        <div className='flex flex-col '>
           <button className='relative shadow-strong rounded-lg px-3 py-1  hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>ctrl</span>
         <span className='absolute'></span>
        </button> 
        <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>ctrl</span>
         <span className='absolute'></span>
        </button>
        </div>

         <button className='relative shadow-strong rounded-lg px-3 py-1 hover:bg-neutral-600 hover:text-white hover:transition-all cursor-pointer hover:shadow-glow'>
          <span>ctrl</span>
         <span className='absolute'></span>
        </button>

        </div>


      </div>

      


    </div>
    
    </div>
  )
}

export default Page