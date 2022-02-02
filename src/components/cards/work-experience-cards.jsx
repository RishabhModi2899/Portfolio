import React from "react";
import "../cards/cards-styles.css";
import Header from "../header/header";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";

export default function WorkExperience() {
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
                  navigate("/About");
                }}
              />
            </IconButton>
          </div>

          <div className="middle-card">
            <h3> Work Experience </h3>
            <p>
              <div className="span">
                Internship Trainee <br></br>
                Dev Information Technology, Ahmedabad, Gujrat, <br></br>
                January, 2020 - May, 2020,{" "}
              </div>
              <br></br>
              Created a chatbot engine for the company website using NLP and
              spacy capable of understanding & answering various types of
              company specific questions. <br></br>
              <br></br>
              <div className="span">
                Internship Trainee <br></br>
                AUM Digital Marketing, Ahmedabad, Gujrat, <br></br>
                May, 2018 - August, 2018{" "}
              </div>
              <br></br>
              Built a booking engine for the Diu tent city website using
              technologies HTML, CSS, JavaScript, MySQL, PHP
            </p>
          </div>

          <div className="right-card">
            <IconButton color="inherit">
              <ChevronRightIcon
                fontSize="large"
                color="inherit"
                onClick={() => {
                  navigate("/SoloProjects");
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
