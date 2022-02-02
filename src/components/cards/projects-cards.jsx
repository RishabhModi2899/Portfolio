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
              <br></br>Website created using React JS, HTML, CSS, and Firebase
              that enables users to keep track of their investments in the
              Indian Equity Markets<br></br>
              <br></br>A modern UI created using react JS and Material UI that
              provides users with a smooth browsing experience and enables them
              to view analytics regarding their portfolio’s performance
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
