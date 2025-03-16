import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";

//import preview from './src/assets/preview.jpg'
function Title() {
  return (
    <>
      <div className="title">
        <div className="title-container">
          <div className="title-first">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              style={{ height: "40%", marginTop: "34px", marginRight: "17px" }}
            ></img>
            <div className="title-names">
              <h4>
                {" "}
                MediCare Hospital
                <br></br>
                <p className="title-para">Excellence in Healthcare</p>
              </h4>
            </div>
          </div>
          <div className="title-second">
            <h4 className="title-second-header">
              Emergency:
              <br />
              <span
                style={{
                  margin: 0,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                1-800-MEDICARE
              </span>
            </h4>
            <button
              className="title-button"
              onClick={() => window.open("https://112.gov.in/", "_blank")}
            >
              <div className="button-inner">
                <i
                  className="fa-solid fa-phone"
                  style={{ marginRight: "12px", marginTop: "5px" }}
                ></i>
                <h4 className="title-button-img">Contact Us</h4>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="header-second">
        <h5>Dashboard</h5>
      </div>
    </>
  );
}

export default Title;
