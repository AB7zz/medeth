import React from 'react'
import Medications from './Medications/Medications'
import PatientBio from './PatientBio/PatientBio'
import Prescriptions from './Prescriptions/Prescriptions'
import data from './Appointments.json'
import Sidebar from '../Sidebar/Sidebar'

const AppDetail = () => {
  const [appointment, setAppointment] = React.useState([])
  React.useEffect(() => {
    setAppointment(data[0])
  }, [])

  return (
    <div className='flex w-[100%]'>
      <Sidebar/>
      <div className='flex justify-around w-[100%]'>
        
        {appointment ? (
          <>
            <PatientBio patient={appointment} style={{flex:1}} />
            <Medications appointment={appointment} style={{ flex: 1 }} />
            <Prescriptions appointment={appointment} style={{ flex: 1 }} />
          </>
        ) : (
          <p>adsfas</p>
        )}
      </div>
    </div>
  )
}

export default AppDetail