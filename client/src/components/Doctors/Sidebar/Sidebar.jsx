import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-purple-700 w-[15%]'>
      <img src="/src/assets/logo.png" alt="" />
      <div className='flex flex-col justify-center'>
        <Link to='/doctor/home' className='sb-content-link text-white'>Home</Link>
        <Link to='/doctor/upload' className='sb-content-link text-white'>Upload</Link>
        <Link to='/doctor/appointments' className='sb-content-link text-white'>Appointments</Link>
        <Link to='/doctor/settings' className='sb-content-link text-white'>Settings</Link>
      </div>
    </div>
  )
}

export default Sidebar