import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import CurrentAppointments from './CurrentAppointments/CurrentAppointments'

import NewAppointments from './NewAppointments/NewAppointments'
import PastAppointments from './PastAppointments/PastAppointments'

const Appointments = () => {
  return (
    <div style={{ display: 'flex'}}>
    <Sidebar style={{ flex: 1 }} />
    <PastAppointments style={{ flex: 1 }} />
    <NewAppointments style={{ flex: 1 }} />
    <CurrentAppointments style={{ flex: 1 }} />
    </div>
  )
}

export default Appointments