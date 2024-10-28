import React from 'react'
import miss from '../assets/miss.jpg'
import ide from '../assets/ide.png'
import sen from '../assets/sen.png'
import mat from '../assets/mat.png'
import int from '../assets/int.png'


const Product1 = () => {
  return (
    <>
    <div className="bg-ogcolor py-10 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div className="order-2 md:order-1 py-5 md:py-10">
            <h1 className="text-white font-sans text-3xl md:text-4xl lg:text-5xl leading-tight">
              Education Products
            </h1>
            <div className="mt-6 md:mt-12 lg:mt-20">
              <p className="text-white font-serif text-base sm:text-lg lg:text-xl">
                {/* Sample text goes here. Example:
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Rerum nisi ea, debitis harum atque reprehenderit quis voluptates 
                at perferendis animi? */}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end py-5">
            <img
              src={miss}
              alt="Doctor"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto"
            />
          </div>

        </div>
      </div>
    </div>
    <div className="max-w-[1280px] mx-auto">
        <div className="text-center py-10">
            <h1 className="text-black font-sans text-4xl">
            Empowering Education with <br/>Innovative Devicess
            </h1>
        </div>
    </div>


    {/* cards  */}


    <div className="py-[100px] -mt-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-5">
           
           
            {/* card-1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={ide} alt="" className="w-full" />
            
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Interdigitated Electrode
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
            </div>


            {/* card-2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src={sen} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Sensor Substrates 

                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
            </div>


            {/* card-3 */}
            <div className="max-w-sm rounded-md overflow-hidden shadow-xl">
                <img src={mat} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Sensing Materials 
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                </div>

                
            {/* card-4 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src={int} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                       Integrated Sensors
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

export default Product1
