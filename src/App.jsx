import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import  Home from './pages/Home'
import  About from './pages/About'
import  Contact from './pages/Contact'
import Doctor from './Pages/Doctor'
import Login from './pages/Login'
import MyAppoiment from './Pages/MyAppointment'
import Myprofile from './pages/Myprofile'
import Singup from './pages/Singup'
import Appintment from './Pages/Appintment'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='mx-4 sm:mx-[10%]'> 
        <Nav/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/doctor" element={<Doctor />} />
          <Route  path="/doctor/:specialty" element={<Doctor />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/myAppoiment" element={<MyAppoiment />} />
          <Route  path="/myprofile" element={<Myprofile />} />
          <Route  path="/singup" element={<Singup />} />
          <Route  path="/appintment/:docId" element={<Appintment />} />
        </Routes> 
        <Footer/>
      </div>
  )
}

export default App
