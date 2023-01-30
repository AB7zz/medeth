import React, { useState, useEffect } from 'react'

const Medications = ({patient}) => {

  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-blue-500 text-center py-2 text-white text-2xl font-bold">Medications</div>
      <div className="p-2 mx-5">
        <ul>
          {patient.medications && patient.medications.map((medication, index) => (
            <li key={index} className="py-2">
              Name: {medication.name}
              <br />
              Dosage: {medication.dosage}
              <br />
              Frequency: {medication.frequency}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-500 text-center py-2 text-white text-2xl font-bold">Allergies</div>
      <div className="p-5">
        <ul>
          {patient.allergies && patient.allergies.map((allergy, index) => (
            <li key={index} className="py-2">
              Name: {allergy.substance}
              <br />
              Reaction: {allergy.reaction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Medications;
