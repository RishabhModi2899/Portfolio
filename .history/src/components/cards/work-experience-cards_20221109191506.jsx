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
                Software Developer Intern, NLP <br></br>
                Dev Information Technology, Ahmedabad, Gujrat, <br></br>
                January, 2020 - May, 2020,{" "}
              </div>
              <br></br>• Reduced volume of customer support calls by 18% by
              implementing a Python engine using NLP libraries<br></br>• Laid
              the groundwork for developing a chatbot by developing an NLP
              engine using spacy, NLTK and Python to facilitate the training and
              engineering of various ML/AI models and generate grammatically
              correct responses<br></br>• Designed a mapping mechanism using
              Python & JSON to map user requests & generate company specific
              grammatically correct responses to various user queries<br></br>•
              Engineered a MySQL database to store user queries & responses
              thereby generating a large dataset enabling the training of ML/AI
              models<br></br>
              <br></br>
              <div className="span">
                Software Developer Intern, Full Stack <br></br>
                AUM Digital Marketing, Ahmedabad, Gujrat, <br></br>
                May, 2018 - August, 2018{" "}
              </div>
              <br></br>• Increased tent bookings for Diu tent city event by 24%
              by implementing a booking engine using React.js, Node.js and MySQL
              <br></br>• Ensured a smooth booking experience by developing a UI
              for administrators and users hence easing the process of handling
              walk-in booking requests along with online bookings<br></br> •
              Managed tent availabilities & stored user information by adopting
              a SQL database, MySQL & Node.js to establish reliable connections
              between middleware, backend, and frontend <br></br>• Organized and
              managed project workflow using git and GitHub<br></br>
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
