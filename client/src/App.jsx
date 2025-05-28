import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
<<<<<<< HEAD
import ProductPage from './components/Product_page'
import AdminDashboard from './components/Admin/AdminDashboard'
=======
import ProductPage from './components/product_page'
import ParticlesBackground from './components/particle'
>>>>>>> 84b53e2e9c202f51e24aa0348d2c61687cb6886d
function App() {
  
  return (
    <>

    <Router>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
    <Route  path="/home" element= {<Home/>}/>
    <Route path= "/about" element ={<About/>}/>
    <Route path ="/Contact" element = {<Contact/>}/>
    <Route path = "/signup" element = {<Signup/>}/>
    <Route path="/signin"  element = {<Signin/>}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path = "/product" element = {<Product/>}/>
    <Route path = "/education" element = {<Education/>}/> 
    <Route path = "/agriculture" element = {<Agriculture/>}/>
    <Route path ="/safety" element = {<Safety/>}/>
    <Route path ="/policy" element ={<Policy/>}/>
    <Route path = "/terms"  element ={<Terms/>}/>
    <Route path = "/particle"  element ={<ParticlesBackground/>}/>
    <Route path = "/pro" element = {<Pro/>}/>
    <Route path ="/services" element ={<Services/>}/>
    <Route path ="/productpage" element ={<ProductPage/>}/>
    <Route path ="/adminDashboard" element = {<AdminDashboard/>}/>
    {/* <Route path='/signup' element = {<Signup/>}/> */}
    
   
     

    </Routes>
    <Footer/>
    </Router>
    
  

    
    </>


  )
}

export default App
