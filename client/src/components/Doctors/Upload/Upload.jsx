import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import FormCard from './FormCard'

const Upload = () => {
  return (
    <div style={{ display: 'flex'}}>
      <Sidebar style={{ flex: 1 }}/>
      <FormCard style={{ flex: 1 }}/>
    </div>
  )
}

export default Upload