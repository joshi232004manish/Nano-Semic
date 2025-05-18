import React from 'react'
import nano from '../assets/nano.jpg'
import { useNavigate } from 'react-router-dom'
import Vision from './Vis'
import logo from '../assets/our-service.jpg'

import Why from './why'
import Download from './Download'
import yes from '../assets/yes.webp'
import health from '../assets/health.jpg'
import agri from '../assets/ag.jpg'
import safe from '../assets/safe.jpg'
import edu from '../assets/edu.jpg'
import promo from '../assets/promo.jpeg'
import promo1 from '../assets/promo1.jpeg'
import { Link } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()


  return (
    <>
    {/* <div className='bg-ogcolor w-full min-h-[640px]'>
      <div div className="max-w-[1280px] mx-auto grid md:grid-cols-2 px-4 sm:px-6 lg:px-8">
        <div className= "">
        <h1 className="text-white text-8xl text-left mt-10">
          nanosemic</h1>
          <h3 className="text-white text-xl font-semibold -mt-2 mx-[140px]">
            Where pricision meets possibilities
          </h3>
        <p className="text-white mt-20 tracking-normal">Welcome to namosemic, your trusted partner in the<br>
        </br> semiconductor industry. Our focus on innovation,<br>
        </br>quality, and customer satisfaction sets us apart from <br></br>
        the competition, and we are dedicated to delivering <br>
         </br>the best possible solutions to meet your needs.<br>
         </br> Our experienced team is always available to answer<br>
         </br> your questions and provide expert advice, and<br>
         </br> we look forward to working with you to help <br>
         </br>you achieve your goals.




           </p>
           <button onClick={()=>navigate("/about")} className="bg-white text-black  rounded-full py-2 px-4 hover:cursor-pointer mt-8 text-lg font-semibold">Learn more</button>
        
          
        </div>
        
      
      <div className="mt-36">
        <img src={nano} alt="" className="" />
      </div>
      </div>
      </div> */}

      {/* another */}
      <section class="bg-ogcolor min-h-[640px]">
    <div class="max-w-[1280px] mx-auto py-16 px-4 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div class="max-w-lg sm:px-6 lg:px-8">
                <h1 class="text-6xl font-extrabold text-white font-serif">
                  nanosemic </h1>
                <h2 className=" text-md font-bold text-white sm-text-normal -mt-2 px-[80px]">
                  Where precision meets possibilities
                </h2>
                <p class="mt-20 text-white text-md justify-center">Welcome to namosemic, your trusted partner in the
         semiconductor industry. Our focus on innovation,
        quality, and customer satisfaction sets us apart from 
        the competition, and we are dedicated to delivering 
         the best possible solutions to meet your needs.
          experienced team is always available to answer
          your questions and provide expert advice and
          we look forward to working with you to help 
         you achieve your goals.</p>
                    <button onClick={()=>navigate("/about")} className="bg-white text-black  rounded-full py-2 px-4 hover:cursor-pointer mt-8 text-lg font-semibold">Learn more</button>
            </div>
            <div class="mt- md:mt-0">
                <img src={nano} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
{/* end  */}







      <Vision/>
      
      <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div class="mt-12 md:mt-0">
                <img src={promo} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                <div className="">
                  <h1 className="text-black font-serif text-2xl fond-bold py-2">
                    Products
                  </h1>
                  <p className="text-black">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae repellat
                     est quae non a delectus fugit quisquam odio quibusdam dolorum.
                      Fuga id ut quae delectus eum! Hic, earum blanditiis. */}

                  </p>
                </div>
                <div class="mt-8">
                    <Link to="/pro" class="text-ogcolor hover:text-blue-500 font-medium">Learn more
                        <span class="ml-2">&#8594;</span></Link>
                </div>
            </div>
            


            <div class="mt-12 md:mt-0">
                <img src={promo1} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                <div className="">
                  <h1 className="font-serif text-2xl fond-bold py-2">
                    Services
                  </h1>
                  <p className="text-black">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae repellat
                     est quae non a delectus fugit quisquam odio quibusdam dolorum.
                      Fuga id ut quae delectus eum! Hic, earum blanditiis. */}

                  </p>
                </div>
                <div class="mt-8">
                    <Link to="/services" class="text-ogcolor hover:text-blue-500 font-medium">Learn more
                        <span class="ml-2">&#8594;</span></Link>
                </div>
          

          
           </div>





          </div>

        </div>










      {/* senors */}
      {/* <section class="bg-gray-100">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl ">Semiconductors</h2>
                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in eum iusto, mollitia dolores nemo praesentium ut? Laboriosam, necessitatibus ducimus..</p>
                
            </div>
            <div class="mt-12 md:mt-0">
                <img src={cpu} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section> */}

<div className="py-[100px] -mt-10">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-4 md:grid-col-2 sm:2 gap-8 px-4 sm:px-6 lg:px-8">

          {/* card-1 */}
          <div className="shadow-xl max-w-sm rounded overflow-hidden">

            
                <img src={health} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Healthcare Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>

                </div>
                <div className=" px-6 py-3">
                  <button onClick={()=> navigate("/product")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                  Explore more</button>
                  
                </div>
                </div>

                {/* cards-2 */}

               <div className= "shadow-xl max-w-sm rounded overflow-hidden">
            <img src={edu} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Education Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                <div className=" px-6 py-3">
                <button onClick={()=> navigate("/education")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                Explore more</button>
                  
                </div>
                </div>

                {/* cards-3 */}

          <div className="shadow-xl  max-w-sm rounded overflow-hidden">

            
                <img src={agri} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Agriculture Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                <div className=" px-6 py-3">
                <button onClick={()=> navigate("/agriculture")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                Explore more</button>
                
                  
            
                </div>
                </div>

                {/* cards-4 */}
          <div className="shadow-2xl max-w-sm rounded overflow-hidden">

            
                <img src={safe} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Safety Products
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                <div className=" px-6 py-3">
                <button onClick={()=> navigate("/safety")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                Explore more</button>
                  
                </div>
                </div>
                

          
          


          
          </div>
          

        </div>


        <section className= " overflow-hidden">
 <div class="max-w-[1280px]   px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
  <div class="flex flex-col sm:flex-row mx-auto">
    <a href="Services"> <img src={logo} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full
     w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
     <a href="/Services">
       <img src={logo} class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 
       h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
       <a href="Services"> <img src={logo} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 
       hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
       
       

   </div>
   </div>
   </section>

        


      <Why/>
      <Download/>
      </>
      
  
  )
}

export default Home
