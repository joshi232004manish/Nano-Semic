import React, { useState } from "react";
import contact from "../assets/iit.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { db } from "../Firebase"; // adjust path as needed
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send feedback to your backend API
      await axios.post("http://localhost:3000/api/auth/contact", {
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        message: formData.message,
      });
      await addDoc(collection(db, "feedbacks"), formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        rating: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Error saving feedback: ", error);
    }
  };

  return (
    <>
      <div className="bg-ogcolor min-h-96">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/contact.jpg')`,
            minHeight: "70vh",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>{" "}
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24"
          >
            <div className="text-center sm:text-left text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold mb-8">
                Get In Touch
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed">
                Got questions or need a hand?
                <br />
                Reach out to us—we’re always happy to help and just a message
                away!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feedback Form Section */}
        {/* <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              We’d love your feedback!
            </h2>
            {submitted && (
              <div className="mb-4 p-3 text-green-700 bg-green-100 rounded text-center">
                Thank you for your feedback!
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <select
                  name="rating"
                  required
                  value={formData.rating}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled>
                    Select Rating
                  </option>
                  <option value="Excellent">⭐ Excellent</option>
                  <option value="Good">👍 Good</option>
                  <option value="Average">👌 Average</option>
                  <option value="Poor">👎 Poor</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <div className="min-h-screen bg-white flex flex-col md:flex-row px-6 md:px-20 py-12 gap-12">
          {/* Left Section - Info */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-8">
              Feel free to use the form or drop us an email. Old-fashioned phone
              calls work too.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-orange-500" />
                <span>+91-1002002999</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-500" />
                <span>nanosemic.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.google.com/maps/dir//Nano+Semic+Nano+Semic+Pvt+Ltd,+Research+%26+Entrepreneurship+Park+C%2FO,+IIT+Bhubaneswar,+Kansapada,+Odisha+752050/@20.1495728,85.6742934,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a19adf474fd646f:0x6362bd4580ab753f!2m2!1d85.6742934!2d20.1495728?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                <FaMapMarkerAlt className="text-orange-500" />
                </a>
                <div>
                  <p>
                    Nano Semic Pvt Ltd,
                    <br />
                    Research & Entrepreneurship Park, C/O <br />
                    IIT Bhubaneswar, Kansapada <br />
                    Odisha: 752050
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                
                  <FaClock className="text-orange-500 w-5 h-5" />
                
                <span className="text-sm text-gray-700">
                  <p>
                    Monday - Friday: 9am - 6pm <br />
                    Saturday: 9am - 4pm <br />
                    Sunday: Closed
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-md">
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <input
                  type="text"
                  placeholder="First"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                /> */}
                <input
                  type="text"
                  name ="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="xxx-xxx-xxxx"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                placeholder="Type your message ..."
                name="message"
                onChange={handleChange}
                value={formData.message}
                className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map and Contact Sections remain unchanged below */}
        {/* ... Keep your map and contact info sections here ... */}
        {/* Map Section */}
        {/* <section className="bg-white">
          <div className="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="mt-10 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.6277278554217!2d85.67171847500651!3d20.149572781288732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19adf474fd646f%3A0x6362bd4580ab753f!2sNano%20Semic!5e0!3m2!1sen!2sin!4v1719481516053!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                    className="w-full h-[300px] sm:h-[400px] md:h-[480px]"
                  ></iframe>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden p-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Address
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Nano Semic Pvt Ltd,
                      <br />
                      Research & Entrepreneurship Park, C/O
                      <br />
                      IIT Bhubaneswar, Kansapada
                      <br />
                      Odisha: 752050
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden mt-6 p-6">
                    <h3 className="text-xl font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9am - 6pm
                    </p>
                    <p className="mt-1 text-gray-600">Saturday: 9am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Info Section */}
        {/* <div className="bg-gray-100 h-auto sm:h-60 rounded-xl shadow-xl py-8 sm:py-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:text-left text-black">
              <h1 className="text-lg sm:text-xl font-serif">
                How you can contact us
              </h1>
              <ol className="text-black font-serif text-sm mt-5 list-disc list-inside sm:px-2">
                <li>Via Email: nanosemic.official@gmail.com</li>
                <li>Via Phone: +911002002999</li>
                <li className="flex items-center justify-center sm:justify-start">
                  Via LinkedIn:
                  <FaLinkedinIn
                    size={20}
                    className="ml-2 text-blue-600 hover:text-blue-700"
                  />
                </li>
              </ol>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
