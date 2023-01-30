import React from 'react'
import PatientDetails from '../PatientDetails/PatientDetails'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
    return (
    <div className='flex'>    
        <Sidebar/>
        <PatientDetails/>
    </div> 
    )
}

export default Home