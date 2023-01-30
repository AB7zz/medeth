import React from 'react'
import './style.css'

const Sidebar = () => {
  return (
    <div className='h-screen bg-purple-700 w-[15%]'>
      <img src="/src/assets/logo.png" alt="" />
      <div className='flex flex-col justify-center sb-content'>
        <h3 className='text-white'>Home</h3>
        <h3 className='text-white'>Upload</h3>
        <h3 className='text-white'>Appointments</h3>
        <h3 className='text-white'>Settings</h3>
      </div>
    </div>
  )
}

export default Sidebar