import React, { useState } from 'react';

const FormCard = () => {
    const [patient, setPatient] = useState({
      address: '',
      name: '',
      doctor: '',
      doctorType: '',
      description: '',
      notes: '',
    });
    const [medications, setMedications] = useState([{ name: '', dosage: '', frequency: '' }]);
    const [allergies, setAllergy] = useState([{ substance: '', reaction: '' }]);
    const [prescriptions, setPrescriptions] = useState([{ name: '', dosage: '', frequency: '' }]);
  
    const handleChange = (e) => {
      setPatient({ ...patient, [e.target.name]: e.target.value });
    };
  
    const handleMedicationChange = (e) => {
      setMedications({...medications, [e.target.name]: e.target.value});
    };

    const handleAllergyChange = (e) => {
      setAllergy({...allergies, [e.target.name]: e.target.value});
    };

    const handlePrescriptionChange = (e) => {
      setPrescriptions({...prescriptions, [e.target.name]: e.target.value});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
      <div className="w-[100%] m-auto mt-10 p-10 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-center">Patient Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label className="block font-bold mb-2">Patient Account Address:</label>
            <input
              type="text"
              name="address"
              value={patient.address}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
            />
          </div>
          <div className="mt-5">
            <label className="block font-bold mb-2">Patient Name:</label>
            <input
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
            />
          </div>
          
          <div className="mt-5">
            <label className="block font-bold mb-2">Doctor:</label>
            <select
              name="doctor"
              value={patient.doctor}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Patel">Dr. Patel</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="block font-bold mb-2">Speciality</label>
            <select
              name="doctorType"
              value={patient.doctorType}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
            >
              <option value="">Speciality</option>
              <option value="Dr. Smith">Gynacology</option>
              <option value="Dr. Johnson">Dentistry</option>
              <option value="Dr. Patel">Neurology</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block font-bold mb-2">Medications:</label>
            <div className='flex'>
              <input
                type="text"
                name="name"
                placeholder='Enter Name'
                value={medications.name}
                onChange={handleMedicationChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
              <input
                type="text"
                name="dosage"
                placeholder='Enter Dosage'
                value={medications.dosage}
                onChange={handleMedicationChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
              <input
                type="text"
                name="frequency"
                placeholder='Enter Frequency'
                value={medications.frequency}
                onChange={handleMedicationChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block font-bold mb-2">Allergies:</label>
            <div className='flex'>
              <input
                type="text"
                name="name"
                placeholder='Enter Substance'
                value={allergies.substance}
                onChange={handleAllergyChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
              <input
                type="text"
                name="reaction"
                placeholder='Enter Reaction'
                value={allergies.reaction}
                onChange={handleAllergyChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block font-bold mb-2">Medications:</label>
            <div className='flex'>
              <input
                type="text"
                name="name"
                placeholder='Enter Name'
                value={prescriptions.name}
                onChange={handlePrescriptionChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
              <input
                type="text"
                name="dosage"
                placeholder='Enter Dosage'
                value={prescriptions.dosage}
                onChange={handlePrescriptionChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
              <input
                type="text"
                name="frequency"
                placeholder='Enter Frequency'
                value={prescriptions.frequency}
                onChange={handlePrescriptionChange}
                className="w-full p-2 rounded-lg border border-gray-400"
              />
            </div>
          </div>
        
          <div className="mt-5">
            <label className="block font-bold mb-2">Description:</label>
            <textarea
              rows="3"
              name="description"
              value={patient.description}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
            />
          </div>

          <div className="mt-5">
            <label className="block font-bold mb-2">Notes:</label>
            <textarea
              rows="3"
              name="notes"
              value={patient.notes}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
            />
          </div>
         
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
          Submit
        </button>
          </form>
          </div>
          )
    }
export default FormCard;
  
  
  