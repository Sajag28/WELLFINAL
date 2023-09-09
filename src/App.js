
import './Doc.css'
import React from 'react'
import SignInForm from './Signin'
import SignUpForm from './Signup'
import Proceed from './Proceed.js'
import Mental from './MentalHealth.js'
import Score from './Scorepage.js'
import { useParams } from 'react-router-dom';
import firebaseConfig from './firebase.js';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
const doctorsData = [
  // Your doctor data
  {
        name: 'Dr. John Doe',
        address: '123 Main St, City, Country',
        phoneNumber: '123-456-7890',
        yearsOfExperience: 15,
        rating: 4.8,
        id: 'john-doe',
      },
      {
        name: 'Dr. Jane Smith',
        address: '456 Elm St, Town, Country',
        phoneNumber: '987-654-3210',
        yearsOfExperience: 12,
        rating: 4.5,
        id: 'jane-smith',
      },
      {
        name: 'Dr. Michael Johnson',
        address: '789 Oak Ave, Village, Country',
        phoneNumber: '555-123-4567',
        yearsOfExperience: 20,
        rating: 4.9,
        id: 'michael-johnson',
      },
      {
        name: 'Dr. Emily Brown',
        address: '567 Pine Rd, Suburb, Country',
        phoneNumber: '888-567-8901',
        yearsOfExperience: 10,
        rating: 4.7,
        id: 'emily-brown',
      },
      {
        name: 'Dr. William Lee',
        address: '890 Maple Ln, County, Country',
        phoneNumber: '333-789-0123',
        yearsOfExperience: 18,
        rating: 4.6,
        id: 'william-lee',
      },
      {
        name: 'Dr. Sophia Martinez',
        address: '234 Cedar St, Town, Country',
        phoneNumber: '222-555-7890',
        yearsOfExperience: 14,
        rating: 4.8,
        id: 'sophia-martinez',
      },
      {
        name: 'Dr. David Wilson',
        address: '789 Elm Rd, Suburb, Country',
        phoneNumber: '777-888-9999',
        yearsOfExperience: 22,
        rating: 4.9,
        id: 'david-wilson',
      },
      {
        name: 'Dr. Olivia Turner',
        address: '345 Oak St, City, Country',
        phoneNumber: '555-444-3333',
        yearsOfExperience: 9,
        rating: 4.3,
        id: 'olivia-turner',
      },
  ];
  function DoctorCard({ doctor }) {
    return (
      <div className="doctor-card">
        <h2>{doctor.name}</h2>
        <p><strong>Address:</strong> {doctor.address}</p>
        <p><strong>Phone Number:</strong> {doctor.phoneNumber}</p>
        <p><strong>Years of Experience:</strong> {doctor.yearsOfExperience}</p>
        <p><strong>Rating:</strong> <span className="rating">{doctor.rating}</span></p>
        <Link to={`/doctor/${doctor.id}`}>
          <button className="submit-button">View Details</button>
        </Link>
      </div>
    );
  }
  function DoctorDetails() {
    const { id } = useParams();
    const doctor = doctorsData.find(doc => doc.id === id);
  
    if (!doctor) {
      return <p>Doctor not found.</p>;
    }
  
    return (
      <div className="doctor-details-page">
        <div className="doctor-picture">
          {/* <img src={`./images/doctor/${doctor.id}.jpg`} alt={doctor.name} /> */}
          <img src="https://thumbs.dreamstime.com/z/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg?w=576" alt={doctor.name} />
  
        </div>
        <div className="doctor-details">
          <h2>{doctor.name}</h2>
          <p><strong>Address:</strong> {doctor.address}</p>
          <p><strong>Phone Number:</strong> {doctor.phoneNumber}</p>
          <p><strong>Years of Experience:</strong> {doctor.yearsOfExperience}</p>
          <p><strong>Rating:</strong> <span className="rating">{doctor.rating}</span></p>
        </div>
      </div>
    );
  }
function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Routes>
        <Route path="/" element={<Proceed />}/>
        <Route path="/SignUpForm" element={<SignUpForm />}/>
           
        <Route path="/SignInForm" element={<SignInForm />}/>
        <Route path="/Mental" element={<Mental />}/>
        <Route path="/Score"  element={<Score />}/>
        <Route
        path="/Doctors"
        element={<div>
          <h1>Practitioner... Profiles...</h1>
          <br></br>
          <div className="doctors-container">
         
          {doctorsData.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        </div>}
      />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
