import React from "react";
import Typical from "react-typical";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Greetings, My name is{" "}
              <span className="highlighted-text">Leonardo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Passionate Dev 😃",
                    2000,
                    "Full Stack Web Developer 💻",
                    2000,
                    "React Native Dev ",
                    2000,
                    "Lighthouse Labs Grad 📚",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passionate for building Full-Stack applications that make our
                lives easier.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
