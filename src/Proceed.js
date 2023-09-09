import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from './Signin';
import SignUpForm from './Signup';
import firebaseConfig from './firebase.js';

export default function CombinedComponent() {
  const navigate = useNavigate();

  function navi() {
    navigate('/SignInForm');
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="relative bg-gray-900 p-6 shadow-2xl sm:rounded-3xl lg:flex lg:items-center lg:justify-between lg:p-12">
          <div className="text-center lg:text-left lg:w-2/3">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl mb-4">
              Welcome to the Home Page
            </h1>
            <button
              onClick={navi}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign In To Proceed
            </button>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-1/3">
            <img
              className="w-1/4 h-auto mx-auto lg:w-1/2 lg:mx-0 rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459630_1280.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
