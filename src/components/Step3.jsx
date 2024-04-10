import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';


const Step3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        
      <div className="max-w-md mx-auto text-center">
      <ProgressBar value={33.34} />
      <br></br>
        <div className="mb-8">
          <img
            src='/images/pulley.png'
            alt='Pulley'
            className="mx-auto h-48"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">You're in the right place</h2>
        <p className="text-gray-600 mb-8">
          Brilliant gets you hands-on to help improve your professional
          skills and knowledge. You'll interact with concepts and solve
          fun problems in math, science, and computer science.
        </p>
        <div className="flex justify-between mt-8">
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step2'} style={{ textDecoration: 'none' }}>Back</Link></button>
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step4'} style={{ textDecoration: 'none' }}>Continue</Link></button>
        </div>
        
      </div>
    </div>
  );
};

export default Step3;