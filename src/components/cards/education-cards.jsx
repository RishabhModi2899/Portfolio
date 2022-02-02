import React from "react";
import "../cards/cards-styles.css";
import Header from "../header/header.jsx";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";

export default function Education() {
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
                  navigate("/SoloProjects");
                }}
              />
            </IconButton>
          </div>

          <div className="middle-card">
            <h3> Education </h3>
            <p>
              <div className="span">Master's, Software Engineering Systems </div>
              <br></br>
              Northeastern University, College of Engineering, Boston, MA{" "}
              <br></br>
              Expected graduation- May, 2023 <br></br>
              <br></br>
              <div className="span">B.Tech, Computer Science and Engineering </div>
              <br></br>
              Indus University, Ahmedabad, Gujrat, India, <br></br>
              August, 2016 - June, 2020
            </p>
          </div>

          <div className="right-card">
            <IconButton color="inherit">
              <ChevronRightIcon
                fontSize="large"
                color="inherit"
                onClick={() => {
                  navigate("/Skills");
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
