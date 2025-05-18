import React from 'react'
import Down from '../assets/down.png'

const Download = () => {
  return (
    <>
    <div className=" bg-white py-16 px-4">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        
        <div className='flex flex-col justify-center'>
          
          <h1 className="text-black text-5xl font-bold ">
            Designed</h1> <br/>
            <h1 className="text-black text-5xl font-bold "> With You in </h1><br/>
            <h1 className="text-black text-5xl font-bold ">  Mind</h1> 
          
          <p className=" text-black mt-5 pb-2">
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis rerum 
            inventore molestiae sed repudiandae veniam provident quos debitis,
             incidunt quis iste laboriosam, tempore enim, maiores vel reprehenderit est magnam facilis. */}
          </p>
          
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 animate-bounce focus:animate-none hover:animate-none'>Lounching Soon </button>
        </div>
        <div className="mx-[100px]">
        <img className='w-[300px] h-[500px] my-4' src={Down} alt='App' />
        </div>
      </div>
    </div>

      
    </>
  )
}

export default Download
