import React, { useState } from 'react';

const FormCard = () => {
    const [patient, setPatient] = useState({
      name: '',
      doctor: '',
      doctorType: '',
      description: '',
      medications: [{ medicationName: '', dosage: '', frequency: '' }],
      allergies: '',
      prescriptions: '',
      notes: '',
    });
    const [medications, setMedications] = useState([{ medicationName: '', dosage: '', frequency: '' }]);
  
    const handleChange = (e) => {
      setPatient({ ...patient, [e.target.name]: e.target.value });
    };
  
    const handleMedicationChange = (e, index) => {
      const updatedMedications = [...medications];
      updatedMedications[index][e.target.name] = e.target.value;
      setMedications(updatedMedications);
    };
  
    const handleAddMedication = () => {
      setMedications([...medications, { medicationName: '', dosage: '', frequency: '' }]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(patient, medications);
      // submit the form data to API or data source
    };
    const FormSubmitButton = () => {
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleSubmit = () => {
        setFormSubmitted(true);
      };
    const handleReset = () => {
      setPatient({
        name: '',
        doctor: '',
        doctorType: '',
        description: '',
        medications: [{ medicationName: '', dosage: '', frequency: '' }],
        allergies: '',
        prescriptions: '',
        notes: '',
      });
      setMedications([{ medicationName: '', dosage: '', frequency: '' }]);
    };
    
  }
    return (
      <div className="w-64 m-auto mt-10 p-5 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-center">Patient Form</h1>
        <form onSubmit={handleSubmit}>
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
            <label className="block font-bold mb-2">Description:</label>
            <textarea
              rows="3"
              name="description"
              value={patient.description}
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
  
  
  