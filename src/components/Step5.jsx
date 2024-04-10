import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Step5 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        

      <div className="max-w-md mx-auto text-center">
      <ProgressBar value={66.67} />
        <div className="mb-8">
          <img src="/images/superman.png" alt="Celebration" className="mx-auto h-48" />
        </div>
        <h2 className="text-2xl font-bold mb-4">You're on your way!</h2>
        <div className="flex justify-center mb-4">
      
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
     
        </div>
        <p className="text-gray-600 mb-8">
          "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."
        </p>
        <p className="text-gray-500">— Jacob S.</p>
       
        <div className="flex justify-between mt-8">
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step4'} style={{ textDecoration: 'none' }}>Back</Link></button>
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step6'} style={{ textDecoration: 'none' }}>Continue</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
