import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../cards/about-cards";
import WorkExperience from "../cards/work-experience-cards";
import Education from "../cards/education-cards";
import Skills from "../cards/skills-cards";
import Projects from "../cards/projects-cards";

export default function MainApp() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/workExperience" element={<WorkExperience />} />
        <Route exact path="/SoloProjects" element={<Projects />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}
