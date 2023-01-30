import React, { useState } from 'react'

const NewAppointments = () => {
const [appointments, setAppointments] = useState([
{ date: '01-01-2023', time: '10:00 AM', with: 'George Mathew', status: 'pending' },
{ date: '02-01-2023', time: '11:00 AM', with: 'E Karthik', status: 'pending' },
{ date: '03-01-2023', time: '12:00 PM', with: 'Joju George', status: 'pending' },
])

const handleStatusChange = (index) => {
const updatedAppointments = [...appointments];
updatedAppointments[index].status = 'completed';
setAppointments(updatedAppointments);
}

return (
<div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
<div className="px-6 py-2 bg-red-500 text-white">
<h1 className="text-2xl font-bold">New Appointments</h1>
</div>
<ul className="mt-2">
{appointments.map((appointment, index) => (
<li key={index} className="flex items-center px-6 py-4 border-b border-gray-400">
<div className="flex-grow">
Date: {appointment.date}
<br />
Time: {appointment.time}
<br />
With: {appointment.with}
</div>
<div
  className={`rounded-full h-6 w-6 flex items-center justify-center ${appointment.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`}
  onClick={() => handleStatusChange(index)}>
{appointment.status === 'completed' && (
<svg className="fill-current text-white h-4 w-4" viewBox="0 0 20 20">
<path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
</svg>
)}
</div>
</li>
))}
</ul>
</div>
);
};

export default NewAppointments;