import React from "react";
import "../cards/cards-styles.css";
import Header from "../header/header.jsx";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";

export default function Skills() {
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
                  navigate("/Education");
                }}
              />
            </IconButton>
          </div>

          <div className="middle-card">
            <h3> Skills </h3>
            <p>
              <div className="span">Core Programming Languages</div> Python, Java{" "}
              <br></br>
              <br></br>
              <div className="span">Web Technologies</div> HTML, CSS, JavaScript, React.js, Node.js<br></br>
              <br></br>
              <div className="span">Database</div> SQL, MySql, NoSql, MongoDB, Firebase
            </p>
          </div>

          <div className="right-card">
            <IconButton color="inherit">
              <ChevronRightIcon
                fontSize="large"
                color="inherit"
                onClick={() => {
                  navigate("/About");
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
