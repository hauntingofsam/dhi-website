import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Offerings from './components/Offerings'
import Solutions from './components/Solutions'
import Capabilities from './components/Capabilities'
import WhyDhi from './components/WhyDHI'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Industries from './components/Industries'
import AboutNew from './components/AboutNew'
import Customers from './components/Customers'
import ScrollToTop from './components/ScrolltoTop'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/about" element={<AboutNew/>}/>
          <Route path="/offerings" element={<Offerings/>}/>
          {/* <Route path="/capabilities" element={<Capabilities/>}/> */}
          <Route path="/solutions" element={<Solutions/>}/>
          <Route path="/industries" element={<Industries/>}/>
          <Route path="/whydhi" element={<WhyDhi/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<ContactUs/>}/>

        </Routes >
        <Footer/>
        

      </BrowserRouter>

    </>
    
      
        
    
  )
}

export default App
