import React, { useState, useEffect } from 'react'

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const [allergies, setAllergies] = useState([]);

  useEffect(() => {
    // retrieve the data from the API or data source
    // and set the state with the returned data

    // example data for demonstration purposes
    setMedications([
      { name: 'Aspirin', dosage: '100mg', frequency: 'twice a day' },
      { name: 'Paracetamol', dosage: '500mg', frequency: 'three times a day' },
      { name: 'Ibuprofen', dosage: '200mg', frequency: 'four times a day' },
    ]);

    setAllergies([
      { name: 'Penicillin', reaction: 'Rash' },
      { name: 'Sulfa drugs', reaction: 'Nausea' },
      { name: 'Bee stings', reaction: 'Anaphylaxis' },
    ]);
  }, []);

  return (
    <div className="w-1/4 m-3 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-blue-500 text-center py-2 text-white text-2xl font-bold">Medications</div>
      <div className="p-2 mx-5">
        <ul>
          {medications.map((medication, index) => (
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
          {allergies.map((allergy, index) => (
            <li key={index} className="py-2">
              Name: {allergy.name}
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
