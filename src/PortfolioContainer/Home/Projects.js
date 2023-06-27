import React from "react";
import "./Projects.css";
import Gbregister from "../../assets/Home/Gbregister.svg";
export default function Projects() {
  return (
    <div>
      <h1 className="abt-title">Projects</h1>
      <div className="project-cards-container">
        <div className="grid-container">
          <article id="post-2086" className="projcard-container">
            <div className="projcard projcard-blue img-right">
              <div className="projcard-innerbox">
                <img
                  src={Gbregister}
                  className="projcard-img wp-post-image jetpack-lazy-image jetpack-lazy-image--handled"
                />{" "}
                <div className="projcard-textbox">
                  <div className="projcard-title">
                    <a href="https://github.com/lpdancona/GB-register">
                      Gracie Barra check-in
                    </a>
                  </div>
                  <div className="project-roles"></div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    <p>
                      •An application designed for Gracie Barra students. It
                      allows users to check in to classes, on the admin side,
                      classes can be created and student check-ins are
                      displayed.
                      <br></br>
                      •Tech Stack: JavaScript, HTML, CSS, React, Express, SQL,
                      SCSS
                    </p>

                    <p className="project-links">
                      {" "}
                      <a href="https://github.com/lpdancona/GB-register">
                        Application on Github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="grid-container">
          <article id="post-2086" className="projcard-container">
            <div className="projcard projcard-blue img-right">
              <div className="projcard-innerbox">
                {/* <img
                  src={Gbregister}
                  className="projcard-img wp-post-image jetpack-lazy-image jetpack-lazy-image--handled"
                />{" "} */}
                <div className="projcard-textbox">
                  <div className="projcard-title">
                    <a href="https://github.com/lpdancona/movie-island">
                      Movie Island
                    </a>
                  </div>
                  <div className="project-roles"></div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    <p>
                      •An application that allows users to browse for their
                      favourite movies and/or TV shows. The Application also
                      allows users to upload their own content.
                      <br></br>
                      •Tech Stack: JavaScript, HTML, CSS, React, Express,
                      MongoDB, Bootstrap, SCSS
                    </p>

                    <p className="project-links">
                      {" "}
                      <a href="https://github.com/lpdancona/movie-island">
                        Application on Github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="grid-container">
          <article id="post-2086" className="projcard-container">
            <div className="projcard projcard-blue img-right">
              <div className="projcard-innerbox">
                {/* <img
                  src={Gbregister}
                  className="projcard-img wp-post-image jetpack-lazy-image jetpack-lazy-image--handled"
                />{" "} */}
                <div className="projcard-textbox">
                  <div className="projcard-title">
                    <a href="https://github.com/lpdancona/movie-island">
                      Food Ordering App
                    </a>
                  </div>
                  <div className="project-roles"></div>
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    <p>
                      •An application that connects customers and restaurants
                      and uses Twilio API.
                      <br></br>
                      •Tech Stack: JavaScript, HTML, SCSS, EJS
                    </p>

                    <p className="project-links">
                      {" "}
                      <a href="https://github.com/lpdancona/movie-island">
                        Application on Github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
