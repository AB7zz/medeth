import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Medications from './Medications/Medications'
import PatientBio from './PatientBio/PatientBio'
import PrevAppointments from './PrevAppointments/PrevAppointments'

const PatientDetails = () => {
  return (
    <div style={{ display: 'flex'}}>
    <Sidebar style={{ flex: 1 }} />
    <Medications style={{ flex: 1 }} />
    <PrevAppointments style={{ flex: 1 }} />
    <PatientBio style={{flex:1}} />
  </div>
  )
}

export default PatientDetails