import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/our-service.jpg'
import power from '../assets/powerk.jpg'
import simu from '../assets/simu.jpg'
import cons from '../assets/cons.jpg'
import model from '../assets/model.jpg'

function Services() {
  const navigate = useNavigate();

  return (
    <>
      {/* Services Header */}
      <div className="bg-ogcolor">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 items-center">
            <div className="py-10 sm:py-20">
              <h1 className="text-white font-bold text-4xl">Services</h1>
              <p className="text-white mt-5 font-serif text-md">
                Explore our core service areas in semiconductor device design, simulation, modeling, and technical consulting.
              </p>
            </div>
            <div className="py-5">
              <img src={logo} alt="Services Overview" className="rounded-lg shadow-md w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Power Devices */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Power Devices</h2>
            <p className="mt-6 text-lg text-gray-600">
              We offer consultancy services for the design and development of a wide range of power semiconductor devices based on silicon, silicon carbide (SiC), and gallium nitride (GaN). Our services include TCAD simulation, process deck calibration, device and layout design, foundry interfacing, testing, and packaging.
            </p>
            <div className="mt-6">
              <a href="/Contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-500 text-sm font-semibold">
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <img src={power} alt="Power Devices" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </section>

      {/* Section 2: Semiconductor Simulation & Modeling */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src={simu} alt="Simulation and Modeling" className="rounded-lg shadow-md w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Semiconductor Simulation & Modeling</h2>
            <p className="mt-6 text-lg text-gray-600">
              We offer services for simulation, modeling, and design of devices including power devices, sensors, NAND memory, CMOS image sensors, and solar cells. This includes TCAD simulation, process calibration, and custom design support.
            </p>
            <div className="mt-6">
              <a href="/Contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-500 text-sm font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Consulting */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Technical Consulting</h2>
            <p className="mt-6 text-lg text-gray-600">
              We provide consulting in semiconductor technology, workforce training, technical workshops, faculty development, and summer/winter camps for students. Our goal is to bridge academic and industry knowledge through tailored training and programs.
            </p>
            <div className="mt-6">
              <a href="/Contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-500 text-sm font-semibold">
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <img src={cons} alt="Technical Consulting" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
