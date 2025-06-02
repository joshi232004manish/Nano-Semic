import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Education from './components/Product1'
import Agriculture from './components/Product2'
import Safety from './components/Product3'
import Pro from './components/Pro'
import Policy from './components/Policy'
import Terms from './components/Terms'
import './App.css'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/login'
import Services from './components/Services'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
//import ProductPage from './components/Product_page'
import AdminDashboard from './components/Admin/AdminDashboard'

import ProductPage from './components/Product_page'
import ParticlesBackground from './components/particle'
import ProductListingAdmin from './components/Admin/ProducListingAdmin'
import Cartboard from './components/cart'
import BottomCartPopup from './components/BottomCartPopup';
import AnimatedCartIcon from './components/AninmatedCartIcon';
import AddressUpdate from './components/AddressUpdate';
import SummaryPage from './components/SummaryPage';
import OrderSuccess from './components/OrderSuccess';
import MyOrdersPage from './components/MyOrdersPage';
function App() {

  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/education" element={<Education />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/particle" element={<ParticlesBackground />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/pro/:id" element={<ProductPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/productlist" element={<ProductListingAdmin />} />
        <Route path="/cart" element={<Cartboard />} />
        <Route path="/address" element={<AddressUpdate />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
        {/* <Route path='/signup' element = {<Signup/>}/> */}


      </Routes>
      <Footer />
      <BottomCartPopup />
      <AnimatedCartIcon />
    </>


  )
}

export default App
