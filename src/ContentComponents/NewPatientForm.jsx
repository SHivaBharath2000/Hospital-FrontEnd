// NewPatientForm.js
import React, { useState } from 'react';
import { insertData } from "../Api's/auth";

import './NewPatientForm.css';

function NewPatientForm({ onFetchData }) {
  const [newPatient, setNewPatient] = useState({
    patientid: '',
    name: '',
    age: '',
    gender: '',
    patientIssue: '',
    Status: '',
    appointment: ''
  });

  // Define the options for the "Patient Issue" dropdown
  const patientIssues = ["Fever", "Cold&Cough", "Others", "Diabetes"];

  let arrived = true;
  let discharged = false;

  const handleInputChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const insert = async () => {
      try {
        const res = await insertData(newPatient);
        alert(res.message);
        onFetchData();
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    };

    insert(); // Call the insert function

    console.log('New patient:', newPatient);
    setNewPatient({
      patientid: '',
      name: '',
      age: '',
      gender: '',
      patientIssue: '',
      Status: '',
      appointment: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientid">Patient ID</label>
          <input
            type="text"
            id="patientid"
            name="patientid"
            value={newPatient.patientid}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newPatient.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={newPatient.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={newPatient.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="patientIssue">Patient Issue</label>
          <select
            id="patientIssue"
            name="patientIssue"
            value={newPatient.patientIssue}
            onChange={handleInputChange}
            required
          >
            <option value="">Select patient issue</option>
            {patientIssues.map((issue, index) => (
              <option key={index} value={issue}>
                {issue}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="Status"
            value={newPatient.Status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select status</option>
            <option value={arrived}>Arrived</option>
            <option value={discharged}>Discharged</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="appointment">Next Appointment</label>
          <input
            type="date"
            id="appointment"
            name="appointment"
            value={newPatient.appointment}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default NewPatientForm;