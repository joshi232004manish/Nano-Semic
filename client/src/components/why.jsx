import React from 'react'
import Gold from '../assets/gold.jpg'

const why = () => {
  return (
    <>
    {/* why nano intro */}
     <div className="bg-black min-h-96">
        <div className="max-w-[1280px] mx-auto p-16 px-4 sm:px-6 lg:px-8">
            
            
         <h1 className='text-white text-[20px] py-16 underline'>
            Why nanosemic
        </h1>
            <h1 className="text-white text-5xl -mt-10 fond-bold hover:italic">
            A different approach using a new method of
             manufacturing world of Sensor</h1>

        </div>
        </div>


        {/* section */}
        <section class="bg-black  -mt-10">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="mt-10 md:mt-0">
                <img src={Gold} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
            <div class="max-w-lg">
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
              </div>
              </div>
              </section>




        
    </>
  )
}

export default why
