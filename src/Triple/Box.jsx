import React from 'react'

const Box = ({heading,text,spanText,showSpan=false,spanColor="neutral",className=""}) => {
  
   const spanColors = {
    neutral: "bg-neutral-400 text-black",
    amber: "bg-amber-400 text-black",
    indigo: "bg-indigo-400 text-white",
    red: "bg-red-400 text-white",
    green: "bg-green-400 text-white",
  };

  return (
    <div className={`flex flex-col h-full rounded-md shadow-soft p-4 bg-neutral-200 text-black ${className}`}>
      

      {heading && (
        <h2 className='text-md font-bold leading-tight'>{heading}</h2>
      )}

      {text && (
        <p className='text-sm text-neutral-700 font-semibold'>{text}</p>
      )}

      {showSpan && spanText && (
        <span className={`mt-2 flex-1 rounded-sm py-1 px-3 text-xs font-semibold text-black w-full shadow-[0_2px_4px_8px_var(--color-red-800)] ${spanColors[spanColor]} 
          [background-image:radial-gradient(black_1px,_transparent_1px)][background-size:10px_10px] `}
        style={{
          // backgroundImage:'radial-gradient(black 1px, transparent 1px)',
          // backgroundSize:'10px 10px'
        }}>{spanText}</span>
      )}
    </div>
  )
}

export default Box