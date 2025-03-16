import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./ProgressAndChart.css"; 
import { color } from "chart.js/helpers";
import { loadChart } from '../Api\'s/auth';
import { useState } from "react";
import { loadBar } from '../Api\'s/auth';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressAndChart = () => {
  
  const [charValues,setCharValues]= useState([])
  const[barValues,setBarValues]= useState([])

  //Get chart data
  const getChartData = async () => {
    try {
      const chartData = await loadChart();
      setCharValues(Object.values(chartData.data));
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  }
  const getBarData = async () => {
    try {
      const barData = await loadBar();
      setBarValues(Object.values(barData));
      console.log(barValues)
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  }
  useEffect(() => {
    getChartData();
    getBarData();
  })
  // Doughnut Chart Data
  const chartData = {
    labels: ["Fever", "Cold&Cough", "Others", "Diabetes"],
    datasets: [
      {
        label: "Patient Count",
        data: charValues, // Replace with your data
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"], // Custom colors
        borderWidth: 5, 
        borderRadius:10// Remove border
      },
    ],
  };

  // Doughnut Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top", 
      borderWidth:20,
      borderRadius:10,
        labels:{
          font: {
            size: 16, 
            color: "#333333",
          },
         // Add padding around legend items
          boxHeight: 20
          
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return (
    <div className="progress-Chart-container">
  
      <div className="cards">
        <h2>Overall Status</h2>
        <ul>
          <li>
            <h3>Patients</h3>
            <span className="bar">
              <span className="Beds" style={{ width: `${barValues[0]}`}}></span>
            </span>
          </li>
          <li>
            <h3>Arrived</h3>
            <span className="bar">
              <span className="rooms" style={{ width: `${barValues[1]}` } }></span>
            </span>
          </li>
          <li>
            <h3>Discharged</h3>
            <span className="bar">
              <span className="icu" style={{ width: `${barValues[2]}` }}></span>
            </span>
          </li>
        </ul>
      </div>

      {/* Right Section: Doughnut Chart */}
      <div className="chart-container">
        <h2>Patient Overview</h2>
        <div style={{ width:"465px", height: "251px" }}>
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProgressAndChart;
