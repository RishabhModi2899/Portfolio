import React from 'react';
import '../cards/cards-styles.css'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import Header from "../header/header.jsx";

export default function About() {
  let navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="card">
        <div className="card-content">
          <div className="left-card">
            <IconButton>
              <ChevronLeftIcon
                fontSize="large"
                color="inherit"
                onClick={() => {
                  navigate("/Skills");
                }}
              />
            </IconButton>
          </div>

          <div className="middle-card">
            <h3> About </h3>
            <p>
              Hi! My Name is Rishabh Modi.<br></br>
              I am currently pursuing my master's from Northeastern University, Boston in the field of Software engineering systems. <br></br>
              My interest's include Full Stack Development.
            </p>
          </div>

          <div className="right-card">
            <IconButton color="inherit">
              <ChevronRightIcon
                fontSize="large"
                color="inherit"
                onClick={() => {
                  navigate("/WorkExperience");
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
