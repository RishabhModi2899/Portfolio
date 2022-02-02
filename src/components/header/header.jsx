import React from "react";
import "../header/header.css";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="left">
        <div className="icon">
          <PersonIcon fontSize="medium" color="inherit" />
        </div>
        <div className="text">Rishabh Modi</div>
      </div>

      <div className="center">
        <Link className="text-small" to="/About">
          About
        </Link>
        <Link className="text-small" to="/WorkExperience">
          Work Experience
        </Link>
        <Link className="text-small" to="/SoloProjects">
          Projects
        </Link>
        <Link className="text-small" to="/Education">
          Education
        </Link>
        <Link className="text-small" to="/Skills">
          Skills
        </Link>
      </div>

      <div className="right">
        <span>
          <IconButton
            color="primary"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/rishabh-modi-a29172213/",
                "_blank"
              );
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        </span>
        <span>
          <IconButton
            color="secondary"
            fontSize="medium"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=modi.ri@northeastern.edu",
                "_blank"
              );
            }}
          >
            <EmailIcon />
          </IconButton>
        </span>
        <span>
          <IconButton
            color="inherit"
            onClick={() => {
              window.open("https://github.com/RishabhModi2899", "_blank");
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </span>
      </div>
    </div>
  );
}
