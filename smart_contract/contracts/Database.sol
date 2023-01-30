// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


contract Database{
    struct Appointments{
        address payable patient;
        string patientName;
        string doctor;
        string doctorType; 
        string description;
        string[][] medications;
        string[][] allergies;
        string[][] prescriptions;
        string notes;
    }


    struct Patients{
        address payable patient;
        string name;
        string sex;
        uint256 age;
        string phoneNo;
        string place;
        string insurance;
        string bloodGroup;
    }

    mapping(address => Appointments) public appointment;
    mapping(address => Patients) public patient;

    function uploadAppointment(address payable _patient, string memory _patientName, string memory _doctor, string memory _doctorType, string memory _description, string[][] memory _medications, string[][] memory _allergies, string[][] memory _prescriptions, string memory _notes) public{
        appointment[_patient] = Appointments(
            _patient,
            _patientName,
            _doctor,
            _doctorType,
            _description,
            _medications,
            _allergies,
            _prescriptions,
            _notes
        );
    }

    function registerPatient(address payable _patient, string memory _name, string memory _sex, uint256 _age, string memory _phoneNo, string memory _place, string memory _insurance, string memory _bloodGroup) public{
        patient[_patient] = Patients(
            _patient,
            _name,
            _sex,
            _age,
            _phoneNo,
            _place,
            _insurance,
            _bloodGroup
        );
    }
}






