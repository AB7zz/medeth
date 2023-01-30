import React from 'react'
import {Link} from 'react-router-dom'

const Prescriptions = ({appointment}) => {

  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-blue-500 text-center py-2 text-white text-2xl font-bold">Prescriptions</div>
      <div className="p-2 mx-5">
        <ul>
          {appointment.prescriptions && appointment.prescriptions.map((prescription, index) => (
            <>
              <li key={index} className="py-2">
                Name: {prescription.name}-
                <br />
                Dosage: {prescription.dosage}
                <br />
                Frequency: {prescription.frequency}
                <br />
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
      <div className="bg-green-500 rounded-t-lg text-center py-2 text-white text-2xl font-bold">Notess</div>
      <div className="p-5">
        <ul>
          {appointment.notes}
        </ul>
      </div>
    </div>
  );
};

export default Prescriptions;
