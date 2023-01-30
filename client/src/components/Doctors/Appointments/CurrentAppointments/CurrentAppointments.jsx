import React, { useState } from 'react';

const CurrentAppointments = () => {
  const [appointments, setAppointments] = useState([
    { name: 'John Doe', age: 35, disease: 'Fever' },
    { name: 'Jane Doe', age: 32, disease: 'Headache' },
    { name: 'Jim Brown', age: 42, disease: 'Back pain' },
  ]);

  const handleAccept = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  const handleLater = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-2 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Current Appointments</h1>
        <div className="text-sm mt-2">Current time: {new Date().toLocaleTimeString()}</div>
      </div>
      <ul className="mt-2">
        {appointments.map((appointment, index) => (
          <li key={index} className="px-6 py-4 border-b border-gray-400">
            <div className="text-lg font-medium">{appointment.name}</div>
            <div className="text-gray-600 mt-1">Age: {appointment.age}</div>
            <div className="text-gray-600 mt-1">Disease: {appointment.disease}</div>
            <div className="mt-2 flex">
              <button
                className="bg-green-500 px-4 py-2 rounded-full text-white mr-2"
                onClick={() => handleAccept(index)}
              >
                Accept
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-full text-black"
                onClick={() => handleLater(index)}
              >
                Later
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentAppointments;
