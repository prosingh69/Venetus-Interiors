import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const AppLayout = () => {
  return (
    <div className='lg:px-10 px-2 py-4 bg-black min-h-screen '>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout