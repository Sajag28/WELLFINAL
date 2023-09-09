import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useLocation } from 'react-router-dom';
const ScorePage = () => {
    const location = useLocation();
    const score1 = location.state?.score1 || 2;
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const goToDoctorsPage = () => {
      navigate('/Doctors'); // Navigate to the doctors page
    };

    return (
        <div className="score-page">
          <h2>Your Mental Health Assessment Score</h2>
          <p>Your total score: {score1}</p>
          <button onClick={goToDoctorsPage}>Go to Doctors Page</button>
        </div>
      );
  };
  
export default ScorePage;
