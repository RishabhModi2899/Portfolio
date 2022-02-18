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
            <h3> Projects </h3>
            <p>
              <div className="span">
                {" "}
                Portfolio Management Website <br></br>
                April, 2021 - July, 2021{" "}
              </div>{" "}
              <br></br>•	Built webpage using React.js, HTML, CSS, and Firebase enables users to keep track of investments in the Indian Equity Markets<br></br>
              •	Developed a Modern UI (User Interface) created using react JS and Material UI provides users with a smooth browsing experience and enables them to view analytics regarding portfolio's performance<br></br>
              •	Conceptualized a NoSQL Firebase database to capture portfolio information of multiple users<br></br>
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
