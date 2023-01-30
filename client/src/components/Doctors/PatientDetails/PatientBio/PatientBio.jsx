import React from 'react';

const PatientBio = ({patient}) => {

return (
<div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
<div className="px-6 py-2 bg-orange-500 text-white">
<h1 className="text-2xl font-bold">Patient Details</h1>
</div>
<div className="flex flex-col items-center p-8 mt-12">
  <img src="https://i.stack.imgur.com/l60Hf.png" alt={patient.name} className="w-32 h-32 rounded-full mb-4" />
  <div className="text-xl font-medium text-gray-800 mt-4">{patient.name}</div>
  <div className="text-sm text-gray-600 mt-2">Age: {patient.age}</div>
  <div className="text-sm text-gray-600 mt-2">Sex: {patient.sex}</div>
  <div className="text-sm text-gray-600 mt-2">Phone no: {patient.phoneNo}</div>
  <div className="text-sm text-gray-600 mt-2">Place: {patient.place}</div>
  <div className="text-sm text-gray-600 mt-2">Insurance: {patient.insurance}</div>
  <div className="text-sm text-gray-600 mt-2">Blood group: {patient.bloodGroup}</div>
</div>
</div>
);
};

export default PatientBio;