import React, { useState } from 'react';

const PatientBio = () => {
const [patientDetails, setPatientDetails] = useState({
name: 'John Doe',
age: 35,
identity: 'Male',
phoneNo: 9188020170,
insurance: "Yes",
place: 'New York',
profilePic: 'https://via.placeholder.com/150',
bloodGroup: 'A+',

});

return (
<div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
<div className="px-6 py-2 bg-orange-500 text-white">
<h1 className="text-2xl font-bold">Patient Details</h1>
</div>
<div className="flex flex-col items-center p-8 mt-12">
  <img src={patientDetails.profilePic} alt={patientDetails.name} className="w-32 h-32 rounded-full mb-4" />
  <div className="text-xl font-medium text-gray-800 mt-4">{patientDetails.name}</div>
  <div className="text-sm text-gray-600 mt-2">Age: {patientDetails.age}</div>
  <div className="text-sm text-gray-600 mt-2">Sex: {patientDetails.identity}</div>
  <div className="text-sm text-gray-600 mt-2">Phone no: {patientDetails.phoneNo}</div>
  <div className="text-sm text-gray-600 mt-2">Place: {patientDetails.place}</div>
  <div className="text-sm text-gray-600 mt-2">Insurance: {patientDetails.insurance}</div>
  <div className="text-sm text-gray-600 mt-2">Blood group: {patientDetails.bloodGroup}</div>
</div>
</div>
);
};

export default PatientBio;