import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/our-service.jpg'
import power from '../assets/powerk.jpg'
import simu from'../assets/simu.jpg'
import cons from '../assets/cons.jpg'
import model from  '../assets/model.jpg'
function Services() {
const navigate=useNavigate();

  return (
    <>
    
 
 {/* servies header  */}
 <div className=" bg-ogcolor">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 gap-10 ">
            <div className="grid  sm:grid-cols-2">
            <div className="col-span-1 py-10 sm:py-5">
                <h1 className="text-white font-bold font-sans text-4xl">
                    Services
                    </h1>
                    <div className="py-5 mt-20 sm:t-10">
                    <p className="text-white font-serif text-md">
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum nisi ea, debitis harum atque reprehenderit
                         quis voluptates at perferendis animi?
                        Lorem ipsum dolor sit amet consectetur,adipisicing
                        adipisicing elit. Eos, laboriosam. */}
                    </p>
                  </div>
                  </div>
                  
                  
           
            <div className="col-span-1 py-5 ">
                <img src="" alt="" className="" />
            </div>
            </div>
            </div> 

      
     </div>





        {/* <section class="bg-gray-100">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl ">Overview</h2>
                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in eum iusto, mollitia dolores nemo praesentium ut? Laboriosam, necessitatibus ducimus..</p>
                
            </div>
            <div class="mt-12 md:mt-0">
                <img src="" alt="servies image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section> */}

{/* new  */}
<section class="overflow-hidden bg-white py-10 sm:py-16 mt-10">
  <div class="mx-auto max-w-[1280px] px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Power Devices</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">We offer consultancy services for the design and development of a
             wide range of power semiconductor devices based on silicon, silicon carbide (SiC) and gallium nitride (GaN) materials. 
             Our services range from TCAD simulation, process deck calibration, 
            process design, device and layout design, foundry interfacing, testing and packaging services. 
            
          </p>
          
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="/Contact" 
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact Us
          </a>
          
          
        
        </div>
      </div><img src={power} width="2432" height="1442"/>
    </div>
  </div>
</section>





{/* sevice second  */}

<section class="overflow-hidden bg-white py-8 sm:py-16">
  <div class="mx-auto max-w-[1280px] px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <img src={simu} width="2432" height="1442 mx-10" />
      <div class="lg:pr-8 lg:pt-4 mx-5">
        <div class="lg:max-w-lg">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Semiconductor Device Simulation & Modeling</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">We offer consultancy services for the simulation, modeling and design of a wide range of semiconductor devices ranging from power devices, sensors, NAND memory,
             CMOS image sensors, solar cells etc. Our services range from TCAD simulation, process deck calibration, process design,
          </p>
          {/* <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path
                    d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                  </path>
                  <path
                    d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                  </path>
                  <path
                    d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                  </path>
                </svg>
              </dt>
              <dd class="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minima, architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, error?

              </dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"></path>
                </svg>
                
              </dt>
              <dd class="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab iste pariatur, distinctio laboriosam temporibus incidunt totam at vel porro!.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"></path>
                  <path
                    d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                  </path>
                </svg></dt>
              <dd class="inline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque numquam ipsam ex deleniti provident quos modi perspiciatis tempore odit iure!.
              </dd>
            </div>
          </dl>
        </div> */}
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="/Contact" 
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact Us
          </a>
          {/* <a href="#" class="text-sm font-semibold leading-6 text-gray-700">Schedule a demo
            <span aria-hidden="true">→</span> */}
          
        </div>
      </div>
    </div>
  </div>
</section>

{/* third service */}

<section class="overflow-hidden bg-white py-8 sm:py-16">
  <div class="mx-auto max-w-[1280px] px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Technical Consulting</p>
          <p class="mt-6 text-lg leading-8 text-gray-600 justify-center">We offer a range of services related to semiconductor technology, workforce development, technical training, faculty development programs, school workshops and summer camps,
             online/offline courses for masters and bachelor students related to semiconductor technology etc.
          </p>
          {/* <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path
                    d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                  </path>
                  <path
                    d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                  </path>
                  <path
                    d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                  </path>
                </svg>
              </dt>
              <dd class="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sed eum numquam consequatur, pariatur in? Distinctio impedit deserunt voluptatum sapiente?
              </dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"></path>
                </svg>
                
              </dt>
              <dd class="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur recusandae magni maiores deleniti perferendis sint dicta ipsum quo ut.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"></path>
                  <path
                    d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                  </path>
                </svg> </dt>
              <dd class="inline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, suscipit doloribus repellat molestiae unde iusto soluta voluptatum blanditiis deleniti eaque..
              </dd>
            </div>
          </dl> */}
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="/Contact"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact Us
         
          </a>
        </div>
      </div><img src={cons} width="2432" height="1200"/>
    </div>
  </div>
</section>
















 
      
    </>
  )
}

export default Services

