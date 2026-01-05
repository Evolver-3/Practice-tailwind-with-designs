import React from 'react'

const Page = () => {



  return (
    <div className='container max-w-5xl h-70 bg-white rounded-md'>

      <div className='flex flex-col my-5 mx-4 gap-2'>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>
      
        <button className='shadow-strong rounded-lg px-3 py-1'>esc</button>

        <button  className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f1</span>
          <i className='bxr bx-volume-mute '></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f2</span>
          <i class='bxr bx-volume'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f3</span>
          <i class='bxr bx-volume-full'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f4</span>
          <i class='bxr bx-brightness-half'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f5</span>
          <i class='bxr bx-brightness'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f6</span>
          <i class='bxr bx-lock'></i> </button>

        <button className='relative shadow-strong rounded-lg px-4 py-3'>
          <span className='absolute text-first left-1 bottom-0'>f7</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f8</span><i class='bxr  bx-laptop'></i>
          </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f9</span>
          <i class='bxr  bx-windows'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f10</span>
          <i class='bxr  bx-camera-slash'></i>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f11</span>
          <i class='bxr  bx-screenshot'></i> </button>

        <button className='relative shadow-strong rounded-lg px-3 py-1'>
          <span className='absolute text-first left-1 bottom-0'>f12</span>
          <i class='bxr  bx-italic'></i> </button>

        <button className='shadow-strong rounded-lg px-2 py-1'>prt sc</button>

        <button className='relative shadow-strong rounded-lg px-2 py-1'>delete
          <span className='absolute text-first left-1 bottom-0'>insert</span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-2.5 py-2.5'>
          <span>`</span>
          <span className='absolute text-first left-1 top-0'>~</span>
        </button>
          
        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>1</span>
          <span className='absolute text-first left-1 top-0'>!</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>2</span>
          <span className='absolute text-first left-1 top-0'>@</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>3</span>
          <span className='absolute text-first left-1 top-0'>#</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>4</span>
          <span className='absolute text-first left-1 top-0'>$</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>5</span>
          <span className='absolute text-first left-1 top-0'>%</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>6</span>
          <span className='absolute text-first left-1 top-0'>^</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>7</span>
          <span className='absolute text-first left-1 top-0'>&</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>8</span>
          <span className='absolute text-first left-1 top-0'>*</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>9</span>
          <span className='absolute text-first left-1 top-0'>{'('}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>0</span>
          <span className='absolute text-first left-1 top-0'>{')'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>-</span>
          <span className='absolute text-first left-1 top-0'>_</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>=</span>
          <span className='absolute text-first left-1 top-0'>+</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-3 py-2.5'>
          <span>backspace</span>
          <span className='absolute text-first left-5 -bottom-1'>
            <i className='bxr bx-arrow-left bx-xs'></i> 
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-3.5 py-2.5 '>
          <span >tab</span>
          <span className='absolute text-first bottom-0 left-4'>
            <i class='bx  bx-arrow-left-right '></i> 
          </span>
        </button>
          
        <button className='shadow-strong rounded-lg px-4 py-2.5'>
          <span>Q</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>W</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>E</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>R</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>T</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>Y</span>
         
        </button>

        <button className='shadow-strong rounded-lg px-4 py-2.5'>
          <span>U</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>I</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>O</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>P</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{'['}</span>
          <span className='absolute text-first left-1 top-0'>{'{'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{']'}</span>
          <span className='absolute text-first left-1 top-0'>{'}'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-5.5 py-2.5'>
          <span>\</span>
          <span className='absolute text-first left-1 top-0'>
            |
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-2.5 py-2.5 '>
          <span >caps lock</span>
          <span className='absolute text-first right-1'>
            .
          </span>
        </button>
          
        <button className='shadow-strong rounded-lg px-4 py-2.5'>
          <span>A</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>S</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>D</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>F</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>G</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>H</span>
         
        </button>

        <button className='shadow-strong rounded-lg px-4 py-2.5'>
          <span>J</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>K</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>L</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{';'}</span>
          <span className='absolute text-first left-1 top-0'>{':'}</span>
        </button>


        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{"'"}</span>
          <span className='absolute text-first left-1 top-0'>{'"'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-8 py-2.5'>
          <span>enter</span>
          <span className='absolute text-first right-1'>
            |
          </span>
        </button>

      </div>

      <div className='text-[11px] flex text-center gap-3 items-center text-neutral-600'>

        <button className='relative shadow-strong rounded-lg px-10 py-4.5 '>
          <span  className='absolute left-1 top-2.5'>shift</span>
          <span className='absolute text-first left-6 top-3.5'>
            <i className='bx  bx-arrow-big-up text-first'></i> 
          </span>
        </button>
          
        <button className='shadow-strong rounded-lg px-4 py-2.5'>
          <span>Z</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>X</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>C</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>V</span>
         
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>B</span>
          
        </button>

        <button className=' shadow-strong rounded-lg px-4 py-2.5'>
          <span>N</span>
         
        </button>

        <button className='shadow-strong rounded-lg px-4 py-2.5'>
          <span>M</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{','}</span>
          <span className='absolute text-first left-1 top-0'>{'<'}</span>
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{'.'}</span>
          <span className='absolute text-first left-1 top-0'>{'>'}</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-4 py-2.5'>
          <span>{'/'}</span>
          <span className='absolute text-first left-1 top-0'>{'?'}</span>
          
        </button>

        <button className='relative shadow-strong rounded-lg px-14 py-4.5'>
          <span className='absolute right-3 top-2.5'>shift</span>
          <span className='absolute text-first right-1 top-3.5'>

            <i class='bx bx-arrow-big-up'></i> 
          </span>
        </button>

      </div>


    </div>
    
    </div>
  )
}

export default Page