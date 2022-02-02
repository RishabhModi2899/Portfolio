import React from "react";
import "../cards/cards-styles.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import Header from "../header/header.jsx";

export default function Projects() {
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
                  navigate("/WorkExperience");
                }}
              />
            </IconButton>
          </div>

          <div className="middle-card">
            <h3> Solo Projects </h3>
            <p>
              <div className="span"> Portfolio Management Website <br></br>
              April, 2021 - July, 2021 </div> <br></br>
              Built a website to help users keep track of investments made in
              Indian Stock markets and provide analytics using technologies
              JavaScript, React, Firebase <br></br>
              Created using material UI, a clean UI for users to manage and
              store investments details and view analytics
            </p>
          </div>

          <div className="right-card">
            <IconButton color="inherit">
              <ChevronRightIcon
                fontSize="large"
                color="inherit"
                onClick={() => {
                  navigate("/Education");
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
