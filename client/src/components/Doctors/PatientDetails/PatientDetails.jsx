import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Medications from './Medications/Medications'
import PatientBio from './PatientBio/PatientBio'
import PrevAppointments from './PrevAppointments/PrevAppointments'
import data from './Patients.json'

export const PatientDetail = ({patient}) => {
  return(
    <div>
      <p>{patient.name}</p>
      {patient.medications && patient.medications.map(medication => (
        <p>{medication.name}</p>
      ))}
    </div>
  )
}

const PatientDetails = () => {
  const [patient, setPatient] = React.useState([])
  const [name, setName] = React.useState()
  React.useEffect(() => {
    setPatient(data[0])
  }, [])

  const searchName = () => {
    let findPatient = data.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))
    setPatient(findPatient[0])
  }

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