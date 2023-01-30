import React from 'react';

const PatientBio = ({patient}) => {
  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-2 bg-orange-500 text-white">
      <h1 className="text-2xl font-bold">Patient Details</h1>
      </div>
      <div className="flex flex-col items-center p-8 mt-12">
        <img src="https://via.placeholder.com/150" alt={patient.name} className="w-32 h-32 rounded-full mb-4" />
        <div className="text-xl font-medium text-gray-800 mt-4">{patient.name}</div>
        <div className="text-sm text-gray-600 mt-2">Doctor: {patient.doctorName}</div>
        <div className="text-sm text-gray-600 mt-2">Doctor Type: {patient.doctorType}</div>
        <div className="text-sm text-gray-600 mt-2">Description: {patient.description}</div>
      </div>
    </div>
  );
};

export default PatientBio;