import React, { useEffect, useState } from "react";
import "./TableContent.css";
import { loadData } from "../Api's/auth";
import { deleteData } from "../Api's/auth";
import NewPatientForm from "./NewPatientForm";

function TableContent() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const fetchData = async () => {
    try {
      const data = await loadData();
      setPatients(data.patients); // Assuming the data structure has a 'patients' array
    } catch (err) {
      setError(err);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (patientId) => {
    try {
      await deleteData(patientId);
      alert("Patient deleted successfully");
      await fetchData();
    } catch (err) {
      setError(err);
      console.error("Error deleting patient:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPatients.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error.message}</div>; 

  return (
    <div className="whole-container">
      <div className="table-container">
        <div className="table-header">
          <h2>Patient Information</h2>
          <input className="search-input"
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th className="patient-id">Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Patient Issue</th>
              <th>Status</th>
              <th>Next Appointment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((patient) => (
              <tr key={patient.patientid}>
                <td>{patient.patientid}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.patientIssue}</td>
                <td>
                  <span
                    className={patient.Status === true ? "active" : "pending"}
                  >
                    {patient.Status === true ? "Arrived" : "Discharged"}
                  </span>
                </td>
                <td>{patient.appointment}</td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    style={{
                      color: "red",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(patient.patientid)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredPatients.length / itemsPerPage) }, (_, i) => (
            <button key={i + 1} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <NewPatientForm onFetchData={() => fetchData()} />
    </div>
  );
}

export default TableContent;