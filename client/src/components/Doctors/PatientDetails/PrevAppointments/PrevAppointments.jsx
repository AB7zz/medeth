import React, { useState, useEffect } from 'react'

const PrevAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // retrieve the data from the API or data source
    // and set the state with the returned data

    // example data for demonstration purposes
    setAppointments([
      { date: '01-01-2022', time: '10:00 AM', with: 'Dr. John Doe' },
      { date: '02-01-2022', time: '11:00 AM', with: 'Dr. Jane Doe' },
      { date: '03-01-2022', time: '12:00 PM', with: 'Dr. Bob Smith' },
    ]);
  }, []);

  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-2 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Previous Appointments</h1>
      </div>
      <ul className="mt-2">
        {appointments.map((appointment, index) => (
          <li key={index} className="px-6 py-4 border-b border-gray-400">
            Date: {appointment.date}
            <br />
            Time: {appointment.time}
            <br />
            With: {appointment.with}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrevAppointments;
