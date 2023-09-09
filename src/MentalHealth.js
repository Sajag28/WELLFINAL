import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MentalHealthForm.css'; 
import Score from './Scorepage';
// Import the CSS file
let score1;

const MentalHealthForm = () => {

  const navigate = useNavigate();

  const [answers, setAnswers] = useState(Array(5).fill(0));

  const options = [
    'Not at all',
    'Rarely',
    'Sometimes',
    'Often',
    'Very often'
  ];

  const handleOptionChange = (questionIndex, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = value;
    setAnswers(updatedAnswers);
  };
//   const calculateScore = () => {
//     const score = answers.reduce((total, answer) => total + answer, 0);
//     // Do something with the score, such as displaying it to the user
//   };

const questions = [
    'Do you often feel tired or lack energy even without physical exertion?',
    'Have you felt excessive worry or anxiety?',
    'How often do you feel irritable or restless?',
    'Have you noticed a decrease in your self-esteem or feelings of worth?',
    'How often do you avoid social situations that you used to engage in?',
    'Have you had thoughts of death or suicide?',
    'How frequently do you experience panic or anxiety attacks?',
    'Have you been experiencing unexplained physical symptoms like headaches or stomachaches?',
    'How often do you engage in repetitive behaviors, such as checking or cleaning?',
    'Do you have trouble controlling distressing and intrusive thoughts?',
    'How often do you feel disconnected or detached from your surroundings?',
    'Have you experienced a traumatic event that continues to affect you emotionally?',
    'How often do you engage in excessive exercise or restrictive eating habits?',
    'Do you find it challenging to manage stress in your daily life?',
    'How often do you turn to substances (alcohol, drugs) to cope with your emotions?'
  ];
  
  
  const calculateScore = () => {
    const weight = [0, 1, 2, 3, 4]; // Weight for each option
     score1 = answers.reduce((total, answer, index) => total + weight[answer], 0);
    navigate('/Score',{state:{score1}}); // Pass the score as state
  };
  return (
    <div className="mental-health-form">
      <h2>Mental Health Assessment</h2>
      <form>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            {options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={optionIndex}
                  checked={answers[index] === optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="button" onClick={calculateScore}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default MentalHealthForm;