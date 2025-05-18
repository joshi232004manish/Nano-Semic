import React from 'react'
import seed from '../assets/seed.jpg'

const Product3 = () => {
  return (
    <>
    {/* <div className="bg-ogcolor h-96">
        <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2">
            <div className="col-span-1 py-10">
                <h1 className="text-white font-sans text-4xl">
                Safety  Prodcuts
                    </h1>
                    <div className="py-5 mt-28">
                    <p className="text-white font-serif text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
                        </br>Rerum nisi ea, debitis harum atque reprehenderit
                        <br></br> quis voluptates at perferendis animi?
                        Lorem ipsum dolor <br></br>sit amet consectetur,adipisicing
                        adipisicing elit. Eos, laboriosam.
                    </p>
                  </div>
                  </div>
                  
                  
           
            <div className="col-span-1 py-5 ">
                <img src='' alt="" className="" />
            </div>
            </div>
            </div>  */}
            


    <div className="bg-ogcolor py-8 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Text Section */}
          <div className="order-2 md:order-1 py-5 md:py-0">
            <h1 className="text-white font-sans text-3xl sm:text-4xl leading-tight">
              Agriculture Products
            </h1>
            <div className="mt-4 sm:mt-8">
              <p className="text-white font-serif text-base sm:text-lg">
                {/* Sample text goes here. Example:
                Explore our variety of agriculture products designed to 
                support sustainable farming practices and enhance crop yield. */}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 flex justify-center py-4 md:py-0">
            <img
              src={seed}
              alt="Agriculture"
              className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] h-auto"
            />
          </div>

        </div>
      </div>
    </div>
  

            

      
     
    <div className="max-w-[1280px] mx-auto">
        <div className="text-center py-10">
            <h1 className="text-black font-sans text-4xl">
            Stay Protected with Our Advanced <br/> Safety Devices
            </h1>
        </div>
    </div>


    {/* cards  */}


    <div className="py-[100px] -mt-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-5">
           
           
            {/* card-1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src='seed' alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                       Safety Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
            </div>


            {/* card-2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src='seed' alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                    Safety Products

                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
            </div>


            {/* card-3 */}
            <div className="max-w-sm rounded-md overflow-hidden shadow-xl">
                <img src='seed' alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                    Safety Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                </div>

                
            {/* card-4 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src='seed' alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                       Safety Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                </div>
        </div>
    </div>
      
    </>
  )
}

export default Product3
