// SignInForm.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'
const SignInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/Mental');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            {/* You can add functionality for "Remember me" if needed */}
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        {/* You can add functionality for "Forgot password?" if needed */}
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <Link to="/SignUpForm">Register</Link></p>
                    <p>or sign up with:</p>
                    {/* You can add functionality for social sign-ins if needed */}
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
