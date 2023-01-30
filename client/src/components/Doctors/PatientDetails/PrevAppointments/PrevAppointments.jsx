import React from 'react'
import {Link} from 'react-router-dom'

const PrevAppointments = ({patient}) => {

  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-blue-500 text-center py-2 text-white text-2xl font-bold">Previous Appointments</div>
      <div className="p-2 mx-5">
        <ul>
          {patient.appointments && patient.appointments.map((appointment, index) => (
            <>
              <li key={index} className="py-2">
                Date: {appointment.date}
                <br />
                Time: {appointment.time}
                <br />
                With: {appointment.with}
                <br />
                <Link to="/doctor/appointment/1233" className='text-[#0D97CE]'>View More</Link>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
      <div className="bg-green-500 rounded-t-lg text-center py-2 text-white text-2xl font-bold">Prescriptions</div>
      <div className="p-5">
        <ul>
          {patient.prescriptions && patient.prescriptions.map((prescription, index) => (
            <>
              <li key={index} className="py-2">
                Name: {prescription.name}
                <br />
                Dosage: {prescription.dosage}
                <br />
                Frequency: {prescription.frequency}
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrevAppointments;
