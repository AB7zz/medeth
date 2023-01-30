import React from 'react'
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
    <div className='flex-col w-[100%]'>
      <div className='p-3 flex'>
        <input onChange={e => setName(e.target.value)} type="text" placeholder='Search Name' className='bg-gray-100 p-4 text-[#6C6C6C] w-[100%]' />
        <button className='bg-blue-500 text-white p-4' onClick={searchName} >Search</button>
      </div>
      <div className='flex justify-around'>
        {patient ? (<PatientDetail patient={patient} />) : (<p>adsfas</p>)}
      </div>
    </div>
  )
}

export default PatientDetails