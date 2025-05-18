import React from 'react'
import image from '../assets/viso.jpg'



const Vis = () => {
  return (
    <>
    {/* vision mian */}
    <div className="bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <hr></hr>
         <h1 className='text-white text-[20px] py-20 underline'>
            VISION
        </h1>
        <h1 className="text-white text-5xl -mt-10 fond-bold hover:italic pb-10 ">We’re Here to Revolutionize the 
        World of Sensor</h1>

        </div>
        </div>

        {/* image and para */}

        {/* <div className="bg-black py-20 mt ">
        <div className="max-w-[1280px] mx-auto grid grid-col-2 justified-between border border-yellow-400 ">
          <div className=" text-white mt-10">
            <p className="text-md tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
              </br> Nemo nisi vitae sint,
               laboriosam quibusdam soluta <br></br>amet minus quis neque veritatis!
            </p>
              <button className='bg-white text-black  rounded-full py-2 px-4 hover:cursor-pointer mt-8 text-lg font-semibold'>
          </button>
          </div>
          <div className="">
            <img src="" alt="" className="" />

          </div>

        </div>
        </div> */}
        {/* section  */}
        <section class="bg-black ">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8 item-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="">
                
                <p class="mt-4 text-white text-normal"> 
                   {/* ipsum voluptatum deserunt aspernatur fugiat vel dolores et, qui atque aut! Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    , non tempora dolore ipsa labore praesentium repellat blanditiis maiores 
                    cumque veritatis omnis voluptatibus, laborum consectetur unde laboriosam. Minus ex
                     ad, tempora eligendi dicta sit cumque modi fugiat corporis dolorum quo aliquam error illum. 
                     Asperiores reiciendis quia itaque explicabo voluptatum aperiam quae? Culpa labore sint, 
                     iste repellendus ea deleniti nam? Dolorum, doloremque. */}
               <br /></p>
              </div>
              <div class="mt-10 md:mt-0 ">
                <img src={image} alt="About Us Image" class="object-cover rounded-lg shadow-md " />
            </div>
              </div>
              </div>
              </section>


        
        

      
       
    </>
  )
}

export default Vis
