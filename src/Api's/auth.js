import axios from "axios";
import { beUrl } from "./constant.js";

// Load the patient records to table
const loadData = async (userData) => {
  try {
    const response = await axios.get(`${beUrl}/patient`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error; // Consider handling the error or returning a default value if needed
  }
};

const insertData = async (userData) => {
  try {
    const response = await axios.post(`${beUrl}/patient/insert`, userData, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error occurred while inserting data:", error);
    throw error; // Consider handling the error or returning a default value if needed
  }
};



const deleteData = async (patientid) => {
    try {
        const response = await axios.delete(`${beUrl}/patient/delete`, {
            data: { patientid }, // Pass patientid in the request body
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error occurred while deleting data:", error);
        throw error; // Consider handling the error or returning a default value if needed
    }
};

const loadChart = async (userData) => {
    try {
      const response = await axios.get(`${beUrl}/patient/patient-issue-count`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      throw error; // Consider handling the error or returning a default value if needed
    }
  };

  const loadBar = async (userData) => {
    try {
      const response = await axios.get(`${beUrl}/patient/resource`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      throw error; // Consider handling the error or returning a default value if needed
    }
  };

export { loadData ,insertData,deleteData,loadChart,loadBar};
