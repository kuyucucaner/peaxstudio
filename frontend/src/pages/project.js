import React from "react";
import "../styles/project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="project-section" id="project-section">
      <h1 className="project-title">Our Projects</h1>
      <div className="project-section">
        <div className="project-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjuXJImvY1gN20U5SxJ34RIyc9d1EBnnb2Q&s"
            alt="Project 1"
            className="project-image"
          />
          <div className="project-content">
            <h2 className="project-subtitle">Project Title 1</h2>
            <p className="project-description">
              Brief description of the project, highlighting key features and
              outcomes. Brief description of the project, highlighting key
              features and outcomes. Brief description of the project,
              highlighting key features and outcomes. Brief description of the
              project, highlighting key features and outcomes. Brief description
              of the project, highlighting key features and outcomes.
            </p>
            <Link to="#" className="project-link">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjuXJImvY1gN20U5SxJ34RIyc9d1EBnnb2Q&s"
            alt="Project 2"
            className="project-image"
          />
          <div className="project-content">
            <h2 className="project-subtitle">Project Title 2</h2>
            <p className="project-description">
              Brief description of the project, highlighting key features and
              outcomes. Brief description of the project, highlighting key
              features and outcomes. Brief description of the project,
              highlighting key features and outcomes. Brief description of the
              project, highlighting key features and outcomes. Brief description
              of the project, highlighting key features and outcomes.
            </p>
            <Link to="#" className="project-link">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
